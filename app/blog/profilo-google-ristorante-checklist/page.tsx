import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import "../blog.css";

const canonical = "https://www.abagenziaweb.it/blog/profilo-google-ristorante-checklist";
const title = "Profilo Google di un ristorante: la checklist da controllare ogni settimana";
const description = "Orari, categorie, nome e indirizzo, menù, link di prenotazione e recensioni: cosa controllare regolarmente nel Profilo Google di un ristorante, con le indicazioni ufficiali di Google.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "it_IT",
    title: `${title} | AB Web Agency`,
    description: "La checklist settimanale per tenere corretto il Profilo Google di un ristorante.",
    url: canonical,
    publishedTime: "2026-10-06T09:00:00+02:00",
    authors: ["Antonio Pio Brattoli"],
    images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: "Profilo Google di un ristorante: la checklist settimanale" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | AB Web Agency`,
    description: "La checklist settimanale per tenere corretto il Profilo Google di un ristorante.",
    images: [`${canonical}/opengraph-image`],
  },
};

export default function ProfiloGoogleChecklistArticle() {
  return <BlogArticle currentSlug="profilo-google-ristorante-checklist" category="Google per ristoranti" title={title} intro="Creare il Profilo Google è il primo passo. Mantenerlo corretto è quello che conta: orari, categorie, menù e link cambiano con la stagione e con il servizio. Questa checklist indica cosa controllare e perché, con le indicazioni ufficiali di Google." date="6 ottobre 2026" readingTime="8 minuti"
    summary={["Il Profilo Google va controllato con regolarità: orari, categorie, dati di contatto, menù, link e recensioni.", "Gli orari indicano quando i clienti possono sedere e mangiare; festività e chiusure vanno impostate come orari speciali.", "Nome, indirizzo, telefono e sito devono coincidere con il sito e con i social.", "Una checklist settimanale di pochi minuti funziona se diventa una routine fissa."]}
        sections={[
      { id: "perche-tenerlo", title: "Perché il profilo va tenuto, non solo creato", content: <><p>Chi cerca un ristorante su Google vede subito orari, indirizzo, telefono e link per prenotare. Se una di queste informazioni è sbagliata, il cliente se ne accorge sul posto oppure non viene affatto. Il profilo non è una scheda da compilare una volta: è una delle prime cose che una persona legge prima di decidere.</p></> },
      { id: "orari", title: "Orari: quelli in cui si può sedere", content: <><p>Le linee guida di Google chiedono di indicare gli orari in cui l’attività è normalmente aperta al pubblico. Per i ristoranti, Google precisa che si indicano gli orari in cui i clienti possono sedere e mangiare.</p><p>Festività, chiusure temporanee e orari diversi per una settimana particolare vanno impostati come orari speciali o come chiusura, non lasciati al ricordo del personale. Un orario sbagliato è l’errore che produce più richieste inutili.</p></> },
      { id: "categorie", title: "Categorie: descrivere ciò che l’attività è", content: <><p>La categoria principale deve descrivere ciò che l’attività è, non l’elenco di ciò che ha. Google suggerisce di scegliere le categorie più specifiche ma rappresentative, usandone il minimo necessario.</p><p>L’esempio ufficiale è una pizzeria con consegna e asporto: “Pizza a domicilio” e “Pizza da asporto” descrivono meglio di “Ristorante da asporto”. È possibile aggiungere altre categorie secondarie, fino a nove.</p></> },
      { id: "dati-coerenti", title: "Nome, indirizzo, telefono e sito: la stessa informazione ovunque", content: <><p>Il nome deve corrispondere alla segnaletica ufficiale del locale. Indirizzo, telefono e sito devono essere identici a quelli del sito e dei social: differenze anche piccole, come un numero diverso o una via abbreviata, confondono le persone e i sistemi che incrociano le informazioni.</p></> },
      { id: "descrizione-foto-menu", title: "Descrizione, foto e menù", content: <><p>La descrizione ha un limite di 750 caratteri: basta per dire che cosa offre il locale, senza elenchi di parole chiave. Le foto dovrebbero mostrare il locale com’è: sala, piatti, esterno, aggiornate quando cambia qualcosa.</p><p>Il menù si può inserire direttamente nel profilo, con sezioni e prezzi. È un tema a sé, con i suoi compromessi, trattato nell’articolo su <Link href="/blog/menu-digitale-ristorante">PDF, pagina web e QR code per il menù</Link>.</p></> },
      { id: "link-prenotazione", title: "Link di prenotazione e sito", content: <><p>Il link di prenotazione deve essere un indirizzo completo che inizia con https://, e deve aprire il percorso corretto, non genericamente la home del sito. Verificatelo da telefono almeno una volta al mese: un link rotto è una prenotazione persa senza che nessuno se ne accorga.</p><p>Per le regole sui link e sul collegamento al gestionale, la guida dedicata è <Link href="/blog/prenotazioni-ristorante-google-maps">Prenotazioni ristorante da Google: guida a link e profilo</Link>.</p></> },
      { id: "recensioni", title: "Recensioni: rispondere sempre", content: <><p>Google incoraggia a rispondere alle recensioni e non consente di offrire incentivi in cambio di una valutazione positiva. Una risposta breve e non difensiva a ogni recensione è una routine settimanale che richiede pochi minuti, e si fa meglio quando diventa un’abitudine e non un’emergenza.</p></> },
      { id: "checklist-settimanale", title: "La checklist settimanale", content: <><ul className="editorial-checklist"><li><strong>Orari:</strong> corretti per la settimana, con festività e chiusure impostate.</li><li><strong>Categorie:</strong> la principale e le secondarie ancora descrivono ciò che offrite.</li><li><strong>Nome, indirizzo, telefono, sito:</strong> coincidono con sito e social.</li><li><strong>Link di prenotazione:</strong> aperto da telefono, porta al percorso giusto.</li><li><strong>Menù:</strong> stessa data di aggiornamento del menù sul sito.</li><li><strong>Foto:</strong> almeno una recente della sala o dei piatti.</li><li><strong>Recensioni:</strong> nessuna senza risposta.</li></ul><p>Chi gestisce il locale ha poco tempo: la checklist funziona se dura pochi minuti. Se preferite che il sito, il Profilo e le prenotazioni restino allineati senza doverli controllare a mano, possiamo ragionare su questo insieme.</p></> },
    ]}
    sources={[
      { label: "Google Business Profile Help — Linee guida per le informazioni del profilo", url: "https://support.google.com/business/answer/3038177?hl=it", note: "Indicazioni su orari, categorie e contenuti del profilo, con gli esempi ufficiali sulle categorie." },
      { label: "Google Business Profile Help — Modificare le informazioni del profilo", url: "https://support.google.com/business/answer/3039617?hl=en", note: "Campi modificabili del profilo, limite della descrizione e formato dei link." },
      { label: "Google Business Profile Help — Consigli per ottenere più recensioni", url: "https://support.google.com/business/answer/3474122", note: "Indicazioni sulle recensioni e sulle pratiche non consentite, incluse quelle che offrono incentivi." },
    ]} />;
}
