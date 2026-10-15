// Dati aziendali reali di AB Web Agency, verificati contro footer, /privacy e /note-legali.
// Fonte unica per i dati strutturati JSON-LD: evita che schema, footer e pagine legali finiscano
// per raccontare indirizzo, email o social diversi tra loro.
//
// Nessun indirizzo pubblico nei dati strutturati: la scheda Google "AB agenzia web" è impostata
// come area servita (l'attività opera presso i clienti, non ha una sede visitabile), confermato
// da Antonio Pio Brattoli il 2026-10-15. L'indirizzo di Via Francesco De Sanctis 78 resta solo
// come testo nelle pagine legali (/note-legali, /privacy, entrambe noindex), come recapito del
// titolare: è un obbligo di trasparenza verso i clienti, non un'indicazione di sede aperta al
// pubblico. Non reintrodurlo nello schema sitewide senza riverificare la scheda Google.
export const BUSINESS = {
  name: "AB Web Agency",
  legalName: "Antonio Pio Brattoli",
  url: "https://www.abagenziaweb.it",
  email: "ab.agenziaweb@gmail.com",
  telephone: "+39 380 1881262",
  logo: "https://www.abagenziaweb.it/brand/abwebagency-logo.png",
  description: "Siti web, automazioni e acquisizione clienti per ristoranti e attività locali.",
  areaServed: [
    { "@type": "City" as const, name: "Torino" },
    { "@type": "Country" as const, name: "Italia" },
  ],
  sameAs: ["https://instagram.com/ab_webagency", "https://maps.app.goo.gl/xY5T7HaKe6tWUrXK7"],
  founder: { "@type": "Person" as const, name: "Antonio Pio Brattoli" },
};
