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
];
