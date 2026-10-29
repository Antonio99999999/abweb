import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Corte House · Caso studio | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "CASO STUDIO · RICETTIVITÀ · DRUENTO",
    title: "Corte House",
    subtitle: "Sito, calendario e gestionale su misura",
    theme: "agency",
  });
}
