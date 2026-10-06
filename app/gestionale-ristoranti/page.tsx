import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SediaIcon } from "@/components/sedia-icon";
import { SediaVideo } from "@/components/sedia-video";
import { SEDIA_URL } from "@/lib/sedia";
import { BUSINESS } from "@/lib/business";
import { faqPageSchema, softwareApplicationSchema } from "@/lib/schema";

const canonical = "https://www.abagenziaweb.it/gestionale-ristoranti";
const title = "Sedia – gestionale prenotazioni per ristoranti";
const description = "Sedia è il gestionale prenotazioni per ristoranti costruito sulla sala reale del tuo locale: mappa dei tavoli, software di gestione sala, widget di prenotazione senza commissioni e rubrica clienti. Sviluppato da AB Web Agency.";
const demoSubject = encodeURIComponent("Richiesta dimostrazione Sedia");
const demoBody = encodeURIComponent(
  "Buongiorno AB Web Agency,\n\nvorrei richiedere una dimostrazione di Sedia per il mio ristorante.\n\nRistorante:\nCittà:\nTelefono:"
);
const demoHref = `mailto:ab.agenziaweb@gmail.com?subject=${demoSubject}&body=${demoBody}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "it_IT",
    title: `${title} | AB Web Agency`,
    description,
    url: canonical,
    images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: "Sedia, il gestionale di prenotazioni per ristoranti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | AB Web Agency`,
    description,
    images: [`${canonical}/opengraph-image`],
  },
};

const features = [
  { num: "01", title: "Prenotazioni e tavoli", text: "Calendario, conferma automatica o su richiesta, associazione ai tavoli, cancellazioni, no-show e provenienza della prenotazione rendono più leggibile ogni servizio." },
  { num: "02", title: "Mappa reale della sala", text: "La sala del locale viene riprodotta con un editor visuale: tavoli trascinabili e ridimensionabili, capienze e combinazioni per i gruppi numerosi." },
  { num: "03", title: "Rubrica clienti", text: "Storico delle visite, note, preferenze e consensi restano collegati al cliente, senza dipendere dalla memoria di chi risponde al telefono." },
  { num: "04", title: "Widget diretto sul sito", text: "Colori, testi, logo, lingua e regole sono personalizzabili. Il widget si integra nel sito del ristorante e non prevede commissioni per singola prenotazione." },
];

const detailFeatures = [
  {
    title: "Sai subito quando arriva una prenotazione",
    text: "La campanella nell'header segnala ogni nuova prenotazione non appena arriva, con nome del cliente, data, orario e coperti: non serve ricontrollare manualmente il calendario durante il servizio.",
    mp4: "/video/sedia/sedia-notifiche-prenotazioni.mp4",
    webm: "/video/sedia/sedia-notifiche-prenotazioni.webm",
    poster: "/video/sedia/sedia-notifiche-prenotazioni-poster.jpg",
  },
  {
    title: "Segna i clienti importanti",
    text: "Un clic nella scheda cliente lo segna come importante: la stellina resta visibile nella rubrica, a colpo d'occhio, per chi risponde al telefono o accoglie in sala.",
    mp4: "/video/sedia/sedia-cliente-preferito.mp4",
    webm: "/video/sedia/sedia-cliente-preferito.webm",
    poster: "/video/sedia/sedia-cliente-preferito-poster.jpg",
  },
  {
    title: "Le cancellazioni non sono un tavolo perso",
    text: "Quando un cliente cancella, il tavolo liberato può essere riassegnato subito a chi era in lista d'attesa, senza perdere il posto in sala.",
    mp4: "/video/sedia/sedia-lista-attesa.mp4",
    webm: "/video/sedia/sedia-lista-attesa.webm",
    poster: "/video/sedia/sedia-lista-attesa-poster.jpg",
  },
];

const faqItems: [string, string][] = [
  ["Cos'è Sedia?", "Sedia è un gestionale operativo per ristoranti che riunisce prenotazioni, mappa della sala, tavoli, rubrica clienti, disponibilità e report in un unico ambiente."],
  ["Sedia può essere inserito nel sito del ristorante?", "Sì. Il widget di prenotazione può essere integrato nel sito del locale e personalizzato nei colori, nei testi, nel logo e nelle regole di prenotazione."],
  ["Come si configura la sala?", "La sala viene riprodotta con un editor visuale: tavoli trascinabili e ridimensionabili, capienze e combinazioni per i gruppi. AB Web Agency segue la configurazione iniziale."],
  ["Quanto tempo serve per iniziare?", "Dipende dal numero di sale, dalle regole di servizio e dal sito esistente. Dopo l'analisi iniziale, AB Web Agency definisce un piano di attivazione e test senza promettere tempi standard non adatti a ogni locale."],
  ["Come posso richiedere una dimostrazione?", "Scrivi ad AB Web Agency con il modulo o il pulsante presenti in questa pagina: il messaggio sarà già impostato per identificare la richiesta relativa a Sedia."],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Gestionale di prenotazioni per ristoranti",
  name: "Sedia",
  description,
  provider: { "@type": "ProfessionalService", name: BUSINESS.name, url: BUSINESS.url },
  areaServed: BUSINESS.areaServed,
  url: canonical,
};

const faqSchema = faqPageSchema(faqItems.map(([question, answer]) => ({ question, answer })));

