# CLAUDE.md — AB Web Agency

## Contesto del progetto

Questo repository contiene il sito ufficiale di AB Web Agency:

https://abagenziaweb.it

Il sito presenta i servizi dell’agenzia, i progetti realizzati, i contenuti SEO e i prodotti digitali sviluppati dall’agenzia.

Uno di questi prodotti è un gestionale di prenotazioni per ristoranti.

L’applicazione gestionale vera e propria si trova in un repository separato e non deve essere integrata direttamente in questo progetto.

Questo repository deve contenere solamente:

* pagine pubbliche;
* landing page;
* contenuti commerciali;
* contenuti SEO;
* form di contatto;
* mockup e screenshot;
* collegamenti all’applicazione esterna.

## Separazione dei progetti

Sito pubblico:

https://abagenziaweb.it

Area pubblica del gestionale:

https://abagenziaweb.it/gestionale-ristoranti

Applicazione gestionale:

https://app.abagenziaweb.it

Non importare nel sito dell’agenzia:

* autenticazione del gestionale;
* database Supabase del gestionale;
* logica delle prenotazioni;
* dashboard privata;
* API riservate;
* chiavi private;
* componenti interni dell’applicazione.

## Regole fondamentali

Prima di modificare il codice:

1. Analizza la struttura del progetto.
2. Leggi package.json.
3. Individua framework, librerie e convenzioni già utilizzate.
4. Controlla se esistono componenti riutilizzabili.
5. Controlla header, footer, pulsanti, form e sistema grafico.
6. Non sostituire componenti funzionanti senza una motivazione concreta.
7. Non effettuare grandi refactoring non richiesti.

## Metodo di lavoro

Per ogni attività:

1. Descrivi brevemente cosa intendi fare.
2. Individua i file interessati.
3. Esegui modifiche progressive.
4. Mantieni il progetto compilabile.
5. Esegui lint, typecheck e build quando disponibili.
6. Correggi gli errori causati dalle modifiche.
7. Riassumi i file modificati alla fine.

Non limitarti a descrivere il codice: applica le modifiche richieste.

## Stack tecnico

Mantieni lo stack già presente nel progetto.

Se il progetto utilizza Next.js:

* usa TypeScript;
* rispetta App Router o Pages Router già adottato;
* preferisci Server Components quando appropriato;
* usa Client Components solo quando necessari;
* non aggiungere dipendenze inutili;
* non duplicare layout e metadata;
* non inserire tutto in un singolo file.

## Componenti

Prima di creare un nuovo componente, verifica se ne esiste già uno compatibile.

Riutilizza quando possibile:

* Header;
* Footer;
* Container;
* Section;
* Button;
* Card;
* Form;
* Input;
* Accordion;
* CTA;
* componenti tipografici.

I componenti specifici del gestionale pubblico devono essere modulari e collocati in una cartella coerente con l’architettura esistente.

## Design

Il design deve essere coerente con AB Web Agency.

Caratteristiche richieste:

* moderno;
* professionale;
* pulito;
* responsive;
* accessibile;
* orientato alla conversione;
* credibile per ristoratori e imprese.

Colori principali:

* blu scuro;
* arancione;
* bianco;
* grigi chiari.

Usa animazioni leggere e funzionali.

Evita:

* animazioni invasive;
* effetti gratuiti;
* testi generici;
* fotografie stock banali;
* interfacce eccessivamente affollate;
* imitazioni evidenti di siti concorrenti.

## SEO

Ogni nuova pagina pubblica deve includere:

* title;
* meta description;
* canonical coerente;
* Open Graph;
* struttura corretta di H1, H2 e H3;
* contenuti leggibili e naturali;
* link interni;
* immagini con testo alternativo;
* URL descrittivi;
* dati strutturati quando pertinenti.

Non creare pagine quasi identiche solo per intercettare parole chiave.

Non fare keyword stuffing.

La pagina principale del prodotto deve essere raggiungibile da:

/gestionale-ristoranti

## Performance

Mantieni buoni valori Core Web Vitals.

Preferisci:

* next/image quando disponibile;
* immagini WebP o AVIF;
* lazy loading;
* JavaScript client ridotto;
* font ottimizzati;
* componenti server;
* caricamento differito delle parti non essenziali.

Evita librerie pesanti per funzioni semplici.

## Accessibilità

Ogni componente deve prevedere:

* HTML semantico;
* label nei form;
* navigazione da tastiera;
* focus visibile;
* contrasto adeguato;
* aria-label solo quando necessari;
* rispetto di prefers-reduced-motion.

## Sicurezza

Non inserire nel codice:

* password;
* service role key;
* token;
* segreti;
* chiavi private;
* credenziali Supabase;
* credenziali email;
* webhook privati.

Usa variabili d’ambiente.

Non esporre variabili server attraverso prefissi pubblici.

## Contenuti e veridicità

Non inventare:

* clienti;
* recensioni;
* risultati;
* percentuali;
* numero di ristoranti;
* prezzi definitivi;
* certificazioni;
* conformità legali non verificate.

Le funzionalità non ancora disponibili devono essere indicate come:

* in sviluppo;
* in arrivo;
* previste;
* personalizzabili su richiesta.

Non presentarle come già operative.

## Gestionale per ristoranti

Il posizionamento principale è:

“Il gestionale di prenotazione costruito sulla sala reale del tuo ristorante.”

Le funzioni centrali da comunicare sono:

* mappa reale della sala;
* gestione tavoli;
* gestione prenotazioni;
* widget di prenotazione;
* database clienti;
* statistiche;
* report;
* automazioni;
* gestione consensi;
* ruoli del personale.

Il prodotto deve essere presentato come:

“Un prodotto sviluppato da AB Web Agency.”

## Collegamenti

Usa sempre il dominio corretto:

https://abagenziaweb.it

Il collegamento all’applicazione deve essere configurabile e non ripetuto manualmente in molti file.

Preferisci una costante centrale, ad esempio:

APP_URL=https://app.abagenziaweb.it

## Form

I form pubblici devono prevedere:

* validazione;
* consenso privacy;
* gestione degli errori;
* stato di caricamento;
* messaggio di successo;
* protezione antispam;
* logica server-side per l’invio.

Non inviare email o richieste sensibili direttamente dal client.

## Git e file da non modificare

Non modificare senza necessità:

* file generati;
* lockfile, salvo modifica reale delle dipendenze;
* configurazioni di deploy funzionanti;
* variabili d’ambiente reali;
* file build;
* cartelle node_modules;
* cartelle .next.

Non eliminare codice esistente prima di aver verificato che non venga utilizzato.

## Criteri di completamento

Un’attività è completa soltanto quando:

* la pagina funziona;
* il progetto compila;
* non ci sono errori TypeScript introdotti;
* il responsive è verificato;
* i link funzionano;
* i contenuti non hanno placeholder involontari;
* SEO e accessibilità sono state considerate;
* sono elencati i file modificati.
