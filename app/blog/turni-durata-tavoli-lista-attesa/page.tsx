import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import { articleMetadata } from "@/lib/blog-metadata";
import { faqPageSchema } from "@/lib/schema";
import "../blog.css";

const slug = "turni-durata-tavoli-lista-attesa";
const title = "Turni, durata dei tavoli e lista d’attesa";
export const metadata = articleMetadata({
  slug,
  title,
  description: "Come impostare turni, durata dei tavoli e lista d’attesa per evitare overbooking e tavoli vuoti, con regole semplici da verificare sul servizio reale.",
  ogDescription: "Turni, durata dei tavoli e lista d’attesa: regole semplici per una sala che non va in overbooking.",
});

const faqItems = [
  { question: "Quanto deve durare un tavolo?", answer: "Non esiste una durata valida per tutti. Dipende dal tipo di servizio, dal menù e dalla sala. Parti dai tempi osservati nel tuo locale per due settimane e aggiusta le durate in base a ciò che succede davvero." },
  { question: "Conviene una lista d’attesa in un ristorante piccolo?", answer: "Dipende dalla frequenza delle serate piene. Se le cancellazioni dell’ultimo minuto sono frequenti, una regola chiara evita di perdere il tavolo liberato. Se la sala è raramente piena, una procedura semplice basta." },
  { question: "Come gestisco una lista d’attesa senza una procedura complessa?", answer: "Decidi chi chiama, entro quanto tempo puoi tenere un tavolo libero e cosa succede se il cliente non risponde. Scrivi la regola, comunicala al personale di sala e rispettala in modo uniforme." },
] as const;

export default function TurniArticle() {
  return (
    <>
      <BlogArticle
        currentSlug={slug}
        category="Gestione prenotazioni"
        title={title}
        intro="Un turno ben impostato dice al gestionale quando si può prenotare, per quanto tempo un tavolo resta occupato e cosa fare quando la sala è piena. Se queste regole sono sbagliate si producono overbooking o tavoli vuoti. La risposta sta in poche regole chiare, verificate sul servizio reale e non lasciate alla memoria di chi risponde."
        date="6 ottobre 2026"
        readingTime="9 minuti"
        summary={[
          "Un turno è una fascia con regole proprie: orari, capienza e tavoli disponibili.",
          "La durata del tavolo deve dipendere dal tipo di servizio, non da un valore unico per tutti i giorni.",
          "La lista d’attesa funziona solo se una regola chiara dice chi chiama, entro quanto e cosa succede se non risponde.",
          "Una verifica settimanale tra previsto e servito permette di correggere le impostazioni.",
        ]}
        sections={[
          { id: "cos-e-un-turno", title: "Cos’è un turno e perché conta", content: <><p>Un turno è una fascia di servizio con regole sue: l’orario di inizio e di fine, i tavoli disponibili, la capienza che il locale è disposto ad accettare e la durata da assegnare ai tavoli. Pranzo e cena, feriali e festivi, possono avere turni diversi.</p><p>Quando i turni sono impostati in modo generico, il gestionale mostra disponibilità che la sala non può sostenere. Il problema non è il software: è la regola che gli è stata data.</p></> },
          { id: "durata-tavolo", title: "Durata del tavolo: non un numero unico", content: <><p>Una durata uguale per tutti i servizi è una scorciatoia che produce errori. Un pranzo di lavoro, una cena con menù lungo e un gruppo numeroso non occupano il tavolo per lo stesso tempo. Conviene definire la durata per tipo di servizio, cioè per fascia e per tipo di esigenza, e controllarla.</p><p>Per impostarla in modo sensato, osservate per due settimane quanto dura davvero ogni tipo di servizio, senza tenere il tempo a ogni tavolo: basta notare, a fine servizio, dove la sala ha rallentato.</p></> },
          { id: "capienza-turno", title: "Capienza del turno e tavoli realmente liberi", content: <><p>La capienza di un turno non coincide con la somma dei posti in sala. Alcuni tavoli possono essere occupati dal personale, altri possono essere bloccati per un evento o per una combinazione, altri ancora possono essere in una zona che in quel turno non si usa.</p><p>Una regola utile è dichiarare la capienza effettiva del turno, non quella teorica della sala. È la differenza tra un sistema che accetta prenotazioni e una sala che riesce a servirle.</p></> },
          { id: "lista-attesa", title: "Lista d’attesa: regole prima del servizio", content: <><p>Una lista d’attesa è utile solo se il tavolo liberato viene riassegnato in tempo. Servono tre regole, scritte prima della serata piena:</p><ul className="editorial-checklist"><li><strong>Chi chiama:</strong> una persona precisa del turno, non chiunque passi vicino al telefono.</li><li><strong>Entro quanto:</strong> per quanto tempo il tavolo resta riservato dopo la chiamata.</li><li><strong>Se non risponde:</strong> il tavolo passa alla persona successiva in lista, senza discussioni.</li></ul><p>Le cancellazioni e le assenze, con le regole di conferma, sono trattate nella guida su <Link href="/blog/ridurre-no-show-ristorante">come ridurre i no-show senza irrigidire l’esperienza</Link>.</p></> },
          { id: "verifica-settimanale", title: "Verifica sul servizio reale", content: <><p>Ogni settimana, confrontate il previsto con il servito: quante persone erano previste per turno, quante si sono presentate, quali tavoli sono rimasti vuoti e quali hanno generato attesa. Basta un foglio con poche righe.</p><p>Le differenze ricorrenti dicono dove correggere: una durata troppo lunga, una capienza ottimistica, un turno che in realtà si sovrappone a un altro.</p></> },
          { id: "errori-frequenti", title: "Errori frequenti", content: <><ul className="editorial-checklist"><li>Usare una durata unica per tutti i servizi.</li><li>Far coincidere la capienza di un turno con il totale dei tavoli.</li><li>Chiudere un turno senza avvisare chi era in lista d’attesa.</li><li>Cambiare i turni per una festività e dimenticarsi di ripristinarli.</li></ul></> },
          { id: "domande-frequenti", title: "Domande frequenti", content: <div className="editorial-faq">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div> },
        ]}
        sources={[
          { label: "Approfondimento AB Web Agency — Gestionale per ristoranti: quali funzioni deve avere", url: "https://www.abagenziaweb.it/blog/funzioni-gestionale-prenotazioni-ristorante", note: "Funzioni di turni, disponibilità e lista d’attesa come criteri di valutazione del gestionale." },
          { label: "Approfondimento AB Web Agency — Come ridurre i no-show al ristorante", url: "https://www.abagenziaweb.it/blog/ridurre-no-show-ristorante", note: "Regole di conferma e di cancellazione collegate alla lista d’attesa." },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema([...faqItems])) }} />
    </>
  );
}
