# AB Web Agency — Fase 2: prestazioni reali, metadata, dati strutturati, linking, Sedia

Data: 30 luglio 2026
Ambito: `C:\Users\anton\Documents\Codex\2026-07-19\va` → https://www.abagenziaweb.it
Base di partenza: `SEO-TECHNICAL-AUDIT.md` (fase 1), letto integralmente prima di iniziare. Nessuna correzione della fase 1 è stata ripetuta o modificata, salvo un caso di regressione reale trovata durante le nuove misurazioni (vedi §8). Nessun commit, push o deploy eseguito.

---

## 1. Sintesi

La fase 1 aveva applicato correzioni tecniche (header di sicurezza, sitemap, dipendenze, accessibilità di base) senza eseguire una misurazione reale delle prestazioni. In questa fase 2 ho eseguito **Lighthouse reale** (non stimato) su 7 pagine × mobile/desktop sulla build di produzione locale, e ho usato quei dati per trovare e correggere un problema di contrasto colore reale e riproducibile (non solo teorico) che nella fase 1 non era stato misurato. Ho poi completato favicon/icone/manifest (assenti), centralizzato i dati aziendali per i JSON-LD, ampliato i dati strutturati (`WebSite`, `Service`, `BreadcrumbList` aggiuntivo), migliorato il linking interno tra blog e servizi, creato la pagina `/gestionale-ristoranti` richiesta da `app/CLAUDE.md` (usando solo contenuti già reali e pubblicati altrove nel sito), preparato un modello dati per i case study senza pubblicare pagine con dati inventati, analizzato la causa tecnica precisa del PDF da 24 MB, e introdotto ESLint (che ha trovato e mi ha permesso di correggere un bug reale in un componente).

Tutte le pagine pubbliche restano interamente statiche (nessuna trasformazione di Server Component in Client Component), la build passa senza errori né warning, ESLint è pulito, il typecheck è pulito, e `npm audit` sulle sole dipendenze di produzione riporta 0 vulnerabilità.

---

## 2. Verifica del repository prima di iniziare

- `git status` all'avvio: **pulito**. Il commit `4efc4e8 "SEO technical audit"` conteneva già tutte le modifiche della fase 1 (l'utente lo ha committato autonomamente tra le due sessioni). Non ho sovrascritto nulla di non committato.
- Framework confermato: Next.js 16.2.12 (App Router), React 19.2.7, TypeScript 5.7.3, Turbopack.
- Build iniziale eseguita prima di ogni modifica: **riuscita**, 0 errori.
- Verifica delle correzioni della fase 1: tutte presenti e funzionanti — header di sicurezza in `next.config.mjs`, sitemap con date reali, skip-link, `BreadcrumbList` sui 4 articoli, 3 nuove `opengraph-image.tsx`, link legali del footer via `next/link`, `sizes` sulle immagini cliente. Nessuna incoerenza trovata tra il report della fase 1 e il codice reale.

---

## 3. Lighthouse reale — come è stato eseguito

Lighthouse **era disponibile** in questo ambiente: Google Chrome è installato localmente (`C:\Program Files\Google\Chrome\Application\chrome.exe`) e Lighthouse CLI è stato scaricato on-demand via `npx lighthouse` (non aggiunto come dipendenza del progetto).

Procedura eseguita realmente:
1. `npm run build` (build di produzione) poi `npm run start -- -p <porta>`.
2. Per ciascuna delle 7 pagine richieste, due esecuzioni: preset mobile (default, throttling simulato) e `--preset=desktop`.
3. Categorie misurate: Performance, Accessibility, Best Practices, SEO. Nessun punteggio è stato scritto a mano: tutti i numeri sotto sono letti dai file JSON prodotti da Lighthouse.

**Limite dichiarato esplicitamente**: la misurazione è avvenuta su `http://localhost` (build di produzione locale), non sul dominio pubblico. Questo è corretto per isolare le prestazioni del codice dell'applicazione (bundle, hydration, CLS, accessibilità del markup), ma **non riflette latenza di rete reale, CDN Vercel, TLS handshake o condizioni di rete mobile reali**. Dopo il deploy, ripetere la misurazione su `https://www.abagenziaweb.it` con PageSpeed Insights (che usa dati di campo CrUX quando disponibili) per numeri realistici lato utente.

### Risultati Lighthouse — MOBILE (misurati)

| Pagina | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Home `/` | 98 | 100 | 100 | 100 | 2.3s | 0 | 20ms |
| `/servizi` | 99 | 100 | 100 | 100 | 2.3s | 0 | 20ms |
| `/metodo-mastro` | 98 | 96* | 100 | 100 | 2.3s | 0 | 20ms |
| `/preventivo` | 100 | 100 | 100 | 100 | 1.8s | 0 | 20ms |
| `/blog` | 99 | 100 | 100 | 100 | 2.0s | 0 | 10ms |
| Articolo (Quandoo) | 97 | 100 | 100 | 100 | 2.5s | 0 | 20ms |
| `/contatti` | 99 | 100 | 100 | 100 | 2.3s | 0 | 20ms |

