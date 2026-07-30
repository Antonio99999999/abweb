import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AB Web Agency",
    short_name: "AB Web Agency",
    description: "Siti web, automazioni e acquisizione clienti per ristoranti e attività locali che vogliono crescere con un sistema digitale misurabile.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    lang: "it-IT",
    background_color: "#ffffff",
    theme_color: "#12233d",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
