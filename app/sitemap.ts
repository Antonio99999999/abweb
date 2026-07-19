import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/servizi", "/metodo-mastro", "/preventivo", "/contatti"].map((route) => ({ url: `https://www.abagenziaweb.it${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.8 }));
}
