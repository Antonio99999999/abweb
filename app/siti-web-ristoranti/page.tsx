import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/breadcrumb";
import { faqPageSchema } from "@/lib/schema";

const canonical = "https://www.abagenziaweb.it/siti-web-ristoranti";
const title = "Siti web per ristoranti: realizzazione, strategia e SEO tecnico";
const description = "Realizziamo siti web per ristoranti pensati per trasformare le visite in prenotazioni dirette: mobile-first, menu consultabile, SEO locale, velocità e accessibilità.";

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
  serviceType: "Sviluppo siti web per ristoranti",
  name: title,
  description,
  provider: { "@type": "ProfessionalService", name: BUSINESS.name, url: BUSINESS.url },
  areaServed: BUSINESS.areaServed,
  url: canonical,
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Servizi", url: `${BUSINESS.url}/servizi` },
  { name: "Siti web per ristoranti", url: canonical },
]);

const included = [
  { num: "01", title: "Mobile-first", text: "La maggior parte delle ricerche “ristorante vicino a me” parte da smartphone: il sito è progettato prima per quello schermo, non adattato dopo." },
  { num: "02", title: "Menù sempre consultabile", text: "Leggibile direttamente sul sito e aggiornabile, non un PDF pesante da scaricare per sapere cosa si mangia." },
  { num: "03", title: "Prenotazioni dirette", text: <>Collegabile al <Link href="/gestionale-ristoranti/widget-prenotazioni">widget di Sedia</Link> o ad altri sistemi, senza far uscire il cliente dal sito del ristorante.</> },
  { num: "04", title: "SEO locale", text: "Struttura, contenuti e dati tecnici pensati per le ricerche di chi cerca un ristorante nella tua zona." },
  { num: "05", title: "Velocità e accessibilità", text: "Core Web Vitals, HTML semantico e navigazione da tastiera fanno parte del progetto, non sono una rifinitura finale." },
  { num: "06", title: "Analytics", text: "Misuriamo il percorso reale del visitatore, non solo il numero di pagine viste." },
];

const faqItems = [
  { question: "Il sito include hosting e dominio?", answer: "Dipende dal progetto: lo definiamo insieme in fase di preventivo, in base a cosa hai già attivo e cosa serve al tuo locale." },
  { question: "In quanto tempo posso avere il sito online?", answer: "Un progetto focalizzato richiede tipicamente 4–8 settimane. Prima definiamo sempre obiettivi, priorità e materiale disponibile." },
  { question: "Posso collegare le prenotazioni dirette al sito?", answer: "Sì, tramite il widget di Sedia, il gestionale sviluppato da AB Web Agency, oppure con altre soluzioni in base alle tue esigenze." },
  { question: "Il sito include anche la SEO locale?", answer: "La realizzazione del sito comprende le basi tecniche di SEO (struttura, velocità, dati tecnici). Un lavoro continuativo su ricerche locali e Google Business Profile fa parte della consulenza SEO dedicata." },
  { question: "Cosa succede al sito che ho già?", answer: "Analizziamo cosa funziona e cosa no prima di decidere se ripartire da zero o intervenire su quanto già esiste." },
] as const;

const faqSchema = faqPageSchema(faqItems.map(({ question, answer }) => ({ question, answer })));

