import type { Metadata } from "next";
import "./globals.css";
import "./client-showcase.css";
import "./motion.css";
import "./scroll-reveal.css";
import "./legal.css";
import "./header.css";
import "./quote-mobile.css";
import "./forms.css";
import "./contacts.css";
import { ScrollEffects } from "@/components/scroll-effects";

export const metadata: Metadata = {
  metadataBase: new URL("https://abwebagencies.com"),
  title: { default: "AB Web Agency | Crescita digitale per ristoranti", template: "%s | AB Web Agency" },
  description: "Siti web, automazioni e acquisizione clienti per ristoranti e attività locali che vogliono crescere con un sistema digitale misurabile.",
  openGraph: { type: "website", locale: "it_IT", siteName: "AB Web Agency", title: "AB Web Agency | Crescita digitale per ristoranti", description: "Siti web, automazioni e acquisizione clienti per ristoranti e attività locali." },
  twitter: { card: "summary_large_image", title: "AB Web Agency | Crescita digitale per ristoranti", description: "Siti web, automazioni e acquisizione clienti per ristoranti e attività locali." },
  icons: { icon: "/brand/abwebagency-logo.png", shortcut: "/brand/abwebagency-logo.png", apple: "/brand/abwebagency-logo.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body><ScrollEffects />{children}</body></html>;
}
