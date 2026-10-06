from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from PIL import Image

ROOT = Path(r"C:\Users\anton\Documents\Codex\2026-07-19\va")
ASSETS = ROOT / "work" / "metodo-assets"
OUT = ROOT / "outputs" / "Metodo-Mastro-Benvenuti-al-Sud.pdf"

pdfmetrics.registerFont(TTFont("Title", r"C:\Windows\Fonts\georgiab.ttf"))
pdfmetrics.registerFont(TTFont("Body", r"C:\Windows\Fonts\segoeui.ttf"))

W, H = A4
M = 42
ink = "#14293D"; navy = "#0B1F33"; blue = "#D7E9F8"; sky = "#8DBBDB"
orange = "#F18445"; cream = "#F8F4ED"; fog = "#EDF4F8"; white = "#FFFFFF"; muted = "#587087"

def C(v):
    from reportlab.lib.colors import HexColor
    return HexColor(v)

def rect(c, x, y, w, h, fill, radius=0, stroke=None):
    c.setFillColor(C(fill)); c.setStrokeColor(C(stroke or fill))
    if radius: c.roundRect(x, y, w, h, radius, fill=1, stroke=1 if stroke else 0)
    else: c.rect(x, y, w, h, fill=1, stroke=1 if stroke else 0)

def crop(c, path, x, y, w, h):
    im = Image.open(path); iw, ih = im.size
    scale = max(w / iw, h / ih); dw, dh = iw * scale, ih * scale
    dx, dy = x + (w - dw) / 2, y + (h - dh) / 2
    c.saveState(); p = c.beginPath(); p.rect(x, y, w, h); c.clipPath(p, stroke=0, fill=0)
    c.drawImage(ImageReader(im), dx, dy, dw, dh, mask='auto'); c.restoreState()

def lines(c, value, font, size, maxw, leading=None):
    leading = leading or size * 1.35; words = value.split(); out=[]; row=""
    for word in words:
        cand = (row + " " + word).strip()
        if c.stringWidth(cand, font, size) <= maxw: row = cand
        else: out.append(row); row = word
    if row: out.append(row)
    return out, leading

def text(c, value, x, y, maxw, size=10, color=ink, font="Body", leading=None):
    c.setFillColor(C(color)); c.setFont(font, size); rows, leading = lines(c, value, font, size, maxw, leading)
    for r in rows: c.drawString(x, y, r); y -= leading
    return y

def title(c, value, x, y, maxw, size=27, color=ink):
    return text(c, value, x, y, maxw, size, color, "Title", size * 1.14)

def label(c, value, x, y, color=orange):
    c.setFillColor(C(color)); c.setFont("Body", 8); c.drawString(x, y, value.upper())

def footer(c, page):
    c.setStrokeColor(C("#D4E0E8")); c.setLineWidth(.6); c.line(M, 31, W-M, 31)
    c.setFillColor(C(muted)); c.setFont("Body", 7.5); c.drawString(M, 18, "AB Web Agency · Metodo Mastro")
    c.drawRightString(W-M, 18, f"{page:02d} / 12")

def header(c, page, kicker, heading, intro):
    label(c, kicker, M, H-48); title(c, heading, M, H-87, W-2*M, 26)
    text(c, intro, M, H-142, W-2*M, 10, muted)
    footer(c, page)

def card(c, x, y, w, h, heading, body, tint=blue):
    rect(c, x, y, w, h, tint, 13)
    label(c, heading, x+15, y+h-22, orange)
    text(c, body, x+15, y+h-45, w-30, 9, ink, "Body", 12)

def image_caption(c, cap, x, y, w):
    c.setFillColor(C(white)); c.setFont("Body", 7.8); c.drawString(x, y, cap)

