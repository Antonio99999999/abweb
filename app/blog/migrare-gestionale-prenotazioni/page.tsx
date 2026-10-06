import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import { articleMetadata } from "@/lib/blog-metadata";
import { faqPageSchema } from "@/lib/schema";
import "../blog.css";

const slug = "migrare-gestionale-prenotazioni";
const title = "Migrare da un gestionale di prenotazioni senza perdere dati";
export const metadata = articleMetadata({
  slug,
  title,
  description: "Come cambiare gestionale di prenotazioni senza perdere clienti, storico e consensi: inventario, esportazione verificata, convivenza dei sistemi e checklist di passaggio.",
  ogDescription: "Come cambiare gestionale di prenotazioni senza perdere dati, clienti e consensi.",
});

const faqItems = [
  { question: "Posso chiedere al vecchio fornitore un’esportazione dei dati?", answer: "Di norma sì, ma le condizioni cambiano da fornitore a fornitore. Chiedi per iscritto quali dati sono esportabili, in quale formato, con quali campi e entro quali scadenze, prima di disattivare il servizio." },
  { question: "Il nuovo gestionale importa tutto automaticamente?", answer: "Dipende dai formati disponibili e dai dati che il vecchio sistema permette di esportare. Non dare per scontata un’importazione completa: chiedilo al fornitore del nuovo sistema, verifica un campione reale e prevedi di ricostruire a mano ciò che non passa." },
  { question: "Quanto tempo deve durare la convivenza dei due sistemi?", answer: "Il tempo utile è quello necessario a verificare il nuovo sistema sul servizio reale e a correggere gli errori. Più a lungo convivono, più è facile che una prenotazione finisca in un solo sistema e non nell’altro." },
] as const;

export default function MigrareGestionaleArticle() {
  return (
    <>
      <BlogArticle
        currentSlug={slug}
        category="Gestionali per ristoranti"
        title={title}
        intro="Cambiare gestionale senza perdere dati richiede tre cose: un inventario di ciò che esiste, un’esportazione verificata prima di disattivare il vecchio sistema e un periodo breve in cui i due sistemi non si contraddicono. Non è un passaggio da fare in un weekend, e alcune informazioni vanno quasi sempre ricostruite a mano."
        date="6 ottobre 2026"
        readingTime="9 minuti"
        summary={[
          "Prima di cambiare, fai un inventario di clienti, consensi, storico, sala, turni, link e prenotazioni future.",
          "Verifica l’esportazione del vecchio sistema su un campione reale prima di firmare il nuovo contratto.",
          "Scegli una data di passaggio e limita la convivenza dei due sistemi al tempo necessario.",
          "Aggiorna nello stesso giorno sito, Profilo Google e social, altrimenti i clienti usano il canale vecchio.",
        ]}
        sections={[
          { id: "cosa-si-migra", title: "Cosa si migra davvero", content: <><p>Quando si parla di migrazione si pensa ai clienti, ma le voci da portare sono più d’una:</p><ul className="editorial-checklist"><li><strong>Anagrafica clienti</strong>, con storico visite e note.</li><li><strong>Consensi</strong>, cioè le autorizzazioni raccolte, che devono seguire i clienti: sono dati da trattare con la stessa cura.</li><li><strong>Configurazione della sala</strong>: tavoli, capienze, combinazioni, turni.</li><li><strong>Prenotazioni future</strong>, che sono il rischio più concreto.</li><li><strong>Link e canali</strong>: sito, Profilo Google, social, widget.</li></ul></> },
          { id: "inventario", title: "Inventario prima della scelta", content: <><p>Prima di scegliere il nuovo sistema, elenca ciò che il vecchio fa e che qualcuno usa: chi accede, da quale dispositivo, quali report vengono letti, quali link puntano al sistema. Ciò che non è elencato è il primo a sparire durante il passaggio.</p></> },
          { id: "esportazione", title: "Esportazione: verificare, non dare per scontato", content: <><p>Chiedi al vecchio fornitore cosa puoi esportare e in quale formato. Poi scarica un’esportazione di prova e aprila: controlla che i nomi, i numeri di telefono, le date e le note siano leggibili e completi. Conserva una copia fuori dal vecchio sistema.</p><p>Se il vecchio fornitore limita l’export o lo rende disponibile solo per un periodo, questa informazione va considerata prima di firmare il nuovo contratto, non dopo.</p></> },
          { id: "import", title: "Importazione: cosa passa e cosa va rifatto", content: <><p>L’importazione automatica non è sempre disponibile. Quando non c’è, i dati vanno trasferiti con un lavoro controllato: anagrafica e storico se esportabili, prenotazioni future a mano o con l’aiuto del team, configurazione della sala ricostruita nel nuovo sistema.</p><p>Per un approfondimento sul passaggio da un sistema specifico, consulta la guida dedicata a <Link className="text-link" href="/blog/quandoo-chiude-alternativa-sedia">Quandoo e il passaggio ad altri gestionali</Link>.</p></> },
          { id: "convivenza", title: "La finestra di convivenza", content: <><p>Il periodo di convivenza serve a verificare il nuovo sistema sul servizio reale, non a tenere due agende. Durante questo periodo il vecchio sistema va in sola lettura per le prenotazioni nuove, il personale è formato e chi prenota sa dove scrivere.</p></> },
          { id: "dopo-il-passaggio", title: "Dopo il passaggio", content: <><ul className="editorial-checklist"><li>Aggiorna link e widget su sito, Profilo Google e social nello stesso giorno.</li><li>Controlla da telefono che il nuovo percorso di prenotazione funzioni.</li><li>Verifica che le conferme arrivino ai clienti.</li><li>Tieni attivo per un periodo il controllo sul vecchio canale, per intercettare richieste che arrivano ancora lì.</li></ul></> },
          { id: "domande-frequenti", title: "Domande frequenti", content: <div className="editorial-faq">{faqItems.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div> },
        ]}
        sources={[
          { label: "EUR-Lex — Regolamento (UE) 2016/679 (GDPR)", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj", note: "Principi del trattamento dei dati personali, tra cui esattezza, integrità e riservatezza (art. 5), da rispettare durante il trasferimento." },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema([...faqItems])) }} />
    </>
  );
}
