# AB Web Agency — Audit strategico e piano di rilancio

Data dell’audit: 19 luglio 2026  
Ambito: https://abwebagencies.com/

## Sintesi esecutiva

Il sito comunica una promessa utile — digitalizzare ristoranti e attività locali — e contiene già due leve di conversione interessanti: il preventivo interattivo e il lead magnet “Metodo Mastro”. Oggi, però, la forma di pubblicazione e la presentazione riducono drasticamente la percezione di valore. Il risultato appare più vicino a una presentazione grafica esportata che al sito di una web agency premium, e ciò entra in conflitto con l’obiettivo di vendere progetti ad alto valore.

La priorità non è un restyling cosmetico: è migrare da Canva a una codebase web proprietaria, costruire una vera architettura informativa, rendere misurabile il funnel e ricostruire il preventivatore nel sito. È inoltre necessario allineare il posizionamento: il sito alterna “ristoranti e attività locali” e servizi generici (IT, web app, social, e-mail), senza spiegare con precisione per chi AB Web Agency è la scelta migliore né con quali prove.

### Decisioni raccomandate

1. **Riprogettare e ricostruire il sito, non modificare l’export Canva.** L’export ha un documento HTML di circa 258 KB per pagina, 10 script, circa 324 riferimenti a media nella home e metadati minimi; ogni URL della sitemap restituisce sostanzialmente lo stesso contenuto. È un limite strutturale, non estetico.
2. **Mantenere il concetto di preventivo istantaneo, ma rifarlo in-app** come qualificatore commerciale, non come listino automatico definitivo.
3. **Mantenere “Metodo Mastro”, ma riprogettarlo** come caso studio proprietario + lead magnet mirato ai ristoratori; oggi è nascosto nella home e non ha una pagina/landing dedicata.
4. **Posizionamento consigliato:** “Siti, automazioni e acquisizione clienti per ristoranti e attività locali che vogliono crescere senza rincorrere strumenti scollegati.” La home deve rivolgersi in primo luogo ai ristoranti; i servizi per altre attività vanno in un percorso separato o presentati come verticale secondaria.

## Evidenze tecniche rilevate

- Il sito è un `export_website` di Canva, servito da Cloudflare; non è presente un progetto sorgente nella workspace ricevuta.
- `robots.txt` restituisce 404. `sitemap.xml` esiste ma contiene soltanto home, `/il-nostro-metodo` e `/social-e-it-per-aziende`.
- Le tre URL in sitemap restituiscono lo stesso blocco di contenuti nel payload. Questo crea una debolezza di differenziazione/indexabilità delle pagine.
- I titoli correnti sono generici (“Home”, “Il nostro metodo”, “Social e IT per aziende”). Mancano meta description, canonical, Open Graph description/image dedicata, Twitter card e markup Schema.
- Il preventivatore apre un Google Apps Script esterno. È un wizard in 10 step con prezzi hard-coded, salvataggio lead via `google.script.run` e stampa browser travestita da download PDF.
- La verifica Google PageSpeed automatica non era disponibile per quota pubblica; le criticità di performance indicate sotto derivano dall’implementazione osservabile e devono essere confermate con Lighthouse/CrUX dopo la ricostruzione.

## Audit completo

### 1. Brand identity e credibilità

**Cosa funziona**

- La combinazione blu navy/arancio è coerente con tecnologia e calore commerciale.
- Il focus su ristorazione e attività locali può diventare un posizionamento distintivo; la storia personale legata alla pizzeria è materiale di brand autentico.
- “Metodo Mastro” ha il potenziale di diventare un asset proprietario memorabile.

**Cosa non funziona e perché**

- Il messaggio hero “rendiamo il tuo sogno visibile a tutti” è emotivo ma intercambiabile: non comunica risultato, pubblico, metodo o motivo per credere.
- “Una nuova gen”, “un mondo nuovo” e testi spezzati aumentano l’atmosfera ma diminuiscono precisione e autorevolezza.
- La presenza di un solo contatto e-mail, riferimenti incompleti e assenza di risultati verificabili, testimonianze, processo, team/volto e dati aziendali lascia al visitatore poca evidenza per fidarsi.
- L’immagine premium viene indebolita da refusi e formulazioni poco curate (“intuitivo” scritto “intuivo”, “technica”, “buisness”, “dipartenza”, “mondi”). Per un’agenzia digitale, questi dettagli sono un segnale di rischio.