export default function SitiWebRistoranti() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <p className="eyebrow">SITI WEB PER RISTORANTI</p>
          <h1>Siti web per ristoranti che trasformano interesse in azione</h1>
          <p>Un sito non è una brochure. È il punto in cui posizionamento, contenuti, esperienza e conversione si incontrano.</p>
          <div className="case-proof-copy" style={{ marginTop: 8 }}>
            <ul>
              <li>Strategia e architettura dei contenuti</li>
              <li>UX/UI design proprietario</li>
              <li>Sviluppo performante e accessibile</li>
              <li>SEO tecnico e tracking</li>
            </ul>
          </div>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link className="button" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/contatti">Parliamone insieme <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">IL PROBLEMA</p>
            <h2>Quando ogni canale vive per conto suo, la crescita diventa un lavoro in più.</h2>
            <p>Un sito che non guida l&apos;azione, messaggi senza follow-up e dati sparsi lasciano opportunità sul tavolo. Mettiamo ordine prima di aggiungere complessità.</p>
          </div>
          <div className="problem-grid">
            <article><span>01</span><h3>Presenza che non differenzia</h3><p>Un sito generico non racconta perché sceglierti né accompagna alla prenotazione.</p></article>
            <article><span>02</span><h3>Richieste che si disperdono</h3><p>Contatti, WhatsApp e social restano scollegati: rispondere bene diventa difficile.</p></article>
            <article><span>03</span><h3>Marketing senza sistema</h3><p>Si pubblica, si spende e si spera, senza una lettura chiara di ciò che genera valore.</p></article>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">COSA INCLUDE</p>
            <h2>Realizzazione di siti web per ristoranti, non solo grafica</h2>
          </div>
          <div className="problem-grid">
            {included.map((p) => <article key={p.num}><span>{p.num}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}
          </div>
        </section>

        <section className="fit-section" data-reveal>
          <div className="shell fit-grid">
            <div>
              <p className="eyebrow">PER CHI È</p>
              <h2>Non cerchi &ldquo;un sito&rdquo;. Cerchi un modo più solido di farti scegliere.</h2>
              <p>È il momento giusto se la qualità del tuo lavoro non emerge ancora online, oppure se ogni nuova richiesta richiede di ricominciare da capo.</p>
            </div>
            <ul>
              <li><span>✓</span>Vuoi ricevere richieste più chiare e più vicine al tuo cliente ideale.</li>
              <li><span>✓</span>Vuoi ridurre i passaggi ripetitivi senza rendere impersonale il rapporto.</li>
              <li><span>✓</span>Vuoi una presenza all&apos;altezza dell&apos;esperienza che offri davvero.</li>
            </ul>
            <Link className="text-link fit-link" href="/contatti">Parliamone insieme <span aria-hidden>→</span></Link>
          </div>
        </section>

        <section id="metodo" className="section shell">
          <div className="split-heading">
            <div><p className="eyebrow">IL METODO</p><h2>Prima capiamo il tavolo. Poi progettiamo il servizio.</h2></div>
            <Link className="text-link" href="/metodo-mastro">Esplora Metodo Mastro <span aria-hidden>→</span></Link>
          </div>
          <div className="method-grid">
            {[["Diagnosi", "Obiettivi, clienti, offerta e ostacoli: allineiamo ciò che conta prima di disegnare."], ["Architettura", "Definiamo messaggi, percorsi, contenuti e priorità del sistema."], ["Realizzazione", "Design e tecnologia lavorano insieme: ogni scelta ha una funzione chiara."], ["Ottimizzazione", "Misuriamo, impariamo e interveniamo sulle leve che producono effetto."]].map(([title, text], i) => (
              <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="section case-section">
          <div className="shell case-card">
            <div>
              <p className="eyebrow">METODO MASTRO</p>
              <h2>Una guida concreta per trasformare la presenza digitale del tuo ristorante in 90 giorni.</h2>
              <p>Il nostro framework nasce da un caso reale: posizionamento, sito, prenotazioni, SEO locale e fidelizzazione in un piano applicabile.</p>
              <Link className="button button-light" href="/metodo-mastro">Scopri il metodo <span aria-hidden>→</span></Link>
            </div>
            <div className="guide-preview">
              <span>METODO<br />MASTRO</span>
              <small>Guida operativa<br />per ristoranti</small>
              <b>90<br /><em>giorni</em></b>
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">SEI A TORINO?</p>
            <h2>Scopri la pagina dedicata ai ristoranti di Torino</h2>
          </div>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <Link className="text-link" href="/siti-web-ristoranti-torino">Siti per ristoranti a Torino <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/casi-studio">Guarda i casi studio <span aria-hidden>→</span></Link>
            <Link className="text-link" href="/seo-locale-ristoranti">Scopri la consulenza SEO per ristoranti <span aria-hidden>→</span></Link>
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
            <h2>Raccontaci dove vuoi arrivare.<br />Diamo forma al percorso.</h2>
            <Link className="button button-light" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
