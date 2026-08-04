import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Gestionale prenotazioni ristorante: quali funzioni deve avere";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "GESTIONALI PER RISTORANTI",
    title: "Le funzioni che fanno la differenza",
    subtitle: "Sala, turni, lista d'attesa, storico clienti e report",
  });
}
