# AB Web Agency — Audit SEO, tecnico, prestazionale, accessibilità, sicurezza, conversione

Data audit: 30 luglio 2026
Ambito: `C:\Users\anton\Documents\Codex\2026-07-19\va` (repo `va`) → https://www.abagenziaweb.it
Metodo: audit statico del codice sorgente + verifica runtime su build di produzione locale (`next build` + `next start`), senza toccare DNS, Vercel, Search Console o altri servizi esterni. Nessun commit o push eseguito.

---

## 1. Riepilogo esecutivo

Il progetto è un sito Next.js 16 (App Router, TypeScript, React 19) già ben strutturato: rendering quasi interamente statico, Server Components di default, form con protezione anti-spam e validazione server-side, nessun segreto nel repo, nessun cookie/tracker non dichiarato. Non è la ricostruzione Canva descritta nel vecchio audit in `outputs/audit-e-piano-ab-web-agency.md` (quel documento è storico, pre-Next.js, e va considerato superato).

I problemi reali trovati erano concentrati in tre aree: **assenza totale di header di sicurezza** (nessuna CSP, nessun HSTS, nessun `X-Frame-Options`), **sitemap con `lastModified` falso** (`new Date()` a ogni build, in contrasto diretto con le linee guida Google), e **3 dipendenze con vulnerabilità note ad alta severità** (`next`, `postcss`, `sharp`). A questi si aggiungevano gap minori: nessuno skip-link, date hardcoded in uno schema JSON-LD, 3 articoli del blog senza immagine Open Graph dedicata, link legali nel footer come `<a>` invece di `next/link`.

Tutti questi problemi sono stati corretti direttamente nel codice. Il sito compila, supera il typecheck e la build di produzione senza errori né warning, e tutte le route pubbliche rispondono correttamente.

---

## 2. Stato del progetto prima dell'intervento

- **Framework**: Next.js 16.2.10 (App Router), React 19.2.7, TypeScript 5.7.3, nessun CSS framework (CSS globale scritto a mano).
- **Rendering**: quasi tutte le pagine erano già Server Components statiche; i `"use client"` erano già ridotti al minimo indispensabile (header con menu mobile, popup, form, contatori animati, timeline, scroll reveal) — nessuna regressione da correggere qui.
- **SEO**: metadata già presenti su ogni pagina (title, description, canonical, OG, robots), `metadataBase` corretto su `https://www.abagenziaweb.it`, JSON-LD `ProfessionalService` in home e `BlogPosting`/`FAQPage` sugli articoli.
- **Sitemap/robots**: entrambi presenti e strutturalmente corretti, ma la sitemap impostava `lastModified: new Date()` su ogni pagina a ogni build/deploy.
- **Sicurezza**: `next.config.mjs` non definiva alcun header (`headers()` assente), nessun `vercel.json`. Nessuna chiave o segreto nel repo; `.env.local` correttamente ignorato da git; le API (`/api/quote`, `/api/mastro`) validano lato server, usano honeypot + trappola temporale anti-bot e non espongono l'endpoint Apps Script al client.
- **Accessibilità**: HTML semantico corretto, label sui form, focus sugli input dei form già personalizzato, `prefers-reduced-motion` rispettato in più punti — ma nessuno skip-link e nessun landmark `id` per raggiungere il contenuto principale da tastiera.
- **Dipendenze**: `npm audit` segnalava 3 vulnerabilità *high* (Next.js — SSRF/DoS/cache confusion in varie CVE; PostCSS — arbitrary file read; sharp — CVE libvips).

---

## 3. Modifiche effettuate

### Sicurezza (priorità critica)
- **`next.config.mjs`**: aggiunta `async headers()` con Content-Security-Policy, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera/microfono/geolocalizzazione/pagamenti/USB disabilitati), `Strict-Transport-Security` (HSTS, 2 anni + subdomains), `Cross-Origin-Opener-Policy: same-origin`. Aggiunto anche `poweredByHeader: false` per non dichiarare `X-Powered-By: Next.js`.
- **Dipendenze**: `next` `^16.2.10` → `^16.2.12` (patch che risolve le CVE Next.js segnalate), `postcss` `8.5.10` → `8.5.25` (patch/override), aggiunto override `sharp: 0.35.3` (la versione di `sharp` che Next.js installa come dipendenza opzionale non era ancora stata aggiornata a monte). **`npm audit` ora riporta 0 vulnerabilità** (era 3 *high*).
- **`app/robots.ts`**: aggiunto `disallow: "/api/"` — le uniche route "tecniche" del sito (endpoint POST-only per i lead) non vengono più proposte alla scansione, senza impatto sulle pagine pubbliche.

