"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { SediaIcon } from "@/components/sedia-icon";

type NavItem = { href: string; label: string; sedia?: boolean; isActive: (pathname: string) => boolean };

const navItems: NavItem[] = [
  { href: "/siti-web-ristoranti", label: "Siti", isActive: (p) => p === "/siti-web-ristoranti" || p.startsWith("/siti-web-ristoranti/") || p.startsWith("/siti-web-ristoranti-torino") },
  { href: "/gestionale-ristoranti", label: "Sedia", sedia: true, isActive: (p) => p === "/gestionale-ristoranti" || p.startsWith("/gestionale-ristoranti/") },
  { href: "/blog", label: "Blog", isActive: (p) => p === "/blog" || p.startsWith("/blog/") },
  { href: "/contatti", label: "Contatti", isActive: (p) => p === "/contatti" },
];

// Bagliore che scorre sotto la voce di menu attiva (Siti/Blog/Contatti). Il pulsante Sedia ha
// una luce propria (.sedia-nav-link.is-active in sedia-card.css): e' gia' un pill pieno con
// palette diversa, farci scorrere sotto lo stesso arancione mescolerebbe le due palette che
// agency e Sedia usano deliberatamente per distinguersi.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// L'header viene rimontato a ogni cambio pagina (ogni pagina lo renderizza per conto proprio,
// non vive in un layout persistente): senza questa variabile di modulo lo stato del bagliore
// si azzererebbe a ogni navigazione e l'animazione ripartirebbe sempre da sinistra, qualunque
// fosse la direzione reale. Vive fuori dal componente apposta, per sopravvivere al rimontaggio.
let lastGlow = { left: 0, width: 0 };
const GLOW_PADDING = 22; // respiro extra intorno al testo piu' lungo, cosi' il pill e' uniforme

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Partial<Record<string, HTMLAnchorElement | null>>>({});
  const [glow, setGlow] = useState({ ...lastGlow, visible: false });

  const activeItem = navItems.find((item) => item.isActive(pathname));

  // Stessa larghezza per tutte le voci (quella del testo piu' lungo + respiro), cosi' il
  // bagliore non si restringe/allarga scorrendo: contiene sempre il testo, mai al limite.
  const glowWidth = useCallback(() => {
    const widths = Object.values(linkRefs.current)
      .filter((el): el is HTMLAnchorElement => !!el)
      .map((el) => el.getBoundingClientRect().width);
    return widths.length ? Math.max(...widths) + GLOW_PADDING : 0;
  }, []);

  const moveGlowTo = useCallback((el: HTMLAnchorElement | null | undefined) => {
    if (!el || !navRef.current) return;
    const navBox = navRef.current.getBoundingClientRect();
    const linkBox = el.getBoundingClientRect();
    const width = glowWidth();
    const center = linkBox.left - navBox.left + linkBox.width / 2;
    const next = { left: center - width / 2, width };
    lastGlow = next;
    setGlow({ ...next, visible: true });
  }, [glowWidth]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 24);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  useIsoLayoutEffect(() => {
    const current = navItems.find((item) => item.isActive(pathname));
    if (!current || current.sedia) { setGlow((g) => ({ ...g, visible: false })); return; }
    moveGlowTo(linkRefs.current[current.href]);
  }, [pathname, moveGlowTo]);

  useEffect(() => {
    const current = navItems.find((item) => item.isActive(pathname));
    if (!current || current.sedia) return;
    const onResize = () => moveGlowTo(linkRefs.current[current.href]);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [pathname, moveGlowTo]);

  return <header className={`site-header${scrolled ? " is-scrolled" : ""}`} data-theme="agency"><div className="shell nav">
    <span className="nav-scroll-glow" aria-hidden />
    <Link className="brand logo-brand" href="/" aria-label="AB Web Agency, home" onClick={close}><Image src="/brand/abwebagency-logo.png" alt="AB Web Agency" width={246} height={284} priority /></Link>
    <nav ref={navRef} id="mobile-navigation" className={`primary-nav ${open ? "open" : ""}`} aria-label="Navigazione principale">
      <span className={`nav-glow${glow.visible ? " is-visible" : ""}`} aria-hidden style={{ transform: `translate(${glow.left}px,-50%)`, width: glow.width }} />
      {navItems.map((item) => {
        const isActive = item === activeItem;
        return item.sedia ? (
          <Link key={item.href} className={`sedia-nav-link${isActive ? " is-active" : ""}`} data-theme="sedia" href={item.href} aria-current={isActive ? "page" : undefined} onClick={close}>
            <SediaIcon size={15} /> {item.label}
          </Link>
        ) : (
          <Link
            key={item.href}
            ref={(el) => { linkRefs.current[item.href] = el; }}
            className="nav-link"
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            onClick={(event) => { close(); moveGlowTo(event.currentTarget); }}
          >
            {item.label}
          </Link>
        );
      })}
      <Link className="mobile-quote" href="/preventivo" onClick={close}>Calcola il tuo investimento <span aria-hidden>↗</span></Link>
    </nav>
    <Link className="button button-small nav-quote" href="/preventivo">Calcola il tuo investimento <span aria-hidden>↗</span></Link>
    <button className={`nav-toggle ${open ? "open" : ""}`} type="button" aria-label={open ? "Chiudi menu" : "Apri menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}><i /><i /><i /></button>
  </div></header>;
}
