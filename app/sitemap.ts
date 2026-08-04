import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

// Data reale dell'ultima modifica sostanziale di ogni pagina statica (verificata su git log,
// non generata automaticamente). Aggiorna il valore corrispondente solo quando modifichi
// davvero i contenuti di quella pagina: non usare la data odierna a ogni deploy.
const staticPages: { route: string; lastModified: string }[] = [
  { route: "", lastModified: "2026-07-31" },
  { route: "/servizi", lastModified: "2026-08-04" },
  { route: "/siti-web-ristoranti", lastModified: "2026-08-04" },
  { route: "/siti-web-ristoranti-torino", lastModified: "2026-08-04" },
  { route: "/automazioni-ristoranti", lastModified: "2026-07-31" },
  { route: "/seo-locale-ristoranti", lastModified: "2026-07-31" },
  { route: "/casi-studio", lastModified: "2026-07-31" },
  { route: "/casi-studio/benvenuti-al-sud", lastModified: "2026-08-04" },
  { route: "/gestionale-ristoranti", lastModified: "2026-08-04" },
  { route: "/gestionale-ristoranti/prezzi", lastModified: "2026-07-31" },
  { route: "/gestionale-ristoranti/widget-prenotazioni", lastModified: "2026-07-31" },
  { route: "/gestionale-ristoranti/alternativa-thefork", lastModified: "2026-07-31" },
  { route: "/chi-siamo", lastModified: "2026-08-04" },
  { route: "/faq", lastModified: "2026-07-31" },
  { route: "/metodo-mastro", lastModified: "2026-07-19" },
  { route: "/preventivo", lastModified: "2026-07-19" },
  { route: "/contatti", lastModified: "2026-07-31" },
  { route: "/blog", lastModified: "2026-08-04" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPages.map(({ route, lastModified }) => ({
    url: `https://www.abagenziaweb.it${route}`,
    lastModified,
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `https://www.abagenziaweb.it/blog/${post.slug}`,
    lastModified: post.published,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticEntries, ...blogEntries];
}
