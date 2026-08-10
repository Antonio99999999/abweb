import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import { faqPageSchema } from "@/lib/schema";
import "../blog.css";

const canonical = "https://www.abagenziaweb.it/blog/ridurre-no-show-ristorante";
export const metadata: Metadata = {
  title: "Ridurre i no-show al ristorante: guida pratica",
  description: "Come ridurre i no-show al ristorante: cosa sono, perché accadono, conferme, lista d'attesa, politiche di cancellazione e caparra spiegate con prudenza.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "it_IT",
    title: "Ridurre i no-show al ristorante: guida pratica | AB Web Agency",
    description: "Un metodo equilibrato per proteggere la sala senza peggiorare l'esperienza.",
    url: canonical,
    publishedTime: "2026-07-29T09:00:00+02:00",
    modifiedTime: "2026-08-04T09:00:00+02:00",
    authors: ["Antonio Pio Brattoli"],
    images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: "Come ridurre i no-show al ristorante senza irrigidire l'esperienza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridurre i no-show al ristorante: guida pratica | AB Web Agency",
    description: "Un metodo equilibrato per proteggere la sala senza peggiorare l'esperienza.",
    images: [`${canonical}/opengraph-image`],
  },
};

const faqItems = [
  { question: "Cos'è un no-show al ristorante?", answer: "È una prenotazione confermata per cui il cliente non si presenta, senza avvisare né cancellare. È diverso da una cancellazione tempestiva o tardiva, che restano comunicate: distinguerle aiuta a capire davvero il problema, non solo a contarlo." },
  { question: "Quali sono le conseguenze di un no-show?", answer: "Un tavolo tenuto libero che resta vuoto incide su personale, acquisti e coperti effettivamente serviti, ed è spesso una richiesta rifiutata a qualcun altro nello stesso momento. L'impatto reale varia molto in base a giorno, fascia oraria e dimensione del gruppo: per questo conviene misurarlo prima di intervenire, come descritto in questa guida." },
  { question: "Conviene chiedere sempre una caparra?", answer: "No. Le politiche economiche non sono una soluzione universale: possono avere senso per gruppi numerosi, eventi o disponibilità molto limitata, ma vanno comunicate con chiarezza prima della conferma e richiedono anche una verifica legale, fiscale e contrattuale specifica per il locale." },
  { question: "Come aiuta la lista d'attesa a recuperare i no-show?", answer: "Quando un tavolo si libera per una mancata presentazione, poterlo riassegnare subito a chi era in lista d'attesa evita che quel posto resti vuoto per il resto del servizio, senza dover gestire la sostituzione a voce durante il momento più intenso." },
  { question: "Un gestionale può aiutare a prevenire i no-show?", answer: "Sì, tenendo insieme conferme, promemoria, storico e stato del tavolo nello stesso flusso. Non elimina il problema da solo: resta una procedura di sala, supportata da uno strumento coerente." },
] as const;

const faqSchema = faqPageSchema(faqItems.map(({ question, answer }) => ({ question, answer })));

