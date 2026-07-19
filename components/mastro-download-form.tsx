"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export function MastroDownloadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle"); const [error, setError] = useState(""); const [startedAt] = useState(() => Date.now());
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setStatus("loading"); setError(""); const data = new FormData(event.currentTarget); try { const response = await fetch("/api/mastro", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: data.get("name"), email: data.get("email"), website: data.get("website"), startedAt }) }); const result = await response.json().catch(() => null) as { error?: string } | null; if (!response.ok) throw new Error(result?.error || "Invio non riuscito. Scrivici a ab.agenziaweb@gmail.com."); setStatus("sent"); } catch (reason) { setError(reason instanceof Error ? reason.message : "Invio non riuscito. Scrivici a ab.agenziaweb@gmail.com."); setStatus("error"); } }
  if (status === "sent") return <div className="download-success" role="status" aria-live="polite"><strong>Guida inviata.</strong><p>Controlla la tua e-mail: troverai il link per scaricare il PDF.</p><a className="text-link" href="/downloads/metodo-mastro-benvenuti-al-sud.pdf" target="_blank">Scarica anche ora <span>→</span></a></div>;
  return <form className="mastro-form" onSubmit={submit}><input className="trap-field" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" /><label>Nome<input name="name" required autoComplete="name" placeholder="Il tuo nome"/></label><label>E-mail<input name="email" type="email" required autoComplete="email" placeholder="nome@azienda.it"/></label><label className="consent"><input type="checkbox" required/> Ho letto la <Link href="/privacy" target="_blank">Privacy Policy</Link> e richiedo l’invio della guida.</label>{status === "error" && <p className="form-error" role="alert">{error}</p>}<button className="button button-light" disabled={status === "loading"}>{status === "loading" ? "Invio in corso…" : "Ricevi la guida"} <span>→</span></button></form>;
}
