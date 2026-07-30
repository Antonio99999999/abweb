// Dati aziendali reali di AB Web Agency, verificati contro footer, /privacy e /note-legali.
// Fonte unica per i dati strutturati JSON-LD: evita che schema, footer e pagine legali finiscano
// per raccontare indirizzo, email o social diversi tra loro.
export const BUSINESS = {
  name: "AB Web Agency",
  legalName: "Antonio Pio Brattoli",
  url: "https://www.abagenziaweb.it",
  email: "ab.agenziaweb@gmail.com",
  logo: "https://www.abagenziaweb.it/brand/abwebagency-logo.png",
  description: "Siti web, automazioni e acquisizione clienti per ristoranti e attività locali.",
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: "Via Francesco De Sanctis 78",
    addressLocality: "Torino",
    postalCode: "10142",
    addressCountry: "IT",
  },
  areaServed: [
    { "@type": "City" as const, name: "Torino" },
    { "@type": "Country" as const, name: "Italia" },
  ],
  sameAs: ["https://instagram.com/ab_webagency"],
  founder: { "@type": "Person" as const, name: "Antonio Pio Brattoli" },
};
