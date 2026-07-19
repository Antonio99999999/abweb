import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AB Web Agency · Sistemi digitali per hospitality";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ height: "100%", width: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#07152c", color: "white", fontFamily: "Arial, sans-serif", padding: "72px" }}>
    <img alt="" src={new URL("./og-flow-background.png", import.meta.url).toString()} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(7,21,44,.98) 0%, rgba(7,21,44,.89) 42%, rgba(7,21,44,.16) 75%)" }} />
    <div style={{ display: "flex", flexDirection: "column", zIndex: 1, maxWidth: "760px" }}>
      <div style={{ display: "flex", alignItems: "center", color: "#ffad78", fontSize: "24px", fontWeight: 800, letterSpacing: "3px" }}><span style={{ display: "flex", width: "30px", height: "30px", borderRadius: "9px", marginRight: "14px", background: "#f97316", color: "#12233d", justifyContent: "center", alignItems: "center", fontSize: "18px" }}>AB</span>WEB AGENCY</div>
      <div style={{ display: "flex", fontSize: "74px", fontWeight: 800, letterSpacing: "-4px", lineHeight: 1.04, marginTop: "44px" }}>Sistemi digitali<br />per farsi scegliere.</div>
      <div style={{ display: "flex", color: "#c8d6e8", fontSize: "29px", marginTop: "30px" }}>Strategia · Design · Tecnologia</div>
    </div>
  </div>, size);
}
