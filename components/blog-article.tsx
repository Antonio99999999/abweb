import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts } from "@/lib/blog";
import { BUSINESS } from "@/lib/business";

type Section = { id: string; title: string; content: ReactNode };
type Source = { label: string; url: string; note: string };

export function BlogArticle({
  category, title, intro, date, readingTime, sections, sources, currentSlug,
}: {
  category: string; title: string; intro: string; date: string; readingTime: string;
  sections: Section[]; sources: Source[]; currentSlug: string;
}) {
  const related = blogPosts.filter((post) => post.slug !== currentSlug).slice(0, 3);
  const subject = encodeURIComponent(`Richiesta dal blog: ${title}`);
  const canonical = `https://www.abagenziaweb.it/blog/${currentSlug}`;
  const publishedISO = blogPosts.find((post) => post.slug === currentSlug)?.published ?? "2026-07-29";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: intro,
    datePublished: publishedISO,
    dateModified: publishedISO,
    inLanguage: "it-IT",
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url },
    publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url, logo: { "@type": "ImageObject", url: BUSINESS.logo } },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.abagenziaweb.it/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.abagenziaweb.it/blog" },
      { "@type": "ListItem", position: 3, name: category, item: canonical },
    ],
  };
  return <>
    <SiteHeader />
    <main id="main-content" className="editorial-page">
      <nav className="shell editorial-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span aria-current="page">{category}</span></nav>
      <article>
        <header className="editorial-hero"><div className="shell editorial-hero-inner"><p className="eyebrow">{category}</p><h1>{title}</h1><p className="editorial-lead">{intro}</p><div className="editorial-meta"><time dateTime={publishedISO}>{date}</time><span>·</span><span>{readingTime} di lettura</span></div></div></header>
        <div className="shell editorial-layout">
          <aside className="editorial-toc"><p>In questo articolo</p>{sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</aside>
          <div className="editorial-body">
            {sections.map((section) => <section id={section.id} key={section.id} data-reveal><h2>{section.title}</h2>{section.content}</section>)}
            <section className="editorial-sources" data-reveal><h2>Fonti e metodo</h2><p>Contenuto originale di AB Web Agency. Le fonti sono utilizzate per verificare fatti e indicazioni tecniche; non ne riproduciamo il testo.</p><ol>{sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} <span aria-hidden>↗</span></a><p>{source.note}</p></li>)}</ol></section>
          </div>
        </div>
        <section className="editorial-cta" data-reveal><div className="shell"><div><p className="eyebrow">DAL CONTENUTO AL SISTEMA</p><h2>Vuoi applicarlo al tuo ristorante?</h2><p>AB Web Agency può aiutarti a collegare sito, Google e prenotazioni in un percorso più semplice da trovare e da gestire.</p><p className="editorial-cta-links"><Link className="text-link" href="/servizi">Scopri i servizi <span aria-hidden>→</span></Link><span aria-hidden> · </span><Link className="text-link" href="/metodo-mastro">Guarda il caso studio <span aria-hidden>→</span></Link></p></div><a className="button button-light" href={`mailto:ab.agenziaweb@gmail.com?subject=${subject}`}>Parliamo del tuo ristorante <span aria-hidden>→</span></a></div></section>
        <section className="shell editorial-related"><p className="eyebrow">CONTINUA A LEGGERE</p><h2>Altre guide per ristoratori</h2><div className="blog-grid">{related.map((post) => <BlogCard key={post.slug} post={post} />)}</div></section>
      </article>
    </main>
    <SiteFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
  </>;
}

export function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return <article className={`blog-card blog-card-${post.accent}`} data-reveal><Link href={`/blog/${post.slug}`} aria-label={`Leggi: ${post.title}`}><div className="blog-card-visual" aria-hidden><span>{post.category}</span><i /><i /><i /></div><div className="blog-card-copy"><p>{post.category}</p><h2>{post.title}</h2><p>{post.excerpt}</p><div><time dateTime={post.published}>{post.publishedLabel}</time><span>{post.readingTime}</span></div><b>Leggi l’articolo <span aria-hidden>→</span></b></div></Link></article>;
}
