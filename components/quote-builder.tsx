"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  calculateQuote,
  durations,
  extras,
  logos,
  modules,
  pages,
  QuoteSelection,
  sediaPlans,
  seoOptions,
  socialPlans,
  standaloneServices,
  texts,
  webServices,
} from "@/lib/quote-pricing";

type ChoiceItem = { id: string; label: string; price?: number };

function euro(value: number) {
  return `€${value.toLocaleString("it-IT")}`;
}

function Choice<T extends ChoiceItem>({ items, value, onChange, monthly = false }: {
  items: readonly T[];
  value?: string;
  onChange: (item: T) => void;
  monthly?: boolean;
}) {
  return <div className="choice-grid">{items.map((item) => <button type="button" key={item.id} aria-pressed={value === item.id} className={`choice ${value === item.id ? "selected" : ""}`} onClick={() => onChange(item)}>
    <span className="choice-mark">{value === item.id ? "✓" : ""}</span>
    <strong>{item.label}</strong>
    {item.price !== undefined && <small>{item.price === 0 ? "Incluso" : `${euro(item.price)}${monthly ? "/mese" : ""}`}</small>}
  </button>)}</div>;
}

export function QuoteBuilder() {
  const [step, setStep] = useState(0);
  const [webServiceId, setWebServiceId] = useState<string>();
  const [brandIdentity, setBrandIdentity] = useState(false);
  const [wantsSocial, setWantsSocial] = useState(false);
  const [pageId, setPageId] = useState<string>();
  const [textId, setTextId] = useState<string>();
  const [logoId, setLogoId] = useState<string>();
  const [extraIds, setExtraIds] = useState<string[]>([]);
  const [other, setOther] = useState("");
  const [moduleId, setModuleId] = useState<string>();
  const [seoId, setSeoId] = useState<string>();
  const [socialPlanId, setSocialPlanId] = useState<string>();
  const [sediaPlanId, setSediaPlanId] = useState<string>();
  const [durationId, setDurationId] = useState<string>();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [startedAt] = useState(() => Date.now());

  const hasSedia = !!sediaPlanId && sediaPlanId !== "sedia-none";
  const hasMonthly = hasSedia || wantsSocial;
  const steps = [
    "Servizi", "Sedia",
    ...(webServiceId ? ["Pagine", "Contenuti"] : []),
    ...(webServiceId || brandIdentity ? ["Logo"] : []),
    "Extra",
    ...(webServiceId && !hasSedia ? ["Interazione"] : []),
    ...(webServiceId ? ["SEO"] : []),
    ...(wantsSocial ? ["Social"] : []),
    ...(hasMonthly ? ["Durata"] : []),
    "Contatto",
  ];
  const active = steps[Math.min(step, steps.length - 1)];

  const selection: QuoteSelection = {
    webServiceId,
    brandIdentity,
    pageId,
    textId,
    logoId,
    extraIds,
    moduleId,
    seoId,
    socialPlanId: wantsSocial ? socialPlanId : "social-none",
    sediaPlanId,
    durationId,
  };
  const quote = useMemo(() => calculateQuote(selection), [webServiceId, brandIdentity, pageId, textId, logoId, extraIds, moduleId, seoId, socialPlanId, wantsSocial, sediaPlanId, durationId]);

  const canContinue = active === "Servizi" ? !!webServiceId || brandIdentity || wantsSocial
    : active === "Sedia" ? !!sediaPlanId
    : active === "Pagine" ? !!pageId
    : active === "Contenuti" ? !!textId
    : active === "Logo" ? !!logoId
    : active === "Interazione" ? !!moduleId
    : active === "SEO" ? !!seoId
    : active === "Social" ? !!socialPlanId && socialPlanId !== "social-none"
    : active === "Durata" ? !!durationId
    : true;

  function next() {
    if (!canContinue) { setError("Seleziona un’opzione per continuare."); return; }
    setError("");
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function toggleExtra(id: string) {
    setExtraIds((old) => old.includes(id) ? old.filter((item) => item !== id) : [...old, id]);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get("name"), email: form.get("email"), phone: form.get("phone"), company: form.get("company"), note: form.get("note"), website: form.get("website"), startedAt,
      selection,
      other: other.trim(),
      services: quote.labels.services,
      pages: quote.labels.pages,
      texts: quote.labels.texts,
      logo: quote.labels.logo,
      extras: [...quote.labels.extras, ...(other.trim() ? [`Altro: ${other.trim()}`] : [])],
      module: quote.labels.module,
      seo: quote.labels.seo,
      social: quote.labels.social,
      socialPlan: quote.labels.social,
      sedia: quote.labels.sedia,
      duration: quote.labels.duration,
      estimate: quote.initial,
      minimum: quote.initial,
      maximum: quote.initialMaximum,
      monthly: quote.monthly,
      monthlySavings: quote.monthlySavings,
      firstYearSavings: quote.firstYearSavings,
      tier: quote.tier,
    };
    try {
      const response = await fetch("/api/quote", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json().catch(() => null) as { error?: string } | null;
      if (!response.ok) throw new Error(result?.error || "Non siamo riusciti a inviare la richiesta. Scrivici a ab.agenziaweb@gmail.com.");
      setSent(true);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Non siamo riusciti a inviare la richiesta. Scrivici a ab.agenziaweb@gmail.com.");
    } finally { setLoading(false); }
  }

  if (sent) return <section className="quote-success" role="status" aria-live="polite">
    <p className="eyebrow">RICHIESTA INVIATA</p><h1>Perfetto, iniziamo da qui.</h1>
    {quote.initial > 0 && <p>Il tuo investimento iniziale indicativo è <strong>da {euro(quote.initial)} a {euro(quote.initialMaximum)}</strong>.</p>}
    {quote.monthly > 0 && <p>Il canone dei servizi scelti è <strong>{euro(quote.monthly)}/mese</strong>.</p>}
    {hasSedia && <p>Con il pacchetto Sedia risparmi fino a <strong>{euro(quote.firstYearSavings)} nel primo anno</strong>.</p>}
    <p>Ti contatteremo entro un giorno lavorativo per verificare obiettivi e priorità.</p>
  </section>;

  return <div className="quote-layout"><aside className="quote-aside">
    <p className="eyebrow">IL TUO PROGETTO</p><p className="quote-step">{step + 1} <span>/ {steps.length}</span></p>
    <div className="progress"><i style={{ width: `${(step + 1) / steps.length * 100}%` }} /></div><p className="muted">{active}</p>
    <div className="estimate"><span>La tua stima</span>
      {quote.initial > 0 && <strong>{euro(quote.initial)} – {euro(quote.initialMaximum)}</strong>}
      {quote.monthly > 0 && <strong>{euro(quote.monthly)}<small>/mese</small></strong>}
      {!quote.initial && !quote.monthly && <strong>—</strong>}
      {hasSedia && quote.firstYearSavings > 0 && <b>Risparmio sul bundle: {euro(quote.firstYearSavings)}</b>}
      <small>Pacchetto {quote.tier} · stima non vincolante</small>
    </div>
  </aside><section className="quote-main">
    {active === "Servizi" && <><p className="eyebrow">01 — SERVIZI</p><h1>Da cosa vuoi partire?</h1><p className="lead">Scegli un progetto web e aggiungi gli altri servizi che ti interessano.</p>
      <div className="choice-grid">{webServices.map((item) => <button type="button" key={item.id} aria-pressed={webServiceId === item.id} className={`choice ${webServiceId === item.id ? "selected" : ""}`} onClick={() => setWebServiceId((old) => old === item.id ? undefined : item.id)}><span className="choice-mark">{webServiceId === item.id ? "✓" : "+"}</span><strong>{item.label}</strong><small>da {euro(item.price)}</small></button>)}
        <button type="button" aria-pressed={brandIdentity} className={`choice ${brandIdentity ? "selected" : ""}`} onClick={() => setBrandIdentity((old) => !old)}><span className="choice-mark">{brandIdentity ? "✓" : "+"}</span><strong>{standaloneServices[0].label}</strong><small>da {euro(standaloneServices[0].price)}</small></button>
        <button type="button" aria-pressed={wantsSocial} className={`choice ${wantsSocial ? "selected" : ""}`} onClick={() => { setWantsSocial((old) => !old); if (wantsSocial) setSocialPlanId(undefined); }}><span className="choice-mark">{wantsSocial ? "✓" : "+"}</span><strong>Gestione Social</strong><small>da €250/mese</small></button>
      </div></>}
    {active === "Sedia" && <><p className="eyebrow">PRENOTAZIONI DIRETTE</p><h1>Vuoi far lavorare il progetto con Sedia?</h1><p className="lead">Con Sedia ottieni il widget incluso, uno sconto sul sito e un prezzo speciale sui pacchetti social.</p><Choice items={sediaPlans} value={sediaPlanId} onChange={(item) => setSediaPlanId(item.id)} monthly/>
      {hasSedia && <div className="sedia-saving"><strong>Bonus Sedia attivo</strong><span>Fino a {euro(quote.initialSavings)} sui costi iniziali e {euro(quote.monthlySavings)}/mese sul bundle social.</span></div>}</>}
    {active === "Pagine" && <><p className="eyebrow">PAGINE</p><h1>Quante pagine avrà il sito?</h1><Choice items={pages} value={pageId} onChange={(item) => setPageId(item.id)}/></>}
    {active === "Contenuti" && <><p className="eyebrow">CONTENUTI</p><h1>Hai bisogno di supporto per i testi?</h1><Choice items={texts} value={textId} onChange={(item) => setTextId(item.id)}/></>}
    {active === "Logo" && <><p className="eyebrow">IDENTITÀ</p><h1>Hai già un logo professionale?</h1><Choice items={logos} value={logoId} onChange={(item) => setLogoId(item.id)}/></>}
    {active === "Extra" && <><p className="eyebrow">EXTRA</p><h1>Servono materiali aggiuntivi?</h1><p className="lead">La stampa viene valutata separatamente in base a formato e quantità.</p><div className="choice-grid">{extras.map((item) => <button type="button" key={item.id} aria-pressed={extraIds.includes(item.id)} className={`choice ${extraIds.includes(item.id) ? "selected" : ""}`} onClick={() => toggleExtra(item.id)}><span className="choice-mark">{extraIds.includes(item.id) ? "✓" : "+"}</span><strong>{item.label}</strong><small>+ {euro(item.price)}</small></button>)}</div><label className="inline-label">Altro servizio da valutare<input value={other} onChange={(event) => setOther(event.target.value)} placeholder="Es. shooting video, menu digitale…" /></label></>}
    {active === "Interazione" && <><p className="eyebrow">FUNZIONALITÀ</p><h1>Come vuoi raccogliere le richieste?</h1><Choice items={modules} value={moduleId} onChange={(item) => setModuleId(item.id)}/></>}
    {active === "SEO" && <><p className="eyebrow">VISIBILITÀ</p><h1>Quanto vuoi lavorare sulla visibilità locale?</h1><Choice items={seoOptions} value={seoId} onChange={(item) => setSeoId(item.id)}/></>}
    {active === "Social" && <><p className="eyebrow">SOCIAL</p><h1>Scegli il livello di gestione.</h1><p className="lead">Con Sedia i contenuti e le call to action possono portare direttamente al sistema di prenotazione.</p><Choice items={socialPlans.filter((item) => item.id !== "social-none")} value={socialPlanId} onChange={(item) => setSocialPlanId(item.id)} monthly/>
      {hasSedia && socialPlanId && <div className="sedia-saving"><strong>Prezzo bundle: {euro(quote.monthly)}/mese</strong><span>Separatamente pagheresti {euro(quote.monthlyBase)}/mese. Risparmi {euro(quote.monthlySavings)}/mese.</span></div>}</>}
    {active === "Durata" && <><p className="eyebrow">COLLABORAZIONE</p><h1>Per quanto tempo vuoi collaborare?</h1><Choice items={durations.slice(1)} value={durationId} onChange={(item) => setDurationId(item.id)}/></>}
    {active === "Contatto" && <form onSubmit={submit}><p className="eyebrow">CONTATTO</p><h1>Ricevi la tua stima.</h1><div className="quote-final-summary">
      {quote.initial > 0 && <div><span>Investimento iniziale</span><strong>{euro(quote.initial)} – {euro(quote.initialMaximum)}</strong></div>}
      {quote.monthly > 0 && <div><span>Servizi mensili</span><strong>{euro(quote.monthly)}/mese</strong></div>}
      {hasSedia && <div className="saving-row"><span>Risparmio sul bundle</span><strong>{euro(quote.firstYearSavings)}</strong></div>}
    </div><input className="trap-field" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" /><div className="form-grid"><label>Nome e cognome<input required name="name" autoComplete="name" /></label><label>Email<input required name="email" type="email" autoComplete="email" /></label><label>Telefono<input required name="phone" type="tel" autoComplete="tel" /></label><label>Azienda<input name="company" autoComplete="organization" /></label><label className="full">Note sul progetto<textarea name="note" rows={3} /></label></div><label className="consent"><input required type="checkbox" /><span>Ho letto la <Link href="/privacy" target="_blank">Privacy Policy</Link> e richiedo di essere ricontattato in merito al progetto.</span></label>{error && <p className="form-error" role="alert">{error}</p>}<div className="button-row"><button type="button" className="button button-secondary" onClick={() => setStep((current) => current - 1)}>Indietro</button><button className="button" disabled={loading}>{loading ? "Invio in corso…" : "Ricevi la stima"} <span>→</span></button></div></form>}
    {active !== "Contatto" && <><>{error && <p className="form-error" role="alert">{error}</p>}</><div className="button-row"><button type="button" className="button button-secondary" onClick={() => { setError(""); setStep((current) => Math.max(0, current - 1)); }} disabled={step === 0}>Indietro</button><button className="button" onClick={next}>{active === "Durata" ? "I tuoi dati" : "Continua"} <span>→</span></button></div></>}
  </section></div>;
}
