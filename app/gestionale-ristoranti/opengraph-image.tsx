import { ImageResponse } from "next/og";

export const alt = "Sedia, il gestionale di prenotazioni per ristoranti";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "linear-gradient(135deg,#173e33,#0f2b23)", color: "#fff", padding: 72, fontFamily: "Arial" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "74%" }}>
        <div style={{ display: "flex", color: "#dff08b", fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>GESTIONALE PER RISTORANTI</div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 66, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3 }}>Il gestionale costruito sulla sala reale del tuo ristorante</div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 24, color: "#c7e7dc" }}>Mappa dei tavoli · prenotazioni · widget per il sito</div>
        <div style={{ display: "flex", marginTop: 42, fontSize: 19, fontWeight: 700, color: "#dff08b" }}>UN PRODOTTO DI AB WEB AGENCY</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 210, height: 210, marginLeft: "auto", borderRadius: 48, background: "#dff08b", color: "#173e33", fontSize: 40, fontFamily: "Georgia", fontWeight: 700 }}>Sedia</div>
    </div>,
    size
  );
}
