import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = "Blog per ristoratori | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "BLOG PER RISTORATORI",
    title: "Guide pratiche su siti, prenotazioni e Google",
    subtitle: "Menù, gestionali, recensioni e SEO locale per ristoranti",
  });
}
