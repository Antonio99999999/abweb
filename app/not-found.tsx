import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  description: "La pagina che cerchi non esiste o è stata spostata.",
  robots: { index: false, follow: true },
  alternates: { canonical: undefined },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="shell" style={{ padding: "110px 0", textAlign: "center" }}>
        <p className="eyebrow">ERRORE 404</p>
        <h1>Questa pagina non esiste</h1>
        <p style={{ maxWidth: 520, margin: "16px auto 0" }}>Il collegamento potrebbe essere sbagliato, oppure la pagina è stata spostata o rimossa.</p>
        <div className="hero-actions" style={{ justifyContent: "center", marginTop: 30 }}>
          <Link className="button" href="/">Torna alla home <span aria-hidden>→</span></Link>
          <Link className="text-link" href="/blog">Vai al blog <span aria-hidden>→</span></Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
