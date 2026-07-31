import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Benvenuti al Sud · Caso studio | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "CASO STUDIO · RISTORAZIONE · TORINO",
    title: "Benvenuti al Sud",
    subtitle: "Rebranding, menu digitale, prenotazioni proprietarie",
    theme: "agency",
  });
}
