import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import { articleMetadata } from "@/lib/blog-metadata";
import { faqPageSchema } from "@/lib/schema";
import "../blog.css";

const slug = "quanto-costa-gestionale-ristorante";
const title = "Gestionale ristoranti: quanto costa davvero";
export const metadata = articleMetadata({
  slug,
  title,
  description: "Canone, commissioni, configurazione e tempo del personale: come calcolare il costo reale di un gestionale di prenotazioni e confrontare le offerte.",
  ogDescription: "Come confrontare canoni, commissioni e costi nascosti di un gestionale per ristoranti.",
});

const faqItems = [
  { question: "Un gestionale senza commissioni è sempre più conveniente?", answer: "Non automaticamente. Conta anche cosa include il canone, quanto tempo richiede la configurazione e se i dati restano esportabili. Un canone più alto con funzioni che usi davvero può costare meno di uno basso che ti obbliga a lavorare con strumenti esterni." },
  { question: "Conviene il pagamento annuale?", answer: "Se il piano è quello che usi davvero, il pagamento annuale riduce il costo mensile equivalente. Sedia lo pubblica con due mesi gratis rispetto al mensile. Verifica prima se esistono vincoli di durata o condizioni di recesso." },
  { question: "Come confronto due offerte in modo corretto?", answer: "Metti le offerte sulla stessa base: stesso periodo, stesse funzioni richieste, stesso numero di sale e utenti, con commissioni e costi di configurazione inclusi. Un confronto sul solo canone mensile raramente è corretto." },
] as const;

export default function QuantoCostaGestionaleArticle() {
  return (
    <>
      <BlogArticle
        currentSlug={slug}
        category="Gestionali per ristoranti"
        title={title}
        intro="Il costo di un gestionale di prenotazioni è la somma di canone, eventuali commissioni per prenotazione, configurazione iniziale e tempo che il personale dedica al sistema. Il canone da solo dice poco: il confronto va fatto sul costo totale in un anno e sulla differenza tra commissioni e canone, usando i propri dati reali."
        date="6 ottobre 2026"
        readingTime="10 minuti"
        summary={[
          "Il costo reale è canone, commissioni, configurazione e tempo del personale, sommati su un anno.",
          "Una commissione per prenotazione può superare il canone: il calcolo va fatto con le prenotazioni che arrivano davvero da portali.",
          "Sedia è pubblicato a 45, 75 e 120 € al mese, senza commissioni per prenotazione; con pagamento annuale ci sono due mesi gratis.",
          "Il confronto va fatto su funzioni, export dei dati e supporto, non solo sul prezzo.",
        ]}
        sections={[
          { id: "voci-del-costo", title: "Le voci che compongono il costo", content: <><ul className="editorial-checklist"><li><strong>Canone:</strong> il costo ricorrente, mensile o annuale.</li><li><strong>Commissioni:</strong> eventuali importi per ogni prenotazione o per coperto, da chiedere esplicitamente.</li><li><strong>Configurazione:</strong> il lavoro di impostazione della sala, dei turni e dei canali.</li><li><strong>Formazione:</strong> il tempo di chi usa il sistema in sala.</li><li><strong>Uscita:</strong> cosa costa, in tempo e denaro, cambiare di nuovo fornitore.</li></ul></> },
          { id: "commissione-o-canone", title: "Commissione o canone: il calcolo", content: <><p>Il confronto più utile è questo: quante prenotazioni arrivano ogni anno da un canale con commissione, moltiplicate per l’importo della commissione, contro il canone annuo di un gestionale senza commissioni. Il risultato dipende esclusivamente dai tuoi numeri, che vanno ricavati dallo storico, non stimati.</p><p>Il calcolo va fatto anche al contrario: se un gestionale senza commissioni costa di più in canone, quanto deve portare in più in prenotazioni dirette per recuperare la differenza?</p></> },
          { id: "cosa-include-il-canone", title: "Cosa deve includere il canone", content: <><p>Due piani dello stesso gestionale possono avere funzioni molto diverse. Prima di confrontare i prezzi, elenca le funzioni che il locale usa davvero: mappa della sala, widget per il sito, rubrica clienti, report, più sale, export dei dati.</p><p>Per Sedia, ad esempio, i piani pubblicati distribuiscono le funzioni così: Base include prenotazioni, mappa della sala, widget e rubrica clienti; Pro aggiunge più sale, report, filtri sui clienti, la scelta tra conferma automatica e conferma su richiesta, e l’export dei dati; Premium aggiunge la gestione di più ristoranti dallo stesso account. La pagina pubblica dei <Link href="/gestionale-ristoranti/prezzi">prezzi di Sedia</Link> riporta il dettaglio completo.</p></> },
          { id: "mensile-annuale", title: "Mensile o annuale", content: <><p>Il pagamento annuale riduce il costo mensile equivalente, a patto che il piano scelto sia quello definitivo. Per Sedia, il pagamento annuale prevede due mesi gratis: il prezzo mensile equivalente è di 37,50 €, 62,50 € e 100 € per i piani Base, Pro e Premium.</p><p>Prima di scegliere, chiedi se esistono vincoli di durata, condizioni di recesso o costi per cambiare piano.</p></> },
          { id: "costi-nascosti", title: "I costi nascosti da chiedere", content: <><ul className="editorial-checklist"><li>Costo di configurazione iniziale e chi la fa.</li><li>Formazione del personale: inclusa o a parte.</li><li>Export dei dati: quali dati, in quale formato, con quali costi.</li><li>Integrazioni con altri strumenti: incluse o su richiesta.</li><li>Assistenza: quali tempi di risposta e chi risponde.</li></ul></> },
          { id: "come-confrontare", title: "Come confrontare tre offerte", content: <><ol><li>Scrivi le funzioni indispensabili, quelle utili e quelle non necessarie.</li><li>Chiedi a ciascun fornitore il listino aggiornato, con commissioni e costi di avvio.</li><li>Calcola il costo annuo di ciascuna offerta con i tuoi numeri reali.</li><li>Verifica la posizione dei dati: come si esportano e cosa succede se cambi fornitore.</li><li>Prova il sistema sul servizio reale, prima della firma, se il fornitore lo consente.</li></ol></> },
          { id: "trasparenza", title: "Una nota di trasparenza", content: <><p>AB Web Agency sviluppa Sedia, e questo articolo è scritto da chi ha un interesse nel prodotto. Per questo riportiamo solo i prezzi pubblici di Sedia e non confrontiamo altri gestionali: i loro listini cambiano, e vanno letti direttamente dai fornitori.</p></> },
          { id: "domande-frequenti", title: "Domande frequenti", content: <div className="editorial-faq">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div> },
        ]}
        sources={[
          { label: "Prezzi di Sedia — pagina pubblica", url: "https://www.abagenziaweb.it/gestionale-ristoranti/prezzi", note: "Piani, prezzi mensili e annuali e funzioni incluse in ciascun piano, come pubblicati da Sedia." },
          { label: "Guida AB Web Agency — Gestionale prenotazioni ristorante: quali funzioni deve avere", url: "https://www.abagenziaweb.it/blog/funzioni-gestionale-prenotazioni-ristorante", note: "Criteri funzionali per valutare cosa serve davvero al locale." },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema([...faqItems])) }} />
    </>
  );
}