### Sitemap (priorità critica)
- **`app/sitemap.ts`**: rimosso `new Date()` su ogni pagina a ogni build. Ora:
  - le pagine statiche (`/`, `/servizi`, `/metodo-mastro`, `/preventivo`, `/contatti`, `/blog`) usano una data reale e mantenibile, verificata sull'ultimo commit Git che ha modificato davvero quella pagina (es. `/servizi` → 2026-07-24, le pagine ferme dal lancio → 2026-07-19). Il file contiene un commento che spiega di aggiornare la data solo quando si modifica davvero il contenuto della pagina — stesso principio già usato per gli articoli del blog.
  - gli articoli del blog derivano `lastModified` dal campo `published` già presente in `lib/blog.ts` (unica fonte, nessuna duplicazione).
  - Verificato via `curl` sulla build di produzione: XML valido, `/sitemap.xml` risponde 200, nessuna data identica "inventata" per tutte le pagine.

### Accessibilità
- **Skip link**: aggiunto in `app/layout.tsx` ("Salta al contenuto"), visivamente nascosto finché non riceve focus da tastiera (CSS in `app/globals.css`, classe `.skip-link`). Aggiunto `id="main-content"` al tag `<main>` di tutte le pagine (home, servizi, metodo-mastro, preventivo, contatti, blog, i 4 articoli, privacy, cookie, note-legali) come bersaglio del link.
- Nessun'altra modifica: la struttura semantica, i landmark, i form e il contrasto erano già corretti e non richiedevano interventi.

