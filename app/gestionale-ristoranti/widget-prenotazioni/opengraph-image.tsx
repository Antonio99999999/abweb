import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Widget di prenotazione Sedia | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "SEDIA · WIDGET DI PRENOTAZIONE",
    title: "Il widget senza commissioni",
    subtitle: "Integrato nel tuo sito, personalizzabile",
    theme: "sedia",
  });
}
