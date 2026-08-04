import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Quanto costa un sito web per ristorante nel 2026?";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "SITI WEB PER RISTORANTI",
    title: "Quanto costa un sito per ristorante nel 2026?",
    subtitle: "Cosa influenza davvero il prezzo, senza fasce inventate",
  });
}
