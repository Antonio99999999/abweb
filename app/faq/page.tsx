import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeScope } from "@/components/theme-scope";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const canonical = "https://www.abagenziaweb.it/faq";
const title = "Domande frequenti su siti per ristoranti e Sedia";
const description = "Le risposte alle domande più comuni su costi, tempi e metodo per i siti per ristoranti e sul gestionale di prenotazioni Sedia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", locale: "it_IT", title: `${title} | AB Web Agency`, description, url: canonical, images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title: `${title} | AB Web Agency`, description, images: [`${canonical}/opengraph-image`] },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "FAQ", url: canonical },
]);

const agencyFaq: [string, string][] = [
  ["Quanto costa un progetto?", "Dipende da obiettivi, complessità e integrazioni. Il Project Planner restituisce una fascia iniziale; la proposta nasce dopo un confronto reale."],
  ["In quanto tempo si va online?", "Un progetto focalizzato richiede tipicamente 4–8 settimane. Prima definiamo sempre obiettivi, priorità e materiale disponibile."],
  ["Possiamo partire da una sola cosa?", "Sì. Possiamo iniziare dal punto a maggiore impatto e costruire una roadmap che non costringa a rifare tutto dopo."],
  ["Lavorate solo con ristoranti?", "La nostra verticale prioritaria è l'hospitality. Lavoriamo anche con attività locali quando possiamo portare la stessa profondità strategica."],
];

const bridgeFaq: [string, string][] = [
  ["Qual è la differenza tra un sito e Sedia?", "Il sito è la vetrina che porta nuove richieste; Sedia è il gestionale che organizza tavoli, prenotazioni e clienti quando il locale è già in movimento. Sono strumenti complementari: puoi partire da uno solo o usarli insieme."],
];

const sediaFaq: [string, string][] = [
  ["Cos'è Sedia?", "Sedia è un gestionale operativo per ristoranti che riunisce prenotazioni, mappa della sala, tavoli, rubrica clienti, disponibilità e report in un unico ambiente."],
  ["Sedia può essere inserito nel sito del ristorante?", "Sì. Il widget di prenotazione può essere integrato nel sito del locale e personalizzato nei colori, nei testi, nel logo e nelle regole di prenotazione."],
  ["Come si configura la sala?", "La sala viene riprodotta con un editor visuale: tavoli trascinabili e ridimensionabili, capienze e combinazioni per i gruppi. AB Web Agency segue la configurazione iniziale."],
  ["Quanto tempo serve per iniziare?", "Dipende dal numero di sale, dalle regole di servizio e dal sito esistente. Dopo l'analisi iniziale, AB Web Agency definisce un piano di attivazione e test senza promettere tempi standard non adatti a ogni locale."],
  ["Come posso richiedere una dimostrazione?", "Scrivi ad AB Web Agency con il modulo o il pulsante presenti in questa pagina, in /gestionale-ristoranti o via e-mail: il messaggio sarà già impostato per identificare la richiesta relativa a Sedia."],
];

const allFaq = [...agencyFaq, ...bridgeFaq, ...sediaFaq];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Faq() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <p className="eyebrow">FAQ</p>
          <h1>Le domande che meritano una risposta chiara</h1>
          <p>Tutte le domande su siti per ristoranti, metodo di lavoro e sul gestionale Sedia, in un solo posto.</p>
        </section>

        <section className="section shell faq">
          <div className="section-intro">
            <p className="eyebrow">IL SITO E IL METODO</p>
            <h2>Prima di iniziare un progetto</h2>
          </div>
          <div>
            {agencyFaq.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
            {bridgeFaq.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
          </div>
        </section>

        <ThemeScope theme="sedia" as="section" className="section shell faq">
          <div className="section-intro">
            <p className="eyebrow">SEDIA</p>
            <h2>Prima di attivare il gestionale</h2>
          </div>
          <div>
            {sediaFaq.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
          </div>
        </ThemeScope>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">HAI ALTRE DOMANDE?</p>
            <h2>Scrivici, ti rispondiamo entro un giorno lavorativo.</h2>
            <Link className="button button-light" href="/contatti">Vai ai contatti <span aria-hidden>→</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
