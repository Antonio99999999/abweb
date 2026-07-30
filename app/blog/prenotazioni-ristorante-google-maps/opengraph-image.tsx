import { ImageResponse } from "next/og";

export const alt = "Prenotazioni ristorante da Google: guida a link e profilo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "linear-gradient(135deg,#173e33,#0f2b23)", color: "#fff", padding: 72, fontFamily: "Arial" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "74%" }}>
        <div style={{ display: "flex", color: "#dff08b", fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>GOOGLE PER RISTORANTI</div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 62, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3 }}>Prenotazioni ristorante da Google: guida a link e profilo</div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 24, color: "#c7e7dc" }}>Dal Profilo dell&apos;attività al widget di prenotazione</div>
        <div style={{ display: "flex", marginTop: 42, fontSize: 19, fontWeight: 700, color: "#dff08b" }}>AB WEB AGENCY</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 210, height: 210, marginLeft: "auto", borderRadius: 48, background: "#dff08b", color: "#173e33", fontSize: 90, fontWeight: 800 }}>G</div>
    </div>,
    size
  );
}
