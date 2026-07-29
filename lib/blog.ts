export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  published: string;
  publishedLabel: string;
  readingTime: string;
  accent: "orange" | "green" | "lime" | "navy";
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
    readingTime: "8 min",
    accent: "green",
  },
  {
    slug: "ridurre-no-show-ristorante",
    category: "Gestione prenotazioni",
    title: "Come ridurre i no-show al ristorante senza irrigidire l’esperienza",
    excerpt: "Conferme, regole chiare, storico e organizzazione della sala: un metodo pratico per gestire le assenze senza trattare ogni cliente come un rischio.",
    published: "2026-07-29",
    publishedLabel: "29 luglio 2026",
    readingTime: "9 min",
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
];
