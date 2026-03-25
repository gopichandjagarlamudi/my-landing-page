import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(99,102,241,0.35), transparent 28%), radial-gradient(circle at right, rgba(168,85,247,0.28), transparent 24%), linear-gradient(180deg, #090d1d 0%, #050816 100%)",
          color: "#f8fafc",
          padding: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c4b5fd",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#a78bfa",
            }}
          />
          {siteConfig.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.02,
              fontWeight: 700,
              maxWidth: "900px",
            }}
          >
            Custom AI systems and internal tools for service businesses
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "#cbd5e1",
              maxWidth: "900px",
            }}
          >
            Replace manual workflows with software built around how your team actually works.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#e2e8f0",
          }}
        >
          <div>Strategy, build, launch, support</div>
          <div>{siteConfig.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
