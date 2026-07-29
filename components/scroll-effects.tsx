"use client";

import { useEffect } from "react";

export function ScrollEffects() {
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

  return <div className="scroll-progress" aria-hidden />;
}
