import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticle } from "@/components/blog-article";
import "../blog.css";

const canonical = "https://www.abagenziaweb.it/blog/quanto-costa-sito-web-ristorante";
export const metadata: Metadata = {
  title: "Quanto costa un sito web per ristorante nel 2026?",
  description: "Differenza tra sito economico, professionale e personalizzato: cosa influenza davvero il prezzo, i costi nascosti da valutare e come capire cosa serve al tuo locale.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    locale: "it_IT",
    title: "Quanto costa un sito web per ristorante nel 2026? | AB Web Agency",
    description: "Cosa influenza davvero il prezzo di un sito per ristorante, senza fasce inventate.",
    url: canonical,
    publishedTime: "2026-08-04T09:00:00+02:00",
    authors: ["Antonio Pio Brattoli"],
    images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: "Quanto costa un sito web per ristorante nel 2026?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quanto costa un sito web per ristorante nel 2026? | AB Web Agency",
    description: "Cosa influenza davvero il prezzo di un sito per ristorante, senza fasce inventate.",
    images: [`${canonical}/opengraph-image`],
  },
};

export default function CostoSitoRistoranteArticle() {
  return <BlogArticle currentSlug="quanto-costa-sito-web-ristorante" category="Siti web per ristoranti" title="Quanto costa un sito web per ristorante nel 2026?" intro="Chiedere “quanto costa un sito per il mio ristorante” è come chiedere quanto costa attrezzare una cucina: dipende da cosa deve fare quel sito — prenotazioni dirette, menù digitale, SEO locale — non da quante pagine ha." date="4 agosto 2026" readingTime="9 minuti"
    summary={["Il prezzo di un sito dipende da cosa deve fare, non dal numero di pagine.", "Le voci che pesano di più sono prenotazioni dirette, menù digitale, fotografie, SEO tecnica e manutenzione.", "Prima di firmare, chiedi chi rinnova dominio e hosting, chi aggiorna il sito e se ci sono commissioni sulle prenotazioni.", "Non esiste un prezzo unico: per questo il percorso parte dalle esigenze del locale."]}
        sections={[
      { id: "tre-livelli", title: "Tre livelli, tre logiche diverse", content: <><p>Un sito “economico” nasce di solito da un builder fai-da-te o da un template riadattato: costa poco perché il lavoro di analisi, contenuti e struttura resta quasi interamente a carico del ristoratore. Può bastare per una presenza minima, ma raramente regge il confronto quando serve un percorso di prenotazione affidabile o una SEO locale curata.</p><p>Un sito “professionale” realizzato da un&apos;agenzia segue un processo definito: strategia, design coerente col brand, sviluppo e un minimo di ottimizzazione tecnica. È il livello adatto alla maggior parte dei ristoranti che vogliono un sito che lavori davvero per loro.</p><p>Un progetto “personalizzato” aggiunge componenti su misura — un widget di prenotazione integrato, un&apos;architettura dei contenuti pensata per più sedi, automazioni collegate al gestionale — e richiede più tempo di analisi e sviluppo. Non esiste una soglia di prezzo universale che separi questi tre livelli: dipende da cosa include ciascun progetto specifico.</p></> },
      { id: "cosa-influenza-il-prezzo", title: "Cosa influenza davvero il prezzo", content: <><p>Il numero di pagine incide meno di quanto si pensi. Pesano di più: quanti contenuti (testi, foto, menu) devono essere prodotti o solo impaginati; quali funzionalità servono oltre a una vetrina statica; quante integrazioni sono richieste con strumenti già in uso; quanto lavoro di SEO tecnico serve per partire bene, non solo per “essere online”.</p><p>Anche i tempi di consegna incidono: un progetto compresso in poche settimane richiede più risorse dedicate in parallelo rispetto a uno sviluppato con margine.</p></> },
      { id: "voci-principali", title: "Le voci che pesano di più: prenotazioni, menù, foto, SEO, manutenzione", content: <><ul className="editorial-checklist"><li><strong>Prenotazioni dirette:</strong> un percorso di prenotazione proprio (widget integrato) richiede più lavoro di un semplice link a un portale esterno, ma riduce le commissioni nel tempo. Ne parliamo anche nella guida su <Link href="/blog/aumentare-prenotazioni-dirette-ristorante">come aumentare le prenotazioni dirette</Link>.</li><li><strong>Menù digitale:</strong> leggibile da mobile, aggiornabile senza dover richiamare chi ha sviluppato il sito ogni volta che cambia un piatto.</li><li><strong>Fotografie:</strong> un servizio fotografico reale del locale costa, ma sostituisce foto stock che non raccontano l&apos;esperienza vera.</li><li><strong>SEO tecnica e locale:</strong> struttura, velocità, dati strutturati e coerenza con il Profilo Google non sono un extra: sono ciò che permette al sito di essere trovato.</li><li><strong>Manutenzione:</strong> aggiornamenti, sicurezza e piccole modifiche nel tempo, spesso sottovalutati in fase di preventivo iniziale.</li></ul></> },
      { id: "costi-nascosti", title: "I costi nascosti da valutare prima di firmare", content: <><p>Alcune voci restano fuori dal preventivo iniziale se non vengono chieste esplicitamente. Prima di firmare, vale la pena chiarire chi paga cosa nel tempo.</p><div className="editorial-callout"><strong>Da chiedere sempre:</strong> chi rinnova dominio e hosting, chi si occupa degli aggiornamenti di sicurezza, cosa succede se in futuro vuoi cambiare fornitore, e se il sito prevede una commissione per ogni prenotazione ricevuta tramite un servizio terzo integrato.</div><p>Quest&apos;ultimo punto è spesso il più sottovalutato: un widget di prenotazione con commissione per coperto può costare, nel tempo, più della differenza di prezzo iniziale tra due fornitori.</p></> },
      { id: "capire-cosa-serve", title: "Come capire quale soluzione serve davvero al tuo locale", content: <><p>Prima di chiedere un preventivo, alcune domande aiutano a capire quale livello di progetto ha senso: quante prenotazioni arrivano già online oggi? Il menu cambia spesso o resta fisso per stagione? Hai tempo per gestire contenuti e aggiornamenti o preferisci che se ne occupi chi sviluppa il sito? Usi già un gestionale di prenotazioni, o parti da zero?</p><p>Le risposte cambiano radicalmente cosa serve davvero: un sito con menu fisso e poche prenotazioni ha esigenze diverse da un locale con più sale e un flusso costante di richieste online.</p></> },
      { id: "nessun-prezzo-unico", title: "Perché non esiste un prezzo corretto per tutti", content: <><p>Un prezzo identico per ogni ristorante nasconde quasi sempre un compromesso: o funzioni tagliate per stare nel budget dichiarato, o funzioni pagate anche da chi non ne ha bisogno. Per questo pubblichiamo un percorso guidato invece di una tabella prezzi fissa: puoi <Link href="/preventivo">calcolare il tuo investimento</Link> in base a cosa serve realmente al tuo locale, non a un pacchetto standard.</p><p>Un esempio di trasparenza applicata: i piani di <Link href="/gestionale-ristoranti/prezzi">Sedia</Link>, il gestionale sviluppato da AB Web Agency, sono pubblici proprio perché la differenza tra i piani riguarda funzioni verificabili, non un&apos;etichetta commerciale.</p></> },
    ]}
    sources={[
      { label: "Google Search Central — Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=it", note: "Principi ufficiali per contenuti utili, affidabili e orientati alle persone: influenzano quanto lavoro editoriale serve in un progetto." },
      { label: "Google Search Central — Understanding Core Web Vitals and Google search results", url: "https://developers.google.com/search/docs/appearance/core-web-vitals", note: "Metriche di velocità e stabilità che incidono sul lavoro tecnico necessario, e quindi sul costo dello sviluppo." },
      { label: "W3C — Web Content Accessibility Guidelines 2.2", url: "https://www.w3.org/TR/WCAG22/", note: "Riferimento tecnico per l'accessibilità: una voce di lavoro reale, non un dettaglio facoltativo." },
    ]} />;
}
