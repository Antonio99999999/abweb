import { ImageResponse } from "next/og";

export const alt = "Sito per ristorante: come trasformarlo in un canale di prenotazione";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "linear-gradient(135deg,#12233d,#0b1220)", color: "#fff", padding: 72, fontFamily: "Arial" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "74%" }}>
        <div style={{ display: "flex", color: "#ffad78", fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>SITI WEB PER RISTORANTI</div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 60, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3 }}>Il sito come canale di prenotazione</div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 24, color: "#c8d6e8" }}>Contenuti, mobile, CTA, widget e misurazione</div>
        <div style={{ display: "flex", marginTop: 42, fontSize: 19, fontWeight: 700, color: "#ffad78" }}>AB WEB AGENCY</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 210, height: 210, marginLeft: "auto", borderRadius: 48, background: "#f97316", color: "#12233d", fontSize: 90, fontWeight: 800 }}>W</div>
    </div>,
    size
  );
}
