import { BlogArticle } from "@/components/blog-article";
import { articleMetadata } from "@/lib/blog-metadata";
import { faqPageSchema } from "@/lib/schema";
import "../blog.css";

const slug = "dati-strutturati-ristorante";
const title = "Dati strutturati per ristoranti: cosa dichiarare";
export const metadata = articleMetadata({
  slug,
  title,
  description: "Quali dati strutturati usare per un ristorante, come dichiarare menù, prenotazioni e orari, e perché il markup deve descrivere solo ciò che la pagina mostra davvero.",
  ogDescription: "Dati strutturati per ristoranti: cosa dichiarare, cosa evitare e come verificarli.",
});

const faqItems = [
  { question: "I dati strutturati fanno salire il ristorante nelle ricerche?", answer: "Non è una garanzia. Aiutano i motori di ricerca a capire la pagina e possono abilitare risultati arricchiti, quando sono rispettate le regole di Google. Il posizionamento dipende da molti altri fattori." },
  { question: "Serve uno sviluppatore per aggiungerli?", answer: "Dipende da come è costruito il sito. Su molti sistemi si aggiungono con un template o un plugin, ma va sempre verificato il risultato con gli strumenti di test di Google, perché un errore di sintassi o un dato sbagliato vale come markup non valido." },
  { question: "Posso dichiarare le recensioni nel markup?", answer: "Solo se sono reali, pubbliche e mostrate nella pagina. Google chiede di non marcare recensioni false o contenuti che non sono visibili agli utenti." },
] as const;

export default function DatiStrutturatiArticle() {
  return (
    <>
      <BlogArticle
        currentSlug={slug}
        category="SEO locale per ristoranti"
        title={title}
        intro="I dati strutturati sono un’etichetta leggibile dai motori di ricerca e dai sistemi che rispondono alle domande: dicono che cos’è il locale, dove si trova, cosa offre, se accetta prenotazioni. Vanno scritti solo con informazioni già visibili nella pagina. Se dichiarano qualcosa che il visitatore non vede, Google può ignorarli o applicare un’azione manuale."
        date="6 ottobre 2026"
        readingTime="9 minuti"
        summary={[
          "I dati strutturati descrivono in modo leggibile ciò che la pagina mostra già.",
          "Per un ristorante contano nome, indirizzo, orari, menù, prenotazioni e tipo di cucina.",
          "Non dichiarare nulla che non sia visibile nella pagina: il markup fuorviante può portare ad azioni manuali di Google.",
          "Un controllo periodico evita che sito, markup e Profilo Google dicano cose diverse.",
        ]}
        sections={[
          { id: "a-cosa-servono", title: "A cosa servono", content: <><p>Google documenta i dati strutturati per abilitare alcuni risultati arricchiti. La loro funzione è descrivere la pagina in modo non ambiguo, non promuoverla. Per questo le regole chiedono che il contenuto marcato sia visibile agli utenti della pagina.</p></> },
          { id: "vocabolario", title: "Il vocabolario per un ristorante", content: <><p>Schema.org definisce per i ristoranti il tipo <strong>Restaurant</strong>, sottotipo di <strong>FoodEstablishment</strong>. Le proprietà più utili per un locale sono:</p><ul className="editorial-checklist"><li><strong>name, address, telephone, url:</strong> identità e contatti, già documentati nel Profilo.</li><li><strong>openingHours:</strong> gli orari in cui il locale è aperto.</li><li><strong>servesCuisine:</strong> il tipo di cucina, in testo.</li><li><strong>hasMenu:</strong> il menù, come testo, struttura o URL della pagina del menù.</li><li><strong>acceptsReservations:</strong> se il locale accetta prenotazioni, come valore booleano, testo o URL.</li><li><strong>priceRange:</strong> una fascia di prezzo, solo se è mostrata nella pagina.</li></ul></> },
          { id: "cosa-dichiarare", title: "Cosa dichiarare e cosa no", content: <><p>Dichiara ciò che il visitatore vede: orari scritti in pagina, menù accessibile, prenotazioni possibili davvero. Non dichiarare una fascia di prezzo se non compare, non inserire un punteggio se non viene da una fonte verificabile, non segnare come “accetta prenotazioni” un locale che rimanda a un portale chiuso.</p></> },
          { id: "errori", title: "Errori comuni", content: <><ul className="editorial-checklist"><li>Orari nel markup diversi da quelli nella pagina o nel Profilo.</li><li><code>hasMenu</code> che punta a un PDF datato.</li><li><code>acceptsReservations</code> dichiarato come vero per un canale non più attivo.</li><li>Recensioni inventate o non visibili, che Google considera spam.</li></ul></> },
          { id: "coerenza-profilo", title: "Coerenza con sito e Profilo Google", content: <><p>I dati strutturati non sostituiscono il Profilo Google: lo completano. Nome, indirizzo, telefono e orari devono coincidere. Quando il sito cambia, il markup va aggiornato insieme al testo visibile, non dopo.</p></> },
          { id: "verifica", title: "Come verificare", content: <><p>Dopo ogni modifica, usa gli strumenti di test dei dati strutturati forniti da Google e controlla che il risultato corrisponda alla pagina. Un test superato non basta: va letta anche la pagina, perché le regole riguardano il contenuto visibile.</p></> },
          { id: "dati-e-geo", title: "Dati strutturati e risposte generate", content: <><p>Le risposte generate dai sistemi di intelligenza artificiale attingono da fonti diverse, tra cui pagine e profili. Una descrizione coerente e verificabile aiuta la comprensione, ma non garantisce che il locale venga citato. Per questo l’obiettivo resta la coerenza, non l’ottimizzazione di un risultato.</p></> },
          { id: "domande-frequenti", title: "Domande frequenti", content: <div className="editorial-faq">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div> },
        ]}
        sources={[
          { label: "Schema.org — Restaurant", url: "https://schema.org/Restaurant", note: "Tipo Restaurant, sottotipo di FoodEstablishment, con proprietà come hasMenu e acceptsReservations." },
          { label: "Google Search Central — Norme sui dati strutturati", url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies", note: "Il markup deve descrivere contenuti visibili agli utenti; contenuti fuorvianti possono causare azioni manuali." },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema([...faqItems])) }} />
    </>
  );
}
