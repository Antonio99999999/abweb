import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = { title: "Note legali" };

export default function LegalNotice() {
  return <><SiteHeader /><main className="legal shell"><p className="eyebrow">NOTE LEGALI</p><h1>Informazioni sul sito e condizioni d’uso</h1><p className="legal-updated">Ultimo aggiornamento: 19 luglio 2026</p>
    <section><h2>Gestore del sito</h2><p>Il sito abwebagencies.com è gestito da <strong>Antonio Pio Brattoli</strong>, per il progetto AB Web Agency, Via Francesco De Sanctis 78, 10142 Torino (TO), Italia. Contatto: <a href="mailto:ab.agenziaweb@gmail.com">ab.agenziaweb@gmail.com</a>.</p></section>
    <section><h2>Contenuti e preventivi</h2><p>I contenuti del sito hanno finalità informativa e commerciale. Il configuratore di preventivo restituisce una fascia di investimento puramente indicativa, elaborata in base alle opzioni selezionate. Non costituisce offerta al pubblico, proposta contrattuale, preventivo definitivo né impegno a concludere un contratto.</p><p>Ogni incarico, prezzo, attività, tempi di consegna e condizioni di pagamento saranno definiti esclusivamente in una proposta o accordo scritto successivo.</p></section>
    <section><h2>Proprietà intellettuale</h2><p>Testi, layout, elementi grafici, codice e materiali presenti sul sito sono protetti dalle norme applicabili. I marchi e i loghi di terzi restano di proprietà dei rispettivi titolari e sono utilizzati sul sito a fini di presentazione delle collaborazioni. Non è consentito riprodurre o riutilizzare i contenuti senza autorizzazione, salvo i limiti di legge.</p></section>
    <section><h2>Collegamenti esterni</h2><p>Il sito può contenere collegamenti a siti di terzi. AB Web Agency non controlla né è responsabile dei contenuti, della disponibilità o delle policy di tali siti esterni.</p></section>
    <section><h2>Limitazione di responsabilità</h2><p>Pur curando l’aggiornamento dei contenuti, non è garantita l’assenza di errori o interruzioni. Le informazioni e i risultati descritti nei casi studio dipendono dal contesto specifico e non costituiscono promessa di risultati futuri.</p></section>
  </main><SiteFooter /></>;
}