### Risultati Lighthouse — DESKTOP (misurati)

| Pagina | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Home `/` | 100 | 100 | 100 | 100 | 0.6s | 0 | 0ms |
| `/servizi` | 100 | 100 | 100 | 100 | 0.5s | 0 | 0ms |
| `/metodo-mastro` | 100 | 96* | 100 | 100 | 0.5s | 0 | 0ms |
| `/preventivo` | 100 | 100 | 100 | 100 | 0.5s | 0 | 0ms |
| `/blog` | 100 | 100 | 100 | 100 | 0.5s | 0 | 0ms |
| Articolo (Quandoo) | 100 | 100 | 100 | 100 | 0.6s | 0 | 0ms |
| `/contatti` | 100 | 100 | 100 | 100 | 0.5s | 0 | 0ms |

`*` = unico punteggio non a 100, per una scelta di design intenzionale lasciata invariata: vedi §8.

CLS pari a 0 su tutte le pagine conferma che le correzioni `sizes`/dimensioni immagini della fase 1 e l'assenza di layout shift nelle animazioni sono efficaci. TBT quasi nullo conferma il JavaScript client minimo (nessuna libreria pesante, `"use client"` limitato a ciò che serve davvero, già verificato in fase 1).

**Nota sui numeri mobile "reali ma generosi"**: la simulazione mobile di Lighthouse applica throttling CPU/rete, ma gira comunque su un server locale senza latenza di rete reale: i tempi assoluti (LCP 1.8–2.5s) sono quindi migliori di quanto ci si aspetterebbe su una rete mobile reale con Vercel in produzione. Il dato utile qui non è il numero assoluto ma il fatto che **non emergono colli di bottiglia strutturali** (bundle enorme, hydration lenta, richieste bloccanti): quelli si vedrebbero comunque anche in locale.

---

## 4. Il problema reale trovato dalla misurazione: contrasto colore

Lighthouse ha segnalato **violazioni reali e riproducibili** di `color-contrast` (non presenti nel report della fase 1, che non aveva eseguito un audit di accessibilità reale). Ho verificato ogni violazione anche visivamente con screenshot Chrome headless prima di intervenire.

### 4.1 Bug visivo confermato: testo invisibile nella sezione finale arancione

Le sezioni `.final-cta` (sfondo arancione `#f97316`, presenti in home, `/servizi`, `/metodo-mastro`) contengono un `<p className="eyebrow">` che ereditava lo stesso arancione `var(--orange)` **come colore del testo**: testo arancione su sfondo arancione, di fatto invisibile. Confermato con screenshot prima/dopo (non solo calcolo teorico: Lighthouse stesso non l'aveva segnalato, probabilmente per un limite del suo campionamento — l'ho trovato analizzando manualmente i rapporti di contrasto e verificato via screenshot reale).

**Correzione**: `.final-cta .eyebrow{color:#1e1711}` in `app/globals.css`, riusando lo stesso colore scuro già usato per gli altri testi di quella sezione.

### 4.2 Contrasto insufficiente su sfondo chiaro (misurato da Lighthouse)

L'arancione del brand `#f97316` su bianco ha un rapporto di contrasto di **2.80:1** (serve 4.5:1 per testo normale). Colpiva: l'etichetta `.eyebrow` (usata come "kicker" in quasi ogni sezione del sito), i numeri `01/02/03/04` in `.problem-grid`/`.method-grid`, i numeri `.service-page-grid>span` su `/servizi` (visibili solo da desktop, per questo la fase 1 mobile-first non li aveva notati), i passi numerati in `.contact-flow` su `/contatti`, e il bottone `.sedia-cta` (bianco su `#d95531`, 3.97:1).

