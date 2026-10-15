import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./theme.css";
import "./client-showcase.css";
import "./motion.css";
import "./scroll-reveal.css";
import "./legal.css";
import "./header.css";
import "./quote-mobile.css";
import "./forms.css";
import "./contacts.css";
import "./sedia-card.css";
import { ScrollEffects } from "@/components/scroll-effects";
import { BUSINESS } from "@/lib/business";
import { ORGANIZATION_ID, WEBSITE_ID, organizationSchema } from "@/lib/schema";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: BUSINESS.name,
  url: BUSINESS.url,
  inLanguage: "it-IT",
  publisher: { "@id": ORGANIZATION_ID },
};

// Organization/ProfessionalService una sola volta, sitewide: evita di ripetere provider/address
// in ogni pagina di servizio (Fase SEO, task 7 "senza duplicazioni").
const organization = organizationSchema();

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abagenziaweb.it"),
  title: { default: "AB Web Agency | Siti web e gestionale per ristoranti a Torino", template: "%s | AB Web Agency" },
  description: "Siti web, automazioni e acquisizione clienti per ristoranti e attività locali a Torino che vogliono crescere con un sistema digitale misurabile.",
  alternates: { canonical: "https://www.abagenziaweb.it" },
  openGraph: { type: "website", locale: "it_IT", siteName: "AB Web Agency", url: "https://www.abagenziaweb.it", title: "AB Web Agency | Siti web e gestionale per ristoranti a Torino", description: "Siti web, automazioni e acquisizione clienti per ristoranti e attività locali a Torino." },
  twitter: { card: "summary_large_image", title: "AB Web Agency | Siti web e gestionale per ristoranti a Torino", description: "Siti web, automazioni e acquisizione clienti per ristoranti e attività locali a Torino." },
  robots: { index: true, follow: true },
};

// favicon.ico, icon.png e apple-icon.png sono dichiarati tramite le convenzioni di file di
// App Router (in app/) e vengono agganciati automaticamente da Next.js: non vanno ripetuti qui.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12233d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it" data-theme="agency"><body><a className="skip-link" href="#main-content">Salta al contenuto</a><ScrollEffects />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></body></html>;
}
