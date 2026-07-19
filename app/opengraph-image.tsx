import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AB Web Agency · Sistemi digitali per hospitality";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ height: "100%", width: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#07152c", color: "white", fontFamily: "Arial, sans-serif", padding: "72px" }}>
    <div style={{ position: "absolute", width: "720px", height: "720px", borderRadius: "999px", right: "-285px", bottom: "-370px", background: "#e85d12", opacity: .92 }} />
    <div style={{ position: "absolute", width: "480px", height: "480px", borderRadius: "999px", right: "105px", top: "-335px", border: "2px solid #345274", opacity: .72 }} />
    <div style={{ position: "absolute", right: "-80px", bottom: "80px", width: "670px", height: "2px", background: "linear-gradient(90deg, transparent, #8eb9d9, #f97316)", transform: "rotate(-28deg)", opacity: .82 }} />
    <div style={{ position: "absolute", right: "-110px", bottom: "175px", width: "650px", height: "2px", background: "linear-gradient(90deg, transparent, #38658c, #ff9b61)", transform: "rotate(-28deg)", opacity: .68 }} />
    <div style={{ position: "absolute", right: "-45px", bottom: "-5px", width: "650px", height: "2px", background: "linear-gradient(90deg, transparent, #5688b3, #f97316)", transform: "rotate(-28deg)", opacity: .48 }} />
    <div style={{ position: "absolute", right: "258px", top: "237px", width: "16px", height: "16px", borderRadius: "999px", background: "#9ac7e3", boxShadow: "0 0 0 9px rgba(154,199,227,.13)" }} />
    <div style={{ position: "absolute", right: "134px", top: "339px", width: "17px", height: "17px", borderRadius: "999px", background: "#ff9b61", boxShadow: "0 0 0 10px rgba(249,115,22,.13)" }} />
    <div style={{ position: "absolute", right: "326px", bottom: "124px", width: "12px", height: "12px", borderRadius: "999px", background: "#c7e7dc" }} />
    <div style={{ display: "flex", flexDirection: "column", zIndex: 1, maxWidth: "760px" }}>
      <div style={{ display: "flex", alignItems: "center", color: "#ffad78", fontSize: "24px", fontWeight: 800, letterSpacing: "3px" }}><span style={{ display: "flex", width: "30px", height: "30px", borderRadius: "9px", marginRight: "14px", background: "#f97316", color: "#12233d", justifyContent: "center", alignItems: "center", fontSize: "18px" }}>AB</span>WEB AGENCY</div>
      <div style={{ display: "flex", fontSize: "74px", fontWeight: 800, letterSpacing: "-4px", lineHeight: 1.04, marginTop: "44px" }}>Sistemi digitali<br />per farsi scegliere.</div>
      <div style={{ display: "flex", color: "#c8d6e8", fontSize: "29px", marginTop: "30px" }}>Strategia · Design · Tecnologia</div>
    </div>
  </div>, size);
}
