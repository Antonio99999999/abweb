import { NextResponse } from "next/server";
import { calculateQuote, isValidQuoteSelection, QuoteSelection } from "@/lib/quote-pricing";

type Lead = {
  name?: string; email?: string; phone?: string; company?: string; note?: string; other?: string;
  website?: string; startedAt?: number; selection?: QuoteSelection;
};

export async function POST(request: Request) {
  const lead = await request.json() as Lead;
  if (lead.website || (lead.startedAt && Date.now() - lead.startedAt < 1000)) return NextResponse.json({ ok: true });
  if (!lead.name || !lead.email || !lead.phone || !lead.selection || !isValidQuoteSelection(lead.selection)) {
    return NextResponse.json({ error: "Dati incompleti o configurazione non valida" }, { status: 400 });
  }

  const quote = calculateQuote(lead.selection);
  if (!quote.labels.services.length && quote.labels.social === "Nessuna gestione social") {
    return NextResponse.json({ error: "Seleziona almeno un servizio" }, { status: 400 });
  }
  if (!lead.selection.sediaPlanId || !lead.selection.socialPlanId) {
    return NextResponse.json({ error: "Completa le opzioni di Sedia e social" }, { status: 400 });
  }
  if (lead.selection.webServiceId && (!lead.selection.pageId || !lead.selection.textId || !lead.selection.seoId || (lead.selection.sediaPlanId === "sedia-none" && !lead.selection.moduleId))) {
    return NextResponse.json({ error: "Completa le opzioni del sito" }, { status: 400 });
  }
  if ((lead.selection.webServiceId || lead.selection.brandIdentity) && !lead.selection.logoId) {
    return NextResponse.json({ error: "Completa le opzioni del logo" }, { status: 400 });
  }
  const hasMonthly = lead.selection.sediaPlanId !== "sedia-none" || lead.selection.socialPlanId !== "social-none";
  if (hasMonthly && !lead.selection.durationId) {
    return NextResponse.json({ error: "Seleziona la durata della collaborazione" }, { status: 400 });
  }

  const payload = {
    name: lead.name, email: lead.email, phone: lead.phone, company: lead.company || "", note: lead.note || "",
    services: quote.labels.services, pages: quote.labels.pages, texts: quote.labels.texts, logo: quote.labels.logo,
    extras: [...quote.labels.extras, ...(lead.other?.trim() ? [`Altro: ${lead.other.trim().slice(0, 300)}`] : [])],
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
    return NextResponse.json({ error: "Il sistema di invio non è ancora configurato." }, { status: 503 });
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
    return NextResponse.json({ error: "Google Apps Script ha rifiutato la richiesta. Verifica URL webhook e LEAD_SECRET in Vercel." }, { status: 502 });
  }
}