**Come migliorare**

- Definire brand promise, tono e messaggi di prova: settore, outcome, metodo, tempi e prova sociale.
- Trasformare “Metodo Mastro” in un sistema nominato e documentato, con quattro fasi e deliverable concreti.
- Usare un’identità verbale diretta, esperta e italiana naturale; eliminare slogan generici e anglicismi non necessari.
- Inserire ragione sociale/P. IVA, area servita, e-mail su dominio, link privacy/cookie e contatti rapidi nel footer.

### 2. Home page e gerarchia informativa

**Cosa funziona**

- Il primo blocco identifica il target (“ristoranti e attività locali”) e propone subito il preventivo.
- Sono presenti servizi, contatto, portfolio/clienti e lead magnet: gli ingredienti del funnel esistono.

**Cosa non funziona e perché**

- La sequenza è lunga e non conduce con sufficiente chiarezza: promessa → prove → come funziona → servizi → casi → CTA. Le sezioni competono invece di rafforzarsi.
- Il valore è descritto come elenco di prestazioni. Mancano risultati, casi studio, metriche e scenario iniziale/finale.
- Il portfolio sembra limitato a pochi link esterni; non viene raccontato cosa è stato fatto, per quale problema e con quale impatto.
- Più inviti (“Parlami di te”, “Preventivo istantaneo”, “Fai un preventivo”, “Iniziamo”) usano parole diverse per la stessa azione e frammentano il percorso.
- Il testo estratto mostra forte letter-spacing, maiuscole e righe spezzate. In mobile e per lettori assistivi questo peggiora leggibilità e scansione.

**Come migliorare**

Architettura home proposta:

1. Hero con promessa specifica, CTA primaria “Calcola il tuo investimento” e secondaria “Vedi i progetti”.
2. Fascia fiducia: loghi clienti, località, numero di progetti o altra prova reale verificabile.
3. Problemi che risolvete per ristoranti/attività locali.
4. Metodo Mastro in quattro fasi con output e tempo indicativo.
5. Tre offerte/aree di intervento, non un catalogo indistinto.
6. Casi studio con prima/dopo, deliverable e risultati reali.
7. Preview del preventivatore e FAQ di frizione commerciale.
8. Lead magnet Metodo Mastro + CTA consulenza.
9. Footer completo.

### 3. Servizi, offerte e pagine interne

**Cosa funziona**

- Le aree di servizio sono sensate: sito, social, web app, SEO locale, e-mail/automazioni.
- La pagina “Social e IT per aziende” rende più leggibile la lista delle capacità.

**Cosa non funziona e perché**

- L’offerta si espande in troppe direzioni senza priorità: agenzia web, assistenza IT, social media, web app, SEO e strumenti gestionali. Un potenziale cliente non capisce quale problema compra per primo.
- L’attuale pagina “Offerte speciali” (indicizzata nei risultati di ricerca) usa pacchetti e promesse come “risultati garantiti” senza condizioni o prove. È rischioso per credibilità e compliance.
- Il pricing esposto come pacchetto standard può attirare richieste non qualificate e comprimere un servizio che dovrebbe essere consulenziale.
- Le route in sitemap non ospitano contenuti unici effettivi: non funzionano come landing SEO né come percorso commerciale dedicato.

**Come migliorare**

- Creare pagine autonome: `/siti-web-per-ristoranti`, `/automazioni-per-ristoranti`, `/marketing-e-prenotazioni`, `/casi-studio`, `/metodo-mastro`, `/preventivo`, `/contatti`.
- In ogni pagina: problema, soluzione, deliverable, processo, prova, FAQ e CTA unica.
- Sostituire i pacchetti rigidi con fasce di investimento “da…”, accompagnate da inclusioni/esclusioni chiare e call di fattibilità.

### 4. UX, UI, grafica e responsive

**Cosa funziona**

