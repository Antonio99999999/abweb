import { SEDIA_PLANS } from "@/lib/sedia-plans";

export type PriceOption = { id: string; label: string; price: number };

export const webServices = [
  { id: "landing", label: "Landing Page", price: 500, sediaDiscount: 150 },
  { id: "vetrina", label: "Sito Vetrina", price: 900, sediaDiscount: 250 },
  { id: "ecommerce", label: "Ecommerce", price: 1800, sediaDiscount: 450 },
  { id: "restyling", label: "Restyling Sito", price: 650, sediaDiscount: 200 },
] as const;

export const standaloneServices = [
  { id: "brand", label: "Brand Identity", price: 350 },
] as const;

export const pages = [
  { id: "pages-1-3", label: "1–3 pagine", price: 0 },
  { id: "pages-4-8", label: "4–8 pagine", price: 200 },
  { id: "pages-9-15", label: "9–15 pagine", price: 450 },
  { id: "pages-15-plus", label: "15+ pagine", price: 800 },
] as const;

export const texts = [
  { id: "texts-none", label: "Testi già disponibili", price: 0 },
  { id: "texts-some", label: "Alcuni contenuti", price: 150 },
  { id: "texts-all", label: "Tutti i contenuti (fino a 5 pagine)", price: 400 },
] as const;

export const logos = [
  { id: "logo-ready", label: "Logo già disponibile", price: 0 },
  { id: "logo-new", label: "Creazione logo", price: 300 },
] as const;

export const extras = [
  { id: "photos", label: "Foto professionali", price: 300 },
  { id: "brochure", label: "Brochure", price: 250 },
  { id: "digital-graphics", label: "Grafiche digitali", price: 150 },
  { id: "print-graphics", label: "Grafiche per stampa", price: 200 },
] as const;

export const modules = [
  { id: "module-none", label: "Nessun modulo", price: 0 },
  { id: "module-contact", label: "Modulo contatto", price: 0 },
  { id: "module-booking", label: "Prenotazione esterna", price: 150 },
  { id: "module-custom-booking", label: "Prenotazione personalizzata", price: 350 },
] as const;

export const seoOptions = [
  { id: "seo-included", label: "SEO tecnica essenziale", price: 0 },
  { id: "seo-base", label: "SEO locale Base", price: 200 },
  { id: "seo-advanced", label: "SEO locale Avanzata", price: 450 },
] as const;

export const socialPlans = [
  { id: "social-none", label: "Nessuna gestione social", price: 0, level: -1 },
  { id: "social-base", label: "Social Base", price: 250, level: 0 },
  { id: "social-standard", label: "Social Standard", price: 400, level: 1 },
  { id: "social-pro", label: "Social Pro", price: 650, level: 2 },
] as const;

export const sediaPlans = [
  { id: "sedia-none", label: "Non utilizzo Sedia", price: 0, level: -1 },
  ...SEDIA_PLANS.map((plan, level) => ({ id: `sedia-${plan.id}`, label: `Sedia ${plan.name}`, price: plan.monthlyPrice, level })),
];

export const durations = [
  { id: "duration-single", label: "Progetto singolo" },
  { id: "duration-3", label: "Collaborazione 3 mesi" },
  { id: "duration-6", label: "Collaborazione 6 mesi" },
  { id: "duration-12", label: "Collaborazione 12 mesi" },
] as const;

export type QuoteSelection = {
  webServiceId?: string;
  brandIdentity: boolean;
  pageId?: string;
  textId?: string;
  logoId?: string;
  extraIds: string[];
  moduleId?: string;
  seoId?: string;
  socialPlanId?: string;
  sediaPlanId?: string;
  durationId?: string;
};

export type QuoteCalculation = {
  initialBase: number;
  initial: number;
  initialMaximum: number;
  monthlyBase: number;
  monthly: number;
  initialSavings: number;
  monthlySavings: number;
  firstYearSavings: number;
  tier: string;
  labels: {
    services: string[];
    pages: string;
    texts: string;
    logo: string;
    extras: string[];
    module: string;
    seo: string;
    social: string;
    sedia: string;
    duration: string;
  };
};

