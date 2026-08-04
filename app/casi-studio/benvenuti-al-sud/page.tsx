import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CaseMetrics } from "@/components/case-metrics";
import { BUSINESS } from "@/lib/business";
import { caseStudies } from "@/lib/case-studies";
import { blogPosts } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/breadcrumb";
import "../../case-studies.css";

const study = caseStudies.find((cs) => cs.slug === "benvenuti-al-sud")!;
const canonical = `https://www.abagenziaweb.it/casi-studio/${study.slug}`;
const title = `${study.client}: caso studio`;
const description = study.summary;

const serviceHref: Record<string, string> = {
  siti: "/siti-web-ristoranti",
  automazioni: "/automazioni-ristoranti",
  crescita: "/seo-locale-ristoranti",
  gestionale: "/gestionale-ristoranti",
};
const serviceLabel: Record<string, string> = {
  siti: "Siti per ristoranti",
  automazioni: "Automazioni per ristoranti",
  crescita: "SEO locale per ristoranti",
  gestionale: "Sedia, il gestionale",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "article", locale: "it_IT", title: `${title} | AB Web Agency`, description, url: canonical, images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title: `${title} | AB Web Agency`, description, images: [`${canonical}/opengraph-image`] },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: BUSINESS.url },
  { name: "Casi studio", url: `${BUSINESS.url}/casi-studio` },
  { name: study.client, url: canonical },
]);

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: `${study.client}: caso studio`,
  description: study.summary,
  about: study.client,
  author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url },
  publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.url, logo: { "@type": "ImageObject", url: BUSINESS.logo } },
};

export default function BenvenutiAlSudCaseStudy() {
  const relatedArticles = blogPosts.filter((post) => study.relatedArticleSlugs.includes(post.slug));
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero shell">
          <p className="eyebrow">CASO STUDIO · {study.sector.toUpperCase()} · {study.location.toUpperCase()}</p>
          <h1>{study.client}</h1>
          <p>{study.summary}</p>
          {study.images[0] && (
            <div style={{ marginTop: 40, maxWidth: 220 }}>
              {/* SVG: next/image non serve SVG per default (dangerouslyAllowSVG disattivato di proposito), img semplice */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={study.images[0].src} alt={study.images[0].alt} width={360} height={360} style={{ width: "100%", height: "auto" }} loading="lazy" />
            </div>
          )}
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">IL PROBLEMA</p>
            <h2>{study.problem}</h2>
          </div>
          <div className="case-proof-copy" style={{ marginTop: 8 }}>
            <ul>
              {study.goals.map((goal) => <li key={goal}>{goal}</li>)}
            </ul>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <p className="eyebrow">LA SOLUZIONE</p>
            <h2>{study.solution}</h2>
          </div>
          <div className="method-grid">
            {study.process.map((step, i) => (
              <article key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>
            ))}
          </div>
          <ul className="case-tech-list">
            {study.technologies.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        </section>

        <section className="section shell case-proof">
          <div className="case-proof-copy">
            <p className="eyebrow">COSA HA CAMBIATO</p>
            <h2>Un sistema più riconoscibile e diretto.</h2>
            <ul>
              {study.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
          <aside className="impact-card" aria-label={`Risultati del caso studio ${study.client}`}>
            <div className="impact-head"><span>RISULTATI</span><b>{study.client} · {study.location}</b></div>
            <CaseMetrics className="impact-metrics" />
            <p>{study.resultsDisclaimer}</p>
          </aside>
        </section>

        {relatedArticles.length > 0 && (
          <section className="section shell editorial-related">
            <p className="eyebrow">APPROFONDISCI</p>
            <h2>Le guide legate a questo progetto</h2>
            <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
              {relatedArticles.map((post) => (
                <Link key={post.slug} className="text-link" href={`/blog/${post.slug}`}>{post.title} <span aria-hidden>→</span></Link>
              ))}
            </div>
          </section>
        )}

        <section className="final-cta">
          <div className="shell">
            <p className="eyebrow">IL PROSSIMO PASSO</p>
            <h2>Vuoi un sistema simile per il tuo locale?</h2>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
              <Link className="button button-light" href="/preventivo">Calcola il tuo investimento <span aria-hidden>→</span></Link>
              <Link className="text-link" href={study.ctaHref}>Esplora Metodo Mastro <span aria-hidden>→</span></Link>
            </div>
            <div style={{ marginTop: 22 }}>
              {study.relatedServiceIds.map((id) => (
                <Link key={id} className="text-link" href={serviceHref[id] ?? "/servizi"} style={{ display: "inline-block", marginRight: 20 }}>{serviceLabel[id] ?? id} <span aria-hidden>→</span></Link>
              ))}
              {study.location === "Torino" && <Link className="text-link" href="/siti-web-ristoranti-torino" style={{ display: "inline-block" }}>Siti per ristoranti a Torino <span aria-hidden>→</span></Link>}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
