import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BUSINESS } from "@/lib/business";
import { caseStudies } from "@/lib/case-studies";
import { breadcrumbSchema } from "@/lib/breadcrumb";
import "../../case-studies.css";

const study = caseStudies.find((cs) => cs.slug === "corte-house")!;
const canonical = `https://www.abagenziaweb.it/casi-studio/${study.slug}`;
const title = "Corte House: gestionale e sito per una casa vacanze";
const description = "Come abbiamo costruito un sito bilingue, un calendario pubblico e un gestionale su misura per Corte House, casa vacanze a Druento vicino a Torino, senza portali OTA né commissioni.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "article", locale: "it_IT", title: `${title} | AB Web Agency`, description, url: canonical, images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title: `${title} | AB Web Agency`, description, images: [`${canonical}/opengraph-image`] },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Casi studio", url: `${BUSINESS.url}/casi-studio` },
  { name: study.client, url: canonical },
]);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: study.summary,
  about: study.client,
  author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url },
  publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url, logo: { "@type": "ImageObject", url: BUSINESS.logo } },
};

const gallery = [
  { src: "/case-studies/corte-house/dashboard.png", title: "Dashboard", text: "Soggiorni in corso, richieste da confermare, pagamenti da verificare e occupazione del mese, a colpo d’occhio appena si accede." },
  { src: "/case-studies/corte-house/calendario.png", title: "Calendario", text: "Le date occupate, bloccate o in attesa di conferma, con il dettaglio del mese e l’avviso quando un ospite parte e un altro arriva lo stesso giorno." },
  { src: "/case-studies/corte-house/prenotazioni.png", title: "Prenotazioni", text: "L’elenco completo, filtrabile per nome, stato e periodo: dalla richiesta iniziale fino al soggiorno completato." },
  { src: "/case-studies/corte-house/dettaglio.png", title: "Scheda prenotazione", text: "Dati del soggiorno, stato del bonifico, cronologia delle modifiche e uno strumento per anonimizzare i dati personali quando non servono più." },
];

export default function CorteHouseCaseStudy() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <p className="eyebrow">CASO STUDIO · {study.sector.toUpperCase()} · {study.location.toUpperCase()}</p>
          <h1>Corte House</h1>
          <p>{study.summary}</p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <a className="button" href="https://cortehouse.it" target="_blank" rel="noreferrer">Visita il sito di Corte House <span aria-hidden>↗</span></a>
          </div>
          <div style={{ marginTop: 36, borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--border)" }}>
            {/* Foto reale della struttura, già pubblicata sul sito del cliente */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/case-studies/corte-house/hero.jpg" alt="Il cortile di Corte House, la casa vacanze a Druento" width={1200} height={630} style={{ width: "100%", height: "auto", display: "block" }} loading="lazy" />
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">IL PROBLEMA</p>
            <h2>{study.problem}</h2>
          </div>
          <div className="case-proof-copy" style={{ marginTop: 8 }}>
            <ul>
              {study.goals.map((goal) => <li key={goal}>{goal}</li>)}
            </ul>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">LA SOLUZIONE</p>
            <h2>{study.solution}</h2>
          </div>
          <div className="method-grid">
            {study.process.map((step, i) => (
              <article key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>
            ))}
          </div>
          <ul className="case-tech-list">
            {study.technologies.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">IL GESTIONALE</p>
            <h2>Non un prodotto preconfezionato: uno strumento costruito su questa casa.</h2>
            <p>Le immagini qui sotto mostrano il gestionale con dati dimostrativi, non prenotazioni reali di ospiti.</p>
          </div>
          <div className="case-gallery">
            {gallery.map((shot) => (
              <figure key={shot.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot.src} alt={`${shot.title} del gestionale di Corte House`} width={1100} height={1000} loading="lazy" />
                <figcaption><strong>{shot.title}</strong><span>{shot.text}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section shell case-proof">
          <div className="case-proof-copy">
            <p className="eyebrow">COSA È STATO REALIZZATO</p>
            <h2>Le consegne del progetto.</h2>
            <ul>
              {study.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <p>Questo caso studio non riporta dati di occupazione o di fatturato del locale.</p>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">IL PROSSIMO PASSO</p>
            <h2>Hai una struttura ricettiva e vuoi un sistema simile?</h2>
            <p style={{ color: "var(--muted-inverse)", maxWidth: 640, margin: "14px auto 0" }}>Che si tratti di un ristorante o di una struttura ricettiva, costruiamo il sistema attorno al modo in cui lavori davvero, non il contrario.</p>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
              <Link className="button button-light" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
              <a className="text-link" href="https://cortehouse.it" target="_blank" rel="noreferrer">Visita Corte House <span aria-hidden>↗</span></a>
            </div>
            <div style={{ marginTop: 22 }}>
              <Link className="text-link" href="/automazioni-ristoranti" style={{ display: "inline-block", marginRight: 20 }}>Automazioni per attività locali <span aria-hidden>→</span></Link>
              <Link className="text-link" href="/casi-studio" style={{ display: "inline-block" }}>Tutti i casi studio <span aria-hidden>→</span></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
