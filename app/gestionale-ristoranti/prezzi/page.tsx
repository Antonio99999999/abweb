import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SediaIcon } from "@/components/sedia-icon";
import { SEDIA_URL } from "@/lib/sedia";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/breadcrumb";
import { SEDIA_ANNUAL_FREE_MONTHS, SEDIA_INCLUDED_IN_ALL_PLANS, SEDIA_PLANS, annualMonthlyPrice } from "@/lib/sedia-plans";
import "../../sedia-pages.css";

const canonical = "https://www.abagenziaweb.it/gestionale-ristoranti/prezzi";
const title = "Prezzi Sedia: piani da 45 € al mese";
const description = "I piani di Sedia, il gestionale di prenotazioni per ristoranti: da 45 a 120 € al mese, senza commissioni per prenotazione.";
const demoBody = encodeURIComponent("Buongiorno AB Web Agency,\n\nvorrei ricevere maggiori informazioni sui piani di Sedia per il mio ristorante.\n\nRistorante:\nCittà:\nTelefono:");
const demoHref = `mailto:ab.agenziaweb@gmail.com?subject=${encodeURIComponent("Informazioni sui piani Sedia")}&body=${demoBody}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", locale: "it_IT", title: `${title} | AB Web Agency`, description, url: canonical, images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title: `${title} | AB Web Agency`, description, images: [`${canonical}/opengraph-image`] },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Sedia", url: `${BUSINESS.url}/gestionale-ristoranti` },
  { name: "Prezzi", url: canonical },
]);

export default function SediaPrezzi() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" data-theme="sedia">
        <section className="page-hero shell">
          <p className="eyebrow">SEDIA · PREZZI</p>
          <h1>Piani semplici, senza commissioni per prenotazione</h1>
          <p>Tre piani, da 45 a 120 € al mese. Base include prenotazioni, mappa della sala, widget e clienti; Pro aggiunge più sale, report, segmenti clienti e la scelta tra conferma automatica o su richiesta; Premium aggiunge la gestione di più ristoranti dallo stesso account.</p>
          <p className="pricing-note" style={{ marginTop: 12 }}>Prezzi finali: IVA non applicata (regime forfettario, art. 1 commi 54-89 L. 190/2014).</p>
        </section>

        <section className="section shell">
          <div className="pricing-grid">
            {SEDIA_PLANS.map((plan) => (
              <div key={plan.id} className={`pricing-card${plan.highlighted ? " is-featured" : ""}`}>
                <h3>{plan.name}</h3>
                <p className="pricing-value">{plan.monthlyPrice} € <small>/ mese</small></p>
                <p className="pricing-note">oppure {annualMonthlyPrice(plan).toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} € al mese con pagamento annuale ({SEDIA_ANNUAL_FREE_MONTHS} mesi gratis)</p>
                <p>{plan.tagline}</p>
                <ul>
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <a className="button" href={demoHref}>Richiedi informazioni</a>
              </div>
            ))}
          </div>
          <p className="pricing-note">In tutti i piani: {SEDIA_INCLUDED_IN_ALL_PLANS.join(". ")}.</p>
          <p className="pricing-note">Il piano più adatto dipende dalla sala, dal numero di coperti e dagli strumenti già in uso: lo definiamo insieme durante la demo, senza sorprese sul contratto.</p>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">APPROFONDISCI</p>
            <h2>Cosa cambia davvero rispetto a un&apos;agenda o a un portale</h2>
          </div>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <Link className="text-link" href="/gestionale-ristoranti/widget-prenotazioni">Il widget senza commissioni <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/gestionale-ristoranti/alternativa-thefork">Sedia come alternativa ai portali <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">PROVA SEDIA</p>
            <h2>Configura la sala del tuo ristorante e verifica il sistema.</h2>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
              <a className="sedia-app-cta" href={SEDIA_URL} target="_blank" rel="noreferrer"><span className="sedia-app-cta-icon" aria-hidden><SediaIcon size={17} /></span>Vai all&apos;app di Sedia <span aria-hidden>↗</span></a>
              <a className="button button-light" href={demoHref}>Richiedi informazioni <span aria-hidden>→</span></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
