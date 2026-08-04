import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return <footer className="site-footer" data-theme="agency"><div className="shell footer-grid">
    <div><Link className="brand brand-light footer-logo" href="/"><Image src="/brand/abwebagency-logo.png" alt="AB Web Agency" width={80} height={92}/></Link><p>Strategia, design e tecnologia per rendere la crescita digitale più semplice da gestire.</p></div>
    <div><p className="eyebrow">ESPLORA</p><Link href="/servizi">Servizi</Link><Link href="/chi-siamo">Chi siamo</Link><Link href="/metodo-mastro">Metodo Mastro</Link><Link href="/blog">Blog</Link><Link href="/preventivo">Preventivo</Link></div>
    <div><p className="eyebrow">CONTATTI</p><a href="mailto:ab.agenziaweb@gmail.com">ab.agenziaweb@gmail.com</a><a href="https://instagram.com/ab_webagency" target="_blank" rel="noreferrer">Instagram ↗</a><p className="footer-note">Antonio Pio Brattoli · Torino</p></div>
  </div><div className="shell footer-bottom">© {new Date().getFullYear()} AB Web Agency · <Link href="/privacy">Privacy</Link> · <Link href="/cookie">Cookie</Link> · <Link href="/note-legali">Note legali</Link></div></footer>;
}
