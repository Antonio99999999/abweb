import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Sito web per ristorante a Torino: come farsi trovare dai clienti";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "SEO LOCALE PER RISTORANTI",
    title: "Farsi trovare da chi cerca a Torino",
    subtitle: "Google Maps, recensioni, foto reali e velocità mobile",
  });
}
