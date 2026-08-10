export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  published: string;
  publishedLabel: string;
  readingTime: string;
  accent: "orange" | "green" | "lime" | "navy";
  // Data reale dell'ultimo aggiornamento sostanziale dei contenuti (non della sola correzione di
  // refusi). Opzionale: se assente, sitemap e dati strutturati usano "published" come oggi.
  updated?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "quandoo-chiude-alternativa-sedia",
    category: "Gestionali per ristoranti",
    title: "Quandoo chiude: Sedia è l’alternativa per il tuo ristorante",
    excerpt: "Le date ufficiali della cessazione, cosa deve preparare il locale e come passare a un nuovo sistema senza interrompere le prenotazioni.",
    published: "2026-07-29",
    publishedLabel: "29 luglio 2026",
    readingTime: "12 min",
    accent: "lime",
  },
  {
    slug: "prenotazioni-ristorante-google-maps",
    category: "Google per ristoranti",
    title: "Prenotazioni ristorante da Google: guida a link e profilo",
    excerpt: "Come collegare il percorso di prenotazione al Profilo dell’attività, scegliere il link preferito e controllare che funzioni davvero.",
    published: "2026-07-29",
    publishedLabel: "29 luglio 2026",
    updated: "2026-08-04",
    readingTime: "11 min",
    accent: "green",
  },
  {
    slug: "ridurre-no-show-ristorante",
    category: "Gestione prenotazioni",
    title: "Come ridurre i no-show al ristorante senza irrigidire l’esperienza",
    excerpt: "Conferme, regole chiare, storico e organizzazione della sala: un metodo pratico per gestire le assenze senza trattare ogni cliente come un rischio.",
    published: "2026-07-29",
    publishedLabel: "29 luglio 2026",
    updated: "2026-08-04",
    readingTime: "11 min",
    accent: "orange",
  },
  {
    slug: "sito-ristorante-prenotazioni-dirette",
    category: "Siti web per ristoranti",
    title: "Sito per ristorante: come trasformarlo in un canale di prenotazione",
    excerpt: "Dalla pagina iniziale al widget: cosa serve perché il sito accompagni davvero una persona dalla ricerca del locale alla conferma del tavolo.",
    published: "2026-07-29",
    publishedLabel: "29 luglio 2026",
    readingTime: "10 min",
    accent: "navy",
  },
  {
    slug: "quanto-costa-sito-web-ristorante",
    category: "Siti web per ristoranti",
    title: "Quanto costa un sito web per ristorante nel 2026?",
    excerpt: "La differenza tra sito economico, professionale e progetto personalizzato: cosa influenza davvero il prezzo e come capire cosa serve al tuo locale.",
    published: "2026-08-04",
    publishedLabel: "4 agosto 2026",
    readingTime: "9 min",
    accent: "orange",
  },
  {
    slug: "aumentare-prenotazioni-dirette-ristorante",
    category: "Prenotazioni dirette",
    title: "Come aumentare le prenotazioni dirette di un ristorante",
    excerpt: "Sito mobile, Google Business Profile, social e conferme: un percorso concreto per ricevere più prenotazioni senza dipendere solo dai portali.",
    published: "2026-08-04",
    publishedLabel: "4 agosto 2026",
    readingTime: "9 min",
    accent: "green",
  },
  {
    slug: "funzioni-gestionale-prenotazioni-ristorante",
    category: "Gestionali per ristoranti",
    title: "Gestionale prenotazioni ristorante: quali funzioni deve avere",
    excerpt: "Mappa della sala, turni, lista d’attesa, storico clienti e report: le funzioni che distinguono un gestionale operativo da una semplice agenda.",
    published: "2026-08-04",
    publishedLabel: "4 agosto 2026",
    readingTime: "10 min",
    accent: "lime",
  },
  {
    slug: "sito-web-ristorante-torino",
    category: "SEO locale per ristoranti",
    title: "Sito web per ristorante a Torino: come farsi trovare dai clienti",
    excerpt: "Ricerche locali, Google Maps, recensioni e contenuti coerenti: cosa serve perché un ristorante di Torino emerga davvero nelle ricerche di zona.",
    published: "2026-08-04",
    publishedLabel: "4 agosto 2026",
    readingTime: "9 min",
    accent: "navy",
  },
];
