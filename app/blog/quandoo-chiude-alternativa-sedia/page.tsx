import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AuthorBio } from "@/components/blog-article";
import { ArticleProgress } from "@/components/article-progress";
import { BUSINESS } from "@/lib/business";
import { AUTHOR } from "@/lib/author";
import "../blog.css";
import "./quandoo-sedia.css";

const canonical = "https://www.abagenziaweb.it/blog/quandoo-chiude-alternativa-sedia";
const officialSource = "https://www.quandoo.it/important-update";
const offerSubject = encodeURIComponent("Richiesta offerta passaggio da Quandoo a Sedia");
const offerBody = encodeURIComponent(
  "Buongiorno AB Web Agency,\n\nutilizzo Quandoo e vorrei richiedere l’offerta dedicata per passare a Sedia: configurazione iniziale della sala gratuita e 10% di sconto sul gestionale per i primi 12 mesi.\n\nRistorante:\nCittà:\nTelefono:\n\nPosso fornire la documentazione che dimostra l’utilizzo di Quandoo."
);
const sediaSubject = encodeURIComponent("Richiesta informazioni su Sedia");
const sediaBody = encodeURIComponent(
  "Buongiorno AB Web Agency,\n\nvorrei aggiungere il mio ristorante a Sedia e ricevere maggiori informazioni.\n\nRistorante:\nCittà:\nTelefono:"
);
const demoBody = encodeURIComponent(
  "Buongiorno AB Web Agency,\n\nvorrei richiedere una dimostrazione di Sedia per il mio ristorante.\n\nRistorante:\nCittà:\nTelefono:"
);
const offerHref = `mailto:ab.agenziaweb@gmail.com?subject=${offerSubject}&body=${offerBody}`;
const sediaHref = `mailto:ab.agenziaweb@gmail.com?subject=${sediaSubject}&body=${sediaBody}`;
const demoHref = `mailto:ab.agenziaweb@gmail.com?subject=${encodeURIComponent("Richiesta dimostrazione Sedia")}&body=${demoBody}`;

export const metadata: Metadata = {
  title: "Quandoo chiude: Sedia è l’alternativa",
  description:
    "Quandoo interromperà le prenotazioni il 30 settembre 2026. Scopri Sedia, il gestionale per prenotazioni, sala, tavoli e clienti.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "it_IT",
    url: canonical,
    title: "Quandoo chiude: Sedia è l’alternativa | AB Web Agency",
    description:
      "Prepara il passaggio da Quandoo senza interrompere le prenotazioni: scopri Sedia e il supporto diretto di AB Web Agency.",
    publishedTime: "2026-07-29T09:00:00+02:00",
    modifiedTime: "2026-07-29T09:00:00+02:00",
    authors: ["AB Web Agency"],
    images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: "Quandoo interrompe le prenotazioni: scopri Sedia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quandoo chiude: Sedia è l’alternativa | AB Web Agency",
    description: "Come preparare il passaggio a un nuovo gestionale prima del 30 settembre 2026.",
    images: [`${canonical}/opengraph-image`],
  },
};

