import { NextResponse } from "next/server";
import { calculateQuote, isValidQuoteSelection, QuoteSelection } from "@/lib/quote-pricing";
import { cleanText, GENERIC_SEND_ERROR, isValidEmail, isValidPhone } from "@/lib/lead-validation";

type Lead = {
  name?: unknown; email?: unknown; phone?: unknown; company?: unknown; note?: unknown; other?: unknown;
  website?: unknown; startedAt?: unknown; consent?: unknown; selection?: QuoteSelection;
};

export async function POST(request: Request) {
  let lead: Lead;
  try {
    lead = await request.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida" }, { status: 400 });
  }
  if (cleanText(lead.website, 200) || (typeof lead.startedAt === "number" && Date.now() - lead.startedAt < 1000)) {
    return NextResponse.json({ ok: true });
  }

  const name = cleanText(lead.name, 100);
  const email = cleanText(lead.email, 254);
  const phone = cleanText(lead.phone, 30);
  const company = cleanText(lead.company, 120);
  const note = cleanText(lead.note, 2000);
  const other = cleanText(lead.other, 300);
  const selection = lead.selection;
  if (!name || !isValidEmail(email) || !isValidPhone(phone) || lead.consent !== true || !selection || !isValidQuoteSelection(selection)) {
    return NextResponse.json({ error: "Controlla i dati inseriti e riprova." }, { status: 400 });
  }

  const quote = calculateQuote(selection);
  if (!quote.labels.services.length && quote.labels.social === "Nessuna gestione social") {
    return NextResponse.json({ error: "Seleziona almeno un servizio" }, { status: 400 });
  }
  if (!selection.sediaPlanId || !selection.socialPlanId) {
    return NextResponse.json({ error: "Completa le opzioni di Sedia e social" }, { status: 400 });
  }
  if (selection.webServiceId && (!selection.pageId || !selection.textId || !selection.seoId || (selection.sediaPlanId === "sedia-none" && !selection.moduleId))) {
    return NextResponse.json({ error: "Completa le opzioni del sito" }, { status: 400 });
  }
  if ((selection.webServiceId || selection.brandIdentity) && !selection.logoId) {
    return NextResponse.json({ error: "Completa le opzioni del logo" }, { status: 400 });
  }
  const hasMonthly = selection.sediaPlanId !== "sedia-none" || selection.socialPlanId !== "social-none";
  if (hasMonthly && !selection.durationId) {
    return NextResponse.json({ error: "Seleziona la durata della collaborazione" }, { status: 400 });
  }

  const payload = {
    name, email, phone, company, note,
    services: quote.labels.services, pages: quote.labels.pages, texts: quote.labels.texts, logo: quote.labels.logo,
    extras: [...quote.labels.extras, ...(other ? [`Altro: ${other}`] : [])],
    module: quote.labels.module, seo: quote.labels.seo, social: quote.labels.social, socialPlan: quote.labels.social,
    sedia: quote.labels.sedia, ai: "", duration: quote.labels.duration,
    estimate: quote.initial, minimum: quote.initial, maximum: quote.initialMaximum, monthly: quote.monthly,
    monthlySavings: quote.monthlySavings, firstYearSavings: quote.firstYearSavings, tier: quote.tier,
    source: "www.abagenziaweb.it", receivedAt: new Date().toISOString(),
  };

  const endpoint = process.env.APPS_SCRIPT_WEBHOOK_URL;
  const secret = process.env.APPS_SCRIPT_SECRET;
  if (!endpoint || !secret) {
    console.error("Apps Script lead delivery is not configured");
    return NextResponse.json({ error: GENERIC_SEND_ERROR }, { status: 503 });
  }
  try {
    const url = new URL(endpoint);
    url.searchParams.set("key", secret);
    const response = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
    const responseBody = await response.text();
    const result = JSON.parse(responseBody || "null") as { ok?: boolean } | null;
    if (!response.ok || !result?.ok) throw new Error(`Apps Script returned ${response.status}: ${responseBody.slice(0, 300)}`);
    return NextResponse.json({ ok: true, quote });
  } catch (error) {
    console.error("Google Sheets lead delivery failed", error);
    return NextResponse.json({ error: GENERIC_SEND_ERROR }, { status: 502 });
  }
}
