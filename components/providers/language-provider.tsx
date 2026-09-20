"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  DEFAULT_LANG,
  getServerSnapshot,
  getSnapshot,
  setStoredLang,
  subscribe,
} from "@/lib/lang-store";
import type { Lang, Localized } from "@/content/types";

export { DEFAULT_LANG };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: <T>(value: Localized<T>) => T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Updating an external system from state — what effects are actually for.
  // The <html lang> attribute is also set pre-hydration by LANG_BOOTSTRAP so
  // screen readers never get the wrong voice on first paint.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setStoredLang(next), []);
  const toggle = useCallback(
    () => setStoredLang(lang === "fr" ? "en" : "fr"),
    [lang],
  );

  // The trailing comma in <T,> is required in .tsx, or the parser reads a JSX tag.
  const t = useCallback(<T,>(value: Localized<T>): T => value[lang], [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t }),
    [lang, setLang, toggle, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage() must be used inside <LanguageProvider>");
  return ctx;
}
