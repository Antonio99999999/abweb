import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/servizi", "/metodo-mastro", "/preventivo", "/contatti", "/blog", "/blog/quandoo-chiude-alternativa-sedia", "/blog/prenotazioni-ristorante-google-maps", "/blog/ridurre-no-show-ristorante", "/blog/sito-ristorante-prenotazioni-dirette"].map((route) => ({ url: `https://www.abagenziaweb.it${route}`, lastModified: new Date(), changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly", priority: route === "" ? 1 : route === "/blog" ? 0.9 : route.startsWith("/blog/") ? 0.85 : 0.8 }));
}
