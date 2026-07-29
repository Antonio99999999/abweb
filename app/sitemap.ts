import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/servizi", "/metodo-mastro", "/preventivo", "/contatti", "/blog/quandoo-chiude-alternativa-sedia"].map((route) => ({ url: `https://www.abagenziaweb.it${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : route.startsWith("/blog/") ? 0.85 : 0.8 }));
}
