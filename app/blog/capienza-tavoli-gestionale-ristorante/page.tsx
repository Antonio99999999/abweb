import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import { articleMetadata } from "@/lib/blog-metadata";
import { faqPageSchema } from "@/lib/schema";
import "../blog.css";

const slug = "capienza-tavoli-gestionale-ristorante";
const title = "Capienza e combinazioni dei tavoli nel gestionale";
export const metadata = articleMetadata({
  slug,
  title,
  description: "Come registrare la capienza reale dei tavoli e le combinazioni per i gruppi in un gestionale di prenotazioni, evitando overbooking e tavoli che non si possono unire.",
  ogDescription: "Capienza reale e combinazioni dei tavoli: come registrarle nel gestionale senza errori.",
});

const faqItems = [
  { question: "Posso avere capienze diverse per turno?", answer: "Dipende dal gestionale. Verifica con il fornitore se il sistema supporta capienze diverse per turno. Se non le supporta, crea regole separate per il turno e documentale, così il personale sa cosa aspettarsi." },
  { question: "Quante combinazioni di tavoli servono?", answer: "Quelle che il locale usa davvero per i gruppi. Più combinazioni ci sono, più il lavoro di sala si complica: è meglio poche combinazioni chiare che molte rarissime." },
  { question: "Cosa succede se cambio la disposizione della sala?", answer: "La mappa va aggiornata nello stesso giorno del cambiamento. Una mappa vecchia produce prenotazioni su tavoli che non esistono più o combinazioni che non si possono fare." },
] as const;

export default function CapienzaTavoliArticle() {
  return (
    <>
      <BlogArticle
        currentSlug={slug}
        category="Gestionali per ristoranti"
        title={title}
        intro="La capienza di un tavolo non è il numero scritto sul tavolo, ma quante persone possono sedere davvero in servizio, con lo spazio necessario. Registrarla bene, insieme alle combinazioni per i gruppi, evita di assegnare un gruppo di sei a un tavolo da quattro o di perdere un tavolo che si potrebbe unire."
        date="6 ottobre 2026"
        readingTime="8 minuti"
        summary={[
          "Registra la capienza reale: le persone che un tavolo accoglie in servizio, non il numero di sedie.",
          "Le combinazioni vanno definite con regole chiare: quali tavoli si uniscono, in quale sala, con quale capienza risultante.",
          "Ogni modifica alla sala va riportata nel gestionale lo stesso giorno e verificata sul servizio.",
        ]}
        sections={[
          { id: "capienza-reale", title: "Capienza reale e numero di sedie", content: <><p>Un tavolo da quattro sedie può accogliere quattro persone a proprio agio, ma non sempre. Passaggi, borse, spazio per il personale, distanza dal tavolo accanto: sono fattori che il numero di sedie non dice. Conviene decidere una regola e scriverla, per esempio “capienza di servizio”, e applicarla a tutti i tavoli.</p></> },
          { id: "inventario-sala", title: "Inventario della sala", content: <><p>Per ogni sala, registra: i tavoli, la forma, la capienza di servizio, la posizione, e se sono fissi o mobili. Tieni a parte i tavoli stagionali, come quelli all’esterno, e segnali quelli che in alcuni turni non si usano.</p></> },
          { id: "combinazioni", title: "Le combinazioni per i gruppi", content: <><p>Una combinazione è un gruppo di tavoli che si uniscono per un numero più alto di persone. Definisci quali combinazioni sono ammesse, in quale ordine, e quale capienza risultante produce ciascuna. Una combinazione che blocca un passaggio o che il personale non riesce a servire non è una combinazione utile.</p><p>Il gestionale deve mostrare la combinazione come una sola disponibilità, altrimenti due prenotazioni possono occupare gli stessi tavoli.</p></> },
          { id: "turni", title: "Capienza e turni", content: <><p>La capienza può cambiare tra pranzo e cena: meno personale, sale chiuse, tavoli esterni non attivi. Se il gestionale non permette capienze diverse per turno, è più prudente dichiarare la capienza del turno più piccolo. Per le regole di durata e di turno, vedi la guida su <Link className="text-link" href="/blog/turni-durata-tavoli-lista-attesa">turni, durata dei tavoli e lista d’attesa</Link>.</p></> },
          { id: "errori", title: "Errori frequenti", content: <><ul className="editorial-checklist"><li>Usare il numero di sedie come capienza.</li><li>Dimenticare i tavoli stagionali o le sale aperte solo in certi giorni.</li><li>Definire combinazioni che il personale non ha mai provato.</li><li>Non aggiornare la mappa dopo una ristrutturazione o uno spostamento di arredi.</li></ul></> },
          { id: "verifica", title: "Come verificare la configurazione", content: <><p>Fai il giro della sala con la mappa in mano e controlla ogni tavolo e ogni combinazione. Poi prova il percorso di prenotazione per i gruppi più comuni: due, quattro, sei persone. Se la disponibilità mostrata non corrisponde alla sala, il problema va risolto prima del servizio successivo.</p><p>Sedia include un editor visuale della sala con tavoli, capienze e combinazioni per i gruppi numerosi. Per capire come si configura nella pratica, la <Link className="text-link" href="/gestionale-ristoranti/widget-prenotazioni">pagina del widget</Link> mostra il percorso del cliente.</p></> },
          { id: "domande-frequenti", title: "Domande frequenti", content: <div className="editorial-faq">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div> },
        ]}
        sources={[
          { label: "Prezzi di Sedia — funzioni dei piani, pagina pubblica", url: "https://www.abagenziaweb.it/gestionale-ristoranti/prezzi", note: "Mappa della sala con editor visuale e combinazioni di tavoli, come elencate nei piani pubblici." },
          { label: "Guida AB Web Agency — Gestionale prenotazioni ristorante: quali funzioni deve avere", url: "https://www.abagenziaweb.it/blog/funzioni-gestionale-prenotazioni-ristorante", note: "Criteri per valutare la gestione della sala e dei tavoli in un gestionale." },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema([...faqItems])) }} />
    </>
  );
}
