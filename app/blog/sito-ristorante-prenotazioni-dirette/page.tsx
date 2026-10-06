import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import "../blog.css";

const canonical = "https://www.abagenziaweb.it/blog/sito-ristorante-prenotazioni-dirette";
export const metadata: Metadata = {
  title: "Sito per ristorante che genera prenotazioni",
  description: "Come progettare un sito per ristorante che accompagna dalla ricerca alla prenotazione: contenuti, menu, mobile, CTA, widget e misurazione.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "it_IT",
    title: "Sito per ristorante: come trasformarlo in un canale di prenotazione | AB Web Agency",
    description: "Una guida pratica a contenuti, struttura e percorso di prenotazione.",
    url: canonical,
    publishedTime: "2026-07-29T09:00:00+02:00",
    authors: ["AB Web Agency"],
    images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: "Sito per ristorante: come trasformarlo in un canale di prenotazione" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sito per ristorante: come trasformarlo in un canale di prenotazione | AB Web Agency",
    description: "Una guida pratica a contenuti, struttura e percorso di prenotazione.",
    images: [`${canonical}/opengraph-image`],
  },
};

export default function RestaurantWebsiteArticle() {
  return <BlogArticle currentSlug="sito-ristorante-prenotazioni-dirette" category="Siti web per ristoranti" title="Sito per ristorante: come trasformarlo in un canale di prenotazione" intro="Un sito non genera prenotazioni perché è elegante. Le genera quando risponde rapidamente alle domande che precedono la scelta e rende semplice passare dall’interesse alla conferma del tavolo." date="29 luglio 2026" readingTime="10 minuti"
    summary={["Un sito genera prenotazioni quando risponde alle domande che precedono la scelta.", "Il percorso va progettato da mobile, dalla home al widget, senza passaggi inutili.", "Il widget deve sembrare parte del servizio, con i colori e i testi del locale.", "Misurare il percorso, non solo le visite, indica dove il cliente si ferma."]}
        sections={[
      { id: "intento", title: "Partire dall’intenzione di chi visita", content: <><p>Chi arriva sul sito può voler controllare menu, prezzi, atmosfera, posizione, accessibilità, orari o disponibilità. Se queste informazioni sono nascoste dietro animazioni, PDF illeggibili o testi generici, la pagina chiede fiducia prima di averla meritata.</p><p>Google Search raccomanda contenuti utili e pensati prima di tutto per le persone. Applicato a un ristorante significa descrivere esperienza, cucina e informazioni pratiche con competenza diretta, senza produrre pagine soltanto per inserire parole chiave.</p></> },
      { id: "homepage", title: "Cosa deve chiarire la homepage", content: <><ul className="editorial-checklist"><li><strong>Che ristorante è:</strong> proposta, stile e motivo concreto per sceglierlo.</li><li><strong>Dove si trova:</strong> città, zona e indicazioni utili.</li><li><strong>Quando è aperto:</strong> orari coerenti con Google.</li><li><strong>Cosa si mangia:</strong> menu accessibile, aggiornato e leggibile.</li><li><strong>Come si prenota:</strong> CTA visibile senza dover cercare nel footer.</li></ul><p>Una fotografia può trasmettere atmosfera; non deve sostituire le informazioni necessarie alla decisione.</p></> },
      { id: "mobile", title: "Progettare prima il percorso mobile", content: <><p>Molte visite locali avvengono mentre la persona è già in movimento o sta confrontando più opzioni. Il percorso mobile deve quindi evitare campi piccoli, calendari difficili da usare e widget che escono dallo schermo.</p><p>La CTA può restare disponibile durante lo scorrimento, purché non copra contenuti o controlli. Pulsanti, focus da tastiera, contrasto e messaggi di errore sono parte dell’esperienza, non rifiniture successive.</p></> },
      { id: "widget", title: "Il widget deve sembrare parte del servizio", content: <><p>Il passaggio dal sito al sistema di prenotazione è un momento delicato. Un cambio improvviso di dominio, grafica o lingua può far dubitare di essere ancora nel percorso ufficiale del ristorante.</p><p>Un widget integrabile come quello di Sedia permette di mantenere il flusso vicino all’identità del locale e collegare la richiesta alla disponibilità configurata. Il vantaggio operativo non è soltanto “avere un pulsante”: è evitare che sito e sala raccontino due disponibilità differenti.</p><p>Se il traffico arriva da Google, consulta anche la guida ai <Link href="/blog/prenotazioni-ristorante-google-maps">link di prenotazione su Search e Maps</Link>.</p></> },
      { id: "fiducia", title: "Ridurre le domande prima della prenotazione", content: <><p>Informazioni su allergeni, accessibilità, bambini, animali, parcheggio, dehors, gruppi e modalità di cancellazione possono evitare contatti ripetitivi e aspettative sbagliate. Non tutte devono stare nella prima schermata: devono però essere trovabili.</p><p>Recensioni e riconoscimenti possono sostenere la fiducia, ma non vanno usati come decorazione indistinta. È più utile collegare testimonianze specifiche agli aspetti dell’esperienza che aiutano a comprendere.</p></> },
      { id: "misurare", title: "Misurare il percorso, non soltanto le visite", content: <><p>Le visualizzazioni del sito non coincidono con tavoli occupati. Conviene osservare la sequenza: arrivo, apertura del percorso di prenotazione, ricerca di disponibilità, conferma ed eventuale cancellazione.</p><p>La misurazione deve rispettare privacy e scelte dell’utente. Inoltre, i dati quantitativi vanno letti insieme alle domande ricevute dal personale: se molti chiamano per informazioni già presenti, il problema potrebbe essere la visibilità del contenuto, non la sua assenza.</p></> },
      { id: "audit", title: "Audit rapido in dieci minuti", content: <><ol><li>Apri il sito da smartphone usando la rete mobile.</li><li>Trova menu, indirizzo e orari senza usare il menu di navigazione.</li><li>Avvia una prenotazione per quattro persone.</li><li>Controlla leggibilità e messaggi di errore.</li><li>Interrompi il percorso e verifica come tornare indietro.</li><li>Confronta orari e link con il Profilo Google.</li><li>Ripeti il test con una persona che non conosce il sito.</li></ol><div className="editorial-callout"><strong>La domanda finale:</strong> il percorso sembra semplice perché lo conosci, oppure perché è davvero chiaro per chi arriva la prima volta?</div></> },
    ]}
    sources={[
      { label: "Google Search Central — Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=it", note: "Principi ufficiali per contenuti utili, affidabili e orientati alle persone." },
      { label: "Google Business Profile Help — Profilo dell’attività per ristoranti", url: "https://support.google.com/business/answer/14189260?hl=it", note: "Informazioni, menu, foto, prenotazioni e metriche disponibili per i ristoranti." },
      { label: "W3C — Web Content Accessibility Guidelines 2.2", url: "https://www.w3.org/TR/WCAG22/", note: "Riferimento tecnico per accessibilità, focus, controlli e interazioni." },
    ]} />;
}
