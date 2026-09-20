import { LANG_STORAGE_KEY } from "./lang-bootstrap";
import type { Lang } from "@/content/types";

/** French is the source language: the CV is French and it is the primary audience. */
export const DEFAULT_LANG: Lang = "fr";

/**
 * A tiny external store so the language can be read with useSyncExternalStore.
 *
 * Why not useState + useEffect: reading localStorage during render produces
 * static HTML in French and a first client render in English, so React 19 throws
 * the whole subtree away and re-renders it with a visible flash. Moving the read
 * into an effect fixes the mismatch but calls setState synchronously inside the
 * effect, which cascades renders (and React's own lint rule rejects it).
 *
 * useSyncExternalStore is the primitive built for exactly this: getServerSnapshot
 * feeds the build-time render, getSnapshot feeds the client, and React reconciles
 * the difference after hydration without a mismatch error.
 *
 * Residual cost: a returning English visitor sees one frame of French. Accepted —
 * the static HTML is French, which is what crawlers index.
 */

let cached: Lang | null = null;
const listeners = new Set<() => void>();

function isLang(value: unknown): value is Lang {
  return value === "fr" || value === "en";
}

function readPreference(): Lang {
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (isLang(stored)) return stored;
    if (navigator.language?.toLowerCase().startsWith("en")) return "en";
  } catch {
    // Private mode or storage disabled — fall through to the default.
  }
  return DEFAULT_LANG;
}

/** Must return a cached value: a fresh read on every call would loop forever. */
export function getSnapshot(): Lang {
  if (cached === null) cached = readPreference();
  return cached;
}

export function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

export function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

export function setStoredLang(next: Lang): void {
  if (cached === next) return;
  cached = next;
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
  } catch {
    // Non-fatal: the choice just won't survive a reload.
  }
  listeners.forEach((listener) => listener());
}