def page1(c):
    crop(c, ASSETS/"sala-editoriale.jpg", 0, 0, W, H)
    # Photo remains visible across the cover; the panel preserves text contrast.
    c.saveState(); c.setFillAlpha(.88); rect(c, 0, 0, W*.66, H, navy); c.restoreState()
    rect(c, W*.66-2.5, 0, 5, H, orange)
    label(c, "Caso studio · ristorazione", M, H-70, orange)
    title(c, "Benvenuti al Sud", M, H-132, W*.57, 33, white)
    title(c, "Un locale riconoscibile, anche online.", M, H-210, W*.55, 22, "#D7E9F8")
    text(c, "Come abbiamo dato forma digitale a un ristorante che vive di ritmo, ospitalità e piatti che meritano di essere scelti.", M, H-282, W*.51, 11, "#D7E9F8")
    rect(c, M, 65, 220, 44, orange, 10)
    c.setFillColor(C(navy)); c.setFont("Title", 11); c.drawCentredString(M+110, 82, "IL METODO MASTRO")
    footer(c, 1); c.showPage()

def page2(c):
    header(c, 2, "01 / Il punto di partenza", "Un ristorante pieno di vita, una presenza digitale da riallineare.", "L'obiettivo non era rendere il locale più patinato. Era renderlo più fedele a ciò che accade ogni giorno tra sala, cucina e accoglienza.")
    crop(c, ASSETS/"bdcb85bc-7ddd-4e8b-a3c4-d238f9186752.jpg", M, 224, 300, 230)
    card(c, 365, 330, 188, 124, "La sfida", "Far percepire online la qualità dell'esperienza reale, senza perdere calore o semplicità.")
    card(c, 365, 224, 188, 88, "Il criterio", "Ogni scelta doveva essere utile al cliente e sostenibile per chi lavora nel locale.", cream)
    card(c, M, 82, 156, 112, "Identità", "Un'immagine coerente, capace di raccontare carattere e quotidianità.")
    card(c, 218, 82, 156, 112, "Operatività", "Strumenti più chiari per prenotazioni, turni e proposta vini.", cream)
    card(c, 392, 82, 161, 112, "Relazione", "Meno passaggi intermedi, più contatto diretto con gli ospiti.")
    footer(c, 2); c.showPage()

def page3(c):
    header(c, 3, "02 / Strategia", "Prima la realtà del locale. Poi il design.", "Abbiamo costruito un sistema coordinato: sito, strumenti interni e comunicazione lavorano insieme per rendere il servizio più semplice e l'identità più nitida.")
    crop(c, ASSETS/"IL METODO (2).png", M, 253, 255, 205)
    card(c, 320, 352, 233, 106, "01. Rendere riconoscibile", "Colori, materiali e tono visivo per comunicare un locale contemporaneo, accogliente e concreto.")
    card(c, 320, 236, 233, 96, "02. Rendere accessibile", "Informazioni, menu e prenotazione progettati per chi deve scegliere in pochi secondi.", cream)
    card(c, M, 86, 160, 116, "03. Rendere diretto", "Meno dipendenza dai portali, più dati e contatti che restano al ristorante.")
    card(c, 214, 86, 160, 116, "04. Rendere gestibile", "Strumenti pensati per alleggerire i passaggi ripetitivi dello staff.", cream)
    card(c, 408, 86, 145, 116, "05. Raccontare", "Contenuti e occasioni per mantenere vivo il rapporto con la comunità.")
    footer(c, 3); c.showPage()

