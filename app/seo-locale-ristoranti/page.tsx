import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RelatedGuides } from "@/components/related-guides";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/breadcrumb";
import { faqPageSchema } from "@/lib/schema";

const canonical = "https://www.abagenziaweb.it/seo-locale-ristoranti";
const title = "Consulenza SEO locale per ristoranti";
const description = "Consulenza SEO per ristoranti: Google Business Profile, ricerche locali, contenuti del sito e prenotazioni dirette in un unico percorso, misurato in Search Console.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", locale: "it_IT", title: `${title} | AB Web Agency`, description, url: canonical, images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title: `${title} | AB Web Agency`, description, images: [`${canonical}/opengraph-image`] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Consulenza SEO per ristoranti",
  name: title,
  description,
  provider: { "@type": "ProfessionalService", name: BUSINESS.name, url: BUSINESS.url },
  areaServed: BUSINESS.areaServed,
  url: canonical,
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Servizi", url: `${BUSINESS.url}/servizi` },
  { name: "Consulenza SEO per ristoranti", url: canonical },
]);

const problems = [
  { num: "01", title: "Il profilo Google non lavora per te", text: "Categoria, orari, foto o link di prenotazione incompleti o disallineati rispetto al sito: il primo punto di contatto perde efficacia prima ancora del sito stesso." },
  { num: "02", title: "Il sito non risponde alle ricerche locali", text: "Contenuti generici, nessuna struttura pensata per chi cerca un ristorante nella tua zona, pagine che non emergono nei risultati che contano davvero." },
  { num: "03", title: "Non è chiaro cosa funziona", text: "Senza dati reali su impressioni, posizione e clic è difficile capire se un intervento ha davvero prodotto risultati o se si sta lavorando alla cieca." },
];

const pillars = [
  { num: "01", title: "Google Business Profile", text: "Categoria, orari, foto, link di prenotazione e coerenza con il sito: il profilo è spesso il primo punto di contatto per la ricerca locale." },
  { num: "02", title: "Ricerche e keyword locali", text: "Capiamo cosa cercano davvero le persone della tua zona prima di scrivere una singola pagina, non parole chiave generiche." },
  { num: "03", title: "Struttura e contenuti del sito", text: "Pagine costruite attorno a una singola decisione del cliente, con una gerarchia di titoli e contenuti pensata per l'intento di ricerca." },
  { num: "04", title: "Prenotazioni dirette", text: "La SEO locale ha senso se porta a un percorso di prenotazione chiaro, non solo a più visite senza un'azione successiva." },
  { num: "05", title: "Misurazione con Search Console", text: "Impressioni, posizione media e clic reali, non solo il traffico complessivo: sono i dati che guidano ogni intervento successivo." },
];

const process = [
  ["Analisi", "Profilo Google, sito, concorrenza locale e query già intercettate: partiamo da dati reali, non da ipotesi generiche."],
  ["Priorità", "Individuiamo le pagine e le query con più potenziale, dove un intervento mirato può spostare davvero qualcosa."],
  ["Interventi", "Contenuti, struttura, dati tecnici e profilo Google aggiornati in modo coerente tra loro, senza keyword stuffing."],
  ["Misurazione", "Rileggiamo i dati in Search Console e negli strumenti analitici, e aggiustiamo la rotta su quello che funziona davvero."],
] as const;

const faqItems = [
  { question: "Cosa fa una consulenza SEO per ristoranti?", answer: "Lavoriamo su Google Business Profile, struttura e contenuti del sito, ricerche locali e collegamento con le prenotazioni dirette, misurando i risultati in Search Console invece di limitarci a consigli generici." },
  { question: "Serve rifare il sito per fare SEO locale?", answer: "Non necessariamente: dipende da come è costruito oggi. In alcuni casi bastano interventi su contenuti, struttura e dati tecnici; in altri conviene affrontare anche il sito, ne parliamo nella pagina dedicata ai siti web per ristoranti." },
  { question: "In quanto tempo si vedono risultati?", answer: "Non promettiamo tempi standard: dipende da concorrenza locale, storicità del dominio e qualità dei contenuti di partenza. Misuriamo l'andamento in Search Console fin dalle prime settimane, senza garantire una posizione specifica." },
  { question: "La consulenza include anche il profilo Google dell'attività?", answer: "Sì, è una delle aree su cui lavoriamo: è spesso il primo punto di contatto per chi cerca un ristorante nella tua zona, prima ancora del sito." },
  { question: "Come misurate davvero i risultati?", answer: "Con Search Console e altri strumenti analitici: impressioni, posizione media e clic per le query che contano per il tuo locale, non solo il numero di visite complessive al sito." },
] as const;

