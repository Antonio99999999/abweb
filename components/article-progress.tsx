"use client";

import { useEffect } from "react";

// Evidenzia nel summary (tocSelector) il link della sezione dell'articolo attualmente visibile,
// aggiungendo la classe .is-active (stile in blog.css: pallino, colore, ingrandimento, alone).
// Le sezioni osservate sono derivate direttamente dagli href="#id" dei link del summary, non da
// un elenco passato a parte, cosi' il componente resta valido sia per il layout condiviso degli
// articoli (BlogArticle) sia per la pagina Quandoo, che ha un summary con markup proprio.
export function ArticleProgress({ tocSelector }: { tocSelector: string }) {
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
