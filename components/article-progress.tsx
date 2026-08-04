"use client";

import { useEffect, useState } from "react";

// Avanzamento di lettura calcolato solo sul contenuto dell'articolo (articleSelector), non
// sull'intera pagina: 0% quando l'inizio del contenuto raggiunge la cima dello schermo, 100%
// quando la fine del contenuto raggiunge il fondo dello schermo. Il valore alimenta la barra
// verticale sul bordo del summary (--article-progress, letta via CSS in blog.css).
//
// In parallelo, evidenzia nel summary (tocSelector) il link della sezione attualmente visibile:
// le sezioni osservate sono derivate direttamente dagli href="#id" dei link del summary, non da
// un elenco passato a parte, cosi' il componente resta valido sia per il layout condiviso degli
// articoli (BlogArticle) sia per la pagina Quandoo, che ha un summary con markup proprio.
export function ArticleProgress({ articleSelector, tocSelector }: { articleSelector: string; tocSelector: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const articleEl = document.querySelector<HTMLElement>(articleSelector);
    if (!articleEl) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = articleEl.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const pct = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      setProgress(pct);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, [articleSelector]);

  useEffect(() => {
    document.documentElement.style.setProperty("--article-progress", String(progress));
    return () => { document.documentElement.style.removeProperty("--article-progress"); };
  }, [progress]);

  useEffect(() => {
    const toc = document.querySelector<HTMLElement>(tocSelector);
    if (!toc) return;
    const entries = Array.from(toc.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
      .map((link) => ({ link, target: document.getElementById(link.getAttribute("href")!.slice(1)) }))
      .filter((entry): entry is { link: HTMLAnchorElement; target: HTMLElement } => !!entry.target);
    if (!entries.length) return;

    const setActive = (id: string) => {
      entries.forEach(({ link }) => link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`));
    };
    const observer = new IntersectionObserver((observed) => {
      observed.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
    entries.forEach(({ target }) => observer.observe(target));
    return () => observer.disconnect();
  }, [tocSelector]);

  return null;
}
