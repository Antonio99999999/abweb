import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AuthorBio } from "@/components/blog-article";
import { ArticleProgress } from "@/components/article-progress";
import { BUSINESS } from "@/lib/business";
import { AUTHOR } from "@/lib/author";
import { SEDIA_PLANS } from "@/lib/sedia-plans";
import "../blog.css";
import "./quandoo-sedia.css";

const canonical = "https://www.abagenziaweb.it/blog/quandoo-chiude-alternativa-sedia";
const officialSource = "https://www.quandoo.it/important-update";
const sediaSubject = encodeURIComponent("Richiesta informazioni su Sedia");
const sediaBody = encodeURIComponent(
  "Buongiorno AB Web Agency,\n\nvorrei aggiungere il mio ristorante a Sedia e ricevere maggiori informazioni.\n\nRistorante:\nCittà:\nTelefono:"
);
const demoBody = encodeURIComponent(
  "Buongiorno AB Web Agency,\n\nvorrei richiedere una dimostrazione di Sedia per il mio ristorante.\n\nRistorante:\nCittà:\nTelefono:"
);
const sediaHref = `mailto:ab.agenziaweb@gmail.com?subject=${sediaSubject}&body=${sediaBody}`;
const demoHref = `mailto:ab.agenziaweb@gmail.com?subject=${encodeURIComponent("Richiesta dimostrazione Sedia")}&body=${demoBody}`;

const title = "Quandoo non è più disponibile: alternative e passaggio";
const description = "Lo stato del servizio Quandoo secondo il comunicato ufficiale, criteri per scegliere un gestionale e una checklist per passare senza perdere prenotazioni.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "it_IT",
    url: canonical,
    title: `${title} | AB Web Agency`,
    description: "Stato del servizio, criteri di scelta e checklist per passare a un nuovo gestionale di prenotazioni.",
    publishedTime: "2026-07-29T09:00:00+02:00",
    modifiedTime: "2026-10-06T09:00:00+02:00",
    authors: ["AB Web Agency"],
    images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: "Quandoo non è più disponibile: alternative e passaggio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | AB Web Agency`,
    description: "Criteri di scelta e checklist per organizzare il passaggio da Quandoo a un nuovo gestionale.",
    images: [`${canonical}/opengraph-image`],
  },
};

const faqItems = [
  ["Quandoo è ancora attivo?", "Secondo il comunicato ufficiale di Quandoo, la piattaforma non è più disponibile e la chiusura è completata. Il comunicato indica il contatto service.it@quandoo.com per domande su prenotazioni future e pagamenti cashback fedeltà in sospeso, e cita il 31 dicembre 2026 come data finale."],
  ["Le prenotazioni già fatte su Quandoo vengono trasferite a Sedia?", "Il trasferimento è possibile. Oggi lo facciamo a mano con AB Web Agency, dopo aver verificato quali dati sono disponibili. Una funzione di importazione autonoma da parte del ristorante è in sviluppo e non è ancora disponibile."],
  ["Quali dati posso esportare da Quandoo?", "Verifica direttamente con Quandoo quali esportazioni sono ancora disponibili prima della chiusura. Storico prenotazioni e lista ospiti sono i dati più importanti da salvare: non dare per scontato che siano esportabili senza una verifica."],
  ["Cos’è Sedia?", "Sedia è un gestionale operativo per ristoranti che riunisce prenotazioni, mappa della sala, tavoli, rubrica clienti, disponibilità e report in un unico ambiente. È sviluppato da AB Web Agency."],
  ["Sedia può essere inserito nel sito del ristorante?", "Sì. Il widget di prenotazione può essere integrato nel sito del locale e personalizzato nei colori, nei testi, nel logo e nelle regole di prenotazione."],
  ["Come si configura la sala?", "La sala viene riprodotta con un editor visuale: tavoli trascinabili e ridimensionabili, capienze e combinazioni per i gruppi. AB Web Agency segue la configurazione iniziale."],
  ["Quanto tempo serve per iniziare?", "Dipende dal numero di sale, dalle regole di servizio e dal sito esistente. Dopo l’analisi iniziale, AB Web Agency definisce un piano di attivazione e test senza promettere tempi standard non adatti a ogni locale."],
  ["Come posso richiedere una dimostrazione?", "Usa il pulsante di richiesta in fondo alla pagina: l’e-mail è già compilata per identificare subito la richiesta relativa a Sedia."],
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Quandoo non è più disponibile: alternative e passaggio per il tuo ristorante",
  description,
  image: `${canonical}/opengraph-image`,
  datePublished: "2026-07-29",
  dateModified: "2026-10-06",
  inLanguage: "it-IT",
  mainEntityOfPage: canonical,
  author: { "@type": "Person", name: AUTHOR.name, url: AUTHOR.url },
  publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url, logo: { "@type": "ImageObject", url: BUSINESS.logo } },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.abagenziaweb.it/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.abagenziaweb.it/blog" },
    { "@type": "ListItem", position: 3, name: "Alternativa a Quandoo", item: canonical },
  ],
};