- La palette esistente ha un buon punto di partenza e i blocchi grafici provano a creare ritmo.
- Il preventivatore adotta carte selezionabili e una barra di progresso: pattern comprensibili.

**Cosa non funziona e perché**

- Canva favorisce posizionamento grafico e immagini rispetto a componenti semantici, griglie fluide e comportamento robusto. Il sito non dispone di un design system riutilizzabile.
- Ombre, font, pesi e bordi sembrano applicati per sezione invece che per ruolo. Questo produce una sensazione composita, non di prodotto editoriale premium.
- L’alternanza di testo molto grande, maiuscole e allineamenti centrati limita la lettura di paragrafi e liste.
- La navigazione non emerge come sistema chiaro di pagine e priorità. I visitatori devono scorrere molto prima di capire prova e prossima azione.
- Il responsive del preventivatore passa da due colonne a una, ma non affronta comodità touch, persistenza del riepilogo, lunghezza di 10 step, tasti indietro, focus e salvataggio parziale.

**Come migliorare**

- Costruire componenti HTML semantici: header sticky, menu mobile, container 1200 px, sezioni 80–128 px, griglia 12 colonne desktop/4 mobile.
- Usare un solo H1, H2 per le sezioni e testo massimo 65–72 caratteri per riga.
- Far diventare il portfolio una griglia di case study con thumbnail reale, tag, obiettivo e outcome.
- Progettare mobile come primo caso: CTA sticky discreta, target touch 44 px, card full-width, form con tastiera corretta.

### 5. Accessibilità

**Cosa non funziona e perché**

- L’export Canva e le card cliccabili via `onclick` del preventivatore non garantiscono semantica di button/radio, focus visibile e tastiera.
- Immagini e blocchi visuali possono non avere alternative testuali utili. Il parsing visuale non sostituisce una struttura heading/navigation semantica.
- Contrasto, focus, errori in linea e annunci di avanzamento non risultano verificati.
- Il preventivatore contiene label/placeholder al posto di label associate e non dichiara adeguatamente lo stato selezionato.

**Come migliorare**

- Target WCAG 2.2 AA: contrasto minimo 4.5:1, focus 3:1, skip link, menu/toggle accessibili, `aria-live` per errori, radio/checkbox reali e label persistenti.
- Immagini decorative con alt vuoto; immagini di progetto con alt descrittivo. Test con tastiera, NVDA/VoiceOver e zoom 200%.

### 6. SEO tecnico e contenuti

**Cosa funziona**

- Esistono italiano, viewport, HTTPS, sitemap e qualche presenza indicizzata.

**Cosa non funziona e perché**

- Manca `robots.txt`; manca canonical; il title home è “Home”; manca meta description; Open Graph è minimo; non emerge structured data.
- Le pagine della sitemap non sono realmente differenziate: la copertura SEO per servizi e intento locale è quasi nulla.
- Il contenuto è più orientato al design che alla gerarchia informativa scansionabile; gli errori linguistici riducono qualità percepita e SEO semantica.
- Le immagini sono referenziate molte volte nel payload e non sono governate da un pipeline di ottimizzazione moderna.

**Come migliorare**

- Definire keyword map per pagina e località realmente servite; evitare pagine città artificiali.
- Generare title/meta/OG/canonical per route; creare `robots.txt`, sitemap dinamica e `Organization` + `ProfessionalService` + `WebSite` + `Service` + `FAQPage` Schema quando pertinente.
- Implementare immagini AVIF/WebP responsive, dimensioni esplicite, preload solo dell’immagine hero e lazy load del resto.
- Collegare Search Console, GA4 e consent mode/cookie banner conforme prima del lancio.

### 7. Performance e tecnologia

**Cosa non funziona e perché**

- Un export Canva porta runtime e asset di editor che non servono a una landing production; 10 script e un payload iniziale elevato penalizzano LCP/INP/CLS potenziali e controllabilità.
- Il contenuto e gli asset non sono versionati nella workspace; aggiornamenti, QA, rollback, test e riuso diventano fragili.
- Il preventivatore è su dominio esterno: spezza contesto, analytics e continuità di brand.

**Come migliorare**

