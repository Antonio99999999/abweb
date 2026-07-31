import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const canonical = "https://www.abagenziaweb.it/seo-locale-ristoranti";
const title = "SEO locale per ristoranti: farsi trovare da chi cerca vicino a te";
const description = "SEO locale, contenuti e campagne per ristoranti: keyword e intenti locali, landing page che convertono, report orientati alle decisioni.";

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
  serviceType: "SEO locale per ristoranti",
  name: title,
  description,
  provider: { "@type": "ProfessionalService", name: BUSINESS.name, url: BUSINESS.url },
  areaServed: BUSINESS.areaServed,
  url: canonical,
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Servizi", url: `${BUSINESS.url}/servizi` },
  { name: "SEO locale per ristoranti", url: canonical },
]);

const pillars = [
  { num: "01", title: "Keyword e intenti locali", text: "Capiamo cosa cercano davvero le persone della tua zona prima di scrivere una singola pagina." },
  { num: "02", title: "Landing page e offerte", text: "Pagine costruite attorno a una singola decisione, non vetrine generiche." },
  { num: "03", title: "Contenuti e campagne", text: "Contenuti utili al posizionamento locale, supportati da campagne quando ha senso spingere." },
  { num: "04", title: "Report orientati alle decisioni", text: "Misuriamo cosa genera richieste reali, non solo visite alla pagina." },
];

export default function SeoLocaleRistoranti() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <p className="eyebrow">SEO LOCALE PER RISTORANTI</p>
          <h1>Acquisizione clienti con una direzione</h1>
          <p>SEO locale, contenuti e campagne funzionano quando hanno una proposta chiara, una pagina che converte e dati che guidano le decisioni.</p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="button" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/blog">Leggi le guide sul blog <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="section shell">
          <div className="pillars">
            {pillars.map((p) => (
              <article key={p.num}><span>{p.num}</span><h3>{p.title}</h3><p>{p.text}</p></article>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">UN TASSELLO CONCRETO</p>
            <h2>Il profilo Google del locale conta quanto il sito.</h2>
            <p>Per la ricerca locale, il Profilo dell&apos;attività su Google è spesso il primo punto di contatto. Abbiamo scritto una guida su come collegarlo correttamente al percorso di prenotazione.</p>
            <Link className="text-link" href="/blog/prenotazioni-ristorante-google-maps" style={{ marginTop: 20, display: "inline-block" }}>Prenotazioni da Google: la guida <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">IL PROSSIMO PASSO</p>
            <h2>Raccontaci dove vuoi essere trovato.</h2>
            <Link className="button button-light" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