### Dati strutturati (JSON-LD)
- **`components/blog-article.tsx`**: lo schema `BlogPosting` condiviso dai 3 articoli aveva `datePublished`/`dateModified` hardcoded a `"2026-07-29"` indipendentemente dalla data reale dell'articolo passata come prop. Oggi coincideva per caso con la data vera, ma era un bug latente (un futuro articolo con data diversa avrebbe avuto uno schema silenziosamente sbagliato). Corretto: la data ora viene letta dal campo `published` di `lib/blog.ts` (stessa fonte usata dalla sitemap).
- Aggiunto **`BreadcrumbList` JSON-LD** ai 4 articoli del blog (nel componente condiviso `BlogArticle` e nell'articolo "Quandoo chiude"), con testo identico al breadcrumb HTML già visibile in pagina (Home → Blog → categoria/titolo) — nessun breadcrumb "inventato" che non corrisponda alla navigazione reale.

### Open Graph / social
- Creati **3 nuovi `opengraph-image.tsx`** (route file convention di Next.js) per gli articoli che non avevano un'immagine social dedicata: `prenotazioni-ristorante-google-maps`, `ridurre-no-show-ristorante`, `sito-ristorante-prenotazioni-dirette`. Prima ereditavano l'immagine generica della home. Ogni immagine è generata via `next/og` (nessun asset esterno), coerente per stile con quella già esistente dell'articolo "Quandoo chiude" e con la palette del brand.
- Aggiornati i `metadata.openGraph.images` e aggiunto `metadata.twitter` (mancante) su questi 3 articoli, sullo stesso pattern già usato dall'articolo Quandoo.
- **`app/opengraph-image.tsx`** (immagine OG di default, home): rimosso `export const runtime = "edge"`, non necessario e che disabilitava la generazione statica di quella route (confermato dal build: da `ƒ` dinamica a `○` statica). Rimossa anche una proprietà CSS (`zIndex`) non supportata dal renderer `next/og` (Satori), che produceva un warning in build senza avere alcun effetto visivo (l'impilamento degli elementi è già garantito dall'ordine nel DOM).

### Altro
- **`components/site-footer.tsx`**: i link interni a `/privacy`, `/cookie`, `/note-legali` usavano `<a>` invece di `next/link`, causando un ricaricamento completo della pagina invece della navigazione client-side. Corretto.
- **`app/page.tsx`**: aggiunto `sizes="(max-width: 800px) 90vw, 33vw"` alle 4 immagini `next/image` dei loghi cliente (`.client-logo img` in CSS è `width:100%`, quindi l'immagine è fluida ma il componente non lo dichiarava) — ora Next.js genera il set responsive corretto invece di assumere una dimensione fissa.

---

## 4. File modificati

```
next.config.mjs                                              (security headers, poweredByHeader)
package.json / package-lock.json                             (next, postcss, sharp)
app/sitemap.ts                                                (lastModified reale)
app/robots.ts                                                 (disallow /api/)
app/layout.tsx                                                (skip link)
app/globals.css                                               (stile .skip-link)
app/opengraph-image.tsx                                       (rimosso edge runtime + zIndex)
app/page.tsx                                                  (id main-content, sizes immagini)
app/servizi/page.tsx                                          (id main-content)
app/metodo-mastro/page.tsx                                    (id main-content)
app/preventivo/page.tsx                                       (id main-content)
app/contatti/page.tsx                                         (id main-content)
app/blog/page.tsx                                              (id main-content)
app/blog/quandoo-chiude-alternativa-sedia/page.tsx            (id main-content, BreadcrumbList)
app/blog/prenotazioni-ristorante-google-maps/page.tsx         (OG image + twitter metadata)
app/blog/ridurre-no-show-ristorante/page.tsx                  (OG image + twitter metadata)
app/blog/sito-ristorante-prenotazioni-dirette/page.tsx        (OG image + twitter metadata)
app/privacy/page.tsx, app/cookie/page.tsx, app/note-legali/page.tsx   (id main-content)
components/blog-article.tsx                                   (date reali schema, BreadcrumbList, id main-content)
components/site-footer.tsx                                    (next/link per i link legali)
```

Nuovi file creati:
```
app/blog/prenotazioni-ristorante-google-maps/opengraph-image.tsx
app/blog/ridurre-no-show-ristorante/opengraph-image.tsx
app/blog/sito-ristorante-prenotazioni-dirette/opengraph-image.tsx
SEO-TECHNICAL-AUDIT.md   (questo report)
```

Non è stato modificato alcun file fuori da questa cartella; non sono stati toccati contenuti commerciali, prezzi, testi legali, branding, colori o animazioni esistenti.

---

## 5. Problemi trovati e risolti

| # | Problema | Gravità | Stato |
|---|---|---|---|
| 1 | Nessun header di sicurezza (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) | Critica | Risolto |
| 2 | 3 dipendenze con CVE *high* (`next`, `postcss`, `sharp`) | Critica | Risolto (0 vulnerabilità) |
| 3 | Sitemap con `lastModified: new Date()` su tutte le pagine a ogni build | Critica (SEO) | Risolto |
| 4 | `robots.txt` non escludeva le route API tecniche | Bassa | Risolto |
| 5 | Nessuno skip-link / nessun landmark raggiungibile da tastiera | Media (a11y) | Risolto |
| 6 | Date hardcoded nello schema `BlogPosting` condiviso, disallineabili dalla data reale dell'articolo | Media | Risolto |
| 7 | Nessun `BreadcrumbList` strutturato sugli articoli (il breadcrumb HTML c'era già) | Bassa/Media | Risolto |
| 8 | 3 articoli del blog senza immagine Open Graph dedicata (ereditavano quella generica della home) | Media | Risolto |
| 9 | Immagine OG della home su `runtime: "edge"` non necessario → route non statica | Bassa (prestazioni) | Risolto |
| 10 | Link legali nel footer come `<a>` invece di `next/link` | Bassa | Risolto |
| 11 | Immagini loghi cliente senza `sizes` nonostante CSS fluido (`width:100%`) | Bassa | Risolto |

---

## 6. Problemi non risolti (per scelta, non per limite tecnico)

- **CSP con `script-src`/`style-src` 'unsafe-inline'**: necessario perché il sito usa script JSON-LD inline (dati strutturati) e stili inline React (es. barra di avanzamento del preventivatore, timeline). Una CSP "strict" con nonce richiederebbe rendering dinamico via middleware (`headers()` in ogni pagina), il che trasformerebbe tutte le pagine statiche in pagine dinamiche — un peggioramento di prestazioni e architettura non giustificato dal guadagno di sicurezza marginale, dato che il sito non renderizza contenuto generato da utenti come HTML. Documentato come possibile evoluzione futura, non applicato ora per non introdurre fragilità.
- **PDF "Metodo Mastro" da 24 MB** (`public/downloads/metodo-mastro-benvenuti-al-sud.pdf`): pesante per un lead magnet scaricato dopo un form. Non l'ho ricompresso autonomamente perché è un asset editoriale/di prodotto (rischio di degradare la qualità percepita senza supervisione umana sul risultato). Segnalato in "Interventi manuali richiesti".
- **Pagina `/gestionale-ristoranti`**: `app/CLAUDE.md` indica questa route come home pubblica prevista per il prodotto Sedia, ma non esiste ancora — oggi Sedia è linkato solo tramite bottone esterno (`SEDIA_URL`, dominio Vercel temporaneo) da home e `/servizi`. Creare questa pagina è una decisione di prodotto/contenuto più ampia di un fix tecnico, quindi non l'ho generata autonomamente: la segnalo come opportunità (sezione 12).

---

## 7. Rischi o possibili regressioni

- **CSP**: è il cambiamento con più superficie di rischio. È stata verificata sulla build di produzione locale (header presenti, JSON-LD renderizzato correttamente nell'HTML — 3 script `application/ld+json` confermati sull'articolo Quandoo, form e popup non toccati nella logica). Consiglio comunque di controllare la console del browser sul primo deploy in preview Vercel per escludere violazioni CSP non previste (es. se in futuro verrà aggiunto un tool di analytics/terze parti, andrà aggiunto esplicitamente a `connect-src`/`script-src` in `next.config.mjs`).
- **Upgrade `next` 16.2.10 → 16.2.12 e `postcss`/`sharp`**: sono aggiornamenti patch/minor entro lo stesso major, a basso rischio; build e typecheck locali passano senza errori.
- **`Strict-Transport-Security` con `preload`**: la direttiva è innocua finché non viene sottomesso il dominio su hstspreload.org (azione manuale esterna, non eseguita). Se in futuro il sito dovesse mai essere servito anche in HTTP puro su un sottodominio, HSTS lo impedirebbe: non è il caso qui perché Vercel serve tutto in HTTPS.
- **`sizes` sulle immagini cliente**: cambia solo il set di risoluzioni scaricate dal browser, nessun impatto visivo.

Nessuna delle modifiche tocca copy, prezzi, servizi, palette, componenti grafici o logica dei form.

---

## 8. Attività che richiedono intervento manuale

1. **Compressione del PDF Metodo Mastro** (24 MB) — valutare un export più leggero da InDesign/Canva o compressione lato editor prima del prossimo aggiornamento del lead magnet.
2. **Dominio definitivo di Sedia**: `lib/sedia.ts` punta ancora a `https://sedia-antonio-pio-brattoli.vercel.app/`, dominio Vercel temporaneo per esplicita scelta pregressa. Da aggiornare in quell'unica costante non appena disponibile un dominio definitivo (es. `app.abagenziaweb.it`).
3. **Rate limiting sulle API** (`/api/quote`, `/api/mastro`): oggi la protezione è honeypot + trappola temporale (buona base, ma non un vero rate limit). Un rate limiting reale richiede uno store esterno persistente (Vercel Firewall/WAF o Upstash Redis) — implementarlo con memoria in-process nelle funzioni serverless sarebbe inefficace (ogni invocazione può girare su un'istanza diversa) e darebbe un falso senso di sicurezza, quindi non l'ho aggiunto. Da valutare lato Vercel (piano Pro include regole firewall configurabili da dashboard).
4. **HSTS preload**: se si vuole che il dominio sia incluso nella lista precaricata dei browser, va sottomesso manualmente su hstspreload.org (azione irreversibile a breve termine, va decisa dal proprietario del dominio).
5. **Verifica Search Console**: dopo il deploy, controllare in Search Console che la sitemap aggiornata venga riletta e che non emergano errori di copertura sulle nuove date `lastModified`.

---

## 9. Attività esterne al codice (fuori dal mandato di questo audit)

- Configurazione DNS, redirect apex→www, certificati: non toccati, verificati solo osservando il comportamento atteso lato codice (canonical, sitemap, robots già assumono correttamente `www.abagenziaweb.it`).
- Google Search Console, Google Business Profile: da verificare manualmente dal proprietario.
- Creazione pagina `/gestionale-ristoranti` (decisione di prodotto/contenuto).
- Rotazione di eventuali segreti: non ne sono stati trovati nel repository (verificato che `.env.local` è ignorato da git e non è mai stato tracciato).

---

## 10. Risultati di build, typecheck e lint

- **`npx tsc --noEmit`**: ✅ nessun errore.
- **`npm run build`** (`next build`, Turbopack): ✅ compilazione riuscita, 0 errori, 0 warning. Output finale: 21 route pubbliche statiche (`○`), 3 route `opengraph-image` statiche, 2 route dinamiche corrette (`/api/quote`, `/api/mastro`, entrambe POST-only per costruzione).
- **ESLint**: **non eseguibile** — il progetto non include alcuna configurazione ESLint (nessun file `.eslintrc*`/`eslint.config.*`, nessuna dipendenza `eslint` in `package.json`, nessuno script `lint`). Non è stato introdotto ora per non aggiungere una dipendenza/configurazione non richiesta esplicitamente e potenzialmente disallineata dalle convenzioni del progetto; se lo si desidera, va deciso con l'utente (versione ESLint, regole, flat config vs legacy).
- **`npm audit`**: da 3 vulnerabilità *high* a **0 vulnerabilità**.
- **Verifica funzionale post-build** (su `next start` locale, porta temporanea, poi arrestato): homepage e tutte le pagine pubbliche rispondono `200`; una route inventata risponde `404`; `/sitemap.xml` restituisce XML valido con date reali per pagina; `/robots.txt` include il nuovo `Disallow: /api/`; gli header di sicurezza (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy, COOP) sono presenti nella risposta; `X-Powered-By` è assente; lo skip-link e gli `id="main-content"` sono presenti nell'HTML; i JSON-LD (incluso il nuovo `BreadcrumbList`) sono renderizzati correttamente nel markup; le nuove immagini OG rispondono `200` con `content-type: image/png`.
- **Verifica link interni**: nessun link rotto — ogni `href` interno del sito punta a una route realmente esistente (`/`, `/servizi`, `/metodo-mastro`, `/blog` e i 4 articoli, `/preventivo`, `/contatti`, `/privacy`, `/cookie`, `/note-legali`, il PDF in `/downloads/`).
- Non è stato eseguito un browser reale (Chrome/VoiceOver/NVDA): la verifica di animazioni, popup, menu mobile e form si basa su revisione del codice (nessuna modifica alla logica di questi componenti) più i controlli HTTP/HTML sopra, non su un test visivo interattivo. Consiglio una verifica visiva rapida sulla preview Vercel prima del merge in produzione.

---

## 11. Controllo sitemap e robots

- `/sitemap.xml`: 10 URL (6 pagine statiche + 4 articoli), tutte assolute su `https://www.abagenziaweb.it`, XML valido, `lastModified` reale per ciascuna pagina (non più identico e non più rigenerato a ogni deploy), nessuna pagina noindex, admin, API o duplicata inclusa.
- `/robots.txt`: `Allow: /`, nuovo `Disallow: /api/`, `Sitemap: https://www.abagenziaweb.it/sitemap.xml`. Nessuna risorsa CSS/JS/immagine bloccata.

---

## 12. Suggerimenti editoriali (non applicati, per decisione commerciale/editoriale)

- I contenuti attuali (home, servizi, blog) sono già coerenti, in italiano naturale, senza refusi evidenti né keyword stuffing — non ho trovato margini di intervento urgente sul copy.
- Il vecchio documento `outputs/audit-e-piano-ab-web-agency.md` fa riferimento a una versione Canva del sito ormai superata: può essere archiviato o rinominato per evitare confusione futura, ma non l'ho toccato perché non è codice del sito pubblico.
- Il posizionamento "Sedia" convive bene tra home, `/servizi` e blog; se in futuro si aggiunge la pagina `/gestionale-ristoranti`, andrà collegata da questi stessi punti per rinforzare il link interno.

---

## 13. Opportunità SEO future

- **Pagina `/gestionale-ristoranti`**: prevista da `app/CLAUDE.md` ma non ancora creata; oggi tutto il traffico verso Sedia esce dal dominio verso un URL Vercel temporaneo, perdendo link equity e possibilità di indicizzare il prodotto sotto il dominio proprio.
- **Landing locali/settoriali reali**: nessuna pagina città duplicata trovata (corretto, da evitare), ma non esiste nemmeno una landing dedicata a "Torino" con contenuto realmente differenziato; se l'agenzia vuole spingere sul locale, andrebbe scritta con contenuto originale (non un duplicato con il nome città cambiato).
- **WebSite schema con `SearchAction`**: non applicabile oggi (il sito non ha una ricerca interna); da valutare solo se in futuro verrà aggiunta.
- **Analytics/misurazione conversioni**: oggi il sito dichiara correttamente in `cookie/page.tsx` di non usare alcun tracker. Se in futuro si vorrà misurare il funnel (richiesto anche dal vecchio audit strategico), andrà introdotto con un vero sistema di consenso preventivo — non è stato aggiunto ora perché comporterebbe anche una modifica ai testi legali, esplicitamente fuori mandato.

---

## 14. Priorità

**Critica (fatto)**
- Header di sicurezza assenti → risolto.
- Dipendenze vulnerabili → risolto.
- Sitemap con date false → risolto.

**Alta (fatto)**
- Skip-link/accessibilità da tastiera → risolto.
- OG image mancanti su 3 articoli → risolto.
- Date hardcoded nello schema JSON-LD → risolto.

**Media (fatto)**
- BreadcrumbList JSON-LD → risolto.
- `robots.txt` non escludeva `/api/` → risolto.
- Link footer non client-side → risolto.
- `sizes` mancante sulle immagini fluide → risolto.

**Bassa / da valutare (non fatto, richiede decisione del proprietario)**
- Compressione PDF Metodo Mastro.
- Rate limiting reale sulle API (richiede servizio esterno).
- Pagina `/gestionale-ristoranti` e dominio definitivo di Sedia.
- Eventuale introduzione di ESLint.
- Eventuale evoluzione della CSP verso `script-src` senza `'unsafe-inline'` (richiede middleware + rendering dinamico, trade-off prestazionale da discutere).

---

## 15. Punteggi (0–100)

**Importante**: questi punteggi sono una **stima motivata da audit del codice** (struttura, metadata, header HTTP osservati sulla build locale, dipendenze, accessibilità statica del markup). **Non è stato eseguito Lighthouse, PageSpeed Insights, WebPageTest, axe-core/screen reader o alcun test di laboratorio reale** — non vengono quindi riportati numeri Lighthouse, che sarebbero inventati. Per un punteggio misurato servono un audit Lighthouse/PSI reale post-deploy e un test con screen reader.

| Area | Prima (stima) | Dopo (stima) | Nota |
|---|---|---|---|
| SEO tecnica | 55 | 85 | sitemap/robots/CSP ora corretti; resta da verificare in Search Console dopo il deploy |
| SEO on-page | 82 | 84 | già solida; aggiunti breadcrumb strutturati e OG per gli articoli |
| Prestazioni | 76 | 80 | rendering già statico ovunque; rimossa una route non necessariamente dinamica, aggiunto `sizes`; resta il PDF pesante (non blocca il caricamento pagina) |
| Accessibilità | 70 | 79 | aggiunto skip-link e landmark; il resto (semantica, form, focus, reduced-motion) era già buono |
| Best practice | 55 | 88 | dipendenze vulnerabili risolte, `X-Powered-By` rimosso, immagini responsive |
| Sicurezza | 42 | 85 | prima nessun header di sicurezza; ora CSP/HSTS/X-Frame-Options/Referrer-Policy/Permissions-Policy attivi e verificati in risposta HTTP |
| UX | 79 | 80 | navigazione, form e popup non modificati nella logica; skip-link e link footer client-side sono micro-miglioramenti |
| Conversione | 74 | 74 | CTA, form e anti-spam erano già ben progettati; non toccati (fuori mandato modificare copy/prezzi); manca ancora una misurazione reale del funnel (per scelta, vedi sezione 13) |

---

## 16. Nota finale

Il sito era già in una condizione tecnica solida (architettura Next.js pulita, form sicuri, contenuti curati). Gli interventi di questo audit si sono concentrati su ciò che era realmente misurabile come problema — header di sicurezza mancanti, dipendenze vulnerabili, date false nella sitemap — e su una manciata di rifiniture SEO/accessibilità a basso rischio. Nessuna modifica ha toccato design, palette, contenuti commerciali, prezzi o animazioni. Tutte le modifiche sono state verificate con typecheck, build di produzione e controlli HTTP reali sulla build risultante.
