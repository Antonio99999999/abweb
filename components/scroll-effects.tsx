"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function ScrollEffects() {
  const pathname = usePathname();
  const [bar, setBar] = useState({ value: 0, visible: false });
  const creepTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const isFirstPathname = useRef(true);

  // --scroll-progress non pilota piu' una barra qui: da quando l'indicatore e' stato integrato
  // nell'ombra della navbar (vedi .nav-scroll-glow in header.css), questa variabile globale sul
  // <html> resta l'unica fonte del valore, letta via CSS da quel componente. Va mantenuta anche
  // se questo file non renderizza piu' nulla che la usi direttamente.
  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateProgress); };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const registered = new WeakSet<HTMLElement>();
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    const register = (root: ParentNode) => {
      const elements = root instanceof HTMLElement && root.matches("[data-reveal]")
        ? [root, ...root.querySelectorAll<HTMLElement>("[data-reveal]")]
        : Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
      elements.forEach((element) => {
        if (registered.has(element)) return;
        registered.add(element);
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          element.classList.add("is-revealed");
          return;
        }
        element.classList.add("reveal-pending");
        observer.observe(element);
      });
    };

    register(document);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) register(node);
      }));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      document.querySelectorAll<HTMLElement>(".reveal-pending").forEach((element) => element.classList.remove("reveal-pending"));
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  // Barra di caricamento tra una pagina e l'altra: da' un riscontro immediato al click su un
  // link interno, invece di lasciare la pagina "morta" finche' la prossima non e' pronta.
  // Next.js App Router non espone un evento di navigazione nativo: intercettiamo il click per
  // avviarla e la chiudiamo quando il pathname cambia davvero (fine della navigazione).
  useEffect(() => {
    const clearTimers = () => {
      if (creepTimeout.current) clearTimeout(creepTimeout.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;
      let url: URL;
      try { url = new URL(href, window.location.href); } catch { return; }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      clearTimers();
      setBar({ value: 20, visible: true });
      creepTimeout.current = setTimeout(() => setBar((b) => (b.visible ? { value: 74, visible: true } : b)), 90);
    };
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("click", onClick); clearTimers(); };
  }, []);

  useEffect(() => {
    if (isFirstPathname.current) { isFirstPathname.current = false; return; }
    if (creepTimeout.current) clearTimeout(creepTimeout.current);
    setBar((b) => (b.visible ? { value: 100, visible: true } : b));
    hideTimeout.current = setTimeout(() => setBar({ value: 0, visible: false }), 280);
    return () => { if (hideTimeout.current) clearTimeout(hideTimeout.current); };
  }, [pathname]);

  return <div className={`route-loading-bar${bar.visible ? " is-visible" : ""}`} aria-hidden style={{ width: `${bar.value}%` }} />;
}
