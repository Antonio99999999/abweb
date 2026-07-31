import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "SEO locale per ristoranti | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "SEO LOCALE PER RISTORANTI",
    title: "Acquisizione clienti con una direzione",
    subtitle: "Keyword locali · Landing page · Report",
    theme: "agency",
  });
}
