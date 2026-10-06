import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import { articleMetadata } from "@/lib/blog-metadata";
import { faqPageSchema } from "@/lib/schema";
import "../blog.css";

const slug = "domande-clienti-prima-di-prenotare";
const title = "Le domande dei clienti prima di prenotare";
export const metadata = articleMetadata({
  slug,
  title,
  description: "Quali domande si fanno i clienti prima di prenotare un ristorante, dove scrivere le risposte nel sito e come evitare promesse che il locale non può mantenere.",
  ogDescription: "Le risposte che un cliente cerca prima di prenotare, e dove metterle nel sito.",
});

const faqItems = [
  { question: "Quante domande deve avere una pagina di prenotazione?", answer: "Poche, quelle che il locale riceve davvero. Una pagina piena di risposte che nessuno cerca è rumore. Parti dalle domande raccolte per due settimane tra telefono, WhatsApp e recensioni." },
  { question: "Serve una FAQ separata?", answer: "Non sempre. Spesso basta una risposta accanto al punto del percorso in cui la domanda nasce: l’orario vicino al calendario, la cancellazione vicino al pulsante di conferma." },
  { question: "Cosa scrivo se non so ancora la risposta?", answer: "Scrivi il limite, non una promessa. “Per gruppi oltre una certa dimensione contattaci” è più utile di una risposta generica che poi non si rispetta al telefono." },
] as const;

export default function DomandeClientiArticle() {
  return (
    <>
      <BlogArticle
        currentSlug={slug}
        category="Siti web per ristoranti"
        title={title}
        intro="Prima di prenotare, una persona cerca risposte: posso prenotare per un gruppo numeroso? Serve una caparra? Il locale è accessibile? C’è un menù per chi ha allergie? Se il sito non risponde, il cliente chiama o cerca altrove. La pagina giusta non è una FAQ lunga, ma un insieme di risposte brevi, scritte dove il cliente le cerca e coerenti con ciò che il personale dice al telefono."
        date="6 ottobre 2026"
        readingTime="8 minuti"
        summary={[
          "Le domande più frequenti riguardano orari, gruppi, politiche di cancellazione, accessibilità, allergeni e animali.",
          "Ogni risposta va scritta vicino al punto in cui nasce la domanda, non in una FAQ isolata.",
          "Le risposte devono coincidere con quelle date al telefono, su WhatsApp e nel Profilo Google.",
          "Se una risposta non è certa, dichiara il limite: è più utile di una promessa non mantenuta.",
        ]}
        sections={[
          { id: "raccogliere-domande", title: "Raccogliere le domande reali", content: <><p>Le domande migliori sono quelle che arrivano già. Per due settimane, annota ogni domanda ricevuta da telefono, WhatsApp, e-mail e recensioni, e chiedi al personale di sala quali sono le domande più frequenti al tavolo o all’ingresso.</p><p>Il risultato è una lista breve, concreta, che non dipende da ciò che il sito “dovrebbe” chiarire.</p></> },
          { id: "categorie", title: "Le categorie di domande", content: <><ul className="editorial-checklist"><li><strong>Orari e ultimi ingressi:</strong> cosa succede se si arriva in ritardo, quanto si può restare.</li><li><strong>Gruppi:</strong> da quante persone si chiede di contattare il locale.</li><li><strong>Politiche:</strong> cancellazione, eventuale caparra, modifiche dell’ultimo minuto.</li><li><strong>Accessibilità:</strong> ingresso, sedie, bagni, sale: solo ciò che è verificato.</li><li><strong>Bambini e animali:</strong> cosa è consentito e dove.</li><li><strong>Menù e allergeni:</strong> dove trovare le informazioni e a chi chiedere.</li></ul></> },
          { id: "dove-scrivere", title: "Dove scrivere la risposta", content: <><p>La risposta alla domanda sulla caparra va vicino al pulsante di conferma. Quella sugli allergeni va accanto al menù, con un link al testo completo. L’orario va vicino al calendario, non solo in footer. Una FAQ generale può restare in fondo al sito, ma non deve essere l’unico posto in cui la risposta esiste.</p></> },
          { id: "come-scrivere", title: "Come scrivere una risposta utile", content: <><p>Una buona risposta ha questa struttura: la risposta diretta nella prima frase, le condizioni subito dopo, cosa fare se la situazione non rientra nelle condizioni, a chi scrivere per un caso particolare.</p><p>Per esempio: “Accettiamo prenotazioni fino a sei persone online. Per gruppi più numerosi scrivici o chiamaci, così troviamo la soluzione giusta.” Il testo deve essere lo stesso che il personale ripete al telefono.</p></> },
          { id: "coerenza", title: "Coerenza con il Profilo Google e il gestionale", content: <><p>Le informazioni su orari, indirizzo, telefono e link devono coincidere con il Profilo dell’attività, come indicato nelle linee guida di Google. Le politiche di cancellazione devono essere le stesse mostrate nel widget di prenotazione. Se una regola cambia, va cambiata ovunque nello stesso giorno.</p></> },
          { id: "limiti", title: "Quando una risposta non c’è", content: <><p>Accessibilità, caparre e animali sono temi in cui una promessa sbagliata crea problemi concreti. Prima di scrivere “accessibile” o “ammessi animali”, verifica nella sede reale. Se non è verificato, scrivi ciò che è certo e indica come chiedere il resto.</p><p>Per approfondire il ruolo delle conferme e delle politiche nelle assenze, vedi la guida su <Link className="text-link" href="/blog/ridurre-no-show-ristorante">come ridurre i no-show</Link>.</p></> },
          { id: "domande-frequenti", title: "Domande frequenti", content: <div className="editorial-faq">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div> },
        ]}
        sources={[
          { label: "Google Business Profile Help — Modificare le informazioni del profilo", url: "https://support.google.com/business/answer/3039617?hl=en", note: "Campi del profilo, come orari, descrizione e link, da mantenere coerenti con il sito." },
          { label: "Approfondimento AB Web Agency — Sito per ristorante come canale di prenotazione", url: "https://www.abagenziaweb.it/blog/sito-ristorante-prenotazioni-dirette", note: "Percorso di prenotazione e domande che precedono la scelta, trattati in termini generali." },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema([...faqItems])) }} />
    </>
  );
}
