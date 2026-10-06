import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import "../blog.css";

const canonical = "https://www.abagenziaweb.it/blog/telefono-whatsapp-gestionale-prenotazioni";
const title = "Telefono, WhatsApp o gestionale: come gestire le prenotazioni senza perdere richieste";
const description = "Telefono, WhatsApp e gestionale a confronto: dove si perdono le richieste, come usare WhatsApp senza farne un’agenda e un metodo di una settimana per decidere.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "it_IT",
    title: `${title} | AB Web Agency`,
    description: "Come gestire le prenotazioni tra telefono, WhatsApp e gestionale senza perdere richieste.",
    url: canonical,
    publishedTime: "2026-10-06T09:00:00+02:00",
    authors: ["Antonio Pio Brattoli"],
    images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | AB Web Agency`,
    description: "Telefono, WhatsApp o gestionale: un metodo per decidere senza perdere richieste.",
    images: [`${canonical}/opengraph-image`],
  },
};

export default function TelefonoWhatsappGestionaleArticle() {
  return <BlogArticle currentSlug="telefono-whatsapp-gestionale-prenotazioni" category="Gestione prenotazioni" title={title} intro="La maggior parte dei ristoranti accetta prenotazioni da più canali contemporaneamente. Il problema non è il canale in sé, ma il punto in cui le richieste finiscono. Questa guida confronta telefono, WhatsApp e gestionale e propone un metodo per decidere senza cambiare tutto in una volta." date="6 ottobre 2026" readingTime="9 minuti"
    summary={["Telefono, WhatsApp e gestionale hanno compiti diversi: il problema è il punto in cui finiscono le richieste.", "Le richieste si perdono per mancanza di un registro unico, più che per il canale in sé.", "WhatsApp funziona come canale d’ingresso; la prenotazione va registrata nel sistema che la conferma.", "Per decidere, osserva una settimana: da dove arrivano le richieste, quante restano senza risposta, quante sono doppie."]}
        sections={[
      { id: "tre-canali", title: "Tre canali, tre compiti", content: <><p><strong>Il telefono</strong> è immediato e personale, ma funziona solo mentre qualcuno risponde. Nelle ore di servizio una chiamata senza risposta è una prenotazione persa, e la memoria di chi risponde diventa l’unico registro.</p><p><strong>WhatsApp</strong> è il canale che i clienti usano più naturalmente: una domanda rapida, una conferma, una foto del menù. Il limite è che le conversazioni restano sul telefono di chi le riceve, più persone possono rispondere senza sapere cosa ha già detto l’altra, e non c’è una visione della sala.</p><p><strong>Il gestionale</strong> mette prenotazioni, disponibilità e clienti in un unico posto. Richiede una configurazione iniziale e un po’ di disciplina: ogni prenotazione va inserita, anche quella ricevuta al telefono o su WhatsApp.</p></> },
      { id: "dove-si-perdono", title: "Dove si perdono le richieste", content: <><p>I problemi più comuni non dipendono dal canale ma dal fatto che non esiste un registro unico:</p><ul className="editorial-checklist"><li>Messaggi non letti nelle ore di servizio, quando la priorità è la sala.</li><li>Due risposte diverse alla stessa richiesta, date da persone diverse.</li><li>Un cliente prenota su WhatsApp e poi chiama per cambiare l’orario: la modifica non arriva a chi conferma.</li><li>Un tavolo assegnato due volte, perché la disponibilità era solo nella testa di chi l’ha assegnato.</li></ul></> },
      { id: "whatsapp-canale", title: "WhatsApp come canale, non come agenda", content: <><p>WhatsApp si può usare bene se lo si tratta come canale d’ingresso e non come agenda. Un numero dedicato al locale, con un orario chiaro in cui si risponde; ogni richiesta confermata registrata nel sistema; le conferme usate come strumento per ridurre le assenze, non come elenco delle prenotazioni.</p><p>Come gestire le assenze, con le conferme e le regole di cancellazione, è trattato nella guida su <Link href="/blog/ridurre-no-show-ristorante">come ridurre i no-show senza irrigidire l’esperienza</Link>.</p></> },
      { id: "quando-il-gestionale", title: "Quando il gestionale cambia il lavoro", content: <><p>Un gestionale è utile quando risponde a domande che, al telefono o su WhatsApp, richiedono memoria: quali tavoli sono liberi alle 20:30, chi ha già prenotato più volte, come si unisce un gruppo numeroso, cosa succede quando un cliente cancella.</p><p>Le funzioni che contano sono descritte nella guida su <Link href="/blog/funzioni-gestionale-prenotazioni-ristorante">quali funzioni deve avere un gestionale di prenotazioni</Link>. Sedia, il gestionale che sviluppiamo in AB Web Agency, è costruito intorno alla mappa della sala. È una delle opzioni da valutare, non l’unica.</p></> },
      { id: "metodo-settimana", title: "Un metodo per decidere: una settimana di osservazione", content: <><p>Prima di scegliere, osservate il locale per una settimana. Annotate da quali canali arrivano le richieste, a che ora, e ogni volta che una richiesta è rimasta senza risposta o è stata gestita due volte.</p><p>Il risultato dice più di un confronto teorico. Se le perdite arrivano nelle ore di servizio, il problema è organizzativo: serve chiarire chi risponde e quando. Se arrivano dai doppi inserimenti, serve un registro unico.</p><div className="editorial-callout"><strong>Domande da porsi prima di scegliere:</strong> chi risponde alle richieste nelle ore di servizio? Quante persone possono modificare una prenotazione? Dove si trova lo storico di un cliente abituale? Cosa succede a una richiesta se chi la gestisce è assente?</div></> },
      { id: "passare-senza-duplicare", title: "Passare senza tenere due agende", content: <><p>Il passaggio più sicuro è graduale: prima si decide il registro unico, poi si spostano i canali. Il sito diventa il punto d’ingresso, WhatsApp resta per conferme e domande, il gestionale registra tutto.</p><p>Evitate di tenere due agende in parallelo più del necessario: il doppio inserimento è una delle fonti più comuni di errori, e chi se ne accorge per primo è il cliente.</p><p>Questo articolo è una guida operativa e non riporta dati di mercato: le indicazioni sono da verificare sulla vostra situazione reale.</p></> },
    ]}
    sources={[
      { label: "Google Business Profile Help — Requisiti dei link di prenotazione", url: "https://support.google.com/business/answer/13769188?hl=it", note: "Requisiti di validità e accessibilità dei link di prenotazione collegati al Profilo, da controllare quando si cambia canale." },
    ]} />;
}
