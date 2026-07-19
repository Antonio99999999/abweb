import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AB Web Agency · Sistemi digitali per hospitality";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ height: "100%", width: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#12233d", color: "white", fontFamily: "Arial, sans-serif", padding: "72px" }}>
    <div style={{ position: "absolute", width: "560px", height: "560px", borderRadius: "999px", right: "-130px", top: "-210px", background: "#f97316", opacity: 0.95 }} />
    <div style={{ position: "absolute", width: "390px", height: "390px", borderRadius: "999px", right: "100px", bottom: "-250px", border: "2px solid rgba(255,255,255,.24)" }} />
    <div style={{ display: "flex", flexDirection: "column", zIndex: 1, maxWidth: "850px" }}>
      <div style={{ display: "flex", color: "#ffad78", fontSize: "24px", fontWeight: 700, letterSpacing: "3px" }}>AB WEB AGENCY</div>
      <div style={{ display: "flex", fontSize: "72px", fontWeight: 800, letterSpacing: "-4px", lineHeight: 1.04, marginTop: "34px" }}>Sistemi digitali<br />per farsi scegliere.</div>
      <div style={{ display: "flex", color: "#c8d6e8", fontSize: "30px", marginTop: "30px" }}>Strategia · Design · Tecnologia</div>
    </div>
  </div>, size);
}
