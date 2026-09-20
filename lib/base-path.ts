/**
 * Base-path helpers.
 *
 * NEXT_PUBLIC_* values are string-replaced into the bundle at build time, so this
 * module is safe in both the server and the client graph. No 'use client'.
 */

const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** "" locally, "/portfolio" for a project site, "" for a <user>.github.io site. */
export const BASE_PATH = raw === "/" ? "" : raw.replace(/\/+$/, "");

/** Absolute origin + base path. Used for OG tags, canonical URLs and JSON-LD. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

/**
 * Prefix a path to a file in public/.
 *
 * Next does NOT rewrite these: raw <a href>, raw <img src>, fetch(), hand-written
 * metadata.icons, or CSS url(). Everything pointing at public/ goes through here.
 */
export function asset(path: string): string {
  if (!path.startsWith("/")) {
    throw new Error(`asset() expects a rooted path, got: ${path}`);
  }
  return `${BASE_PATH}${path}`;
}

/** Fully-qualified URL. Used where a relative path would lose the base path. */
export function absolute(path = "/"): string {
  return `${SITE_URL}${path}`;
}
