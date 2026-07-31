import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Domande frequenti | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "FAQ",
    title: "Le domande che meritano una risposta chiara",
    subtitle: "Siti per ristoranti e Sedia",
    theme: "agency",
  });
}