- Ricostruire in Next.js (App Router) + TypeScript + Tailwind CSS + componenti propri; deploy su Vercel/Cloudflare con immagini ottimizzate.
- Budget iniziale: JS route home <170 KB gzip, LCP <2.5 s su mobile, INP <200 ms, CLS <0.1. Validazione Lighthouse + WebPageTest + dati reali post-lancio.
- CMS leggero (Sanity o Payload) soltanto per case study, FAQ, servizi e contenuti; il resto in codice per stabilità.

### 8. Copywriting e CRO

**Cosa funziona**

- La domanda “Parlami di te” invita alla conversazione e può funzionare nella fase bassa del funnel.
- Il lead magnet include benefici concreti (checklist, 90 giorni, caso reale).

**Cosa non funziona e perché**

- Le CTA sono tante e non coerenti; il visitatore non sa se riceverà un prezzo, una consulenza o un contatto generico.
- Mancano obiezioni chiave: tempi, investimento, cosa è incluso, cosa succede dopo, perché non un template/marketplace, chi segue il progetto.
- “Preventivo istantaneo” promette precisione, ma il risultato è una fascia ottenuta con moltiplicatori generici. Questo può erodere fiducia quando il prezzo definitivo cambia.
- Il form di contatto storico usa consenso e testo privacy poco chiari. Il nuovo funnel deve rendere esplicito scopo, tempo di risposta e trattamento dati.

**Come migliorare**

- CTA primaria unica per contesto: “Calcola il tuo investimento” in alto, “Prenota una consulenza strategica” dopo i casi studio.
- Copy orientato a outcome: “Trasforma le richieste e le prenotazioni in un sistema misurabile”, non “creazione sito e gestione”.
- Inserire microcopy: “Richiede 2 minuti”, “Ricevi una fascia di investimento, non un impegno”, “Risposta entro 1 giorno lavorativo”.
- Tracciare funnel: `cta_click`, `quote_started`, `quote_step_completed`, `quote_completed`, `lead_submitted`, `calendar_booked`.

## Preventivo istantaneo — valutazione e scelta

### Stato attuale

La soluzione Apps Script è funzionale come prototipo: raccoglie scelta servizi, dati di contatto e genera una stima. Tuttavia è una pagina Google esterna, ha styling inline, logica e prezzi hard-coded nel client, 10 step spesso non necessari, PDF prodotto tramite print del browser e dipende da chiamate Apps Script per la persistenza. Il messaggio “dati protetti” non sostituisce una policy, misure documentate o un flusso privacy robusto.

### Decisione

**Rifarlo e integrarlo direttamente nel sito.** Non eliminare il preventivo: è una buona leva di qualificazione, ma convertirlo in un “Project Planner” premium da 5–7 step adattivi, con un risultato che esplicita “fascia di investimento” e successiva call di allineamento.

### Architettura proposta

- Frontend Next.js: stato locale, URL/step ripristinabili, scheda riepilogo, validazione server-side, piena accessibilità.
- Backend: API route/server action + database Postgres gestito (Supabase o Neon) per lead e risposte; e-mail transazionale Resend; protezione Cloudflare Turnstile; rate limit.
- CRM: invio a HubSpot/Pipedrive/Attio o CRM scelto tramite webhook. Non imporre un CRM prima di conoscerne l’uso attuale.
- PDF: non al primo rilascio. Inviare una e-mail con riepilogo e fissare una call vale più di un PDF stampato; se utile, generarlo server-side in una seconda iterazione.

### Google Sheets

Google Sheets può restare un **export operativo secondario** o un pannello temporaneo attraverso Make/Zapier/n8n. Non dovrebbe essere il database principale: non offre controllo accessi granulare, audit, qualità dati, relazioni, robustezza API e gestione consenso adeguati a un funnel commerciale che cresce.

## Metodo Mastro — valutazione e scelta

**Da mantenere, ma riprogettare completamente.** È l’elemento più vicino a un IP proprietario: un caso reale, checklist e piano in 90 giorni parlano al target ristorazione. Oggi però è una sezione tardiva nella home, con copy incoerente (“SBS”, refusi) e senza una landing che trasformi l’interesse in lead qualificato.

### Nuova struttura

