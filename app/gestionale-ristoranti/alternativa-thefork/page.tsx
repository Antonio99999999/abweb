import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SediaIcon } from "@/components/sedia-icon";
import { SEDIA_URL } from "@/lib/sedia";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/breadcrumb";
import "../../sedia-pages.css";

const canonical = "https://www.abagenziaweb.it/gestionale-ristoranti/alternativa-thefork";
const title = "Sedia come alternativa a TheFork per ristoranti";
const description = "Perché un ristorante può scegliere Sedia al posto di un portale di prenotazione come TheFork: nessuna commissione per prenotazione, widget sul proprio sito, dati del cliente al locale.";
const demoBody = encodeURIComponent("Buongiorno AB Web Agency,\n\nutilizzo un portale di prenotazione e vorrei valutare il passaggio a Sedia.\n\nRistorante:\nCittà:\nTelefono:");
const demoHref = `mailto:ab.agenziaweb@gmail.com?subject=${encodeURIComponent("Passaggio a Sedia")}&body=${demoBody}`;

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
  { name: "Alternativa a TheFork", url: canonical },
]);

export default function AlternativaTheFork() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" data-theme="sedia">
        <section className="page-hero shell">
          <p className="eyebrow">SEDIA · ALTERNATIVA AI PORTALI DI PRENOTAZIONE</p>
          <h1>Le prenotazioni restano tue</h1>
          <p>TheFork e i portali simili aiutano a farsi scoprire, ma il rapporto con il cliente passa dalla loro piattaforma e, tipicamente, comporta una commissione per ogni prenotazione. Sedia parte da un&apos;idea diversa: il gestionale è del ristorante, non del portale.</p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <a className="sedia-app-cta" href={SEDIA_URL} target="_blank" rel="noreferrer"><span className="sedia-app-cta-icon" aria-hidden><SediaIcon size={17} /></span>Vai all&apos;app di Sedia <span aria-hidden>↗</span></a>
            <a className="button button-secondary" href={demoHref}>Richiedi una valutazione</a>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">LA DIFFERENZA STRUTTURALE</p>
            <h2>Non tutti i sistemi di prenotazione funzionano allo stesso modo</h2>
          </div>
          <div className="compare-grid">
            <article><h3>Portali di prenotazione</h3><p>Il ristorante è una scheda dentro una piattaforma di terzi: la prenotazione, spesso, comporta una commissione e i dati del cliente restano prima di tutto nel sistema del portale.</p></article>
            <article><h3>Sedia</h3><p>Il widget vive sul sito del ristorante, la mappa della sala e le disponibilità sono configurate dal locale, e non c&apos;è commissione per prenotazione. Il portale può restare un canale in più, non l&apos;unico.</p></article>
          </div>
          <p className="pricing-note">Non abbiamo dati verificati sulle condizioni commerciali attuali di TheFork o di altri portali: il confronto sopra descrive come funzionano tipicamente i portali di prenotazione come categoria, non affermazioni specifiche sul contratto di un fornitore in particolare. Se vuoi confrontare la tua situazione reale, parliamone in una demo.</p>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">COSA PORTI CON TE</p>
            <h2>Mappa della sala, prenotazioni e clienti restano al locale</h2>
          </div>
          <div className="case-proof-copy" style={{ marginTop: 8 }}>
            <ul>
              <li>Mappa reale della sala, con tavoli e prenotazioni sempre aggiornati</li>
              <li>Widget di prenotazione integrabile nel sito, senza commissioni</li>
              <li>Rubrica clienti con storico, preferenze e consensi</li>
            </ul>
          </div>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <Link className="text-link" href="/gestionale-ristoranti/widget-prenotazioni">Il widget senza commissioni <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/gestionale-ristoranti/prezzi">Vedi i piani e i prezzi <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">VALUTA IL PASSAGGIO</p>
            <h2>Verifichiamo insieme se Sedia è la scelta giusta per la tua sala.</h2>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
              <a className="button button-light" href={demoHref}>Richiedi una valutazione <span aria-hidden>→</span></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
