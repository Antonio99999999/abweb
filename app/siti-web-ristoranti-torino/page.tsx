import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RelatedGuides } from "@/components/related-guides";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/breadcrumb";
import { faqPageSchema } from "@/lib/schema";
import { caseStudies } from "@/lib/case-studies";

const canonical = "https://www.abagenziaweb.it/siti-web-ristoranti-torino";
const title = "Siti web per ristoranti a Torino";
const description = "Siti web per ristoranti a Torino: prenotazioni dirette, menù digitale, SEO locale e integrazione con Google Maps. Realizzati da chi conosce la ristorazione.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", locale: "it_IT", title: `${title} | AB Web Agency`, description, url: canonical, images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title: `${title} | AB Web Agency`, description, images: [`${canonical}/opengraph-image`] },
};

const study = caseStudies.find((cs) => cs.slug === "benvenuti-al-sud")!;

const problems = [
  { num: "01", title: "Illeggibile da mobile", text: "Menu, orari e prenotazione difficili da trovare su uno smartphone allontanano chi sta decidendo dove andare in quel momento." },
  { num: "02", title: "Invisibile nelle ricerche locali", text: "Se le informazioni non sono coerenti tra sito, Google e social, il locale fatica a comparire quando qualcuno cerca un ristorante a Torino." },
  { num: "03", title: "Nessuna prenotazione diretta", text: "Senza un percorso di prenotazione proprio, ogni contatto passa da telefono o portali esterni, spesso con una commissione o un passaggio in più." },
];

const included = [
  { num: "01", title: "Sito web professionale", text: "Design e struttura pensati per il tuo ristorante, non un template generico riadattato." },
  { num: "02", title: "Prenotazioni dirette", text: "Un percorso di prenotazione proprio, integrabile con Sedia o con altre soluzioni in base alle tue esigenze." },
  { num: "03", title: "Menù digitale", text: "Un menu leggibile, aggiornabile e coerente con quello proposto in sala." },
  { num: "04", title: "Ottimizzazione mobile", text: "La maggior parte delle ricerche locali avviene da smartphone: il sito è progettato prima per quello schermo." },
  { num: "05", title: "SEO locale", text: "Struttura, contenuti e dati tecnici pensati per le ricerche di chi cerca un ristorante a Torino." },
  { num: "06", title: "Integrazione con Google Maps e social", text: "Collegamenti coerenti tra sito, Profilo dell'attività su Google e canali social, senza informazioni contraddittorie." },
  { num: "07", title: "Assistenza e aggiornamenti", text: "Il sito resta seguito anche dopo il lancio: non lo lasciamo fermo al giorno della pubblicazione." },
];

const faqItems = [
  { question: "Il sito include hosting e dominio?", answer: "Dipende dal progetto: lo definiamo insieme in fase di preventivo, in base a cosa hai già attivo e cosa serve al tuo locale." },
  { question: "In quanto tempo posso avere il sito online?", answer: "Un progetto focalizzato richiede tipicamente 4–8 settimane. Prima definiamo sempre obiettivi, priorità e materiale disponibile." },
  { question: "Lavorate solo con ristoranti dentro Torino città?", answer: "No. Lavoriamo con ristoranti a Torino e in provincia; se il tuo locale è più distante scrivici comunque, valutiamo insieme la fattibilità." },
  { question: "Posso collegare le prenotazioni dirette al sito?", answer: "Sì, tramite il widget di Sedia, il gestionale sviluppato da AB Web Agency, oppure con altre soluzioni in base alle tue esigenze." },
  { question: "Cosa succede al sito che ho già?", answer: "Analizziamo cosa funziona e cosa no prima di decidere se ripartire da zero o intervenire su quanto già esiste." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Siti web per ristoranti a Torino",
  name: title,
  description,
  provider: { "@type": "ProfessionalService", name: BUSINESS.name, url: BUSINESS.url },
  areaServed: { "@type": "City", name: "Torino" },
  url: canonical,
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Siti per ristoranti", url: `${BUSINESS.url}/siti-web-ristoranti` },
  { name: "Torino", url: canonical },
]);

const faqSchema = faqPageSchema(faqItems);

export default function SitiWebRistorantiTorino() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <p className="eyebrow">SITI WEB PER RISTORANTI A TORINO</p>
          <h1>Il sito che porta il tuo ristorante di Torino dalla ricerca alla prenotazione</h1>
          <p>Progettiamo siti per ristoranti di Torino pensati per farsi trovare nelle ricerche locali e trasformare le visite in prenotazioni dirette, senza dipendere solo dai portali.</p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="button" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/siti-web-ristoranti">Scopri anche i siti per ristoranti in generale <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">IL PROBLEMA</p>
            <h2>Un sito vecchio costa più di quanto sembri</h2>
            <p>Molti ristoranti di Torino hanno ancora un sito pensato per essere online, non per portare davvero un cliente al tavolo.</p>
          </div>
          <div className="problem-grid">
            {problems.map((p) => <article key={p.num}><span>{p.num}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">COSA COMPRENDE</p>
            <h2>Un progetto pensato per il tuo locale, non un modello replicato</h2>
          </div>
          <div className="problem-grid">
            {included.map((p) => <article key={p.num}><span>{p.num}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
        </section>

        <section className="fit-section" data-reveal>
          <div className="shell fit-grid">
            <div>
              <p className="eyebrow">PERCHÉ AB WEB AGENCY</p>
              <h2>Un&apos;agenzia che conosce la ristorazione da dentro</h2>
              <p><Link className="text-link" href="/chi-siamo">Antonio Pio Brattoli</Link>, fondatore di AB Web Agency, unisce esperienza diretta nel mondo della ristorazione allo sviluppo di siti e strumenti digitali: una prospettiva che nasce dal lavoro di sala, non solo da un brief.</p>
            </div>
            <ul>
              <li><span>✓</span>Sappiamo quali informazioni contano davvero per chi decide dove prenotare.</li>
              <li><span>✓</span>Conosciamo i tempi e le priorità reali di un servizio in sala.</li>
              <li><span>✓</span>Lavoriamo anche al gestionale Sedia: sito e prenotazioni parlano la stessa lingua.</li>
            </ul>
            <Link className="text-link fit-link" href="/chi-siamo">Scopri di più su chi siamo <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">CASO STUDIO</p>
            <h2>Un progetto realizzato per un ristorante di Torino</h2>
            <p>{study.summary}</p>
            <Link className="text-link" href={`/casi-studio/${study.slug}`} style={{ marginTop: 8, display: "inline-block" }}>Leggi il caso studio completo <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">ZONE SERVITE</p>
            <h2>Torino e provincia</h2>
            <p>Lavoriamo con ristoranti a Torino e nei comuni della provincia. Se il tuo locale si trova più lontano, scrivici comunque: valutiamo insieme se il progetto è fattibile, senza promesse generiche.</p>
          </div>
        </section>

        <section className="section shell faq">
          <div className="section-intro">
            <p className="eyebrow">DOMANDE FREQUENTI</p>
            <h2>Le risposte prima di scegliere.</h2>
          </div>
          <div>
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">IL PROSSIMO PASSO</p>
            <h2>Raccontaci il tuo ristorante di Torino.</h2>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
              <Link className="button button-light" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
              <Link className="text-link" href="/contatti">Scrivici direttamente <span aria-hidden>→</span></Link>
            </div>
          </div>
        </section>
      <RelatedGuides slugs={["sito-web-ristorante-torino", "profilo-google-ristorante-checklist", "menu-digitale-ristorante"]} />
</main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
