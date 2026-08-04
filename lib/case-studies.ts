// Modello dati per future pagine "case study" (proposta: /case-study/[slug]).
// Non ancora collegato a nessuna route pubblica: nessuna pagina lo importa. Serve come struttura
// pronta per quando Antonio fornirà i contenuti reali dei progetti (vedi SEO-IMPROVEMENTS-PHASE-2.md).
//
// L'unica voce compilata è "Benvenuti al Sud", perché gli unici dati riusabili qui sono già
// pubblicati e verificabili in app/metodo-mastro/page.tsx e components/case-metrics.tsx: nessun
// dato nuovo è stato inventato. "Denis Cars" e "La Lanterna" restano fuori finché non arrivano
// problema, soluzione e risultati reali da Antonio: pubblicare una scheda con questi campi vuoti
// o genericizzati sarebbe una pagina incompleta/fuorviante, esplicitamente da evitare.

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
  results: { value: string; label: string }[];
  resultsDisclaimer: string;
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
    summary: "Rebranding, menu digitale in quattro lingue, prenotazioni proprietarie e strumenti operativi per un ristorante di cucina del Sud Italia e pizza napoletana a Torino.",
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
      "Sistema di prenotazione proprietario",
      "Strumenti per turni e proposta vini",
    ],
    process: [
      { title: "Rebranding", description: "Colori, font ed elementi grafici ripensati per rendere riconoscibile l'identità del locale." },
      { title: "Esperienza", description: "Menu e materiali stampati riprogettati per guidare la scelta e valorizzare l'offerta." },
      { title: "Operatività", description: "Gestionali per vini, turni e prenotazioni per ridurre passaggi manuali e dispersioni." },
      { title: "Comunicazione", description: "Contenuti costruiti sui valori del locale per raccontare qualità, tradizione e accoglienza." },
    ],
    results: [
      { value: "+45%", label: "visibilità online" },
      { value: "+35%", label: "prenotazioni" },
      { value: "−30%", label: "tempo di gestione" },
    ],
    resultsDisclaimer: "Dati dichiarati nel caso studio: non costituiscono una promessa di risultato.",
    images: [{ src: "/clients/benvenuti-al-sud.svg", alt: "Benvenuti al Sud" }],
    relatedServiceIds: ["siti", "automazioni"],
    relatedArticleSlugs: ["ridurre-no-show-ristorante", "sito-ristorante-prenotazioni-dirette"],
    ctaHref: "/metodo-mastro",
  },
];
