import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Chi siamo | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "CHI SIAMO",
    title: "Sala e sviluppo digitale, nello stesso progetto",
    subtitle: "Siti, automazioni e Sedia per ristoranti",
  });
}
