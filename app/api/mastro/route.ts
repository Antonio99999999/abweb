import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const lead = await request.json() as { name?: string; email?: string; website?: string; startedAt?: number };
  if (lead.website || (lead.startedAt && Date.now() - lead.startedAt < 1000)) return NextResponse.json({ ok: true });
  if (!lead.name || !lead.email) return NextResponse.json({ error: "Dati incompleti" }, { status: 400 });
  const endpoint = process.env.APPS_SCRIPT_WEBHOOK_URL; const secret = process.env.APPS_SCRIPT_SECRET;
  if (!endpoint || !secret) return NextResponse.json({ error: "Configurazione mancante" }, { status: 503 });
  try {
    const url = new URL(endpoint); url.searchParams.set("key", secret);
    const response = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ kind: "mastro", name: lead.name, email: lead.email, source: "www.abagenziaweb.it", receivedAt: new Date().toISOString() }) });
    const result = await response.json().catch(() => null) as { ok?: boolean } | null;
    if (!response.ok || !result?.ok) throw new Error(); return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Consegna non riuscita" }, { status: 502 }); }
}