export default function QuandooSediaArticle() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="qs-page" data-theme="sedia">
        <nav className="shell qs-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden>/</span><span>Blog</span><span aria-hidden>/</span><span aria-current="page">Alternativa a Quandoo</span>
        </nav>

        <article>
          <header className="qs-hero">
            <div className="shell qs-hero-grid">
              <div className="qs-hero-copy">
                <p className="qs-kicker">Gestionali per ristoranti</p>
                <h1>Quandoo non è più disponibile: come scegliere l’alternativa</h1>
                <p className="qs-lead">Quandoo ha completato la chiusura del proprio servizio. Questa guida riporta lo stato indicato nel comunicato ufficiale e propone criteri concreti per scegliere un gestionale e organizzare il passaggio, senza perdere le prenotazioni del tuo locale.</p>
                <div className="qs-byline"><time dateTime="2026-07-29">29 luglio 2026</time><span>·</span><span>Aggiornato il 6 ottobre 2026</span><span>·</span><span>12 minuti di lettura</span></div>
                <div className="qs-actions"><a className="button qs-primary" href={sediaHref}>Richiedi informazioni su Sedia <span aria-hidden>→</span></a><a className="qs-text-link" href="#criteri">Vedi i criteri di scelta <span aria-hidden>↓</span></a></div>
              </div>
              <div className="qs-product-visual" aria-label="Anteprima illustrata del gestionale Sedia">
                <div className="qs-logo-row"><Image src="/images/sedia/sedia-logo.svg" alt="Sedia, gestionale per ristoranti" width={139} height={49} priority /></div>
                <div className="qs-dashboard">
                  <div className="qs-dash-head"><span>Sala principale</span><b>Servizio cena</b></div>
                  <div className="qs-floor" aria-hidden="true">
                    <span className="table t1">2</span><span className="table t2 booked">4</span><span className="table t3">2</span><span className="table t4 booked">6</span><span className="table t5">4</span>
                  </div>
                  <div className="qs-booking"><span>20:30</span><div><b>Nuova prenotazione</b><small>4 persone · Tavolo 12</small></div><i>✓</i></div>
                </div>
              </div>
            </div>
          </header>

          <ArticleProgress tocSelector=".qs-toc" />
          <div className="shell qs-layout">
            <aside className="qs-toc" aria-label="Indice dell’articolo">
              <p>In questo articolo</p>
              <a href="#stato-servizio">Stato del servizio</a><a href="#cosa-fare-ora">Cosa fare subito</a><a href="#criteri">Criteri di scelta</a><a href="#checklist">Checklist di passaggio</a><a href="#sedia">Come lavora Sedia</a><a href="#faq">Domande frequenti</a>
            </aside>

            <div className="qs-content">
              <section className="qs-intro" data-reveal>
                <p>Quandoo ha annunciato a marzo 2026 la cessazione dei propri servizi e indica le date del passaggio nel proprio comunicato. Il comunicato ufficiale attuale segnala che la piattaforma non è più disponibile e che la chiusura è completata.</p>
                <p>Per un ristorante il tema non è solo cambiare software. Significa ricostruire il percorso completo: sala, disponibilità, widget sul sito, link su Google e social, storico clienti e formazione del personale.</p>
              </section>

              <section id="stato-servizio" className="qs-section qs-animate-timeline" data-reveal>
                <p className="qs-kicker">Stato del servizio</p>
                <h2>Cosa dice il comunicato ufficiale</h2>
                <p>Le date seguenti sono quelle indicate da Quandoo nell’annuncio di cessazione. Lo stato attuale del servizio è quello del comunicato ufficiale.</p>
                <ol className="qs-timeline">
                  <li><time dateTime="2026-03-24">24 marzo 2026</time><div><h3>Annuncio della cessazione</h3><p>Quandoo comunica l’avvio della cessazione dei propri servizi.</p></div></li>
                  <li><time dateTime="2026-09-30">30 settembre 2026</time><div><h3>Ultimo giorno per nuove prenotazioni</h3><p>Fino a questa data è possibile creare nuove prenotazioni sulla piattaforma.</p></div></li>
                  <li><time dateTime="2026-10-01">1° ottobre 2026</time><div><h3>Fine dei servizi ai clienti</h3><p>Cessano i servizi destinati ai clienti. Il comunicato ufficiale attuale indica la piattaforma come non più disponibile.</p></div></li>
                  <li><time dateTime="2026-12-31">31 dicembre 2026</time><div><h3>Data finale</h3><p>Il comunicato ufficiale cita il 31 dicembre 2026 come data finale della chiusura.</p></div></li>
                </ol>
                <p className="qs-source">Fonte ufficiale: <a href={officialSource} target="_blank" rel="noreferrer">“An Important Update on Quandoo Services” — Quandoo <span aria-hidden>↗</span></a></p>
              </section>

              <section id="cosa-fare-ora" className="qs-section qs-animate-cards" data-reveal>
                <p className="qs-kicker">Azioni immediate</p>
                <h2>Cosa fare subito se usi ancora Quandoo</h2>
                <p>Con la piattaforma non più disponibile, le azioni che contano sono quelle che proteggono le prenotazioni future e i dati del locale.</p>
                <div className="qs-risk-grid">
                  {[
                    ["Prenotazioni future", "Annota o esporta le prenotazioni future e i contatti dei clienti. Verifica con Quandoo quali dati sono ancora esportabili: non dare per scontato che lo siano."],
                    ["Pagamenti in sospeso", "Per cashback o pagamenti fedeltà ancora in sospeso, il comunicato indica il contatto service.it@quandoo.com."],
                    ["Sito e widget", "Un widget o un link che rimanda a Quandoo non porta più a una prenotazione: sostituiscilo con un nuovo percorso di prenotazione."],
                    ["Google e social", "Profilo Google, sito e social devono puntare al nuovo percorso, altrimenti i clienti trovano link che non funzionano."],
                  ].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
                </div>
              </section>

              <section id="criteri" className="qs-section qs-animate-table" data-reveal>
                <p className="qs-kicker">Criteri di scelta</p>
                <h2>Cosa verificare prima di scegliere un gestionale</h2>
                <p>Questi criteri valgono per qualsiasi alternativa, non solo per Sedia. La terza colonna indica la domanda da fare al fornitore prima di firmare.</p>
                <div className="qs-table-wrap" role="region" aria-label="Criteri di scelta per un gestionale di prenotazioni" tabIndex={0}>
                  <table>
                    <thead><tr><th scope="col">Criterio</th><th scope="col">Perché conta</th><th scope="col">Domanda da fare</th></tr></thead>
                    <tbody>
                      <tr><th scope="row">Sala reale</th><td>Tavoli, capienze e combinazioni devono essere nel sistema, non solo nella testa di chi risponde al telefono.</td><td>Posso configurare la mia sala con tavoli, capienze e combinazioni?</td></tr>
                      <tr><th scope="row">Widget sul sito</th><td>Il cliente deve poter prenotare dal tuo sito senza passare da un portale esterno.</td><td>Il widget è integrabile nel mio sito e personalizzabile?</td></tr>
                      <tr><th scope="row">Commissioni</th><td>Una commissione per ogni prenotazione può pesare più della differenza di prezzo del canone.</td><td>Trattenete una commissione per prenotazione o sullo scontrino?</td></tr>
                      <tr><th scope="row">Clienti e storico</th><td>Storico visite e note devono restare leggibili anche dopo il cambio di sistema.</td><td>Posso esportare l’anagrafica clienti e lo storico?</td></tr>
                      <tr><th scope="row">Esportazione dati</th><td>Senza export non c’è continuità: va verificato prima di firmare, non dopo.</td><td>Quali dati posso esportare, in quale formato e con quali limiti?</td></tr>
                      <tr><th scope="row">Prezzo</th><td>Il canone deve essere chiaro, con piani e funzioni dichiarati per iscritto.</td><td>Quali funzioni cambiano tra i piani e cosa resta fuori dal canone?</td></tr>
                      <tr><th scope="row">Supporto al passaggio</th><td>La configurazione iniziale decide spesso i tempi reali di attivazione.</td><td>Chi configura la sala e chi risponde se il widget non funziona?</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="qs-table-note">Per Sedia, le risposte sono nei piani pubblicati: {SEDIA_PLANS.map((plan) => `${plan.name} da ${plan.monthlyPrice} € al mese`).join(", ")}. Il piano Pro include export dei dati e report; il piano Premium aggiunge la gestione di più ristoranti dallo stesso account. Nessuna commissione per singola prenotazione in nessun piano.</p>
              </section>

              <section id="checklist" className="qs-section qs-animate-steps" data-reveal>
                <p className="qs-kicker">Organizzare il passaggio</p>
                <h2>Checklist di passaggio</h2>
                <ol className="qs-steps">
                  <li><span>1</span><div><h3>Inventario</h3><p>Elenca sale, turni e canali di prenotazione attivi (sito, Google, social, telefono) e tutti i link da aggiornare.</p></div></li>
                  <li><span>2</span><div><h3>Dati</h3><p>Esporta o annota storico, clienti, consensi e prenotazioni future. Conserva una copia fuori dal vecchio sistema.</p></div></li>
                  <li><span>3</span><div><h3>Configurazione</h3><p>Riproduci sala, tavoli e regole di servizio nel nuovo gestionale e verificali con il team che usa la mappa ogni giorno.</p></div></li>
                  <li><span>4</span><div><h3>Test e comunicazione</h3><p>Prova il percorso di prenotazione da telefono, aggiorna link e profili, avvisa il personale e i clienti abituali, poi disattiva il vecchio canale.</p></div></li>
                </ol>
                <aside className="qs-honesty"><strong>Nota sulla migrazione dei dati</strong><p>Il trasferimento dei dati da Quandoo a Sedia è possibile. Oggi AB Web Agency lo esegue a mano, dopo aver verificato con te i dati disponibili. La funzione di importazione autonoma è in sviluppo: non è ancora disponibile.</p></aside>
              </section>

              <section id="sedia" className="qs-section qs-animate-features" data-reveal>
                <p className="qs-kicker">Come lavora Sedia</p>
                <h2>Un gestionale costruito intorno alla sala reale del ristorante</h2>
                <p>Quando arriva una prenotazione, il team può visualizzarla nel calendario, associarla al tavolo più adatto e controllare la disponibilità del servizio. La mappa grafica riproduce la sala del locale: i tavoli possono essere trascinati, ridimensionati, configurati nelle capienze e combinati per gruppi numerosi.</p>
                <div className="qs-feature-list">
                  <article><span>01</span><div><h3>Prenotazioni e tavoli</h3><p>Calendario, conferma automatica via email, associazione ai tavoli, cancellazioni, no-show e provenienza della prenotazione. La scelta tra conferma automatica e conferma su richiesta è nel piano Pro.</p></div></article>
                  <article><span>02</span><div><h3>Clienti con storico</h3><p>La rubrica conserva lo storico delle visite. Filtri e segmenti avanzati sono nel piano Pro.</p></div></article>
                  <article><span>03</span><div><h3>Widget diretto sul sito</h3><p>Colori, testi, logo e regole sono personalizzabili. Il widget è incluso nei piani e non prevede commissioni per singola prenotazione.</p></div></article>
                  <article><span>04</span><div><h3>Report, export e più locali</h3><p>Report, statistiche ed export sono nel piano Pro. La gestione di più ristoranti dallo stesso account è nel piano Premium, con livelli di accesso per proprietario, amministratore e staff.</p></div></article>
                </div>
              </section>

              <section className="qs-operational" data-reveal>
                <div><p className="qs-kicker">Non una semplice demo grafica</p><h2>Un gestionale già operativo</h2></div>
                <p>Sedia è già un gestionale operativo: il prodotto include flussi utilizzabili per prenotazioni, tavoli, disponibilità, clienti, widget e report. Alcune funzioni variano in base al piano. L’importazione autonoma da altri strumenti è in sviluppo; oggi il trasferimento si fa con l’assistenza di AB Web Agency.</p>
              </section>

              <section id="faq" className="qs-section qs-faq" data-reveal>
                <p className="qs-kicker">Domande frequenti</p>
                <h2>Le risposte prima di scegliere</h2>
                <div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden>+</span></summary><p>{answer}</p></details>)}</div>
              </section>
              <AuthorBio />
            </div>
          </div>

          <section className="qs-final" data-theme="agency" data-reveal>
            <div className="shell">
              <div className="qs-final-main"><p className="qs-kicker">Il prossimo passo</p><h2>Se devi cambiare gestionale, parti dalla sala</h2><p>Configura Sedia sulla sala del tuo ristorante e verifica il percorso di prenotazione prima di disattivare il vecchio canale.</p><div className="qs-actions"><a className="button qs-final-primary" href={sediaHref}>Richiedi informazioni su Sedia <span aria-hidden>→</span></a><a className="button qs-final-secondary" href={demoHref}>Richiedi una dimostrazione</a></div><Link className="qs-text-link" href="/servizi#gestionale">Sedia tra i servizi di AB Web Agency <span aria-hidden>→</span></Link></div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
