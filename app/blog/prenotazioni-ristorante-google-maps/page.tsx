import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import "../blog.css";

const canonical = "https://www.abagenziaweb.it/blog/prenotazioni-ristorante-google-maps";
export const metadata: Metadata = {
  title: "Prenotazioni ristorante da Google: guida pratica",
  description: "Come aggiungere e controllare il link di prenotazione del ristorante su Google Search e Maps, scegliere il link preferito ed evitare percorsi interrotti.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "it_IT",
    title: "Prenotazioni ristorante da Google: guida pratica | AB Web Agency",
    description: "Dal Profilo dell’attività al widget: costruisci un percorso di prenotazione chiaro.",
    url: canonical,
    publishedTime: "2026-07-29T09:00:00+02:00",
    authors: ["AB Web Agency"],
    images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: "Prenotazioni ristorante da Google: guida a link e profilo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prenotazioni ristorante da Google: guida pratica | AB Web Agency",
    description: "Dal Profilo dell’attività al widget: costruisci un percorso di prenotazione chiaro.",
    images: [`${canonical}/opengraph-image`],
  },
};

export default function GoogleBookingsArticle() {
  return <BlogArticle currentSlug="prenotazioni-ristorante-google-maps" category="Google per ristoranti" title="Prenotazioni ristorante da Google: guida a link e profilo" intro="Una persona trova il locale su Google Maps, controlla foto, orari e menu e decide di prenotare. Se il collegamento è assente, porta al servizio sbagliato o richiede troppi passaggi, quella decisione può fermarsi a pochi secondi dal tavolo." date="29 luglio 2026" readingTime="8 minuti"
    sections={[
      { id: "cosa-consente-google", title: "Cosa consente Google a un ristorante", content: <><p>Il Profilo dell’attività può mostrare collegamenti che permettono alle persone di compiere azioni direttamente da Google Search e Maps. Per i ristoranti, Google documenta la possibilità di gestire prenotazioni, liste d’attesa, menu e ordini.</p><p>Per le prenotazioni esistono due percorsi distinti: utilizzare un provider supportato oppure aggiungere un proprio link. Google permette inoltre di indicare come <strong>preferito</strong> uno dei collegamenti presenti. Questo non significa che ogni profilo mostrerà la stessa interfaccia: disponibilità e funzioni possono variare per paese, categoria e provider.</p><div className="editorial-callout"><strong>Il punto strategico:</strong> il pulsante non è il sistema di prenotazione. È l’ingresso. La pagina o il widget a cui conduce devono essere veloci, comprensibili e aggiornati.</div></> },
      { id: "aggiungere-link", title: "Come aggiungere il link di prenotazione", content: <><p>Google indica di accedere al Profilo dell’attività da Search o Maps, aprire la sezione relativa alle prenotazioni e aggiungere l’URL. Se sono presenti più collegamenti, è possibile selezionare quello preferito.</p><ol><li>Apri il Profilo dell’attività con l’account che lo gestisce.</li><li>Individua la sezione <strong>Prenotazioni</strong> o i collegamenti dell’attività.</li><li>Inserisci l’URL completo e pubblico del percorso di prenotazione.</li><li>Imposta come preferito il collegamento che vuoi proporre per primo.</li><li>Controlla il risultato da smartphone e da una sessione non autenticata.</li></ol><p>Le etichette dell’interfaccia possono cambiare. La documentazione Google resta quindi il riferimento operativo più affidabile rispetto a screenshot trovati in guide datate.</p></> },
      { id: "requisiti-link", title: "Perché il link deve essere tecnicamente solido", content: <><p>Google verifica i collegamenti forniti nel Profilo. Le sue linee guida richiedono URL validi e accessibili ai crawler automatici; un link irraggiungibile o malformato può non essere accettato o essere rimosso.</p><ul className="editorial-checklist"><li>✓ Usa HTTPS e una pagina raggiungibile senza login.</li><li>✓ Evita reindirizzamenti inutili o catene tra più domini.</li><li>✓ Porta direttamente alla prenotazione del locale corretto.</li><li>✓ Verifica che il widget funzioni su schermi piccoli.</li><li>✓ Mantieni orari e disponibilità coerenti con il gestionale.</li></ul></> },
      { id: "provider-terzi", title: "Quando compaiono link di provider terzi", content: <><p>Google spiega che alcuni collegamenti possono essere aggiunti automaticamente da provider che dichiarano una relazione autorizzata con l’attività. Se un vecchio sistema non è più quello desiderato, la rimozione può richiedere un intervento del provider stesso.</p><p>Per questo, dopo un cambio di gestionale non basta sostituire il widget sul sito. Bisogna controllare anche Google, social, campagne, directory e ogni pulsante salvato in precedenza. È esattamente il tipo di verifica necessario nel <Link href="/blog/quandoo-chiude-alternativa-sedia">passaggio da Quandoo a un nuovo sistema</Link>.</p></> },
      { id: "misurazione", title: "Come capire se Google genera prenotazioni", content: <><p>Il numero di clic da solo non racconta tutto. Il percorso ideale collega la provenienza della visita alla prenotazione confermata. Google segnala che i dati di performance disponibili possono differire tra Reserve with Google e link personalizzati.</p><p>Nel gestionale conviene distinguere almeno le fonti “Google”, “sito”, “telefono” e “inserimento manuale”. In questo modo il ristorante può osservare quali canali portano prenotazioni reali, senza attribuire automaticamente ogni risultato all’ultimo strumento visualizzato.</p></> },
      { id: "controllo-finale", title: "Checklist dopo la pubblicazione", content: <><ul className="editorial-checklist"><li>Il link apre il ristorante corretto?</li><li>Data, persone e orario sono utilizzabili senza errori?</li><li>La conferma arriva al cliente?</li><li>La prenotazione compare nel gestionale e nella sala?</li><li>Il personale riconosce la provenienza “Google”?</li><li>Il vecchio provider è stato rimosso dove necessario?</li></ul><p>Ripeti il controllo dopo modifiche al sito, al dominio o al provider. Un percorso funzionante oggi non è automaticamente garantito per sempre.</p></> },
    ]}
    sources={[
      { label: "Google Business Profile Help — Set up bookings through a provider", url: "https://support.google.com/business/answer/7475773?hl=it", note: "Possibilità di utilizzare un provider o aggiungere un proprio link di prenotazione." },
      { label: "Google Business Profile Help — Manage your local business links", url: "https://support.google.com/business/answer/6218037?hl=it", note: "Aggiunta, preferenza e gestione dei collegamenti dell’attività." },
      { label: "Google Business Profile Help — Business links policies", url: "https://support.google.com/business/answer/13769188?hl=it", note: "Requisiti di validità, pertinenza e accessibilità dei link." },
    ]} />;
}
