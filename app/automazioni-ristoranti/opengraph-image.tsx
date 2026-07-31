import { createOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const alt = "Automazioni per ristoranti | AB Web Agency";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return createOgImage({
    eyebrow: "AUTOMAZIONI PER RISTORANTI",
    title: "Automazioni che lasciano spazio al servizio",
    subtitle: "Lead centralizzati · Follow-up · Dashboard",
    theme: "agency",
  });
}
