import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/breadcrumb";
import { personSchema } from "@/lib/schema";

const canonical = "https://www.abagenziaweb.it/chi-siamo";
const title = "Chi siamo";
const description = "AB Web Agency nasce dall'incontro tra esperienza diretta nella ristorazione e sviluppo digitale: siti, automazioni e il gestionale Sedia per ristoranti.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", locale: "it_IT", title: `${title} | AB Web Agency`, description, url: canonical, images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title: `${title} | AB Web Agency`, description, images: [`${canonical}/opengraph-image`] },
};

const origin = personSchema();
const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Chi siamo", url: canonical },
]);

export default function ChiSiamo() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <p className="eyebrow">CHI SIAMO</p>
          <h1>Un&apos;agenzia che conosce la sala, non solo il codice.</h1>
          <p>AB Web Agency progetta siti, automazioni e strumenti digitali per ristoranti partendo da un punto di vista diretto sul lavoro di sala, non da un&apos;idea astratta di cosa serva a un locale.</p>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">IL PROGETTO</p>
            <h2>Nasce dall&apos;incontro tra sala e sviluppo digitale</h2>
            <p>AB Web Agency unisce competenze diverse attorno a un solo obiettivo: rendere più semplice, per un ristorante, farsi trovare, ricevere prenotazioni e gestire la sala senza dover adattare strumenti pensati per altri settori.</p>
          </div>
          <div className="case-proof-copy" style={{ marginTop: 8 }}>
            <ul>
              <li>Esperienza diretta nel mondo della ristorazione</li>
              <li>Sviluppo di siti web pensati per la conversione</li>
              <li>Automazioni che riducono il lavoro ripetitivo</li>
              <li>Strumenti digitali costruiti sui problemi reali dei ristoratori</li>
              <li>Sviluppo del gestionale Sedia, dalla sala al software</li>
            </ul>
          </div>
        </section>

        <section className="fit-section" data-reveal>
          <div className="shell fit-grid">
            <div>
              <p className="eyebrow">PERCHÉ FA DIFFERENZA</p>
              <h2>Conoscere il lavoro in sala cambia le domande che ci facciamo</h2>
              <p>Un menu che cambia a metà servizio, un tavolo unito all&apos;ultimo momento, una prenotazione che arriva mentre il telefono squilla ancora: sono dettagli che si notano avendoli vissuti, e che orientano scelte tecniche altrimenti invisibili da fuori.</p>
            </div>
            <ul>
              <li><span>✓</span>Priorità alle informazioni che un cliente cerca davvero prima di prenotare.</li>
              <li><span>✓</span>Strumenti pensati per essere usati durante il servizio, non solo in ufficio.</li>
              <li><span>✓</span>Meno passaggi manuali, più tempo per la sala.</li>
            </ul>
            <Link className="text-link fit-link" href="/gestionale-ristoranti">Scopri Sedia, il gestionale nato da questo approccio <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">COSA FACCIAMO</p>
            <h2>Un sistema, non una lista di servizi separati</h2>
            <p>
              Le pagine qui sotto raccontano nel dettaglio ogni parte del lavoro: <Link className="text-link" href="/servizi">i servizi</Link> nel loro insieme, <Link className="text-link" href="/siti-web-ristoranti">i siti per ristoranti</Link>, <Link className="text-link" href="/gestionale-ristoranti">Sedia</Link>, i <Link className="text-link" href="/casi-studio">casi studio</Link> realizzati e come <Link className="text-link" href="/contatti">metterti in contatto</Link> con noi.
            </p>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">PARLIAMONE</p>
            <h2>Raccontaci il tuo ristorante.</h2>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
              <Link className="button button-light" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
              <Link className="text-link" href="/contatti">Scrivici direttamente <span aria-hidden>→</span></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(origin) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
