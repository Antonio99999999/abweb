"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "ab-quandoo-promo-seen";

export function QuandooPromoPopup() {
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = window.setTimeout(() => setOpen(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const dismiss = () => {
    window.sessionStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="quandoo-popup" role="dialog" aria-modal="false" aria-labelledby="quandoo-popup-title">
      <button ref={closeButton} className="quandoo-popup-close" type="button" onClick={dismiss} aria-label="Chiudi la promozione">×</button>
      <span className="quandoo-popup-badge">Offerta passaggio da Quandoo</span>
      <h2 id="quandoo-popup-title">Stai cercando un’alternativa a Quandoo?</h2>
      <p>Passa a Sedia con la configurazione iniziale della sala gratuita e il supporto diretto di AB Web Agency.</p>
      <div className="quandoo-popup-actions">
        <Link className="button quandoo-popup-primary" href="/blog/quandoo-chiude-alternativa-sedia#quandoo-offer-title" onClick={dismiss}>Vai alla promo <span aria-hidden>→</span></Link>
        <Link className="quandoo-popup-link" href="/blog/quandoo-chiude-alternativa-sedia" onClick={dismiss}>Leggi l’articolo</Link>
      </div>
      <small>Offerta riservata ai ristoranti provenienti da Quandoo · richieste entro il 30 settembre 2026.</small>
    </div>
  );
}