def page4(c):
    header(c, 4, "03 / Il sito", "Un sito che orienta, non che trattiene.", "La nuova architettura mette in primo piano il locale, i piatti e le azioni che contano: conoscere la proposta, scegliere e prenotare.")
    crop(c, ASSETS/"IL METODO (3).png", M, 274, 250, 185)
    # Explicit white background for the text under the image
    rect(c, M, 225, 250, 38, white, 0, "#D4E0E8")
    text(c, "Una fotografia del prodotto: calda, immediata, senza artifici.", M+12, 247, 226, 8.5, muted)
    card(c, 320, 348, 233, 111, "Struttura", "Homepage essenziale, percorsi chiari e pagine dedicate a menu, prenotazioni, storia e contatti.")
    card(c, 320, 230, 233, 98, "Comunicazione", "Un linguaggio vicino a chi corre tra i tavoli: preciso, ospitale e mai costruito.", cream)
    rect(c, M, 85, W-2*M, 103, fog, 13)
    label(c, "Principio di progetto", M+16, 166)
    title(c, "Ogni schermata deve aiutare qualcuno a decidere.", M+16, 140, W-2*M-32, 15)
    text(c, "Per l'ospite significa trovare subito ciò che cerca. Per il team significa ricevere richieste più chiare e meno frammentate.", M+16, 110, W-2*M-32, 9.5, muted)
    footer(c, 4); c.showPage()

def page5(c):
    header(c, 5, "04 / Menu", "Quattro lingue, una lettura semplice.", "Il menu è diventato uno strumento di orientamento: leggibile da mobile, ordinato e costruito per valorizzare i piatti forti senza affaticare chi consulta.")
    rect(c, M, 242, 255, 220, cream, 14)
    label(c, "Menu digitale", M+18, 438)
    title(c, "Italiano · English · Français · Deutsch", M+18, 405, 220, 17)
    text(c, "Una struttura uniforme per ospiti italiani e internazionali, con sezioni facili da scorrere e informazioni sempre aggiornabili.", M+18, 344, 216, 10, muted)
    crop(c, ASSETS/"IL METODO (3).png", 320, 242, 233, 220)
    card(c, M, 88, 156, 124, "Gerarchia", "Antipasti, pizze, cucina e bevande in un ordine che rende naturale la scelta.")
    card(c, 218, 88, 156, 124, "Accessibilità", "Corpo testo leggibile, contrasto curato e file facili da aprire anche al tavolo.", cream)
    card(c, 392, 88, 161, 124, "Valore", "I piatti identitari hanno più spazio, più contesto e una presenza memorabile.")
    footer(c, 5); c.showPage()

def page6(c):
    header(c, 6, "05 / Prenotazioni", "Meno commissioni ricorrenti, più controllo sulla relazione.", "I portali di prenotazione possono dare visibilità, ma quando diventano l'unico canale riducono margini e conoscenza diretta dell'ospite.")
    rect(c, M, 230, W-2*M, 229, fog, 14)
    label(c, "Dal canale esterno al sistema proprietario", M+18, 435)
    # Table
    columns = [M+18, M+190, M+340]; widths = [160, 135, 145]
    for x in [M+18, M+180, M+330, W-M-18]: c.setStrokeColor(C("#BED2E0")); c.line(x, 236, x, 404)
    for y in [404, 365, 322, 279, 236]: c.setStrokeColor(C("#BED2E0")); c.line(M+18, y, W-M-18, y)
    c.setFont("Title", 9); c.setFillColor(C(ink)); c.drawString(M+28, 383, "Aspetto"); c.drawString(M+193, 383, "Portali"); c.drawString(M+343, 383, "Gestionale interno")
    rows=[("Rapporto con l'ospite","Mediato","Diretto"),("Costo per coperto","Commissione ricorrente","Più accessibile"),("Dati e autonomia","Limitati","Utili al locale")]
    yy=346
    for a,b,d in rows:
        c.setFont("Body",8.3); c.setFillColor(C(muted)); c.drawString(M+28,yy,a); c.drawString(M+193,yy,b); c.drawString(M+343,yy,d); yy-=43
    card(c, M, 88, 247, 125, "Scelta", "Integrare un gestionale interno per raccogliere richieste, gestire disponibilità e mantenere un dialogo più diretto.")
    card(c, 306, 88, 247, 125, "Impatto", "Una tecnologia meno invasiva e meno dispendiosa, costruita attorno ai ritmi reali del ristorante.", cream)
    footer(c, 6); c.showPage()

