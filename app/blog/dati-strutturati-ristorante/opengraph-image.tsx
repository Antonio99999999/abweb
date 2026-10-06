import { ImageResponse } from "next/og";

export const alt = "Dati strutturati per ristoranti: cosa dichiarare";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "linear-gradient(135deg,#1e3a5f,#0f172a)", color: "#1e1711", padding: 72, fontFamily: "Arial" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "74%" }}>
        <div style={{ display: "flex", color: "#12233d", fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>SEO LOCALE PER RISTORANTI</div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 56, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, color: "#fff" }}>Dati strutturati per ristoranti</div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 24, color: "#1e1711" }}>Cosa dichiarare, cosa evitare e come verificarlo</div>
        <div style={{ display: "flex", marginTop: 42, fontSize: 19, fontWeight: 700, color: "#fff" }}>AB WEB AGENCY</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 210, height: 210, marginLeft: "auto", borderRadius: 48, background: "#12233d", color: "#fff", fontSize: 90, fontWeight: 800 }}>D</div>
    </div>,
    size
  );
}