export default function NoShowArticle() {
  return (
    <>
      <BlogArticle currentSlug="ridurre-no-show-ristorante" category="Gestione prenotazioni" title="Ridurre i no-show al ristorante senza irrigidire l’esperienza" intro="Un no-show al ristorante non è soltanto una sedia libera: un tavolo prenotato e rimasto vuoto può influire su personale, acquisti, distribuzione dei coperti e richieste rifiutate. La risposta, però, non deve essere una regola punitiva applicata indistintamente." date="29 luglio 2026" readingTime="11 minuti"
        sections={[
          { id: "cosa-significa", title: "Cosa significa no-show e perché accade", content: <><p>Un <strong>no-show</strong> è una prenotazione confermata per cui il cliente non si presenta e non avvisa. È un problema diverso dalla cancellazione: chi cancella, anche tardi, lascia comunque al locale la possibilità di reagire.</p><p>Le cause più comuni non sono quasi mai malafede: dimenticanza, prenotazioni multiple per la stessa serata come “riserva”, imprevisti dell’ultimo minuto, o semplicemente una conferma così vaga da non essere percepita come un impegno reale. Capire quale di queste situazioni prevale nel proprio locale cambia quale intervento ha senso adottare.</p></> },
          { id: "misurare", title: "Prima di intervenire, misura il problema", content: <><p>Le ricerche sulla gestione delle prenotazioni mostrano perché le assenze rendono più difficile stimare la domanda e allocare la capacità. Ma ogni ristorante ha un comportamento diverso: giorno, fascia oraria, dimensione del gruppo, anticipo della prenotazione e occasione possono cambiare il rischio.</p><p>Registra almeno prenotazioni confermate, cancellazioni, no-show, ritardi e coperti coinvolti. Evita di usare soltanto il numero di tavoli: una mancata prenotazione da due persone e un gruppo da dieci hanno conseguenze operative differenti.</p><div className="editorial-callout"><strong>Non partire dalla sanzione.</strong> Parti dalla domanda: quando, con quali gruppi e attraverso quali canali si verificano davvero le assenze?</div></> },
          { id: "conferma-chiara", title: "Rendi la conferma impossibile da fraintendere", content: <><p>Il cliente deve sapere subito che la prenotazione è stata ricevuta, per quale giorno, a quale ora e per quante persone. Una conferma incompleta aumenta telefonate e ambiguità.</p><ul className="editorial-checklist"><li>Data e orario scritti senza abbreviazioni ambigue.</li><li>Numero di persone chiaramente visibile.</li><li>Indirizzo e contatto del ristorante.</li><li>Istruzioni semplici per modificare o cancellare.</li><li>Condizioni speciali comunicate prima della conferma.</li></ul><p>Un gestionale come <Link href="/gestionale-ristoranti">Sedia</Link> permette di mantenere prenotazione, cliente, tavolo ed esito nello stesso flusso operativo.</p></> },
          { id: "promemoria", title: "Usa promemoria proporzionati", content: <><p>Un promemoria ha valore quando permette al cliente di agire. Il messaggio dovrebbe rendere immediata la conferma, la modifica o la cancellazione, evitando una sequenza insistente di comunicazioni.</p><p>Per prenotazioni molto anticipate può avere senso un contatto vicino alla data. Per richieste inserite poche ore prima, un ulteriore messaggio può essere inutile. La frequenza va scelta sulla base dei dati del locale e del consenso o della base giuridica appropriata per il canale utilizzato.</p></> },
          { id: "cancellazione", title: "Politiche di cancellazione chiare", content: <><p>Distinta dalla caparra, una politica di cancellazione stabilisce entro quanto tempo si può disdire senza conseguenze, come farlo (link, telefono, messaggio) e cosa succede oltre quella finestra. Va comunicata al momento della prenotazione, non scoperta dal cliente in un momento di difficoltà.</p><p>Una politica realistica tiene conto di come lavora davvero il locale: una finestra troppo rigida rispetto alle abitudini dei clienti genera più attriti di quanti no-show eviti.</p></> },
          { id: "politiche", title: "Quando valutare caparra o carta a garanzia", content: <><p>Le politiche economiche non sono una soluzione universale. Possono essere più ragionevoli per menu evento, gruppi numerosi, festività o disponibilità estremamente limitata. Devono essere comunicate prima della conclusione della prenotazione, con importo, termini di cancellazione e modalità di rimborso comprensibili.</p><p>Gli studi sui no-show fees analizzano il compromesso tra protezione della capacità e risposta del cliente. La decisione concreta richiede anche una verifica legale, fiscale e contrattuale applicata al proprio locale: questo articolo non sostituisce tale valutazione.</p></> },
          { id: "lista-attesa", title: "La lista d’attesa come rete di sicurezza", content: <><p>Anche con conferme chiare e promemoria proporzionati, qualche no-show resterà inevitabile. Una lista d’attesa collegata alla sala permette di riassegnare subito il tavolo liberato, invece di scoprirlo vuoto solo quando ormai il servizio è troppo avanti per recuperarlo.</p><p>Perché funzioni, la lista deve essere visibile a chi lavora in sala nello stesso momento in cui il tavolo risulta libero, non su un foglio separato da controllare a memoria. È una delle funzioni che rendono un <Link href="/blog/funzioni-gestionale-prenotazioni-ristorante">gestionale operativo diverso da una semplice agenda</Link>.</p></> },
          { id: "storico", title: "Usa lo storico senza etichettare il cliente", content: <><p>Note e storico servono a prendere decisioni contestuali, non a creare giudizi automatici. Una singola assenza non racconta necessariamente un comportamento abituale. È più utile distinguere cancellazione tempestiva, cancellazione tardiva e mancata presentazione senza contatto.</p><p>I dati personali devono essere pertinenti, aggiornati e conservati per il tempo necessario. Se vengono usati anche per marketing diretto, entrano in gioco obblighi ulteriori: la Commissione europea ricorda, tra l’altro, il diritto di opposizione dell’interessato.</p></> },
          { id: "procedura-sala", title: "Una procedura semplice per la sala", content: <><ol><li>Definisci dopo quanti minuti un tavolo viene considerato in ritardo.</li><li>Stabilisci chi contatta il cliente e con quale canale.</li><li>Registra l’esito in modo uniforme.</li><li>Decidi quando liberare il tavolo per richieste o passanti.</li><li>Rivedi mensilmente dati e regole.</li></ol><p>La procedura deve aiutare chi lavora durante il servizio, non aggiungere interpretazioni proprio nel momento più intenso. Anche il canale da cui arriva la prenotazione conta: una <Link href="/blog/prenotazioni-ristorante-google-maps">prenotazione arrivata da Google</Link> merita la stessa cura di conferma di una arrivata dal sito.</p></> },
          { id: "domande-frequenti", title: "Domande frequenti", content: <div className="editorial-faq">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div> },
        ]}
        sources={[
          { label: "Northwestern University — Restaurant Reservations and No-shows", url: "https://www.kellogg.northwestern.edu/faculty/lariviere/research/ReservationsJul08.pdf", note: "Ricerca sull'effetto delle prenotazioni e delle assenze nella gestione della capacità." },
          { label: "UC Berkeley — Reservation No-show Fees", url: "https://escholarship.org/content/qt5723n7b4/qt5723n7b4.pdf", note: "Analisi accademica delle politiche economiche legate alle mancate presentazioni." },
          { label: "Commissione europea — Dati ricevuti da terzi e marketing", url: "https://commission.europa.eu/law/law-topic/data-protection/rules-business-and-organisations/legal-grounds-processing-data/can-data-received-third-party-be-used-marketing_it", note: "Indicazioni generali su consenso, aggiornamento dei dati e opposizione al marketing diretto." },
        ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
