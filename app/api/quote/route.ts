import { NextResponse } from "next/server";

type Lead = { name?: string; email?: string; phone?: string; company?: string; note?: string; services?: string[]; pages?: string; texts?: string; logo?: string; extras?: string[]; module?: string; seo?: string; social?: string; socialPlan?: string; ai?: string; duration?: string; estimate?: number; minimum?: number; maximum?: number; tier?: string; website?: string; startedAt?: number };

export async function POST(request: Request) {
  const lead = await request.json() as Lead;
  if (lead.website || (lead.startedAt && Date.now() - lead.startedAt < 1000)) return NextResponse.json({ ok: true });
  if (!lead.name || !lead.email || !lead.phone || !Array.isArray(lead.services) || !lead.services.length) return NextResponse.json({ error: "Dati incompleti" }, { status: 400 });
  const endpoint = process.env.APPS_SCRIPT_WEBHOOK_URL;
  const secret = process.env.APPS_SCRIPT_SECRET;
  if (!endpoint || !secret) {
    console.error("Apps Script lead delivery is not configured");
    return NextResponse.json({ error: "Il sistema di invio non è ancora configurato." }, { status: 503 });
  }
  try {
    const url = new URL(endpoint);
    url.searchParams.set("key", secret);
    const response = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...lead, source: "www.abagenziaweb.it", receivedAt: new Date().toISOString() }) });
    const result = await response.json().catch(() => null) as { ok?: boolean } | null;
    if (!response.ok || !result?.ok) throw new Error(`Apps Script returned ${response.status}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Google Sheets lead delivery failed", error);
    return NextResponse.json({ error: "Consegna non riuscita" }, { status: 502 });
  }
}