def page7(c):
    header(c, 7, "06 / Strumenti", "I dettagli operativi meritano un'interfaccia chiara.", "Dietro l'esperienza dell'ospite ci sono molte decisioni quotidiane. Abbiamo organizzato due strumenti semplici per ridurre dispersioni e rendere le informazioni consultabili.")
    crop(c, ASSETS/"IL METODO (1).png", M, 258, 250, 200)
    card(c, 320, 350, 233, 108, "Wine manager", "Una guida digitale alla proposta vini: più chiara per il team e più pronta a sostenere suggerimenti coerenti.")
    crop(c, ASSETS/"IL METODO.png", M, 84, 250, 142)
    card(c, 320, 84, 233, 142, "Shift manager", "Turni e presenze leggibili in un unico spazio. Meno messaggi sparsi, più tempo dedicato alla sala.", cream)
    footer(c, 7); c.showPage()

def page8(c):
    header(c, 8, "07 / Dieci anni", "Un anniversario trasformato in un progetto di relazione.", "I dieci anni del locale sono diventati un'occasione per ringraziare chi lo frequenta, rendere visibile il percorso e produrre contenuti che non sembrassero una campagna qualsiasi.")
    crop(c, ASSETS/"IL METODO (2).png", M, 247, 300, 214)
    card(c, 365, 349, 188, 112, "Box regalo", "Una selezione di articoli brandizzati pensata per dare forma fisica al legame con il locale.")
    card(c, 365, 247, 188, 82, "Video social", "Un contenuto dedicato per raccontare il traguardo con volti, sala e memoria.", cream)
    card(c, M, 88, 156, 120, "Ricorrenza", "Un momento riconoscibile, non una promozione generica.")
    card(c, 218, 88, 156, 120, "Comunità", "Gli ospiti entrano nel racconto e diventano parte della celebrazione.", cream)
    card(c, 392, 88, 161, 120, "Continuità", "Materiali e contenuti restano utili anche dopo l'evento.")
    footer(c, 8); c.showPage()

def page9(c):
    header(c, 9, "08 / Comunicazione", "Mostrarsi per quello che si è, con metodo.", "La comunicazione ha smesso di inseguire formule generiche e ha iniziato a restituire l'identità del locale: un posto vivo, curato e consapevole del proprio mestiere.")
    crop(c, ASSETS/"sala-editoriale.jpg", M, 263, 255, 195)
    card(c, 320, 351, 233, 107, "Tono", "Diretto, ospitale e concreto. Le parole raccontano il servizio senza trasformarlo in una posa.")
    card(c, 320, 243, 233, 89, "Immagine", "Piatti, persone e spazi vengono scelti per fare riconoscere il locale, non per inseguire un'estetica anonima.", cream)
    rect(c, M, 91, W-2*M, 104, navy, 13)
    title(c, "La credibilità non si aggiunge: si rende visibile.", M+18, 158, W-2*M-36, 16, white)
    text(c, "Un sistema coerente permette al ristorante di mostrarsi per ciò che è davvero, ogni giorno.", M+18, 119, W-2*M-36, 9.5, "#D7E9F8")
    footer(c, 9); c.showPage()