**Correzione, senza cambiare la palette del brand**:
- Nuova variabile `--orange-ink:#b84e09` in `app/globals.css` (stesso arancione, più scuro: 5.08:1 su bianco), usata per il testo su sfondo chiaro (`.eyebrow`, i numeri dei grid, i passi di `/contatti`).
- Dove `.eyebrow` compare su sfondo scuro (navy, dove l'arancione brillante ha già 5.62:1 ed è corretto) ho aggiunto un'eccezione esplicita che mantiene `var(--orange)` originale: `.section-navy .eyebrow, .dark-panel .eyebrow, .guide-lead .eyebrow, .case-card .eyebrow, .quote-aside .eyebrow, .editorial-cta .eyebrow, .site-footer .eyebrow`.
- `.sedia-cta`: il colore di sfondo di riposo è diventato `#aa3518` (che nel codice esisteva già come colore hover — 6.50:1, nessun nuovo colore introdotto), con un hover ancora più scuro `#8a2a12` (8.68:1).

**Verifica**: ho rieseguito Lighthouse dopo ogni correzione. L'accessibilità è passata da 96 (home, mobile) e da violazioni multiple su `/servizi` e `/contatti` (desktop) a **100 su tutte le pagine tranne una** (vedi sotto).

### 4.3 Cosa NON ho corretto, e perché

`ol.mastro-timeline > li > div > p` (su `/metodo-mastro`) resta a `color-contrast` fallito — è l'**unico** punteggio Accessibility non a 100 rimasto (96 invece di 100, su entrambe le pagine e viewport). Causa: gli step non attivi della timeline hanno `opacity:.48` per dare enfasi visiva allo step corrente durante lo scroll (`components/mastro-timeline.tsx`). È una scelta di design intenzionale e distintiva, non un difetto — l'ho lasciata invariata perché le istruzioni della fase 2 chiedono esplicitamente di non rimuovere animazioni/caratteristiche di design senza una motivazione misurabile, e qui il "difetto" è generato apposta per guidare l'attenzione. Se si vuole comunque risolverlo, l'intervento minimo sarebbe alzare l'opacità minima (es. da .48 a .6) mantenendo comunque l'effetto di enfasi: non l'ho fatto autonomamente perché è una decisione di design, non un bug.

---

## 5. Favicon, icone e Web App Manifest

**Stato precedente**: nessun `favicon.ico`, nessuna `icon.png`/`apple-icon.png` per convenzione di file, nessun manifest. Il layout dichiarava `icons: { icon: "/brand/abwebagency-logo.png", ... }`, cioè il logo completo (500×500, include il payoff "Web agency" in piccolo) usato tal quale come favicon — a 16–32px sarebbe stato solo una macchia illeggibile.

**Cosa ho fatto**: ho ritagliato (non ridisegnato) il solo simbolo "catena + AB" dal file logo ufficiale esistente (`public/brand/abwebagency-logo.png`), usando `sharp` (già presente come dipendenza di Next.js) per un ritaglio geometrico puro — nessun elemento grafico nuovo, nessuna riscrittura del logo. Ho verificato visivamente ogni asset generato prima di collegarlo.

File creati:
- `app/favicon.ico` — multi-risoluzione (16/32/48px), costruito come contenitore ICO valido con PNG incorporati (verificato byte per byte: header, directory entries e firme PNG corrette).
- `app/icon.png` — 256×256, sfondo trasparente.
- `app/apple-icon.png` — 180×180, sfondo bianco opaco (Apple richiede sfondo pieno).
- `public/icons/icon-192.png` e `icon-512.png` — per il manifest.
- `app/manifest.ts` — convenzione App Router, genera `/manifest.webmanifest`: `name`, `short_name`, `description` (riusa la stessa description del layout, nessun testo nuovo), `start_url`, `display: "standalone"`, `theme_color: "#12233d"` (navy del brand), `background_color: "#ffffff"`, le due icone sopra. **Nessun service worker, nessuna funzionalità offline**: solo integrazione browser/mobile (icona "aggiungi a schermata Home", colore della barra del browser), non è stata dichiarata alcuna capacità PWA che il sito non ha.

Ho anche rimosso il campo `icons` manuale da `app/layout.tsx`: ora le convenzioni di file di App Router (`favicon.ico`, `icon.png`, `apple-icon.png`) vengono agganciate automaticamente da Next.js, evitando doppie dichiarazioni.

**Verificato via HTTP sulla build di produzione**: `/favicon.ico` (200, `image/x-icon`), `/icon.png` e `/apple-icon.png` (200, `image/png`), `/manifest.webmanifest` (200, `application/manifest+json`), e i tag `<link rel="icon">`/`<link rel="apple-touch-icon">`/`<link rel="manifest">` generati automaticamente nell'`<head>` con le dimensioni corrette. Aggiunto anche `viewport.themeColor` in `app/layout.tsx` (prima assente), verificato nel meta tag renderizzato.

---

## 6. Dati strutturati: centralizzazione ed espansione

**Nuovo file `lib/business.ts`**: fonte unica tipizzata per nome, indirizzo, email, logo, area servita, `sameAs` (Instagram) e fondatore (Antonio Pio Brattoli, già dichiarato come titolare in `/privacy` e `/note-legali` — nessun dato nuovo, solo reso coerente). Segue lo stesso pattern già usato da `lib/blog.ts` e `lib/sedia.ts`, nessuna architettura nuova introdotta.

Rifattorizzato per usare `lib/business.ts` (stessi dati, zero duplicazione): lo schema `ProfessionalService` in home (ora include anche `logo` e `founder`, prima assenti), gli schema `BlogPosting` dei 4 articoli (ora `publisher.logo` presente ovunque, prima solo sull'articolo Quandoo).

**Aggiunte**:
- `WebSite` JSON-LD in `app/layout.tsx`, presente su ogni pagina (verificato via HTTP). Nessun `SearchAction`: il sito non ha una ricerca interna, dichiararlo sarebbe stato falso.
- `Service` JSON-LD su `/servizi`, uno per ciascuna delle 4 offerte reali — generato **direttamente dagli stessi dati (`data.map`) che renderizzano la pagina**, quindi nome e descrizione nello schema sono sempre identici a quelli visibili, per costruzione (non due copie da mantenere allineate).
- `Service` + `FAQPage` JSON-LD sulla nuova `/gestionale-ristoranti` (§9).
- `BreadcrumbList` aggiuntivo (oltre a quello già fatto in fase 1 per i 4 articoli): nessuno aggiunto ad altre pagine, perché nessun'altra pagina del sito mostra un breadcrumb visibile — aggiungere lo schema senza breadcrumb visibile avrebbe violato il principio "ogni breadcrumb corrisponda alla navigazione reale" già seguito in fase 1.

Nessuna entità `Organization` duplicata o discordante: resta un solo tipo (`ProfessionalService`) per l'azienda, in linea con quanto richiesto.

---

## 7. Linking interno

### 7.1 Mappa prima dell'intervento

Header e footer (presenti su ogni pagina) collegavano già tutte le pagine di primo livello tra loro: nessuna pagina era realmente "orfana" in senso stretto. I problemi erano di qualità, non di reachability:

- **Articoli del blog → servizi/caso studio**: nessuno dei 4 articoli linkava a `/servizi` o `/metodo-mastro`. L'unica CTA era un `mailto:` generico. Il percorso "articolo → servizio → caso studio → contatto" richiesto dal brief non esisteva.
- **`/servizi` → blog**: la scheda Sedia non linkava all'articolo che approfondisce il prodotto.
- **Sedia**: il collegamento primario ("Scopri Sedia" in header, home, `/servizi`) puntava direttamente al dominio Vercel esterno e temporaneo di Sedia, senza passare da nessuna pagina del dominio `abagenziaweb.it` — tutto il valore SEO/di link interno su quell'argomento andava perso fuori dal dominio.

### 7.2 Cosa ho cambiato

- **`components/blog-article.tsx`** (template condiviso da 3 articoli): aggiunta una riga di link "Scopri i servizi" (`/servizi`) e "Guarda il caso studio" (`/metodo-mastro`) nella sezione CTA di ogni articolo.
- **Articolo Quandoo**: aggiunto un link "Sedia tra i servizi di AB Web Agency" verso `/servizi#gestionale` nella sezione finale.
- **`/servizi`**: aggiunto un link "Leggi la guida al passaggio da Quandoo a Sedia" nella scheda Sedia, verso l'articolo corrispondente.
- **Header, home, `/servizi`**: il collegamento a Sedia ora punta a `/gestionale-ristoranti` (interno) invece che al dominio Vercel esterno. Il dominio esterno (`SEDIA_URL`, invariato in `lib/sedia.ts`) resta usato solo per le azioni commerciali dirette (richiesta demo/attivazione), ora concentrate sulla nuova pagina e nell'articolo Quandoo.
- **Fix collaterale**: il tag `<time dateTime="2026-07-29">` nel template `BlogArticle` era hardcoded per tutti gli articoli, stesso tipo di bug già corretto in fase 1 per lo schema JSON-LD ma non per questo attributo HTML. Corretto per derivare la data reale da `lib/blog.ts`, come lo schema.

### 7.3 Mappa dopo l'intervento

Percorso "articolo informativo → servizio pertinente → caso studio → contatto/preventivo" ora esiste concretamente su tutti e 4 gli articoli. `/gestionale-ristoranti` è raggiungibile da: header (ogni pagina), home, `/servizi`, articolo Quandoo, e collega a sua volta 2 articoli pertinenti. Nessun link forzato o keyword stuffing: ogni collegamento aggiunto è una frase di senso compiuto, utile anche letta isolatamente.

---

## 8. Struttura SEO delle future pagine — cosa applicare

Per ogni nuova pagina (inclusa `/gestionale-ristoranti`, creata in questa fase): URL pulito, metadata univoci, canonical assoluto, Open Graph con immagine dedicata, Twitter Card, un solo H1, gerarchia H2/H3 coerente, contenuto nel markup server-renderizzato (nessun fetch client per il contenuto SEO-rilevante), link interni contestuali, JSON-LD pertinente, inclusione in sitemap solo se pubblica e completa. Questo è lo standard che ho applicato a `/gestionale-ristoranti` e che va replicato per ogni pagina futura (es. eventuali case study, quando avranno contenuti reali — vedi §10).

---

## 9. Pagina `/gestionale-ristoranti`

`app/CLAUDE.md` richiede esplicitamente questa pagina come home pubblica del prodotto Sedia. La fase 1 l'aveva segnalata come mancante ma non creata. In questa fase l'ho valutata e **creata**, perché — a differenza di un case study — esisteva già abbastanza contenuto reale e verificabile nel sito per costruirla senza inventare nulla:

- Il posizionamento (H1) è la frase esatta richiesta da `app/CLAUDE.md`: "Il gestionale di prenotazione costruito sulla sala reale del tuo ristorante."
- Le 4 funzionalità descritte (prenotazioni e tavoli, mappa sala, rubrica clienti, widget) sono riprese **testualmente** dalla sezione `qs-feature-list` già pubblicata nell'articolo "Quandoo chiude".
- Le FAQ sono le 5 domande **generiche** su Sedia già pubblicate nello stesso articolo (escluse le 3 specifiche sull'offerta/scadenza Quandoo, non pertinenti a una pagina prodotto generica).
- **Non ho ripetuto i prezzi** (45/75/120 €/mese, citati nell'articolo Quandoo): per evitare una seconda fonte che potrebbe disallinearsi nel tempo, la pagina rimanda all'articolo per i dettagli aggiornati invece di duplicare i numeri.
- **Non ho aggiunto**: ruoli utente, integrazioni, numero di clienti, certificazioni — nessuno di questi è documentato nel testo pubblico di questo repository, quindi non li ho scritti (anche se potrei averne conoscenza da altro contesto, ho usato solo ciò che è verificabile in questo progetto, come richiesto).
- **Nessun breadcrumb visibile aggiunto**: le altre pagine di primo livello (`/servizi`, `/metodo-mastro`, ecc.) non ne hanno, per coerenza non ne ho aggiunto uno solo qui.

File: `app/gestionale-ristoranti/page.tsx`, `app/gestionale-ristoranti/opengraph-image.tsx`. Aggiunta a `app/sitemap.ts` con `lastModified: "2026-07-30"` (data reale di creazione). Metadata, canonical, OG, Twitter Card, JSON-LD `Service` + `FAQPage` presenti e verificati via HTTP.

**Prima di considerarla "pronta al 100%"**: verifica tu stesso il copy (tono, eventuali sfumature commerciali che vuoi correggere) — l'ho scritto riusando contenuti già approvati altrove, ma è comunque testo nuovo in una nuova combinazione, e merita una tua lettura prima che raccolga traffico reale.

---

## 10. Case study

**Stato**: non esiste oggi una sezione "case study" strutturata. `/metodo-mastro` funziona di fatto da caso studio per Benvenuti al Sud (con dati reali dichiarati: +45% visibilità, +35% prenotazioni, −30% tempo di gestione, con disclaimer che non sono una promessa di risultato). Denis Cars e La Lanterna sono solo loghi con link esterno in home: **zero contenuto** (problema, soluzione, risultati) esiste per loro nel repository.

**Cosa ho preparato** (non pubblicato, come richiesto quando mancano dati): `lib/case-studies.ts`, un modello dati tipizzato (`CaseStudy`) con i campi richiesti dal brief (cliente, settore, problema, obiettivi, soluzione, tecnologie, processo, risultati con disclaimer, immagini, testimonianza opzionale, servizi/articoli correlati, CTA). **Non importato da nessuna route pubblica**: non genera nessuna pagina, zero rischio.

L'unica voce compilata è Benvenuti al Sud, e riusa solo dati già pubblicati in `/metodo-mastro` e `components/case-metrics.tsx` — nessun numero nuovo.

**Decisione che ti chiedo**: `/metodo-mastro` è già, di fatto, il case study di Benvenuti al Sud. Prima di costruire route `/case-study/[slug]` dedicate, va deciso se: (a) tenere `/metodo-mastro` così com'è ed eventualmente linkarlo anche come "case study" da altre pagine (soluzione più semplice, zero contenuti duplicati); oppure (b) creare una sezione `/case-study` separata e più sintetica, con `/metodo-mastro` che resta la versione lunga/lead-magnet. Non ho preso questa decisione al posto tuo perché è editoriale, non tecnica.

**Contenuti che servono da te per Denis Cars e La Lanterna**, prima che si possa scrivere qualunque riga su di loro: problema iniziale, cosa è stato fatto realmente, eventuali risultati misurabili (o l'autorizzazione a pubblicare la pagina senza numeri, solo come descrizione del lavoro), 2-4 immagini utilizzabili, ed eventuale testimonianza reale del cliente se disponibile.

---

## 11. PDF Metodo Mastro — causa tecnica trovata

Non ho tool PDF (Ghostscript/ImageMagick/poppler) installati in questo ambiente e non li ho installati (dipendenza pesante non richiesta esplicitamente). Ho invece **analizzato la struttura binaria del PDF** direttamente (è un formato testuale ispezionabile) per capire la causa esatta, invece di limitarmi a "il PDF è pesante, comprimilo":

- File: `public/downloads/metodo-mastro-benvenuti-al-sud.pdf`, 23.1 MB, 12 pagine, generato da `work/genera_metodo_mastro.py` (ReportLab).
- **Causa esatta identificata**: due immagini a piena pagina (`sala-editoriale.jpg`, 2268×1701px, usata due volte nel documento) sono incorporate nel PDF **non come JPEG**, ma come bitmap RGB grezzo compresso solo con `FlateDecode` (compressione generica, non pensata per le fotografie) — dimensione nel PDF quasi identica alla dimensione grezza non compressa (~11 MB **ciascuna**: le due immagini da sole spiegano ~22 dei 23.1 MB totali).
- **Causa nel codice sorgente**: `work/genera_metodo_mastro.py`, funzione `crop()`, chiama `c.drawImage(ImageReader(im), ..., mask='auto')`. Il parametro `mask='auto'` forza ReportLab a decodificare e re-incorporare l'immagine per calcolare una maschera di trasparenza — anche se i file sorgente sono `.jpg` **senza alcun canale alpha**, quindi quella maschera non serve. Questo impedisce a ReportLab di riutilizzare la compressione JPEG originale del file sorgente.
- **Correzione consigliata** (non applicata: richiederebbe rigenerare il PDF e verificarne visivamente il risultato, cosa che non posso fare in modo affidabile qui): rimuovere `mask='auto'` dalle chiamate `crop()` che usano sorgenti `.jpg` senza trasparenza, così ReportLab può incorporare il JPEG originale invece di ri-comprimerlo come bitmap grezzo. Stima realistica: una foto 2268×1701 in JPEG qualità 85 pesa tipicamente 400 KB–1.2 MB, non 11 MB — una riduzione totale plausibile **da ~23 MB a 2–4 MB**, senza perdita di qualità percepibile.

Non ho toccato `work/genera_metodo_mastro.py` né rigenerato il PDF: è un intervento che tocca uno script di generazione e un asset scaricabile in produzione, da verificare visivamente da un umano prima di sostituire il file. Ti lascio la correzione sopra come istruzione pronta da applicare (o da farmi applicare in una sessione dedicata, dove potrai verificare tu stesso il PDF rigenerato prima di pubblicarlo).

---

## 12. ESLint

**Introdotto.** Next.js 16 non include più `next lint`: ho installato `eslint@9.39.5` + `eslint-config-next@16.2.12` (stessa versione esatta di Next.js già in uso) e creato `eslint.config.mjs` in flat config, usando l'export nativo di `eslint-config-next` (nessun bridge di compatibilità legacy, che ho scartato dopo aver verificato che causava un crash per un'incompatibilità nota tra `@eslint/eslintrc` e le versioni recenti di `eslint-plugin-react`). Aggiunto script `"lint": "eslint ."` in `package.json`, con `work/`, `outputs/` e i build folder esclusi (script Python e log, non codice dell'app).

**Configurazione minima**: solo `next/core-web-vitals` + `next/typescript`, nessuna regola stilistica aggiuntiva, nessun Prettier — esattamente come richiesto, per non causare una riscrittura di massa del codice esistente.

**Alla prima esecuzione ha trovato un bug reale**: in `components/quandoo-promo-popup.tsx`, la funzione `dismiss` veniva referenziata dentro un `useEffect` prima della propria dichiarazione (closure potenzialmente non aggiornata). Corretto spostando la dichiarazione prima degli effect e avvolgendola in `useCallback` come suggerito dalla regola stessa. **Dopo la correzione: 0 errori, 0 warning** in tutto il progetto.

**Nota su `npm audit`**: installare ESLint ha introdotto 9 vulnerabilità *high* nella catena di dipendenze **di sviluppo** (`eslint-plugin-react`/`eslint-plugin-jsx-a11y`, tramite una versione datata di `minimatch`/`brace-expansion`, usate solo da `eslint-config-next`). Ho provato a correggerle forzando `brace-expansion` a una versione più recente via `overrides`, ma questo **ha rotto ESLint stesso** (la nuova major version di `brace-expansion` non è compatibile con le versioni di `minimatch` usate in più punti della stessa catena di dipendenze) — l'ho annullato subito. `npm audit --omit=dev` (le sole dipendenze che finiscono davvero in produzione: Next.js, React, PostCSS, sharp) resta a **0 vulnerabilità**, invariato dalla fase 1. Le 9 vulnerabilità restano confinate a un tool eseguito solo in locale da uno sviluppatore, mai esposto in rete: rischio pratico marginale, ma segnalato con trasparenza invece di nasconderlo o forzare una "correzione" che rompe lo strumento.

---

## 13. File modificati in questa fase

```
app/layout.tsx                          (viewport/themeColor, WebSite schema, rimosso icons manuale)
app/globals.css                         (--orange-ink, fix contrasto eyebrow/grid/final-cta)
app/sedia-card.css                      (fix contrasto sedia-cta, nuovo colore CTA interna)
app/contacts.css                        (fix contrasto contact-flow)
app/blog/blog.css                       (link editorial-cta-links)
app/blog/quandoo-chiude-alternativa-sedia/page.tsx   (link a /servizi#gestionale)
app/blog/quandoo-chiude-alternativa-sedia/quandoo-sedia.css  (stile nuovo link)
app/page.tsx                            (CTA Sedia interna)
app/servizi/page.tsx                    (CTA Sedia interna, Service schema, link ad articolo)
app/sitemap.ts                          (aggiunta /gestionale-ristoranti)
components/blog-article.tsx             (BUSINESS, fix dateTime, link servizio/caso studio)
components/site-header.tsx              (link Sedia interno)
components/quandoo-promo-popup.tsx      (fix ordine dichiarazione, useCallback)
package.json / package-lock.json        (eslint, eslint-config-next)
```

## 14. File creati in questa fase

```
app/favicon.ico, app/icon.png, app/apple-icon.png, app/manifest.ts
public/icons/icon-192.png, public/icons/icon-512.png
lib/business.ts
lib/case-studies.ts                     (modello dati, non collegato a nessuna route)
app/gestionale-ristoranti/page.tsx
app/gestionale-ristoranti/opengraph-image.tsx
eslint.config.mjs
SEO-IMPROVEMENTS-PHASE-2.md             (questo report)
```

---

## 15. Test eseguiti realmente

- `npx tsc --noEmit`: pulito, eseguito ripetutamente dopo ogni gruppo di modifiche.
- `npm run lint`: pulito (0 errori, 0 warning) dopo il fix descritto in §12.
- `npm run build`: sempre riuscita, 0 errori, 0 warning — verificato più volte, l'ultima dopo tutte le modifiche. 30 route generate, tutte statiche tranne le 2 API POST-only.
- `npm audit` / `npm audit --omit=dev`: vedi §12.
- Server di produzione locale (`next start`) avviato più volte su porte temporanee, poi sempre arrestato: verificato via `curl` che tutte le 14 route pubbliche rispondano 200, che una route inventata risponda 404, che sitemap/robots/manifest/icone rispondano correttamente, che gli header di sicurezza restino presenti anche sulla nuova pagina, che i JSON-LD (incluso il nuovo `WebSite` sitewide) siano nel markup renderizzato.
- **Verifica visiva reale**: screenshot con Chrome headless (non descrizioni ipotetiche) di: sezione `.final-cta` prima/dopo il fix del testo invisibile, hero e sezione navy della home prima/dopo il fix del contrasto, sezione Sedia di `/servizi` prima/dopo il cambio di CTA, pagina `/gestionale-ristoranti` completa, favicon/icone generate. Ho controllato che nessuna modifica CSS abbia introdotto un cambiamento visivo indesiderato.
- **Non eseguito**: test con screen reader reale (NVDA/VoiceOver) e test di interazione reale (click, tastiera) su browser non headless — Lighthouse copre una parte importante dell'accessibilità statica, ma non sostituisce un test assistivo reale. Consiglio di farlo prima o subito dopo il deploy.

---

## 16. Rischi

- **`/gestionale-ristoranti` è una pagina nuova e indicizzabile**: a differenza delle altre modifiche (tutte correzioni), questa aggiunge un contenuto pubblico nuovo. Copy scritto riusando solo materiale già approvato, ma merita una tua rilettura prima che raccolga traffico reale (vedi §9).
- **Cambio di destinazione dei pulsanti "Scopri Sedia"**: prima portavano subito all'app esterna, ora passano da `/gestionale-ristoranti`. È la scelta corretta per SEO/link interno ed è quello che chiedeva sia `app/CLAUDE.md` sia il brief di questa fase, ma è un cambio di comportamento per chi clicca: da `/gestionale-ristoranti` è comunque possibile raggiungere l'app esterna in un click ("Vai all'app di Sedia").
- **Colori arancioni modificati** (`--orange-ink`, nuovo colore CTA Sedia): cambiamento visivo minimo e mirato solo dove il contrasto falliva davvero; verificato via screenshot che il brand resti riconoscibile.
- Nessuna delle altre modifiche tocca contenuti commerciali, prezzi o funzionalità esistenti.

---

## 17. Attività manuali richieste

1. **Rileggere il copy di `/gestionale-ristoranti`** prima che venga indicizzata seriamente.
2. **Decidere l'architettura dei case study** (§10): estendere `/metodo-mastro` o creare `/case-study` separato.
3. **Fornire i contenuti reali per Denis Cars e La Lanterna** se si vogliono case study per loro (lista esatta in §10).
4. **Applicare (o farmi applicare in una sessione dedicata) la correzione del PDF** in `work/genera_metodo_mastro.py` (§11) e verificare visivamente il PDF rigenerato prima di sostituire quello in `public/downloads/`.
5. **Verifica Search Console** dopo il deploy: nuova pagina in sitemap, eventuali nuovi rich result (FAQPage, Service, WebSite).
6. Punti già aperti dalla fase 1 e ancora validi: rate limiting reale sulle API (serve un servizio esterno), eventuale sottomissione HSTS preload, dominio definitivo di Sedia da sostituire in `lib/sedia.ts` quando disponibile.

---

## 18. Contenuti richiesti ad Antonio (riepilogo)

- Case study Denis Cars: problema, lavoro svolto, risultati (se misurabili) o autorizzazione a pubblicare senza numeri, immagini, eventuale testimonianza.
- Case study La Lanterna: stessi campi.
- Decisione su `/metodo-mastro` vs sezione `/case-study` separata.
- Revisione editoriale di `/gestionale-ristoranti`.
- Eventuale materiale sorgente per rigenerare il PDF Metodo Mastro con immagini compresse correttamente (o autorizzazione a intervenire sullo script `work/genera_metodo_mastro.py`).

---

## 19. Priorità future

**Alta**
- Applicare la correzione del PDF (riduzione da ~23 MB a probabilmente 2–4 MB, zero perdita di qualità attesa).
- Decidere e implementare l'architettura dei case study.

**Media**
- Rate limiting reale sulle API lead (richiede Vercel Firewall o servizio esterno tipo Upstash).
- Valutare l'evoluzione della CSP verso `script-src` senza `'unsafe-inline'` (richiede middleware + rendering dinamico, trade-off già documentato in fase 1).

**Bassa**
- Sottomissione HSTS preload (azione esterna, difficile da annullare).
- Aggiornare `lib/sedia.ts` con il dominio definitivo di Sedia quando disponibile.

---

## 20. Punteggi

A differenza della fase 1 (solo stime da audit del codice), qui **Performance, Accessibility, Best Practices e SEO sono numeri misurati da Lighthouse reale** (§3) — non stime. Per Sicurezza, SEO tecnica "non di Lighthouse" (struttura sitemap/robots/dati strutturati), UX e Conversione restano stime motivate da revisione del codice, come in fase 1, perché Lighthouse non le misura direttamente.

| Area | Fonte | Valore |
|---|---|---|
| Performance (mobile, media 7 pagine) | Lighthouse reale | ~98,6 |
| Performance (desktop, media 7 pagine) | Lighthouse reale | 100 |
| Accessibility (mobile/desktop, media) | Lighthouse reale | ~99,4 (100 su 6/7 pagine, 96 su `/metodo-mastro` per scelta di design, §4.3) |
| Best Practices | Lighthouse reale | 100 su tutte le pagine testate |
| SEO (Lighthouse) | Lighthouse reale | 100 su tutte le pagine testate |
| Dati strutturati | Stima da revisione codice | Ampliati e centralizzati; nessuna incoerenza trovata |
| Sicurezza | Stima da revisione codice | Invariata rispetto a fase 1 (85/100): nessuna correzione di sicurezza indebolita |
| UX | Stima da revisione codice | Migliorata dal linking interno più contestuale |
| Conversione | Stima da revisione codice | Invariata nei form esistenti; nuovo punto di ingresso (`/gestionale-ristoranti`) verso Sedia |

---

## 21. Cosa è pronto, cosa serve la tua approvazione, cosa devi fare tu

**Pronto per il deploy** (dopo una tua revisione rapida, non tecnica):
- Tutte le correzioni tecniche (headers, contrasto, favicon/manifest, dati strutturati, ESLint, fix del popup).
- La nuova pagina `/gestionale-ristoranti` — leggi il copy prima.

**Richiede la tua decisione, non ancora implementato**:
- Architettura case study (`/metodo-mastro` esteso vs `/case-study` separato).
- Correzione del PDF Metodo Mastro (ho indicato la riga esatta da cambiare in `work/genera_metodo_mastro.py`, ma non l'ho toccata).

**Comandi che puoi eseguire tu localmente per verificare quanto sopra**:
```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run start
# poi apri http://localhost:3000 e naviga il sito,
# o ripeti Lighthouse con: npx lighthouse http://localhost:3000/ --view
```

**Controlli da fare nella preview Vercel dopo il deploy**:
- Aprire la console del browser su 2–3 pagine e verificare l'assenza di violazioni CSP (specialmente se in futuro aggiungerai script di terze parti).
- Controllare `/gestionale-ristoranti`, `/manifest.webmanifest`, `/favicon.ico` sul dominio reale.
- Controllare in Search Console che la sitemap aggiornata (11 URL) venga riletta senza errori.
- Rifare un giro veloce da mobile reale (non solo simulazione) sulle pagine con form (`/preventivo`, `/metodo-mastro`) per confermare che tastiera e invio funzionino come già verificato in fase 1.
