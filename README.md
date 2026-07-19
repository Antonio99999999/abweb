# AB Web Agency

Ricostruzione Next.js del sito AB Web Agency.

## Avvio

```bash
npm install
npm run dev
```

## Lead del preventivatore su Google Sheets

Il visitatore resta sempre sul sito. Una API del sito manda il lead a un Apps Script invisibile, che aggiunge una riga in Google Sheets. Non serve Google Cloud.

### 1. Prepara il foglio

Crea un foglio, rinomina la prima scheda `Lead` e incolla nella cella A1:

```tsv
Ricevuto	Nome	Email	Telefono	Azienda	Servizi	Pagine	Contenuti	Logo	Extra	Modulo	SEO	Gestione social	Piano social	IA	Durata	Totale listino	Minimo stimato	Massimo stimato	Fascia	Obiettivo	Fonte
```

### 2. Crea il ponte Apps Script

Nel foglio apri **Estensioni → Apps Script**, incolla questo codice e salva:

```javascript
const ADMIN_EMAIL = 'ab.agenziaweb@gmail.com';
const SITE_URL = 'https://abwebagencies.com';
const LOGO_URL = SITE_URL + '/brand/abwebagency-logo.png';

function doPost(e) {
  const expectedSecret = PropertiesService.getScriptProperties().getProperty('LEAD_SECRET');
  if (!expectedSecret || !e || e.parameter.key !== expectedSecret) return json({ ok: false });

  const lead = JSON.parse(e.postData.contents);
  const isMastroDownload = lead.kind === 'mastro';
  const row = isMastroDownload
    ? [lead.receivedAt || new Date().toISOString(), lead.name || '', lead.email || '', '', '', 'Download Metodo Mastro', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', lead.source || 'abwebagencies.com']
    : [lead.receivedAt || new Date().toISOString(), lead.name || '', lead.email || '', lead.phone || '', lead.company || '', join(lead.services), lead.pages || '', lead.texts || '', lead.logo || '', join(lead.extras), lead.module || '', lead.seo || '', lead.social || '', lead.socialPlan || '', lead.ai || '', lead.duration || '', lead.estimate || '', lead.minimum || '', lead.maximum || '', lead.tier || '', lead.note || '', lead.source || 'abwebagencies.com'];

  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Lead').appendRow(row);
  isMastroDownload ? sendMastroEmails(lead) : sendQuoteEmails(lead);
  return json({ ok: true });
}

function sendQuoteEmails(lead) {
  const name = esc(lead.name);
  const company = esc(lead.company) || 'il tuo progetto';
  const minimum = money(lead.minimum);
  const maximum = money(lead.maximum);
  const summary = detailRows([
    ['Servizi', join(lead.services)], ['Pagine', lead.pages], ['Contenuti', lead.texts],
    ['Logo', lead.logo], ['Extra', join(lead.extras)], ['Modulo', lead.module],
    ['SEO', lead.seo], ['Gestione social', lead.social], ['Piano social', lead.socialPlan],
    ['Automazione IA', lead.ai], ['Durata', lead.duration]
  ]);

  sendMail(ADMIN_EMAIL, 'Nuovo preventivo · ' + name, shell(
    'Nuova richiesta di preventivo',
    '<p><strong>' + name + '</strong> ha configurato un progetto.</p>' +
    detailRows([['Email', lead.email], ['Telefono', lead.phone], ['Azienda', lead.company], ['Fascia', lead.tier]]) +
    priceBox(minimum, maximum, lead.tier) + '<h2>Configurazione</h2>' + summary
  ));

  sendMail(lead.email, 'Abbiamo ricevuto la tua richiesta · AB Web Agency', shell(
    'Grazie, ' + name + '.',
    '<p>Abbiamo ricevuto la richiesta per <strong>' + company + '</strong>. Un consulente analizzerà la configurazione e ti contatterà per approfondire i dettagli utili.</p>' +
    '<h2>Il tuo riepilogo</h2>' + summary + priceBox(minimum, maximum, lead.tier) +
    '<p>Puoi rispondere direttamente a questa email per aggiungere informazioni al progetto.</p>'
  ));
}

function sendMastroEmails(lead) {
  const name = esc(lead.name);
  const url = SITE_URL + '/downloads/metodo-mastro-benvenuti-al-sud.pdf';
  sendMail(lead.email, 'Il tuo caso studio Metodo Mastro', shell(
    'Ciao, ' + name + '.',
    '<p>Come promesso, ecco il caso studio dedicato a <strong>Benvenuti al Sud</strong>: branding, sito, menu in quattro lingue, prenotazioni dirette e strumenti per la gestione quotidiana.</p>' +
    button(url, 'Scarica il caso studio') +
    '<p class="small">Se il pulsante non si apre, copia questo indirizzo nel browser:<br><a href="' + url + '">' + url + '</a></p>'
  ));
  sendMail(ADMIN_EMAIL, 'Nuovo download · Metodo Mastro', shell(
    'Nuovo contatto acquisito',
    '<p><strong>' + name + '</strong> ha richiesto il caso studio Metodo Mastro.</p>' + detailRows([['Email', lead.email], ['Fonte', lead.source || 'abwebagencies.com']])
  ));
}

function sendMail(to, subject, htmlBody) {
  MailApp.sendEmail({ to: to, subject: subject, htmlBody: htmlBody, body: 'AB Web Agency · ' + subject, name: 'AB Web Agency', replyTo: ADMIN_EMAIL });
}

function shell(title, content) {
  return '<!doctype html><html><body style="margin:0;padding:0;background:#edf4f8;font-family:Arial,sans-serif;color:#14293d">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:32px 16px">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:auto;background:#ffffff;border-radius:18px;overflow:hidden">' +
    '<tr><td style="background:#0b1f33;padding:28px 34px"><img src="' + LOGO_URL + '" alt="AB Web Agency" width="72" style="display:block;width:72px;height:auto;margin-bottom:20px"><div style="font-size:12px;letter-spacing:1.4px;color:#f18445;text-transform:uppercase">AB Web Agency</div><div style="font-family:Georgia,serif;font-weight:bold;font-size:30px;line-height:1.2;color:#ffffff;margin-top:8px">' + title + '</div></td></tr>' +
    '<tr><td style="padding:32px 34px;font-size:16px;line-height:1.6">' + content + '</td></tr>' +
    '<tr><td style="padding:20px 34px;background:#f8f4ed;font-size:12px;line-height:1.5;color:#587087">AB Web Agency<br><a href="' + SITE_URL + '" style="color:#587087">abwebagencies.com</a> · <a href="mailto:' + ADMIN_EMAIL + '" style="color:#587087">' + ADMIN_EMAIL + '</a></td></tr>' +
    '</table></td></tr></table></body></html>';
}

function detailRows(rows) {
  const visible = rows.filter(function(row) { return row[1] !== undefined && row[1] !== null && String(row[1]).trim() !== ''; });
  if (!visible.length) return '';
  return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #d7e9f8;border-radius:12px;overflow:hidden;margin:18px 0">' + visible.map(function(row) {
    return '<tr><td style="padding:10px 12px;border-bottom:1px solid #d7e9f8;font-size:12px;color:#587087;width:37%">' + esc(row[0]) + '</td><td style="padding:10px 12px;border-bottom:1px solid #d7e9f8;font-size:14px;color:#14293d">' + esc(row[1]) + '</td></tr>';
  }).join('') + '</table>';
}

function priceBox(minimum, maximum, tier) {
  return '<div style="margin:24px 0;padding:20px 22px;border-radius:12px;background:#d7e9f8;text-align:center"><div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#587087">' + esc(tier || 'Stima iniziale') + '</div><div style="font-family:Georgia,serif;font-weight:bold;font-size:25px;line-height:1.25;color:#14293d;margin-top:7px">Da ' + minimum + ' a ' + maximum + '</div><div style="font-size:12px;color:#587087;margin-top:6px">La proposta definitiva viene definita dopo il confronto.</div></div>';
}

function button(url, label) {
  return '<div style="margin:26px 0;text-align:center"><a href="' + url + '" style="display:inline-block;padding:14px 22px;border-radius:9px;background:#f18445;color:#0b1f33;text-decoration:none;font-weight:bold">' + label + '</a></div>';
}

function money(value) { return '€ ' + (Number(value) || 0).toLocaleString('it-IT'); }
function join(value) { return Array.isArray(value) ? value.join(', ') : (value || ''); }
function esc(value) { return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;'); }
function json(value) { return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }
```

In **Impostazioni progetto → Proprietà script**, aggiungi `LEAD_SECRET` e un valore casuale lungo. Poi vai su **Distribuisci → Nuova distribuzione → App web**, esegui come te e consenti accesso a chiunque. Copia l’URL `/exec`.

### 3. Configura il sito

Copia `.env.example` in `.env.local`:

```env
APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/TUO_ID/exec
APPS_SCRIPT_SECRET=LO_STESSO_VALORE_CASUALE
```

Inserisci le stesse due variabili nel provider di hosting. Non pubblicare `.env.local` né il segreto.

Prima della pubblicazione completare: indirizzo e-mail definitivo, P. IVA/dati legali, privacy e cookie policy, testi dei case study e immagini reali.
