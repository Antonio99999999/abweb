import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-article";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts } from "@/lib/blog";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog per ristoratori: siti, prenotazioni e crescita",
  description: "Guide pratiche di AB Web Agency su siti per ristoranti, prenotazioni online, Google, gestionali e fidelizzazione.",
  alternates: { canonical: "https://www.abagenziaweb.it/blog" },
  openGraph: { title: "Blog per ristoratori | AB Web Agency", description: "Strategie e strumenti spiegati con chiarezza per rendere più solida la presenza digitale del ristorante.", url: "https://www.abagenziaweb.it/blog" },
};

export default function BlogPage() {
  return <><SiteHeader /><main className="blog-page"><section className="blog-hero"><div className="shell blog-hero-grid"><div><p className="eyebrow">RISORSE PER LA RISTORAZIONE</p><h1>Il digitale spiegato dal punto di vista della sala.</h1><p className="blog-hero-copy">Guide, analisi e casi concreti per aiutare i ristoratori a scegliere strumenti più utili, ricevere prenotazioni e mantenere un rapporto diretto con i clienti.</p></div><aside className="blog-hero-note"><strong>Niente contenuti riempitivi.</strong><p>Ogni articolo parte da una domanda operativa, verifica le fonti e arriva a una decisione applicabile.</p></aside></div></section><section className="shell blog-archive"><div className="blog-archive-head"><div><p className="eyebrow">ULTIMI ARTICOLI</p><h2>Guide da mettere in pratica</h2></div><p>Contenuti originali, fonti indicate e nessuna scorciatoia basata su promesse non verificabili.</p></div><div className="blog-grid">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div></section></main><SiteFooter /></>;
}
