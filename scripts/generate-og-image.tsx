import { ImageResponse } from "next/og";

import { SITE } from "@/content/site";

/*
 * Source for public/og.png. NOT a live route.
 *
 * As app/opengraph-image.tsx this works fine locally, but the export writes an
 * EXTENSIONLESS file (out/opengraph-image), which GitHub Pages serves as
 * application/octet-stream — and Facebook/LinkedIn/X scrapers reject a preview
 * image that isn't served with an image content type. A committed public/og.png
 * gets the right Content-Type from its extension everywhere.
 *
 * To regenerate after changing the name, role or palette:
 *   1. copy this file back to app/opengraph-image.tsx
 *   2. add `export const dynamic = "force-static";`
 *   3. npm run build
 *   4. cp out/opengraph-image public/og.png
 *   5. move this file back here and delete app/opengraph-image.tsx
 */

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.role.fr}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#09090c",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#f97316",
          }}
        >
          Data Science &amp; IA
        </div>

        <div style={{ display: "flex", marginTop: 28, fontSize: 96, fontWeight: 700 }}>
          <span style={{ color: "#f0ede8" }}>{SITE.firstName}&nbsp;</span>
          <span style={{ color: "#f97316" }}>{SITE.lastName}</span>
        </div>

        <div style={{ display: "flex", marginTop: 24, fontSize: 32, color: "#8b8794" }}>
          {SITE.role.fr}
        </div>

        <div style={{ display: "flex", marginTop: 48, fontSize: 24, color: "#5c5866" }}>
          Tek-Up · 2024–2027 · Tunis, Tunisie
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            width: 120,
            height: 6,
            borderRadius: 99,
            background: "#f97316",
          }}
        />
      </div>
    ),
    size,
  );
}
