import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RelatedGuides } from "@/components/related-guides";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const canonical = "https://www.abagenziaweb.it/automazioni-ristoranti";
const title = "Automazioni per ristoranti: lead e follow-up";
const description = "Flussi che collegano richieste, contatti e processi del ristorante: meno passaggi manuali, risposte più rapide, dati leggibili in un pannello semplice.";

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
  serviceType: "Automazioni per ristoranti",
  name: title,
  description,
  provider: { "@type": "ProfessionalService", name: BUSINESS.name, url: BUSINESS.url },
  areaServed: BUSINESS.areaServed,
  url: canonical,
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Servizi", url: `${BUSINESS.url}/servizi` },
  { name: "Automazioni per ristoranti", url: canonical },
]);

const pillars = [
  { num: "01", title: "Lead e richieste centralizzati", text: "Contatti dal sito, WhatsApp e social confluiscono in un unico punto, invece di restare sparsi su canali diversi." },
  { num: "02", title: "Follow-up e-mail e messaggi", text: "Una richiesta ricevuta genera una risposta automatica immediata, mentre il team prepara quella personale." },
  { num: "03", title: "Integrazioni CRM e gestionali", text: "Colleghiamo il sito agli strumenti che il locale già usa, quando è utile e tecnicamente possibile." },
  { num: "04", title: "Dashboard e lettura dei dati", text: "Un pannello semplice per capire da dove arrivano le richieste e cosa sta funzionando davvero." },
];

export default function AutomazioniRistoranti() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <p className="eyebrow">AUTOMAZIONI PER RISTORANTI</p>
          <h1>Automazioni che lasciano spazio al servizio</h1>
          <p>Le automazioni per ristoranti collegano richieste, contatti e processi in un unico flusso, così nessuna richiesta si perde tra sito, WhatsApp ed e-mail e il team risponde senza lavoro ripetuto.</p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="button" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/siti-web-ristoranti">Abbinale a un sito nuovo <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro"><p className="eyebrow">COSA AUTOMATIZZIAMO</p><h2>Quattro flussi, un unico punto di controllo.</h2></div>
          <div className="pillars">
            {pillars.map((p) => (
              <article key={p.num}><span>{p.num}</span><h3>{p.title}</h3><p>{p.text}</p></article>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">COME LAVORIAMO</p>
            <h2>Un esempio concreto: il nostro stesso Project Planner.</h2>
            <p>Il calcolatore di preventivo di questo sito è un&apos;automazione reale, non una demo: raccoglie le richieste, le smista e restituisce una prima stima senza intervento manuale. È lo stesso principio che applichiamo al tuo ristorante, adattato ai canali che usi davvero — sito, WhatsApp, e-mail.</p>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">IL PROSSIMO PASSO</p>
            <h2>Raccontaci quali passaggi vuoi togliere di mezzo.</h2>
            <Link className="button button-light" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
          </div>
        </section>
      <RelatedGuides slugs={["telefono-whatsapp-gestionale-prenotazioni", "turni-durata-tavoli-lista-attesa"]} />
</main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
