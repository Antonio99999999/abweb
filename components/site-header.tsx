"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  return <header className="site-header"><div className="shell nav">
    <Link className="brand logo-brand" href="/" aria-label="AB Web Agency, home" onClick={close}><Image src="/brand/abwebagency-logo.png" alt="AB Web Agency" width={54} height={54} priority /></Link>
    <nav id="mobile-navigation" className={`primary-nav ${open ? "open" : ""}`} aria-label="Navigazione principale">
      <Link href="/servizi" onClick={close}>Servizi</Link><Link href="/metodo-mastro" onClick={close}>Metodo Mastro</Link><Link href="/contatti" onClick={close}>Contatti</Link>
      <Link className="mobile-quote" href="/preventivo" onClick={close}>Calcola il tuo investimento <span aria-hidden>↗</span></Link>
    </nav>
    <Link className="button button-small nav-quote" href="/preventivo">Calcola il tuo investimento <span aria-hidden>↗</span></Link>
    <button className={`nav-toggle ${open ? "open" : ""}`} type="button" aria-label={open ? "Chiudi menu" : "Apri menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}><i /><i /><i /></button>
  </div></header>;
}
