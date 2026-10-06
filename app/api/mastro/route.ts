import { NextResponse } from "next/server";
import { cleanText, GENERIC_SEND_ERROR, isValidEmail } from "@/lib/lead-validation";

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown; website?: unknown; startedAt?: unknown; consent?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida" }, { status: 400 });
  }
  if (cleanText(body.website, 200) || (typeof body.startedAt === "number" && Date.now() - body.startedAt < 1000)) {
    return NextResponse.json({ ok: true });
  }
  const name = cleanText(body.name, 100);
  const email = cleanText(body.email, 254);
  if (!name || !isValidEmail(email) || body.consent !== true) {
    return NextResponse.json({ error: "Controlla i dati inseriti e riprova." }, { status: 400 });
  }

  const endpoint = process.env.APPS_SCRIPT_WEBHOOK_URL;
  const secret = process.env.APPS_SCRIPT_SECRET;
  if (!endpoint || !secret) {
    console.error("Apps Script Metodo Mastro delivery is not configured");
    return NextResponse.json({ error: GENERIC_SEND_ERROR }, { status: 503 });
  }
  try {
    const url = new URL(endpoint);
    url.searchParams.set("key", secret);
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ kind: "mastro", name, email, source: "www.abagenziaweb.it", receivedAt: new Date().toISOString() }),
    });
    const responseBody = await response.text();
    const result = JSON.parse(responseBody || "null") as { ok?: boolean } | null;
    if (!response.ok || !result?.ok) throw new Error(`Apps Script returned ${response.status}: ${responseBody.slice(0, 300)}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Google Sheets Metodo Mastro delivery failed", error);
    return NextResponse.json({ error: GENERIC_SEND_ERROR }, { status: 502 });
  }
}
