import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Siti per ristoranti | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "SITI PER RISTORANTI",
    title: "Siti che trasformano interesse in azione",
    subtitle: "Strategia · Design · Sviluppo · SEO tecnico",
    theme: "agency",
  });
}
