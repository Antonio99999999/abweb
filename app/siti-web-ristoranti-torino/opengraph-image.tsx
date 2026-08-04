import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Siti web per ristoranti a Torino | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "SITI WEB PER RISTORANTI A TORINO",
    title: "Dalla ricerca alla prenotazione",
    subtitle: "Prenotazioni dirette, SEO locale e menù digitale",
  });
}
