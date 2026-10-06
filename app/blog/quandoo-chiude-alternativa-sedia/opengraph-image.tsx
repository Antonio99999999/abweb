import { ImageResponse } from "next/og";

export const alt = "Quandoo non è più disponibile: alternative e passaggio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "linear-gradient(135deg,#f6f3ec,#eef4de)", color: "#0b1220", padding: 72, fontFamily: "Arial" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "74%" }}>
        <div style={{ display: "flex", color: "#d95531", fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>GESTIONALI PER RISTORANTI</div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 68, fontWeight: 800, lineHeight: 1.03, letterSpacing: -3 }}>Quandoo non è più disponibile: come scegliere l’alternativa</div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 25, color: "#405064" }}>Criteri di scelta e checklist per il passaggio</div>
        <div style={{ display: "flex", marginTop: 42, fontSize: 19, fontWeight: 700 }}>AB WEB AGENCY</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 210, height: 210, marginLeft: "auto", borderRadius: 48, background: "#173e33", color: "#dff08b", fontSize: 48, fontFamily: "Georgia", fontWeight: 700 }}>Sedia</div>
    </div>,
    size
  );
}
