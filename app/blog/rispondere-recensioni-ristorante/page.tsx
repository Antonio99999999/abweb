import { BlogArticle } from "@/components/blog-article";
import { articleMetadata } from "@/lib/blog-metadata";
import { faqPageSchema } from "@/lib/schema";
import "../blog.css";

const slug = "rispondere-recensioni-ristorante";
const title = "Rispondere alle recensioni del ristorante, anche le negative";
export const metadata = articleMetadata({
  slug,
  title,
  description: "Come rispondere alle recensioni Google del ristorante, positive e negative: un metodo breve e non difensivo, cosa evitare e una routine settimanale sostenibile.",
  ogDescription: "Un metodo per rispondere alle recensioni del ristorante, anche quelle negative, senza difendersi.",
});

const faqItems = [
  { question: "Devo rispondere anche alle recensioni che sembrano false?", answer: "Puoi segnalare una recensione a Google seguendo le procedure della piattaforma. Nel frattempo, una risposta breve e neutrale, senza entrare nei dettagli del servizio, è preferibile a un silenzio o a una replica polemica." },
  { question: "Quanto deve essere lunga una risposta?", answer: "Breve. Due o tre frasi bastano nella maggior parte dei casi: un ringraziamento, il riconoscimento del punto sollevato e, se serve, un contatto diretto per approfondire." },
  { question: "Posso offrire uno sconto a chi lascia una recensione positiva?", answer: "No. Le indicazioni di Google vietano di offrire incentivi in cambio di una valutazione positiva. Chiedere una recensione senza condizionarla è consentito." },
] as const;

export default function RispondereRecensioniArticle() {
  return (
    <>
      <BlogArticle
        currentSlug={slug}
        category="Google per ristoranti"
        title={title}
        intro="Rispondere alle recensioni è una delle azioni più semplici e più trascurate di un ristorante. Dal Profilo Google si può rispondere a ogni recensione, e la risposta è letta spesso più della recensione stessa. Una risposta breve, precisa e non difensiva funziona anche con una critica: mostra che il locale ascolta, senza discutere pubblicamente con il cliente."
        date="6 ottobre 2026"
        readingTime="8 minuti"
        summary={[
          "Rispondi a ogni recensione dal Profilo Google, positiva o negativa, con una routine regolare.",
          "Per una recensione negativa: ringrazia, riconosci il punto concreto, invita al contatto diretto per i dettagli.",
          "Non entrare in dettagli personali del cliente e non discutere pubblicamente del servizio.",
          "Non offrire sconti o omaggi in cambio di recensioni positive: Google lo vieta.",
        ]}
        sections={[
          { id: "perche-rispondere", title: "Perché rispondere", content: <><p>Chi legge le recensioni vuole sapere come il locale reagisce ai problemi, non solo quante stelle ha. Una risposta mostra attenzione e fornisce un’informazione in più: se il locale ha cambiato qualcosa, se il problema è stato capito, se esiste un canale per chiarire.</p></> },
          { id: "come-si-risponde", title: "Come si risponde dal Profilo", content: <><p>Per rispondere occorre che l’attività sia verificata nel Profilo Google. Da lì si aprono le recensioni, si seleziona l’icona di risposta accanto a quella che interessa, si scrive il testo e si conferma. La guida di Google sulla gestione delle recensioni descrive la procedura.</p></> },
          { id: "recensione-positiva", title: "Recensione positiva: una riga utile", content: <><p>Una risposta a una recensione positiva ringrazia per il tempo dedicato e richiama un dettaglio concreto dell’esperienza. Evita risposte identiche per tutti: se sono copiate, si notano e perdono valore.</p></> },
          { id: "recensione-negativa", title: "Recensione negativa: riconoscere, spiegare, invitare", content: <><p>Una risposta a una critica ha tre parti:</p><ol><li><strong>Ringraziamento sobrio:</strong> per aver segnalato, senza tono formale o difensivo.</li><li><strong>Riconoscimento del punto concreto:</strong> l’attesa, il piatto, il personale. Non serve dare ragione su tutto, serve capire di cosa si parla.</li><li><strong>Invito al contatto diretto:</strong> per i dettagli, un indirizzo o un numero, senza entrare nel merito del caso in pubblico.</li></ol></> },
          { id: "cosa-non-fare", title: "Cosa non fare", content: <><ul className="editorial-checklist"><li>Non citare dati personali del cliente, nemmeno il nome se non l’ha reso pubblico in quel contesto.</li><li>Non discutere in dettaglio il servizio, né replicare con toni polemici.</li><li>Non rispondere con testi identici a tutte le recensioni negative.</li><li>Non offrire incentivi per recensioni positive: Google vieta di condizionare le valutazioni.</li></ul></> },
          { id: "usare-le-recensioni", title: "Usare le recensioni per capire il servizio", content: <><p>Le recensioni più utili sono quelle che si ripetono: attese a pranzo, tavoli troppo vicini, un orario che il Profilo non riporta. Quando un tema torna più volte, è un’informazione operativa: va verificata sul servizio, con gli stessi metodi usati per turni e durata dei tavoli.</p></> },
          { id: "routine", title: "Una routine sostenibile", content: <><p>La cosa più efficace è una routine breve: una volta alla settimana, quindici minuti per leggere e rispondere alle nuove recensioni, annotando i temi che tornano. Una risposta fatta due settimane dopo perde gran parte del senso.</p></> },
          { id: "domande-frequenti", title: "Domande frequenti", content: <div className="editorial-faq">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div> },
        ]}
        sources={[
          { label: "Google Business Profile Help — Gestisci le recensioni dei clienti", url: "https://support.google.com/business/answer/3474050?hl=it", note: "Procedura per leggere e rispondere alle recensioni dal Profilo dell’attività." },
          { label: "Google Business Profile Help — Suggerimenti per ricevere più recensioni", url: "https://support.google.com/business/answer/3474122?hl=it", note: "Indicazioni su come chiedere recensioni e sulle pratiche vietate, incluse quelle che offrono incentivi." },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema([...faqItems])) }} />
    </>
  );
}