const faqItems = [
  ["Quando termina il servizio di prenotazione di Quandoo?", "Il 30 settembre 2026 è l’ultimo giorno per effettuare una nuova prenotazione su Quandoo ed è anche l’ultima data di ristorazione selezionabile."],
  ["Cosa succede dal 1° ottobre 2026?", "Terminano tutti i servizi Quandoo destinati ai clienti. Sito e app potrebbero restare temporaneamente consultabili in forma statica, ma non sarà possibile prenotare, riscattare punti o gestire l’account."],
  ["Le prenotazioni già effettuate restano valide?", "Sì. Quandoo precisa che le prenotazioni esistenti con data successiva al 30 settembre restano valide e che i dettagli saranno comunicati al ristorante. Per eventuali modifiche sarà necessario contattare direttamente il locale."],
  ["Cos’è Sedia?", "Sedia è un gestionale operativo per ristoranti che riunisce prenotazioni, mappa della sala, tavoli, rubrica clienti, disponibilità e report in un unico ambiente."],
  ["Sedia può essere inserito nel sito del ristorante?", "Sì. Il widget di prenotazione può essere integrato nel sito del locale e personalizzato nei colori, nei testi, nel logo e nelle regole di prenotazione."],
  ["Come si configura la sala?", "La sala viene riprodotta con un editor visuale: tavoli trascinabili e ridimensionabili, capienze e combinazioni per i gruppi. AB Web Agency segue la configurazione iniziale."],
  ["Quanto tempo serve per iniziare?", "Dipende dal numero di sale, dalle regole di servizio e dal sito esistente. Dopo l’analisi iniziale, AB Web Agency definisce un piano di attivazione e test senza promettere tempi standard non adatti a ogni locale."],
  ["Come posso richiedere una dimostrazione?", "Usa una delle CTA presenti nella pagina: il messaggio e l’oggetto dell’e-mail saranno già compilati per identificare subito la richiesta relativa a Sedia."],
] as const;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Quandoo chiude: Sedia è l’alternativa per il tuo ristorante",
  description: "Quandoo interromperà le prenotazioni il 30 settembre 2026. Guida al passaggio verso Sedia.",
  image: `${canonical}/opengraph-image`,
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
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
                <h1>Quandoo chiude: Sedia è l’alternativa per il tuo ristorante</h1>
                <p className="qs-lead">Quandoo ha annunciato la cessazione graduale dei propri servizi. Il 30 settembre 2026 sarà l’ultimo giorno per effettuare nuove prenotazioni: preparare ora il passaggio evita di interrompere il flusso online del tuo locale.</p>
                <div className="qs-byline"><time dateTime="2026-07-29">29 luglio 2026</time><span>·</span><span>12 minuti di lettura</span></div>
                <div className="qs-actions"><a className="button qs-primary" href={sediaHref}>Aggiungi il tuo ristorante a Sedia <span aria-hidden>→</span></a><a className="qs-text-link" href="#come-funziona">Scopri come funziona <span aria-hidden>↓</span></a></div>
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
              <a href="#date">Le date di Quandoo</a><a href="#muoversi-ora">Perché muoversi ora</a><a href="#sedia">Cos’è Sedia</a><a href="#confronto">Il confronto</a><a href="#passaggio">Come avviene il passaggio</a><a href="#faq">Domande frequenti</a>
            </aside>

            <div className="qs-content">
              <section className="qs-intro" data-reveal>
                <p>Non è corretto dire semplicemente che “Quandoo chiude il 30 settembre”. La piattaforma segue una dismissione in più fasi: il 30 settembre termina la possibilità di effettuare nuove prenotazioni; dal 1° ottobre cessano i servizi destinati ai clienti; sito, app e infrastruttura saranno disattivati definitivamente il 31 dicembre 2026.</p>
                <p>Per un ristorante, la questione non è soltanto scegliere un software alternativo a Quandoo. Significa ricostruire per tempo il percorso completo: sala, disponibilità, widget sul sito, link su Google e social, formazione del personale e verifica del nuovo flusso.</p>
              </section>

              <section id="date" className="qs-section qs-animate-timeline" data-reveal>
                <p className="qs-kicker">La timeline ufficiale</p>
                <h2>Cosa succederà a Quandoo</h2>
                <p>Quandoo descrive una cessazione pianificata e ordinata. Queste sono le date da usare come riferimento, senza sovrapporre la fine delle prenotazioni alla chiusura definitiva.</p>
                <ol className="qs-timeline">
                  <li><time dateTime="2026-03-24">24 marzo 2026</time><div><h3>Annuncio ufficiale</h3><p>Quandoo comunica l’avvio del processo di cessazione. La piattaforma resta disponibile durante la fase di transizione.</p></div></li>
                  <li><time dateTime="2026-09-30">30 settembre 2026</time><div><h3>Ultimo giorno per nuove prenotazioni</h3><p>È l’ultimo giorno per creare una nuova prenotazione e l’ultima data di ristorazione selezionabile sulla piattaforma.</p></div></li>
                  <li><time dateTime="2026-10-01">1° ottobre 2026</time><div><h3>Fine dei servizi al pubblico</h3><p>Non saranno più possibili prenotazioni, riscatto dei punti o attività sull’account. Sito e app potranno rimanere temporaneamente in forma statica.</p></div></li>
                  <li><time dateTime="2026-12-31">31 dicembre 2026</time><div><h3>Spegnimento definitivo</h3><p>Il sito, l’app e tutta l’infrastruttura Quandoo rimanente saranno disattivati in modo permanente.</p></div></li>
                </ol>
                <p className="qs-source">Fonte: <a href={officialSource} target="_blank" rel="noreferrer">“An Important Update on Quandoo Services” — Quandoo <span aria-hidden>↗</span></a></p>
              </section>

              <section id="muoversi-ora" className="qs-section qs-animate-cards" data-reveal>
                <p className="qs-kicker">Preparare, non rincorrere</p>
                <h2>Perché il ristorante deve muoversi ora</h2>
                <p>Aspettare gli ultimi giorni concentra troppi cambiamenti nello stesso momento. Una transizione preparata consente invece di verificare il nuovo sistema mentre il canale attuale è ancora disponibile.</p>
                <div className="qs-risk-grid">
                  {[
                    ["Continuità delle prenotazioni", "Sostituire e testare il widget prima della scadenza riduce il rischio di lasciare un pulsante non funzionante sul sito."],
                    ["Sala e personale", "Configurare tavoli, capienze, servizi e regole richiede un controllo reale insieme a chi userà il gestionale ogni giorno."],
                    ["Link e canali", "Sito, Google Business Profile e profili social devono indirizzare tutti verso il nuovo percorso di prenotazione."],
                    ["Dati disponibili", "Conviene verificare per tempo quali dati possono essere esportati da Quandoo. Sedia non promette oggi un’importazione massiva automatica."],
                  ].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
                </div>
              </section>

              <section className="qs-offer qs-animate-offer" aria-labelledby="quandoo-offer-title" data-reveal>
                <div className="qs-offer-badge">Offerta passaggio da Quandoo</div>
                <div className="qs-offer-grid">
                  <div><p className="qs-kicker">Transizione assistita</p><h2 id="quandoo-offer-title">Passa da Quandoo a Sedia con la sala già pronta.</h2><p>La priorità è entrare nel nuovo sistema senza interruzioni: AB Web Agency ti affianca nella configurazione iniziale della sala, nel controllo del widget e nei test con il personale.</p></div>
                  <div className="qs-offer-card"><span>Configurazione iniziale della sala</span><strong>Gratuita</strong><hr /><span>Gestionale Sedia</span><strong>10% di sconto per i primi 12 mesi</strong><a className="button qs-offer-button" href={offerHref}>Richiedi l’offerta Quandoo <span aria-hidden>→</span></a></div>
                </div>
                <p className="qs-offer-note">Offerta valida per richieste inviate entro il 30 settembre 2026, riservata ai ristoranti che possono dimostrare di aver utilizzato Quandoo. Non cumulabile con altre promozioni.</p>
              </section>

              <section id="sedia" className="qs-section qs-animate-features" data-reveal>
                <p className="qs-kicker">Il lavoro della sala, in un unico posto</p>
                <h2>Sedia è progettato intorno alla sala reale del ristorante</h2>
                <p>Quando arriva una prenotazione, il team può visualizzarla nel calendario, associarla al tavolo più adatto e controllare la disponibilità del servizio. La mappa grafica riproduce la sala del locale: i tavoli possono essere trascinati, ridimensionati, configurati nelle capienze e combinati per gruppi numerosi.</p>
                <div className="qs-feature-list">
                  <article><span>01</span><div><h3>Prenotazioni e tavoli</h3><p>Calendario, conferma automatica o su richiesta, associazione ai tavoli, cancellazioni, no-show e provenienza della prenotazione rendono più leggibile ogni servizio.</p></div></article>
                  <article><span>02</span><div><h3>Clienti che non restano anonimi</h3><p>La rubrica conserva storico delle visite, note, preferenze e consensi. Filtri e segmenti aiutano a ritrovare le informazioni utili senza dipendere dalla memoria di chi risponde.</p></div></article>
                  <article><span>03</span><div><h3>Widget diretto sul sito</h3><p>Colori, testi, logo, lingua e regole sono personalizzabili. Il widget può essere inserito nel sito del ristorante e non prevede commissioni per singola prenotazione.</p></div></article>
                  <article><span>04</span><div><h3>Report, export e più locali</h3><p>I piani superiori includono report, statistiche, filtri, export e gestione di più ristoranti dallo stesso account, con livelli di accesso per proprietario, amministratore e staff.</p></div></article>
                </div>
              </section>

              <section className="qs-operational" data-reveal>
                <div><p className="qs-kicker">Non una semplice demo grafica</p><h2>Un gestionale già operativo</h2></div>
                <p>Sedia è già un gestionale operativo: il progetto include flussi utilizzabili per prenotazioni, tavoli, disponibilità, clienti, widget e report. Alcune funzioni variano in base al piano; l’importazione massiva da altri strumenti è ancora in valutazione e non viene presentata come disponibile.</p>
              </section>

              <section id="confronto" className="qs-section qs-animate-table" data-reveal>
                <p className="qs-kicker">Confronto trasparente</p>
                <h2>Sedia e Quandoo: cosa cambia per il ristorante</h2>
                <p>Il confronto si limita a informazioni verificabili. Le caratteristiche di Quandoo riportate qui provengono dalla comunicazione ufficiale sulla cessazione; per Sedia, dal prodotto e dai piani pubblicati.</p>
                <div className="qs-table-wrap" role="region" aria-label="Confronto tra Sedia e Quandoo" tabIndex={0}>
                  <table>
                    <thead><tr><th scope="col">Aspetto</th><th scope="col">Quandoo</th><th scope="col">Sedia</th></tr></thead>
                    <tbody>
                      <tr><th scope="row">Continuità dopo settembre</th><td><span className="qs-dash" aria-hidden>—</span> Nuove prenotazioni non disponibili dal 1° ottobre</td><td><span className="qs-check" aria-hidden>✓</span> Sistema alternativo attivabile prima della scadenza</td></tr>
                      <tr><th scope="row">Mappa grafica della sala</th><td><span className="qs-dash" aria-hidden>—</span> Non usata nel confronto: dato non necessario alla comunicazione di chiusura</td><td><span className="qs-check" aria-hidden>✓</span> Editor visuale con tavoli, capienze e combinazioni</td></tr>
                      <tr><th scope="row">Widget sul sito</th><td><span className="qs-dash" aria-hidden>—</span> Servizi al pubblico terminano dal 1° ottobre 2026</td><td><span className="qs-check" aria-hidden>✓</span> Widget personalizzabile e integrabile nel sito</td></tr>
                      <tr><th scope="row">Clienti e storico</th><td><span className="qs-dash" aria-hidden>—</span> Non confrontato per evitare claim non verificati</td><td><span className="qs-check" aria-hidden>✓</span> Rubrica, storico visite, preferenze e consensi</td></tr>
                      <tr><th scope="row">Commissioni</th><td><span className="qs-dash" aria-hidden>—</span> Condizioni del contratto del singolo ristorante</td><td><span className="qs-check" aria-hidden>✓</span> Nessuna commissione per prenotazione</td></tr>
                      <tr><th scope="row">Prezzo</th><td><span className="qs-dash" aria-hidden>—</span> Non confrontato: dipende dal contratto in essere</td><td><span className="qs-check" aria-hidden>✓</span> Piani pubblicati da 45, 75 e 120 € al mese</td></tr>
                      <tr><th scope="row">Supporto al passaggio</th><td><span className="qs-dash" aria-hidden>—</span> Supporto relativo alla dismissione</td><td><span className="qs-check" aria-hidden>✓</span> Attivazione seguita direttamente da AB Web Agency</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="qs-table-note">I prezzi indicati sono quelli rilevati nel prodotto Sedia al 29 luglio 2026. L’offerta Quandoo applica il 10% di sconto al piano scelto per i primi 12 mesi, secondo le condizioni riportate in questa pagina.</p>
              </section>

              <section id="come-funziona" className="qs-section" data-reveal>
                <p className="qs-kicker">Nella pratica</p>
                <h2>Una giornata di servizio con Sedia</h2>
                <p>Le prenotazioni online entrano nel gestionale insieme a quelle inserite manualmente dal personale. Prima del servizio, il team controlla disponibilità e richieste; sulla mappa assegna i tavoli e valuta eventuali combinazioni. Dopo la visita, storico, note ed eventuali no-show restano collegati al cliente.</p>
              </section>

              <section id="passaggio" className="qs-section qs-animate-steps" data-reveal>
                <p className="qs-kicker">Passaggio guidato</p>
                <h2>Come avviene il passaggio a Sedia</h2>
                <ol className="qs-steps">
                  <li><span>1</span><div><h3>Analisi del ristorante</h3><p>Sale, servizi, capienze, regole e canali attuali vengono messi a fuoco insieme.</p></div></li>
                  <li><span>2</span><div><h3>Configurazione della sala</h3><p>AB Web Agency riproduce tavoli e combinazioni e verifica la configurazione con il team.</p></div></li>
                  <li><span>3</span><div><h3>Installazione del widget</h3><p>Il nuovo flusso viene integrato nel sito; link e punti di accesso vengono aggiornati.</p></div></li>
                  <li><span>4</span><div><h3>Test e avvio operativo</h3><p>Si prova il percorso completo prima del passaggio, con supporto diretto nelle verifiche.</p></div></li>
                </ol>
                <aside className="qs-honesty"><strong>Nota sulla migrazione dei dati</strong><p>Sedia non dispone oggi di un’importazione massiva automatica da Quandoo. AB Web Agency può aiutarti a verificare i dati disponibili e a pianificare il passaggio, senza promettere trasferimenti non supportati dal prodotto.</p></aside>
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
              <div className="qs-final-main"><p className="qs-kicker">Il momento giusto è prima della scadenza</p><h2>Non aspettare il 30 settembre per cambiare gestionale</h2><p>Configura oggi Sedia e verifica il nuovo sistema prima che Quandoo interrompa le prenotazioni.</p><div className="qs-actions"><a className="button qs-final-primary" href={sediaHref}>Aggiungi il tuo ristorante a Sedia <span aria-hidden>→</span></a><a className="button qs-final-secondary" href={demoHref}>Richiedi una dimostrazione</a></div><Link className="qs-text-link" href="/servizi#gestionale">Sedia tra i servizi di AB Web Agency <span aria-hidden>→</span></Link></div>
              <div className="qs-final-offer"><span className="qs-offer-badge">Offerta passaggio da Quandoo</span><h3>Sala configurata, passaggio seguito da vicino.</h3><p>Configurazione iniziale gratuita e 10% di sconto sul gestionale per i primi 12 mesi.</p><a className="button qs-offer-button" href={offerHref}>Richiedi l’offerta Quandoo <span aria-hidden>→</span></a><small>Richieste entro il 30/09/2026 · prova dell’utilizzo di Quandoo richiesta · non cumulabile.</small></div>
            </div>
          </section>
        </article>
      </main>
      <a className="qs-mobile-sticky" href={offerHref}>Richiedi l’offerta Quandoo <span aria-hidden>→</span></a>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
