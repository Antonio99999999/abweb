import { BUSINESS } from "@/lib/business";
import { AUTHOR } from "@/lib/author";

// Helper JSON-LD centralizzati: evitano di ripetere la stessa struttura Organization, Person,
// Article, FAQPage o SoftwareApplication in più pagine, con dati derivati sempre dalla stessa
// fonte (BUSINESS in lib/business.ts, AUTHOR in lib/author.ts). Il BreadcrumbList condiviso
// resta in lib/breadcrumb.ts (Fase 3), non duplicato qui.

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    email: BUSINESS.email,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    description: BUSINESS.description,
    address: BUSINESS.address,
    areaServed: BUSINESS.areaServed,
    sameAs: BUSINESS.sameAs,
    founder: BUSINESS.founder,
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    url: AUTHOR.url,
    jobTitle: AUTHOR.role,
    worksFor: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url },
    sameAs: BUSINESS.sameAs,
  };
}

function authorRef() {
  return { "@type": "Person" as const, name: AUTHOR.name, url: AUTHOR.url };
}

function publisherRef() {
  return { "@type": "Organization" as const, name: BUSINESS.name, url: BUSINESS.url, logo: { "@type": "ImageObject" as const, url: BUSINESS.logo } };
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
