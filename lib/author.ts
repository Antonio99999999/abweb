import { BUSINESS } from "@/lib/business";

// Autore reale dei contenuti editoriali (blog, guide). Fonte unica: usato dallo schema
// Article/BlogPosting e dal box "chi scrive" negli articoli, oltre che da /chi-siamo.
export const AUTHOR = {
  name: "Antonio Pio Brattoli",
  role: "Fondatore di AB Web Agency",
  bio: "Antonio Pio Brattoli unisce esperienza diretta nel mondo della ristorazione allo sviluppo di siti web, automazioni e strumenti digitali per ristoranti, incluso il gestionale Sedia. Scrive per condividere quello che funziona davvero in sala e online.",
  url: `${BUSINESS.url}/chi-siamo`,
};
