import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RelatedGuides } from "@/components/related-guides";
import { SediaIcon } from "@/components/sedia-icon";
import { SediaVideo } from "@/components/sedia-video";
import { SEDIA_URL } from "@/lib/sedia";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const canonical = "https://www.abagenziaweb.it/gestionale-ristoranti/widget-prenotazioni";
const title = "Widget di prenotazione senza commissioni";
const description = "Il widget di Sedia si integra nel sito del ristorante: colori, testi, logo, lingua e regole personalizzabili, nessuna commissione per prenotazione.";
const demoBody = encodeURIComponent("Buongiorno AB Web Agency,\n\nvorrei integrare il widget di prenotazione Sedia nel sito del mio ristorante.\n\nRistorante:\nCittà:\nTelefono:");
const demoHref = `mailto:ab.agenziaweb@gmail.com?subject=${encodeURIComponent("Widget di prenotazione Sedia")}&body=${demoBody}`;

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
  { name: "Widget di prenotazione", url: canonical },
]);

const pillars = [
  { num: "01", title: "Nessuna commissione per prenotazione", text: "A differenza dei portali di prenotazione più diffusi, Sedia non applica una commissione per ogni coperto prenotato." },
  { num: "02", title: "Integrato nel tuo sito", text: "Il cliente prenota senza uscire dal sito del ristorante: nessun passaggio verso una piattaforma terza." },
  { num: "03", title: "Personalizzabile", text: "Colori, testi, logo, lingua e regole di prenotazione si adattano all'identità del locale." },
  { num: "04", title: "Collegato alla sala reale", text: "Le disponibilità mostrate al cliente rispecchiano tavoli e capienze davvero configurati in Sedia." },
];

export default function WidgetPrenotazioni() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" data-theme="sedia">
        <section className="page-hero shell">
          <p className="eyebrow">SEDIA · WIDGET DI PRENOTAZIONE</p>
          <h1>Il widget senza commissioni</h1>
          <p>Il widget di prenotazione di Sedia si integra nel sito del ristorante e non prevede commissioni per singola prenotazione: il rapporto con il cliente resta del locale.</p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <a className="sedia-app-cta" href={SEDIA_URL} target="_blank" rel="noreferrer"><span className="sedia-app-cta-icon" aria-hidden><SediaIcon size={17} /></span>Vai all&apos;app di Sedia <span aria-hidden>↗</span></a>
            <a className="button button-secondary" href={demoHref}>Richiedi il widget per il tuo sito</a>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro"><p className="eyebrow">PERCHÉ IL WIDGET</p><h2>Quattro scelte che rendono il widget un canale proprio.</h2></div>
          <div className="pillars">
            {pillars.map((p) => (
              <article key={p.num}><span>{p.num}</span><h3>{p.title}</h3><p>{p.text}</p></article>
            ))}
          </div>
        </section>

        <section className="section shell case-proof">
          <div className="case-proof-copy">
            <p className="eyebrow">COSA VEDE IL CLIENTE</p>
            <h2>Tre passaggi, poi la conferma.</h2>
            <ul>
              <li>Quando: data e orario disponibili</li>
              <li>I tuoi dati: nome, contatti, coperti</li>
              <li>Riepilogo e conferma immediata</li>
            </ul>
          </div>
          <SediaVideo mp4="/video/sedia/sedia-widget-prenotazione.mp4" webm="/video/sedia/sedia-widget-prenotazione.webm" poster="/video/sedia/sedia-widget-prenotazione-poster.jpg" caption="Il percorso di prenotazione visto dal cliente: tre passaggi e una conferma immediata." />
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">SE STAI GIÀ USANDO UN PORTALE</p>
            <h2>Puoi affiancare o sostituire il widget attuale</h2>
            <p>Se oggi raccogli prenotazioni tramite un portale esterno, il widget di Sedia può affiancarlo o sostituirlo: la mappa della sala resta la stessa fonte di verità per entrambi i canali durante la transizione.</p>
          </div>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <Link className="text-link" href="/gestionale-ristoranti/alternativa-thefork">Sedia come alternativa ai portali <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/gestionale-ristoranti/prezzi">Vedi i piani e i prezzi <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">PROVA IL WIDGET</p>
            <h2>Vedi come si integra nel tuo sito.</h2>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
              <a className="button button-light" href={demoHref}>Richiedi una dimostrazione <span aria-hidden>→</span></a>
            </div>
          </div>
        </section>
      <RelatedGuides slugs={["sito-ristorante-prenotazioni-dirette", "capienza-tavoli-gestionale-ristorante", "domande-clienti-prima-di-prenotare"]} />
</main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