function find<T extends { id: string }>(items: readonly T[], id?: string): T | undefined {
  return items.find((item) => item.id === id);
}

function roundUp50(value: number) {
  return Math.ceil(value / 50) * 50;
}

export function calculateQuote(selection: QuoteSelection): QuoteCalculation {
  const web = find(webServices, selection.webServiceId);
  const page = web ? find(pages, selection.pageId) : undefined;
  const text = web ? find(texts, selection.textId) : undefined;
  const logo = web || selection.brandIdentity ? find(logos, selection.logoId) : undefined;
  const selectedExtras = extras.filter((item) => selection.extraIds.includes(item.id));
  const sedia = find(sediaPlans, selection.sediaPlanId) ?? sediaPlans[0];
  const hasSedia = sedia.level >= 0;
  const moduleOption = web && !hasSedia ? find(modules, selection.moduleId) : undefined;
  const seo = web ? find(seoOptions, selection.seoId) : undefined;
  const social = find(socialPlans, selection.socialPlanId) ?? socialPlans[0];
  const duration = find(durations, selection.durationId);

  const initialBase = (web?.price ?? 0) + (selection.brandIdentity ? standaloneServices[0].price : 0) +
    (page?.price ?? 0) + (text?.price ?? 0) + (logo?.price ?? 0) +
    selectedExtras.reduce((sum, item) => sum + item.price, 0) + (moduleOption?.price ?? 0) + (seo?.price ?? 0);
  const siteDiscount = hasSedia ? (web?.sediaDiscount ?? 0) : 0;
  const widgetValue = hasSedia ? 350 : 0;
  const initial = Math.max(0, initialBase - siteDiscount);
  const initialMaximum = initial > 0 ? roundUp50(initial * 1.2) : 0;

  const monthlyBase = sedia.price + social.price;
  const bundleLevel = hasSedia && social.level >= 0 ? Math.min(sedia.level, social.level) : -1;
  const monthlySavings = bundleLevel >= 0 ? [50, 100, 150][bundleLevel] : 0;
  const monthly = Math.max(0, monthlyBase - monthlySavings);
  const initialSavings = siteDiscount + widgetValue;
  const firstYearSavings = initialSavings + monthlySavings * 12;
  const annualValue = initial + monthly * 12;
  const tier = annualValue >= 7000 ? "Enterprise" : annualValue >= 3000 ? "Professional" : annualValue >= 1000 ? "Business" : "Starter";

  return {
    initialBase,
    initial,
    initialMaximum,
    monthlyBase,
    monthly,
    initialSavings,
    monthlySavings,
    firstYearSavings,
    tier,
    labels: {
      services: [...(web ? [web.label] : []), ...(selection.brandIdentity ? [standaloneServices[0].label] : [])],
      pages: page?.label ?? "",
      texts: text?.label ?? "",
      logo: logo?.label ?? "",
      extras: selectedExtras.map((item) => item.label),
      module: hasSedia ? "Widget Sedia incluso" : moduleOption?.label ?? "",
      seo: seo?.label ?? "",
      social: social.label,
      sedia: sedia.label,
      duration: duration?.label ?? "",
    },
  };
}

export function isValidQuoteSelection(selection: QuoteSelection) {
  const valid = (items: readonly { id: string }[], id?: string) => !id || items.some((item) => item.id === id);
  return valid(webServices, selection.webServiceId) &&
    valid(pages, selection.pageId) && valid(texts, selection.textId) && valid(logos, selection.logoId) &&
    selection.extraIds.every((id) => extras.some((item) => item.id === id)) &&
    valid(modules, selection.moduleId) && valid(seoOptions, selection.seoId) &&
    valid(socialPlans, selection.socialPlanId) && valid(sediaPlans, selection.sediaPlanId) &&
    valid(durations, selection.durationId);
}
