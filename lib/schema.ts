import { BUSINESS } from "@/lib/business";
import { AUTHOR } from "@/lib/author";

// Helper JSON-LD centralizzati: evitano di ripetere la stessa struttura Organization, Person,
// Article, FAQPage o SoftwareApplication in più pagine, con dati derivati sempre dalla stessa
// fonte (BUSINESS in lib/business.ts, AUTHOR in lib/author.ts). Il BreadcrumbList condiviso
// resta in lib/breadcrumb.ts (Fase 3), non duplicato qui.
//
// @id stabili: collegano i nodi Organization/Person/WebSite nel grafo di dati strutturati dello
// stesso sito, così Google (e i motori AI) possono riconoscere che founder, autore degli articoli
// ed editore sono la stessa entità, ripetuta su più pagine. Ogni riferimento porta comunque
// @type/name/url inline, non solo l'@id: una pagina letta da sola resta un markup completo.
export const ORGANIZATION_ID = `${BUSINESS.url}/#organization`;
export const WEBSITE_ID = `${BUSINESS.url}/#website`;
export const PERSON_ID = `${AUTHOR.url}/#person`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    description: BUSINESS.description,
    areaServed: BUSINESS.areaServed,
    sameAs: BUSINESS.sameAs,
    founder: { "@type": "Person" as const, "@id": PERSON_ID, name: AUTHOR.name, url: AUTHOR.url },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: AUTHOR.name,
    url: AUTHOR.url,
    jobTitle: AUTHOR.role,
    worksFor: { "@type": "Organization", "@id": ORGANIZATION_ID, name: BUSINESS.name, url: BUSINESS.url },
    sameAs: BUSINESS.sameAs,
  };
}

function authorRef() {
  return { "@type": "Person" as const, "@id": PERSON_ID, name: AUTHOR.name, url: AUTHOR.url };
}

function publisherRef() {
  return { "@type": "Organization" as const, "@id": ORGANIZATION_ID, name: BUSINESS.name, url: BUSINESS.url, logo: { "@type": "ImageObject" as const, url: BUSINESS.logo } };
}

export function articleSchema({
  headline, description, canonical, datePublished, dateModified,
}: {
  headline: string; description: string; canonical: string; datePublished: string; dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "it-IT",
    mainEntityOfPage: canonical,
    author: authorRef(),
    publisher: publisherRef(),
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function softwareApplicationSchema({
  name, description, url, category, offers,
}: {
  name: string; description: string; url: string; category: string;
  offers?: { lowPrice: string; highPrice: string; priceCurrency: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: category,
    operatingSystem: "Web",
    ...(offers ? { offers: { "@type": "AggregateOffer", ...offers } } : {}),
  };
}
