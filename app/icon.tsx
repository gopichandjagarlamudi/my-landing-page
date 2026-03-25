import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(196,181,253,0.35)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))",
            boxShadow: "0 25px 80px rgba(91,33,182,0.35)",
            color: "#f8fafc",
            fontSize: 160,
            fontWeight: 700,
            letterSpacing: -8,
          }}
        >
          P2P
        </div>
      </div>
    ),
    size,
  );
}
