import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top left, rgba(99,102,241,0.38), transparent 32%), linear-gradient(180deg, #090d1d 0%, #050816 100%)",
          color: "#f8fafc",
          fontSize: 56,
          fontWeight: 700,
          letterSpacing: -3,
        }}
      >
        P2P
      </div>
    ),
    size,
  );
}
