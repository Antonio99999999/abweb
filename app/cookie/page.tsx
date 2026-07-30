import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = { title: "Cookie Policy", robots: { index: false, follow: true } };

export default function Cookie() {
  return <><SiteHeader /><main id="main-content" className="legal shell"><p className="eyebrow">COOKIE POLICY</p><h1>Informativa su cookie e strumenti simili</h1><p className="legal-updated">Ultimo aggiornamento: 19 luglio 2026</p>
    <section><h2>Stato attuale del sito</h2><p>AB Web Agency non utilizza cookie di profilazione, pubblicità, analytics o altri strumenti di tracciamento non tecnici. Non sono installati Google Analytics, Meta Pixel, Hotjar o strumenti equivalenti.</p></section>
    <section><h2>Cookie tecnici</h2><p>Il sito può utilizzare esclusivamente tecnologie tecniche strettamente necessarie a erogare e proteggere il servizio, qualora richieste dall’infrastruttura di hosting o dal corretto funzionamento delle pagine. Tali strumenti non sono usati per creare profili personali o per monitorare il comportamento di navigazione.</p></section>
    <section><h2>Perché non compare un banner di consenso</h2><p>Poiché al momento non sono presenti cookie o strumenti di tracciamento non tecnici, non viene richiesto consenso tramite banner. L’informativa è resa disponibile in questa pagina. Se in futuro verranno introdotti analytics, advertising o altri strumenti non tecnici, il sito sarà aggiornato con un sistema di consenso preventivo, una scelta granulare e la possibilità di modificare le preferenze.</p></section>
    <section><h2>Gestione dal browser</h2><p>Puoi gestire o cancellare cookie e dati di navigazione dalle impostazioni del tuo browser. La disabilitazione di eventuali cookie tecnici può compromettere alcune funzioni del sito.</p></section>
    <section><h2>Contatti</h2><p>Per domande relative a questa cookie policy: <a href="mailto:ab.agenziaweb@gmail.com">ab.agenziaweb@gmail.com</a>. Per informazioni sul trattamento dei dati personali consulta anche la <a href="/privacy">Privacy Policy</a>.</p></section>
  </main><SiteFooter /></>;
}
