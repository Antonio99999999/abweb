import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Sedia, alternativa ai portali di prenotazione | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "SEDIA · ALTERNATIVA AI PORTALI",
    title: "Le prenotazioni restano tue",
    subtitle: "Nessuna commissione, nessun intermediario",
    theme: "sedia",
  });
}