1. Hero: “Il sistema in 90 giorni per trasformare la presenza digitale del tuo ristorante”.
2. Per chi è / per chi non è.
3. Caso reale: situazione iniziale, interventi, numeri verificabili e vincoli.
4. Quattro pilastri: posizionamento, conversione, acquisizione, automazione/fidelizzazione.
5. Cosa si riceve: checklist, piano, template; form e consenso chiari.
6. CTA: download della guida oppure consulenza, mai entrambe allo stesso livello.

Il download deve essere gestito nel sito, con e-mail di consegna e nurture breve; non come semplice sezione grafica.

## Nuova identità visiva proposta

### Direzione

Una “precisione calda”: base molto scura e sobria, superfici chiare, un accento arancio controllato, casi studio reali e un sistema di dettagli tecnici minimali. Non gradienti vistosi né neon da template SaaS.

### Token di design

| Elemento | Scelta |
|---|---|
| Colori | Ink `#0B1220`; Navy `#12233D`; Cloud `#F6F8FB`; White `#FFFFFF`; Orange `#F97316`; Teal proof `#14B8A6`; Border `#DCE3EC` |
| Tipografia | Manrope per UI e testo; DM Sans oppure Instrument Sans per heading. Fallback di sistema. |
| Scala | 12, 14, 16, 18, 20, 24, 32, 40, 56, 72 px con `clamp()` per H1. |
| Spazio | Base 4 px; sezioni 80/112/128 px desktop, 56/72 px mobile. |
| Layout | Max-width 1200 px; griglia 12 colonne; lettura 680 px. |
| Radius | 12 px controlli; 20 px card; 28 px hero/case-study. |
| Ombre | Una sola scala delicata: `0 12px 30px rgba(11,18,32,.08)`. |
| Bottoni | Primario navy su chiaro / arancio solo per enfasi; altezza 48–52 px, icona freccia, stati focus/disabled. |
| Card | Fondo bianco, bordo sottile, padding 24–32 px; elevate solo su hover. |
| Icone | Lucide, tratto 1.75 px; no mix emoji/icona stock. |
| Animazioni | Reveal 16–24 px/400 ms, hover 160 ms, rispetto `prefers-reduced-motion`; nessun autoplay pesante. |

## Piano di implementazione

### Fase B1 — Fondazioni

- Inizializzare repository Next.js/TypeScript, lint, test e CI.
- Implementare design token, layout, header/footer, metadata, analytics e cookie/consenso.
- Definire contenuti e asset reali necessari; evitare immagini stock come “prova”.

### Fase B2 — Pagine e contenuti

- Costruire home, pagine servizi, Metodo Mastro, casi studio, contatti, FAQ e landing del preventivo.
- Riscrivere tutto il copy, correggere le promesse non dimostrabili e creare componenti riutilizzabili.

### Fase B3 — Funnel preventivo e lead magnet

- Costruire wizard adattivo, persistenza lead, e-mail, antispam, CRM/webhook, tracciamento e dashboard eventi.
- Migrare guide/download e predisporre automazione di follow-up.

### Fase B4 — Qualità e rilascio

- Test mobile, tastiera, screen reader e form; QA SEO, redirect, sitemap/robots, schema e canonical.
- Lighthouse e monitoraggio reale; migrazione DNS/deploy, redirect delle vecchie URL e verifica Search Console.

## Informazioni necessarie prima della Fase B

La workspace non contiene il sorgente del sito. Poiché Canva non offre una codebase estendibile adeguata agli obiettivi, la Fase B deve essere una ricostruzione. Per eseguirla servono:

- repository Git o autorizzazione esplicita a crearne uno nuovo nella workspace;
- logo in formato vettoriale e brand asset disponibili;
- 2–4 case study con immagini e risultati reali utilizzabili;
- ragione sociale/P. IVA, e-mail su dominio, privacy/cookie policy e CRM/indirizzo e-mail destinatario;
- conferma del target prioritario: ristoranti come verticale principale (raccomandato) oppure attività locali multi-settore.

Senza questi elementi posso costruire una base completa con contenuti provvisori, ma non pubblicarla in modo credibile o collegarla a un flusso lead reale.
