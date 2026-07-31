import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Prezzi Sedia | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "SEDIA · PREZZI",
    title: "Piani da 45 € al mese",
    subtitle: "Nessuna commissione per prenotazione",
    theme: "sedia",
  });
}
