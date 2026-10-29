export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  location: string;
  summary: string;
  problem: string;
  goals: string[];
  solution: string;
  technologies: string[];
  features: string[];
  process: { title: string; description: string }[];
  images: { src: string; alt: string }[];
  testimonial?: { quote: string; author: string; role: string };
  relatedServiceIds: string[]; // ancore in /servizi, es. "siti", "gestionale"
  relatedArticleSlugs: string[]; // slug in lib/blog.ts
  ctaHref: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "benvenuti-al-sud",
    client: "Benvenuti al Sud",
    sector: "Ristorazione",
    location: "Torino",
    summary: "Rebranding, menu digitale in quattro lingue, prenotazioni gestite con uno strumento dedicato e strumenti operativi per un ristorante di cucina del Sud Italia e pizza napoletana a Torino.",
    problem: "Il locale aveva bisogno di un'identità più riconoscibile e di ridurre la dipendenza dai portali di prenotazione esterni.",
    goals: [
      "Rendere l'identità del locale coerente su menu, materiali stampati e comunicazione",
      "Portare le prenotazioni su un canale proprietario",
      "Dare al team strumenti più semplici per turni e proposta vini",
    ],
    solution: "Metodo Mastro applicato in quattro fasi: rebranding, esperienza (menu e materiali), operatività (gestionali per vini, turni e prenotazioni) e comunicazione.",
    technologies: ["Next.js", "Design system proprietario"],
    features: [
      "Menu digitale in quattro lingue",
      "Gestione prenotazioni con uno strumento dedicato",
      "Strumenti per turni e proposta vini",
    ],
    process: [
      { title: "Rebranding", description: "Colori, font ed elementi grafici ripensati per rendere riconoscibile l'identità del locale." },
      { title: "Esperienza", description: "Menu e materiali stampati riprogettati per guidare la scelta e valorizzare l'offerta." },
      { title: "Operatività", description: "Gestionali per vini, turni e prenotazioni per ridurre passaggi manuali e dispersioni." },
      { title: "Comunicazione", description: "Contenuti costruiti sui valori del locale per raccontare qualità, tradizione e accoglienza." },
    ],
    images: [{ src: "/clients/benvenuti-al-sud.svg", alt: "Benvenuti al Sud" }],
    relatedServiceIds: ["siti", "automazioni"],
    relatedArticleSlugs: ["ridurre-no-show-ristorante", "sito-ristorante-prenotazioni-dirette"],
    ctaHref: "/metodo-mastro",
  },
  {
    slug: "corte-house",
    client: "Corte House",
    sector: "Ricettività turistica",
    location: "Druento (Torino)",
    summary: "Sito bilingue, calendario di disponibilità pubblico, richieste di prenotazione via WhatsApp e un gestionale su misura per una casa vacanze alle porte di Torino, vicino all'Allianz Stadium.",
    problem: "Il proprietario voleva ricevere prenotazioni dirette, senza portali OTA, canali di pagamento online né commissioni di intermediazione, ma aveva bisogno di uno strumento per non gestire calendario, bonifici e comunicazioni a mano.",
    goals: [
      "Pubblicare un sito bilingue (italiano e inglese) con un calendario di disponibilità sempre aggiornato",
      "Raccogliere le richieste di prenotazione su WhatsApp, con un messaggio già pronto, senza pagamenti online",
      "Dare al proprietario un gestionale per calendario, prenotazioni, pagamenti tramite bonifico e cronologia",
      "Automatizzare l'invio di una guida privata per gli ospiti dopo la conferma del soggiorno",
    ],
    solution: "Un sistema sviluppato su misura, non un prodotto preconfezionato: sito pubblico bilingue, calendario sincronizzato in tempo reale con il gestionale, richiesta di prenotazione precompilata su WhatsApp e un'area riservata per gestire calendario, pagamenti, utenti e guida privata per gli ospiti.",
    technologies: ["Next.js", "Database dedicato", "Autenticazione e sessioni proprietarie"],
    features: [
      "Calendario pubblico collegato in tempo reale al gestionale, senza bloccare le date durante la richiesta",
      "Richiesta di prenotazione precompilata su WhatsApp, senza pagamento online né commissioni",
      "Gestionale con calendario, elenco prenotazioni, stato dei pagamenti e cronologia delle attività",
      "Tracciamento dei bonifici, con verifica manuale dell'importo ricevuto",
      "Più utenti autorizzati, ciascuno con il proprio accesso personale",
      "Guida privata per gli ospiti, in italiano e inglese, inviata via WhatsApp dopo la conferma",
      "Anonimizzazione dei dati delle prenotazioni annullate o non gestite, a tutela degli ospiti",
    ],
    process: [
      { title: "Analisi", description: "Requisiti del proprietario: niente OTA né channel manager, prenotazione via WhatsApp, pagamento tramite bonifico anticipato." },
      { title: "Sito pubblico", description: "Pagine bilingui italiano/inglese, dati strutturati coerenti, calendario di disponibilità collegato al gestionale." },
      { title: "Gestionale", description: "Area riservata con calendario, prenotazioni, pagamenti tramite bonifico, utenti e cronologia delle attività." },
      { title: "Guida privata", description: "Contenuti per gli ospiti, in italiano e inglese, inviati automaticamente dopo la conferma del soggiorno." },
    ],
    images: [{ src: "/clients/corte-house.svg", alt: "Corte House" }],
    relatedServiceIds: ["automazioni"],
    relatedArticleSlugs: [],
    ctaHref: "https://cortehouse.it",
  },
];
