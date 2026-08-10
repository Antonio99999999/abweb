import type { Metadata } from "next"; import Link from "next/link"; import { SiteFooter } from "@/components/site-footer"; import { SiteHeader } from "@/components/site-header"; import { SediaIcon } from "@/components/sedia-icon"; import { BUSINESS } from "@/lib/business"; import { breadcrumbSchema } from "@/lib/breadcrumb";
const canonical = "https://www.abagenziaweb.it/servizi";
export const metadata: Metadata = { title: "Servizi", description: "Siti web, automazioni, SEO locale e Sedia: i servizi di AB Web Agency per ristoranti e attività locali.", alternates: { canonical } };
const data=[{id:"siti",num:"01",title:"Siti web per ristoranti che trasformano interesse in azione",text:"Un sito non è una brochure. È il punto in cui posizionamento, contenuti, esperienza e conversione si incontrano.",href:"/siti-web-ristoranti"},{id:"automazioni",num:"02",title:"Automazioni che lasciano spazio al servizio",text:"Progettiamo flussi concreti che collegano richieste, contatti e processi. Per rispondere meglio senza aggiungere lavoro invisibile.",href:"/automazioni-ristoranti"},{id:"crescita",num:"03",title:"Consulenza SEO per ristoranti",text:"Google Business Profile, ricerche locali, contenuti del sito e prenotazioni dirette in un unico percorso, con dati reali che guidano le decisioni.",href:"/seo-locale-ristoranti"},{id:"gestionale",num:"04",title:"Sedia, il gestionale costruito sulla sala vera del tuo ristorante",text:"Sviluppiamo anche Sedia: non un'agenda generica, ma un gestionale di prenotazioni che parte dalla vera disposizione dei tavoli del locale, con widget integrabile e nessuna commissione per prenotazione.",href:"/gestionale-ristoranti",sedia:true}];

// Deriva lo schema Service direttamente dagli stessi dati renderizzati in pagina: titolo e
// descrizione restano sempre identici a ciò che l'utente legge, senza doverli mantenere due volte.
// Ogni voce punta ora alla propria pagina dedicata (Fase 3), non a un anchor su questo hub.
const servicesSchema = { "@context": "https://schema.org", "@graph": data.map((x) => ({ "@type": "Service", name: x.title, description: x.text, provider: { "@type": "ProfessionalService", name: BUSINESS.name, url: BUSINESS.url }, areaServed: BUSINESS.areaServed, url: `${BUSINESS.url}${x.href}` })) };

const breadcrumb = breadcrumbSchema([{ name: "Home", url: BUSINESS.url }, { name: "Servizi", url: canonical }]);

// Logo di Sedia (icona "Armchair" di lucide, riprodotta in SVG puro per non introdurre
// la dipendenza lucide-react in questo repo) + wordmark in serif, come sulla sua home.
function SediaLogo(){return <div className="sedia-logo">
  <span className="sedia-logo-badge"><SediaIcon size={20}/></span>
  <span className="sedia-logo-word">Sedia</span>
</div>}

function SediaVisual(){return <div className="sedia-visual" role="img" aria-label="Logo di Sedia">
  <SediaLogo/>
  <small>Prenotazioni per ristoranti</small>
</div>}

export default function Services(){return <><SiteHeader/><main id="main-content"><section className="page-hero shell"><p className="eyebrow">SERVIZI</p><h1>Ogni intervento è una parte del sistema. Non una voce da spuntare.</h1><p>Uniamo strategia, design e tecnologia per ristoranti e attività locali che vogliono crescere con più controllo. Scegli il punto da cui partire.</p></section><section className="service-pages">{data.map((x,i)=><article id={x.id} className={`service-page${x.sedia?" sedia-feature":""}`} data-theme={x.sedia?"sedia":undefined} key={x.id}><div className="shell service-page-grid"><span>{x.num}</span><div><h2>{x.title}</h2><p className="lead">{x.text}</p>{x.sedia?<Link className="sedia-cta" href={x.href}>Scopri Sedia <span aria-hidden>→</span></Link>:<Link className="text-link" href={x.href}>Scopri di più <span aria-hidden>→</span></Link>}{x.sedia&&<Link className="text-link sedia-article-link" href="/blog/quandoo-chiude-alternativa-sedia">Leggi la guida al passaggio da Quandoo a Sedia <span>→</span></Link>}{x.id==="siti"&&<Link className="text-link sedia-article-link" href="/siti-web-ristoranti-torino">Sei a Torino? Scopri la pagina dedicata <span>→</span></Link>}</div>{x.sedia?<SediaVisual/>:<div className={`service-visual visual-${i}`}><i/><i/><i/></div>}</div></article>)}</section><section className="final-cta"><div className="shell"><p className="eyebrow">NESSUN PACCHETTO PRECONFEZIONATO</p><h2>Partiamo da cosa deve cambiare, non da cosa dobbiamo venderti.</h2><Link className="button button-light" href="/preventivo">Calcola il tuo investimento <span>→</span></Link><Link className="text-link" href="/chi-siamo" style={{display:"block",marginTop:18}}>Scopri chi siamo <span aria-hidden>→</span></Link></div></section></main><SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /></>}