const faqSchema = faqPageSchema(faqItems.map(({ question, answer }) => ({ question, answer })));

export default function SeoLocaleRistoranti() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <p className="eyebrow">CONSULENZA SEO PER RISTORANTI</p>
          <h1>Consulenza SEO per ristoranti: acquisizione clienti con una direzione</h1>
          <p>SEO locale, Google Business Profile e contenuti del sito funzionano quando hanno una proposta chiara e dati reali che guidano le decisioni — non quando si limitano a un elenco di parole chiave.</p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="button" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/blog">Leggi le guide sul blog <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">A CHI È RIVOLTO</p>
            <h2>Ristoranti che vogliono più prenotazioni dalle ricerche locali</h2>
            <p>La consulenza ha senso per locali che vogliono dipendere meno dal passaparola e dai portali, e che sono disposti a lavorare su contenuti e profilo Google con continuità, non con un intervento isolato.</p>
          </div>
          <div className="problem-grid">
            {problems.map((p) => <article key={p.num}><span>{p.num}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">COSA COMPRENDE</p>
            <h2>Cinque aree di lavoro, non un pacchetto standard</h2>
          </div>
          <div className="pillars">
            {pillars.map((p) => <article key={p.num}><span>{p.num}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">UN TASSELLO CONCRETO</p>
            <h2>Il profilo Google del locale conta quanto il sito.</h2>
            <p>Per la ricerca locale, il Profilo dell&apos;attività su Google è spesso il primo punto di contatto. Abbiamo scritto una guida su come collegarlo correttamente al percorso di prenotazione.</p>
            <Link className="text-link" href="/blog/prenotazioni-ristorante-google-maps" style={{ marginTop: 20, display: "inline-block" }}>Google prenotazioni ristoranti: la guida <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section id="metodo" className="section shell">
          <div className="split-heading">
            <div><p className="eyebrow">COME LAVORIAMO</p><h2>Un percorso, non un intervento isolato.</h2></div>
            <Link className="text-link" href="/siti-web-ristoranti">Scopri anche i siti per ristoranti <span aria-hidden>→</span></Link>
          </div>
          <div className="method-grid">
            {process.map(([stepTitle, text], i) => (
              <article key={stepTitle}><span>0{i + 1}</span><h3>{stepTitle}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">RISULTATI ATTESI</p>
            <h2>Dati reali, non promesse assolute</h2>
            <p>La SEO locale non garantisce una posizione specifica: dipende da concorrenza, storicità del dominio e qualità dei contenuti di partenza. Quello che possiamo garantire è la misurazione: leggiamo insieme impressioni, posizione media e clic reali in Search Console, e correggiamo la rotta su ciò che i dati mostrano davvero.</p>
          </div>
        </section>

        <section className="section shell faq">
          <div className="section-intro">
            <p className="eyebrow">DOMANDE FREQUENTI</p>
            <h2>Le risposte prima di scegliere.</h2>
          </div>
          <div>
            {faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">IL PROSSIMO PASSO</p>
            <h2>Raccontaci dove vuoi essere trovato.</h2>
            <Link className="button button-light" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
          </div>
        </section>
      <RelatedGuides slugs={["profilo-google-ristorante-checklist", "prenotazioni-ristorante-google-maps", "rispondere-recensioni-ristorante", "dati-strutturati-ristorante"]} />
</main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
