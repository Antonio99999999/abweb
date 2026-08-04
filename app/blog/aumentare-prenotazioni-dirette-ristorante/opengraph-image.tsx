import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Come aumentare le prenotazioni dirette di un ristorante";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "PRENOTAZIONI DIRETTE",
    title: "Più prenotazioni dirette, meno commissioni",
    subtitle: "Sito, Google Business Profile, social e conferme",
  });
}
