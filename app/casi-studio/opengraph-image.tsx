import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Casi studio | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "CASI STUDIO",
    title: "Progetti reali, non promesse generiche",
    subtitle: "Risultati dichiarati dai clienti, non stime",
    theme: "agency",
  });
}
