"use client";

import { cn } from "@/lib/cn";
import { useLanguage } from "@/components/providers/language-provider";
import { LANGS } from "@/content/types";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-btn border border-glass-border-soft bg-white/5 p-0.5",
        className,
      )}
      role="group"
      aria-label={lang === "fr" ? "Choix de la langue" : "Language selection"}
    >
      {LANGS.map((code) => {
        const isActive = code === lang;
        return (
          <button
            key={code}
            type="button"
            // lang on the option so a screen reader pronounces each in its own language.
            lang={code}
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            className={cn(
              "min-h-8 rounded-[3px] px-2.5 text-xs uppercase transition-colors duration-200",
              isActive ? "bg-accent text-on-accent" : "text-muted hover:text-accent",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
