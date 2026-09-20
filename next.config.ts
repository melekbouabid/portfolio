import type { NextConfig } from "next";

/**
 * NEXT_PUBLIC_BASE_PATH is supplied by CI (actions/configure-pages emits `base_path`).
 * Locally it is unset -> empty -> the site is served from "/" by `next dev`.
 *
 * Normalisation matters, because Next throws on both edge cases:
 *  - configure-pages returns "/" for a user/org site (<user>.github.io repo)
 *    -> "Specified basePath cannot be one character long"
 *  - a trailing slash ("/portfolio/")
 *    -> "Specified basePath should not end with /"
 */
const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const normalized = raw === "/" ? "" : raw.replace(/\/+$/, "");

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out at `next build`.
  // (`next export` as a CLI command was removed in Next 14 — this is the only way.)
  output: "export",

  // Prefixes every Next-generated URL: _next/static/*, next/font, next/image,
  // next/link hrefs, and file-convention metadata (icon, opengraph-image).
  // `undefined` rather than "" so Next falls back to its own default.
  basePath: normalized || undefined,

  // NOT set: with basePath set, assetPrefix defaults to basePath. Setting both is
  // how people end up serving //portfolio/_next/...
  // assetPrefix: normalized || undefined,

  // Mandatory with output:'export' if next/image is used anywhere, otherwise the
  // build hard-fails on "Image Optimization using the default loader is not
  // compatible with output: 'export'".
  images: { unoptimized: true },

  // out/<route>/index.html instead of out/<route>.html — resolvable by any dumb
  // static server, and removes a class of "works locally, 404 on Pages" bugs.
  trailingSlash: true,
};

export default nextConfig;
