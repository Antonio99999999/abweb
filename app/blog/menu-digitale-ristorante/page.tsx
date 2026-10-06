import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import "../blog.css";

const canonical = "https://www.abagenziaweb.it/blog/menu-digitale-ristorante";
const title = "Menù digitale: PDF, pagina web o QR code?";
const description = "PDF, pagina web e QR code non sono tre alternative: svolgono compiti diversi. Come scegliere la versione principale del menù e come tenere allineate le copie.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "it_IT",
    title: `${title} | AB Web Agency`,
    description: "Come scegliere tra PDF, pagina web e QR code per il menù del ristorante, senza copie che non coincidono.",
    url: canonical,
    publishedTime: "2026-10-06T09:00:00+02:00",
    authors: ["Antonio Pio Brattoli"],
    images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | AB Web Agency`,
    description: "PDF, pagina web o QR code: come scegliere la versione principale del menù.",
    images: [`${canonical}/opengraph-image`],
  },
};

export default function MenuDigitaleArticle() {
  return <BlogArticle currentSlug="menu-digitale-ristorante" category="Menù digitale" title={title} intro="Il menù è tra le informazioni più cercate prima di scegliere un ristorante, eppure spesso è un PDF caricato una volta e dimenticato. Qui si distingue tra PDF, pagina web e QR code, e si propone un modo semplice per tenere allineate le copie." date="6 ottobre 2026" readingTime="8 minuti"
    summary={["PDF, pagina web e QR code svolgono compiti diversi: non sono tre alternative tra cui scegliere.", "La pagina web è la fonte principale del menù: testo leggibile da telefono e aggiornabile in pochi minuti.", "Il PDF resta un’opzione per la stampa; il QR code deve puntare alla versione aggiornata, non a un file datato.", "Il menù va allineato nel Profilo Google: secondo Google le modifiche possono richiedere 24–48 ore per comparire."]}
        sections={[
      { id: "tre-formati", title: "PDF, pagina web e QR code: tre compiti diversi", content: <><p>Quando si parla di menù digitale si mettono insieme tre cose che svolgono compiti diversi. Il PDF è un documento: si scarica, si stampa e ha un’impaginazione fissa. La pagina web è una parte del sito: si legge sullo schermo, si aggiorna in pochi minuti e può essere letta dai motori di ricerca come testo. Il QR code non è un formato, ma solo un modo per arrivare a uno dei due, stampato su un tavolo o su una vetrina.</p><p>La domanda utile non è “PDF o QR?”, ma “quale versione deve essere sempre aggiornata, e quali sono le copie?”.</p></> },
      { id: "limiti-pdf", title: "Dove il PDF crea problemi", content: <><p>Un PDF pesante si apre lentamente da telefono, richiede zoom per leggere i caratteri piccoli e, su molti schermi, costringe a scorrere in orizzontale. Ogni cambio di prezzo significa rifare il file, ricaricarlo e sostituire tutti i link che lo puntano: se uno resta vecchio, il cliente legge un menù superato.</p><p>C’è anche un aspetto legato alla ricerca. Google indica tra i formati che può indicizzare anche i PDF, ma un PDF non è una pagina del sito: non ha la sua navigazione, non porta in modo naturale alla prenotazione e non si adatta allo schermo come una pagina web.</p></> },
      { id: "pagina-web", title: "Come deve essere la versione web", content: <><p>La versione web funziona quando il testo è testo: nomi dei piatti, descrizioni e prezzi scritti in pagina, non dentro un’immagine. Così si legge da telefono, si può cercare con il browser e Google può leggerla. Alcuni criteri pratici:</p><ul className="editorial-checklist"><li><strong>Sezioni con titoli chiari:</strong> antipasti, primi, secondi, dolci, bevande.</li><li><strong>Prezzi e descrizioni come testo</strong>, non come immagine.</li><li><strong>Una nota su allergeni e intolleranze</strong>, concordata con il locale: è un tema a sé, da trattare con attenzione.</li><li><strong>La data dell’ultimo aggiornamento</strong>, così si capisce a colpo d’occhio se il menù è attuale.</li><li><strong>Una pagina leggera da telefono:</strong> velocità e stabilità della pagina incidono sull’esperienza, come spiegano le guide di Google sui Core Web Vitals.</li></ul></> },
      { id: "profilo-google", title: "Il menù nel Profilo Google", content: <><p>Google permette di inserire il menù direttamente nel Profilo dell’attività, con sezioni, voci, descrizioni e prezzi. Secondo la documentazione dell’editor del menu, le modifiche possono richiedere 24–48 ore per comparire su Google Maps e nella Ricerca.</p><p>Il punto critico è la coerenza. Se il menù del Profilo, quello del sito e quello stampato in sala dicono cose diverse, il cliente non sa quale sia quello giusto. Conviene scegliere una fonte principale, di solito la pagina web del sito, e aggiornare il Profilo Google alla stessa data.</p></> },
      { id: "qr-code", title: "QR code: il link giusto, verificato", content: <><p>Un QR code su un tavolo è utile solo se punta alla versione aggiornata. Un QR che porta a un PDF vecchio è peggio di nessun QR: il cliente crede di avere il menù corrente e non lo ha.</p><p>Prima di stamparlo, scansionatelo con un telefono che non usa il Wi-Fi del locale: così verificate che si apra la pagina giusta e che sia leggibile in movimento. Quando cambia il menù, il QR resta lo stesso: cambia la pagina, non il codice stampato.</p></> },
      { id: "scelta-pratica", title: "Una scelta pratica", content: <><p>Per la maggior parte dei ristoranti il percorso più semplice è questo: una pagina web come menù principale, aggiornata quando cambia un piatto; un PDF opzionale per la stampa o per chi vuole salvare il menù; il menù nel Profilo Google, con la stessa data di aggiornamento; un QR code sui tavoli che punta alla pagina web, non al PDF.</p><div className="editorial-callout"><strong>Una regola semplice:</strong> un solo menù è la fonte. Le altre versioni sono copie, e vanno aggiornate nello stesso momento.</div><p>Se state preparando il sito o volete capire come collegare menù, Profilo Google e prenotazioni, possiamo guardare insieme la situazione attuale. Per il Profilo, la checklist settimanale è nell’articolo dedicato a <Link href="/blog/profilo-google-ristorante-checklist">come controllare il Profilo Google di un ristorante</Link>.</p></> },
    ]}
    sources={[
      { label: "Google Search Central — Tipi di file indicizzati da Google", url: "https://developers.google.com/search/docs/crawling-indexing/indexable-file-types", note: "Indica i formati che Google può indicizzare, PDF compresi: il PDF è un file indicizzabile, ma non è una pagina del sito." },
      { label: "Google Business Profile Help — Informazioni sull’editor del menu", url: "https://support.google.com/business/answer/9455840?hl=en", note: "Sezioni, voci, descrizioni, prezzi del menù nel Profilo e tempi di pubblicazione delle modifiche." },
      { label: "Google Search Central — Core Web Vitals e risultati di ricerca", url: "https://developers.google.com/search/docs/appearance/core-web-vitals", note: "Metriche di velocità, reattività e stabilità che incidono sull’esperienza da telefono, anche per il menù." },
    ]} />;
}
