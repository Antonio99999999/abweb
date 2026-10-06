import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BUSINESS } from "@/lib/business";
import { caseStudies } from "@/lib/case-studies";
import { breadcrumbSchema } from "@/lib/breadcrumb";
import "../case-studies.css";

const canonical = "https://www.abagenziaweb.it/casi-studio";
const title = "Casi studio: progetti reali per ristoranti";
const description = "Casi studio di AB Web Agency per ristoranti e attività locali: problema, soluzione e consegne di ogni progetto, senza percentuali di risultato non verificate.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", locale: "it_IT", title: `${title} | AB Web Agency`, description, url: canonical, images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title: `${title} | AB Web Agency`, description, images: [`${canonical}/opengraph-image`] },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Casi studio", url: canonical },
]);

export default function CasiStudio() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <p className="eyebrow">CASI STUDIO</p>
          <h1>Progetti reali, non promesse generiche</h1>
          <p>Ogni caso studio racconta un problema reale, cosa abbiamo costruito insieme al cliente e cosa è stato consegnato — senza percentuali di risultato.</p>
        </section>
        <section className="section shell">
          <div className="case-index-grid">
            {caseStudies.map((cs) => (
              <Link key={cs.slug} href={`/casi-studio/${cs.slug}`} className="case-index-card">
                <span>{cs.sector.toUpperCase()} · {cs.location.toUpperCase()}</span>
                <h2>{cs.client}</h2>
                <p>{cs.summary}</p>
                <b>Leggi il caso studio <i aria-hidden>→</i></b>
              </Link>
            ))}
          </div>
        </section>
        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">IL TUO PROGETTO</p>
            <h2>Vuoi essere il prossimo caso studio?</h2>
            <Link className="button button-light" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
