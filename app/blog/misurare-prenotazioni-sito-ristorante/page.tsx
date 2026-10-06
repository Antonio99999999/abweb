import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import { articleMetadata } from "@/lib/blog-metadata";
import { faqPageSchema } from "@/lib/schema";
import "../blog.css";

const slug = "misurare-prenotazioni-sito-ristorante";
const title = "Misurare le prenotazioni che arrivano dal sito";
export const metadata = articleMetadata({
  slug,
  title,
  description: "Visita, click sul pulsante di prenotazione e prenotazione confermata: come misurare i tre passaggi con Google Analytics 4 e Search Console, senza dati gonfiati.",
  ogDescription: "Come capire quante prenotazioni arrivano davvero dal sito, senza confondere visite e prenotazioni.",
});

const faqItems = [
  { question: "Serve Google Analytics per misurare le prenotazioni?", answer: "Serve uno strumento che registri visite e azioni sul sito. Google Analytics 4 permette di segnare i click più importanti come eventi chiave. Per le prenotazioni confermate, però, la fonte più affidabile è il gestionale, perché registra ciò che è stato davvero accettato." },
  { question: "Search Console dice quante prenotazioni arrivano dal sito?", answer: "No. Search Console mostra clic e impressioni dalla Ricerca Google, cioè quante volte il sito è apparso e quante persone ci hanno cliccato. Non registra prenotazioni: per collegarle serve un altro strumento." },
  { question: "Quanto tempo serve prima di leggere un dato utile?", answer: "Dipende dal traffico. Conviene confrontare periodi comparabili, per esempio due settimane con due settimane della stessa stagione, invece di giudicare su pochi giorni." },
] as const;

export default function MisurarePrenotazioniArticle() {
  return (
    <>
      <BlogArticle
        currentSlug={slug}
        category="Prenotazioni dirette"
        title={title}
        intro="Per capire se il sito porta prenotazioni bisogna misurare tre passaggi: la visita, il click sul pulsante di prenotazione e la prenotazione confermata. Google Analytics 4 registra i primi due come eventi chiave, Search Console mostra cosa succede prima della visita, e il gestionale è la fonte più affidabile per le prenotazioni confermate."
        date="6 ottobre 2026"
        readingTime="9 minuti"
        summary={[
          "Misura tre passaggi: la visita alla pagina di prenotazione, il click sul pulsante, la prenotazione confermata.",
          "In Google Analytics 4 il click e la conferma si segnano come eventi chiave, da leggere insieme alla provenienza.",
          "Search Console mostra le ricerche che portano al sito, ma non registra prenotazioni.",
          "Il dato più utile per il locale è quello del gestionale: chi ha prenotato e da quale canale.",
        ]}
        sections={[
          { id: "visite-non-bastano", title: "Perché le visite non bastano", content: <><p>Un sito può avere molte visite e poche prenotazioni, oppure poche visite e molte prenotazioni confermate. Le visite da sole dicono quanto il sito è visto, non quanto è utile. Per giudicare il canale serve collegare la visita all’azione successiva e, alla fine, alla prenotazione accettata.</p></> },
          { id: "tre-passaggi", title: "I tre passaggi da misurare", content: <><ul className="editorial-checklist"><li><strong>Visita alla pagina di prenotazione:</strong> la persona arriva dove può prenotare, non solo sulla home.</li><li><strong>Click sul pulsante di prenotazione:</strong> l’intenzione concreta, misurabile con un evento.</li><li><strong>Prenotazione confermata:</strong> il dato che conta, registrato nel gestionale o nel sistema di prenotazione.</li></ul><p>Google Analytics definisce un evento chiave come un evento che misura un’azione particolarmente importante per il successo dell’attività. È la categoria giusta per il click e, quando possibile, per la conferma.</p></> },
          { id: "eventi-chiave", title: "Eventi chiave in Google Analytics 4", content: <><p>Il click sul pulsante di prenotazione va registrato come evento e poi contrassegnato come evento chiave. Se il sito è costruito con un gestore di tag, la configurazione si fa lì; altrimenti va affidata a chi sviluppa il sito, perché richiede un intervento tecnico sul pulsante.</p><p>Una volta attivo, l’evento compare nei report e può essere importato come conversione in Google Ads, se si usa anche la pubblicità. La guida ufficiale di Google spiega la differenza tra evento chiave e conversione.</p></> },
          { id: "search-console", title: "Search Console: cosa vedi prima della visita", content: <><p>Il report sul rendimento di Search Console mostra clic, impressioni, posizione media e CTR per query e per pagina. È utile per capire quali pagine ricevono interesse dalla ricerca, per esempio la pagina del menù o quella della prenotazione.</p><p>Il limite è che il report descrive la Ricerca Google, non il percorso fino alla prenotazione. Per collegarlo alle prenotazioni servono gli eventi di Analytics e il gestionale.</p></> },
          { id: "gestionale-chiude-il-cerchio", title: "Il gestionale chiude il cerchio", content: <><p>Il gestionale è il punto in cui una richiesta diventa prenotazione. Se registra la provenienza (sito, Google, telefono, WhatsApp, portale), il confronto con Analytics diventa concreto. Un campo facoltativo “Come ci hai trovato?” nel modulo è un modo semplice per raccogliere il dato, a patto di informare la persona nella privacy policy.</p></> },
          { id: "report-semplice", title: "Un report mensile semplice", content: <><p>Non serve una dashboard complicata. Bastano poche righe da confrontare ogni mese con lo stesso mese dell’anno precedente, quando i dati esistono, oppure con il periodo precedente della stessa stagione:</p><ul className="editorial-checklist"><li>Visite alla pagina di prenotazione.</li><li>Click sul pulsante di prenotazione.</li><li>Prenotazioni confermate, con la provenienza.</li><li>Prenotazioni annullate o non presentate, se il gestionale le registra.</li></ul></> },
          { id: "errori-comuni", title: "Errori comuni", content: <><ul className="editorial-checklist"><li>Contare i click sui link social come prenotazioni confermate.</li><li>Confrontare una settimana di alta stagione con una di bassa stagione.</li><li>Misurare solo le visite alla home, senza il percorso di prenotazione.</li><li>Cambiare il pulsante o il widget senza annotare la modifica, e perdere il confronto.</li></ul></> },
          { id: "domande-frequenti", title: "Domande frequenti", content: <div className="editorial-faq">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div> },
        ]}
        sources={[
          { label: "Google Analytics Help — Confronto tra conversioni ed eventi chiave", url: "https://support.google.com/analytics/answer/13965727?hl=it", note: "Definizione di evento chiave e di conversione in Google Analytics 4." },
          { label: "Google Search Console Help — Definizione di impressioni, posizione e clic", url: "https://support.google.com/webmasters/answer/7042828?hl=it", note: "Significato dei dati di clic, impressioni e posizione nei report di Search Console." },
          { label: "Google Search Console Help — Qual è il rendimento del tuo sito su Google?", url: "https://support.google.com/webmasters/answer/10268906?hl=it", note: "Come leggere i report sul rendimento del sito nella Ricerca Google." },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema([...faqItems])) }} />
      <aside className="shell" style={{ paddingBlock: 40 }}><p>Approfondimenti collegati: <Link className="text-link" href="/blog/sito-ristorante-prenotazioni-dirette">sito per ristorante come canale di prenotazione</Link> e <Link className="text-link" href="/blog/aumentare-prenotazioni-dirette-ristorante">come aumentare le prenotazioni dirette</Link>.</p></aside>
    </>
  );
}