const softwareSchema = softwareApplicationSchema({
  name: "Sedia",
  description,
  url: canonical,
  category: "BusinessApplication",
  offers: { lowPrice: "45", highPrice: "120", priceCurrency: "EUR" },
});

export default function GestionaleRistoranti() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" data-theme="sedia">
        <section className="page-hero shell">
          <p className="eyebrow">SEDIA · GESTIONALE PRENOTAZIONI PER RISTORANTI</p>
          <h1>Il gestionale di prenotazione costruito sulla sala reale del tuo ristorante.</h1>
          <p>Sedia è il prodotto sviluppato da AB Web Agency per chi è stanco di un&apos;agenda generica: mappa dei tavoli, prenotazioni, widget per il sito e rubrica clienti in un unico ambiente.</p>
          <div className="hero-actions" style={{ marginTop: 32 }}>
            <a className="sedia-app-cta" href={SEDIA_URL} target="_blank" rel="noreferrer">
              <span className="sedia-app-cta-icon" aria-hidden><SediaIcon size={17} /></span>
              Vai all&apos;app di Sedia <span aria-hidden>↗</span>
            </a>
            <a className="button button-secondary" href={demoHref}>Richiedi una dimostrazione</a>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">PERCHÉ NON UN&apos;AGENDA GENERICA</p>
            <h2>Ogni ristorante ha una sala diversa. Il gestionale dovrebbe partire da lì.</h2>
            <p>La maggior parte dei sistemi di prenotazione ignora la disposizione reale dei tavoli. Sedia parte dalla sala del locale: capienze, combinazioni per gruppi numerosi e disponibilità coerenti con lo spazio vero, non con una griglia astratta. È, a tutti gli effetti, un software di gestione tavoli pensato per il servizio reale, non un&apos;agenda generica adattata alla ristorazione.</p>
          </div>
          <div className="pillars">
            {features.map((f) => (
              <article key={f.num}>
                <span>{f.num}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">NEL DETTAGLIO</p>
            <h2>Il lavoro di sala, un passaggio alla volta.</h2>
          </div>
          <div className="feature-video-list">
            {detailFeatures.map((f) => (
              <SediaVideo key={f.title} className="feature-video-item" mp4={f.mp4} webm={f.webm} poster={f.poster} title={f.title} caption={f.text} />
            ))}
          </div>
        </section>

        <section className="section section-navy">
          <div className="shell">
            <div className="section-intro light">
              <p className="eyebrow">PER CHI È</p>
              <h2>Pensato per ristoranti che vogliono gestire la sala, non solo un calendario.</h2>
              <p style={{ color: "var(--muted-inverse)", marginTop: 20, maxWidth: 640 }}>Sedia è pensato per ristoranti, pizzerie e locali che vogliono ridurre le commissioni per prenotazione, integrare il widget nel proprio sito e mantenere clienti, tavoli e disponibilità in un solo posto, con l&apos;attivazione seguita direttamente da AB Web Agency.</p>
            </div>
          </div>
        </section>

        <section className="section shell faq">
          <div className="section-intro">
            <p className="eyebrow">DOMANDE FREQUENTI</p>
            <h2>Le risposte prima di scegliere.</h2>
          </div>
          <div>
            {faqItems.map(([q, a]) => (
              <details key={q}>
                <summary>{q}<span>+</span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">SCOPRI DI PIÙ</p>
            <h2>Prezzi, widget e confronto con i portali</h2>
          </div>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <Link className="text-link" href="/gestionale-ristoranti/prezzi">Vedi i piani e i prezzi <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/gestionale-ristoranti/widget-prenotazioni">Il widget senza commissioni <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/gestionale-ristoranti/alternativa-thefork">Sedia come alternativa ai portali <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="section shell editorial-related">
          <p className="eyebrow">APPROFONDISCI</p>
          <h2>Guide collegate a Sedia</h2>
          <p style={{ color: "var(--muted)", maxWidth: 640, marginTop: 12 }}>
            <Link className="text-link" href="/blog/quandoo-chiude-alternativa-sedia">Quandoo non è più disponibile: la guida al passaggio a Sedia <span>→</span></Link>
            <br /><br />
            <Link className="text-link" href="/blog/prenotazioni-ristorante-google-maps">Prenotazioni ristorante da Google: guida a link e profilo <span>→</span></Link>
            <br /><br />
            <Link className="text-link" href="/blog/funzioni-gestionale-prenotazioni-ristorante">Gestionale prenotazioni ristorante: quali funzioni deve avere <span>→</span></Link>
          </p>
        </section>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">PROVA SEDIA</p>
            <h2>Configura la sala del tuo ristorante e verifica il sistema.</h2>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
              <a className="sedia-app-cta" href={SEDIA_URL} target="_blank" rel="noreferrer">
                <span className="sedia-app-cta-icon" aria-hidden><SediaIcon size={17} /></span>
                Vai all&apos;app di Sedia <span aria-hidden>↗</span>
              </a>
              <a className="button button-light" href={demoHref}>Richiedi una dimostrazione <span aria-hidden>→</span></a>
            </div>
            <Link className="text-link" href="/servizi#gestionale" style={{ display: "inline-block", marginTop: 18 }}>Sedia tra i servizi di AB Web Agency <span aria-hidden>→</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
