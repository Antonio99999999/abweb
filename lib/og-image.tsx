import { ImageResponse } from "next/og";

// Template OG condiviso dalle nuove pagine SEO (Fase 3): ogni route deve comunque esportare
// alt/size/contentType in proprio (convenzione file di Next.js), ma la grafica e' qui per
// evitare di duplicare gradienti e badge in nove file quasi identici.
export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

type OgTheme = "agency" | "sedia";

const palettes: Record<OgTheme, { bg: string; accent: string; muted: string; badgeBg: string; badgeInk: string; badgeFont: string; badgeLabel: string }> = {
  agency: { bg: "linear-gradient(135deg,#12233d,#0b1220)", accent: "#f97316", muted: "#c8d6e8", badgeBg: "#f97316", badgeInk: "#12233d", badgeFont: "Arial", badgeLabel: "AB" },
  sedia: { bg: "linear-gradient(135deg,#173e33,#0f2b23)", accent: "#dff08b", muted: "#c7e7dc", badgeBg: "#dff08b", badgeInk: "#173e33", badgeFont: "Georgia", badgeLabel: "Sedia" },
};

export function createOgImage({ eyebrow, title, subtitle, theme = "agency" }: { eyebrow: string; title: string; subtitle: string; theme?: OgTheme }) {
  const p = palettes[theme];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: p.bg, color: "#fff", padding: 72, fontFamily: "Arial" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "78%" }}>
          <div style={{ display: "flex", color: p.accent, fontSize: 22, fontWeight: 800, letterSpacing: 3 }}>{eyebrow}</div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 58, fontWeight: 800, lineHeight: 1.1, letterSpacing: -3 }}>{title}</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 24, color: p.muted }}>{subtitle}</div>
          <div style={{ display: "flex", marginTop: 42, fontSize: 18, fontWeight: 700, color: p.accent }}>AB WEB AGENCY</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 190, height: 190, marginLeft: "auto", flexShrink: 0, borderRadius: 44, background: p.badgeBg, color: p.badgeInk, fontSize: 32, fontFamily: p.badgeFont, fontWeight: 800, textAlign: "center" }}>{p.badgeLabel}</div>
      </div>
    ),
    ogImageSize
  );
}
