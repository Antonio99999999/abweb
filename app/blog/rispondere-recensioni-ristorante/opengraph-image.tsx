import { ImageResponse } from "next/og";

export const alt = "Rispondere alle recensioni del ristorante, anche le negative";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "linear-gradient(135deg,#86efac,#16a34a)", color: "#1e1711", padding: 72, fontFamily: "Arial" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "74%" }}>
        <div style={{ display: "flex", color: "#12233d", fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>GOOGLE PER RISTORANTI</div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 56, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, color: "#fff" }}>Rispondere alle recensioni, anche le negative</div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 24, color: "#1e1711" }}>Un metodo breve e non difensivo, con una routine settimanale</div>
        <div style={{ display: "flex", marginTop: 42, fontSize: 19, fontWeight: 700, color: "#fff" }}>AB WEB AGENCY</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 210, height: 210, marginLeft: "auto", borderRadius: 48, background: "#12233d", color: "#fff", fontSize: 90, fontWeight: 800 }}>R</div>
    </div>,
    size
  );
}
