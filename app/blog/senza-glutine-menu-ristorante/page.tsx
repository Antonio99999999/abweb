import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import { articleMetadata } from "@/lib/blog-metadata";
import { faqPageSchema } from "@/lib/schema";
import "../blog.css";

const slug = "senza-glutine-menu-ristorante";
const title = "Senza glutine al ristorante: cosa scrivere sul menù";
export const metadata = articleMetadata({
  slug,
  title,
  description: "Come comunicare glutine e allergeni sul menù: cosa dicono le regole europee, cosa significa “senza glutine” e come dichiarare il rischio di contaminazione.",
  ogDescription: "Comunicare il glutine sul menù senza promettere ciò che la cucina non può garantire.",
});

const faqItems = [
  { question: "Posso scrivere “senza glutine” su un piatto?", answer: "Solo se la preparazione è gestita in modo da evitare contatti con il glutine e il personale può dimostrarlo. Se la cucina è condivisa con farine o fritti, usa una formula che dichiari il rischio di contaminazione, invece di una garanzia." },
  { question: "Basta indicare gli ingredienti senza glutine?", answer: "No. Anche un ingrediente naturalmente senza glutine può entrare in contatto con farine, fritture o attrezzature condivise. Per questo la procedura di preparazione conta quanto l’ingrediente." },
  { question: "Chi può dirmi come comunicarlo in modo corretto?", answer: "Per la parte sanitaria e autorizzativa, il riferimento è il servizio di igiene degli alimenti della tua ASL. Per la forma del menù e delle informazioni, un consulente con esperienza nella ristorazione può verificare il testo. Questa guida non è consulenza legale." },
] as const;

export default function SenzaGlutineArticle() {
  return (
    <>
      <BlogArticle
        currentSlug={slug}
        category="Menù e allergeni"
        title={title}
        intro="Scrivere “senza glutine” sul menù è un’informazione che il cliente usa per decidere ciò che può mangiare, non solo un argomento di marketing. La regola pratica è non dichiarare ciò che la cucina non può garantire, indicare con chiarezza gli allergeni e distinguere ciò che è preparato in modo dedicato da ciò che non lo è. Le regole sugli allergeni e le soglie per il “senza glutine” sono fissate da regolamenti europei."
        date="6 ottobre 2026"
        readingTime="9 minuti"
        summary={[
          "Il glutine è tra i 14 allergeni che il ristorante deve rendere noti ai clienti, secondo il regolamento europeo.",
          "Per gli alimenti confezionati, “senza glutine” è consentito solo sotto i 20 mg/kg di glutine.",
          "In cucina condivisa, dichiara il rischio di contaminazione invece di promettere un’assenza che non puoi garantire.",
          "Le informazioni devono coincidere tra menù, sito, Profilo Google e personale di sala.",
        ]}
        sections={[
          { id: "regola-europea", title: "Cosa dice la regola europea sugli allergeni", content: <><p>Il regolamento (UE) n. 1169/2011 obbliga a fornire ai consumatori le informazioni sugli allergeni elencati nel suo allegato II, tra cui i cereali contenenti glutine. Per gli alimenti non preconfezionati, come quelli serviti in un ristorante, l’informazione va comunque resa disponibile al cliente, per iscritto o a voce, secondo le modalità previste dalla normativa.</p><p>Quindi il glutine non è un dettaglio opzionale: un cliente celiaco deve poter sapere, prima di ordinare, se un piatto ne contiene.</p></> },
          { id: "senza-glutine-significato", title: "Cosa significa “senza glutine”", content: <><p>Per gli alimenti venduti al consumatore finale, il regolamento di esecuzione (UE) n. 828/2014 consente l’indicazione “senza glutine” solo se il contenuto di glutine non supera i 20 mg/kg. Per “a bassissimo contenuto di glutine” la soglia è 100 mg/kg.</p><p>Questa soglia riguarda gli alimenti confezionati. Nel ristorante, però, la stessa logica si applica: un’affermazione sul piatto deve essere vera e verificabile, altrimenti il cliente si fida di un’informazione che non regge.</p></> },
          { id: "contaminazione", title: "Il rischio di contaminazione va dichiarato", content: <><p>Farine nell’aria, friggitrici condivise, tagliere e pinze usate per più piatti, stesso forno: sono tutte situazioni in cui un piatto naturalmente senza glutine può entrare in contatto con il glutine. Se la cucina non ha procedure dedicate, non può garantire l’assenza.</p><p>Una formula corretta distingue i casi: “preparato con procedure dedicate”, quando lo è davvero; “contiene glutine”, quando lo contiene; “può contenere tracce per contaminazione in cucina”, quando la cucina è condivisa e non c’è una procedura dedicata.</p></> },
          { id: "tre-livelli", title: "Tre livelli di comunicazione", content: <><ul className="editorial-checklist"><li><strong>Piatti preparati con procedure dedicate:</strong> si indica che la preparazione è gestita in modo dedicato, solo se il personale lo applica e lo può spiegare.</li><li><strong>Piatti che contengono glutine:</strong> si indica l’allergene in modo visibile.</li><li><strong>Piatti senza glutine ma prodotti in cucina condivisa:</strong> si indica il rischio di contaminazione, senza formule rassicuranti.</li></ul><p>Le formule esatte vanno verificate con il proprio consulente, perché dipendono dalla struttura della cucina e dalle procedure effettive.</p></> },
          { id: "coerenza-canali", title: "Coerenza tra menù, sito e Profilo Google", content: <><p>La stessa informazione deve comparire uguale sul menù stampato, sul menù digitale e nel Profilo Google. Se il sito dice “senza glutine” e la sala dice “possibile contaminazione”, il cliente non sa quale versione è vera. Per le scelte sul formato del menù, vedi la guida su <Link className="text-link" href="/blog/menu-digitale-ristorante">PDF, pagina web e QR code per il menù</Link>.</p></> },
          { id: "personale", title: "Cosa deve sapere il personale", content: <><p>Chi serve in sala deve poter rispondere alla domanda “è sicuro per un celiaco?” senza improvvisare. Serve una risposta scritta, condivisa con la cucina, che dica cosa è preparato in modo dedicato, cosa no, e quando è meglio non ordinare. Una risposta incerta va sostituita con “non possiamo garantirlo” e un suggerimento alternativo.</p></> },
          { id: "non-consulenza", title: "Un limite necessario", content: <><p>Questa guida spiega come ragionare sul tema e richiama le regole generali. Non sostituisce la verifica delle procedure del tuo locale, né il parere del servizio di igiene degli alimenti della tua ASL o di un consulente.</p></> },
          { id: "domande-frequenti", title: "Domande frequenti", content: <div className="editorial-faq">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div> },
        ]}
        sources={[
          { label: "EUR-Lex — Regolamento (UE) n. 1169/2011, informazioni sugli alimenti ai consumatori", url: "https://eur-lex.europa.eu/eli/reg/2011/1169/oj", note: "Obbligo di informare sugli allergeni dell’allegato II, tra cui i cereali contenenti glutine." },
          { label: "EUR-Lex — Regolamento di esecuzione (UE) n. 828/2014, assenza o presenza ridotta di glutine", url: "https://eur-lex.europa.eu/legal-content/IT/TXT/PDF/?uri=CELEX:32014R0828", note: "Soglie per “senza glutine” (20 mg/kg) e “a bassissimo contenuto di glutine” (100 mg/kg) per gli alimenti venduti al consumatore finale." },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema([...faqItems])) }} />
    </>
  );
}