def page10(c):
    header(c, 10, "10 / Consegne e obiettivi", "Un lavoro concreto, con obiettivi chiari.", "Il progetto ha consegnato strumenti operativi e un'identità coerente. Non riportiamo percentuali di risultato.")
    # Chart - no decorative numeral
    rect(c, M, 220, 286, 246, fog, 14)
    label(c, "Indicatori del progetto", M+18, 438)
    consegne=["Menu digitale in quattro lingue", "Sistema di prenotazione proprietario", "Strumenti per turni e proposta vini"]
    yy=381
    for item in consegne:
        c.setFillColor(C(ink)); c.setFont("Body", 10); c.drawString(M+18, yy, item)
        yy -= 28
    c.setFillColor(C(muted)); c.setFont("Body", 7.6); c.drawString(M+18, 202, "Questo caso studio non riporta percentuali di risultato.")
    # Decorative goals table
    rect(c, 349, 220, 204, 246, cream, 14)
    label(c, "Obiettivi del sistema", 365, 438)
    goals=[("Più richieste dirette", "Ridurre l'intermediazione."),("Margini più protetti", "Limitare le commissioni ricorrenti."),("Servizio più fluido", "Liberare tempo al team."),("Dati più utili", "Decidere su segnali reali.")]
    gy=405
    for a,b in goals:
        rect(c,365,gy-34,172,45,white,8,"#D8E2E8")
        c.setFillColor(C(orange)); c.setFont("Title",9); c.drawString(377,gy-9,a)
        c.setFillColor(C(muted)); c.setFont("Body",7.5); c.drawString(377,gy-23,b)
        gy-=52
    rect(c, M, 105, W-2*M, 75, navy, 13)
    text(c, "La crescita è utile quando resta leggibile: per il cliente, per il team e per chi prende le decisioni nel locale.", M+18, 145, W-2*M-36, 11, "#D7E9F8", "Title", 15)
    footer(c, 10); c.showPage()

def page11(c):
    header(c, 11, "10 / Continuità", "Un sistema che può crescere in novanta giorni.", "Il valore non sta soltanto nel lancio. Sta nella capacità di aggiornare, misurare e migliorare con costanza, senza complicare il lavoro di chi gestisce il ristorante.")
    stages=[("Giorni 1-30", "Fondamenta", "Sito, menu, prenotazione diretta e asset di comunicazione."),("Giorni 31-60", "Ottimizzazione", "Analisi delle richieste, contenuti e miglioramento dei percorsi."),("Giorni 61-90", "Relazione", "Campagne mirate, ricorrenze e fidelizzazione degli ospiti.")]
    x=M
    for i,(term,h,b) in enumerate(stages):
        card(c,x,220,155,236,term,h+"\n\n"+b, blue if i!=1 else cream)
        x+=174
    rect(c, M, 96, W-2*M, 83, fog, 13)
    title(c, "Un progetto premium deve essere facile da mantenere.", M+18, 148, W-2*M-36, 15)
    text(c, "Per questo ogni componente è stato pensato per essere aggiornato senza perdere coerenza o rallentare l'operatività.", M+18, 116, W-2*M-36, 9.5, muted)
    footer(c, 11); c.showPage()

def page12(c):
    rect(c, 0, 0, W, H, navy)
    crop(c, ASSETS/"bdcb85bc-7ddd-4e8b-a3c4-d238f9186752.jpg", W*.55, 0, W*.45, H)
    label(c, "Metodo Mastro", M, H-72, orange)
    title(c, "Ogni locale ha una storia. Merita un sistema che la sappia raccontare.", M, H-132, W*.47, 27, white)
    text(c, "Se vuoi capire come rendere più chiara la tua presenza digitale, più diretta la relazione con gli ospiti e più semplice la gestione quotidiana, parliamone.", M, H-285, W*.47, 11, "#D7E9F8")
    rect(c, M, 130, 215, 47, orange, 10)
    c.setFillColor(C(navy)); c.setFont("Title", 10); c.drawCentredString(M+107, 149, "RICHIEDI UNA CONSULENZA")
    c.setFillColor(C("#D7E9F8")); c.setFont("Body", 9); c.drawString(M, 94, "ab.agenziaweb@gmail.com")
    footer(c, 12); c.showPage()

def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c=canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1, title="Metodo Mastro | Benvenuti al Sud", author="AB Web Agency")
    for fn in [page1,page2,page3,page4,page5,page6,page7,page8,page9,page10,page11,page12]: fn(c)
    c.save()
    print(OUT)

if __name__ == '__main__': main()
