"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";
import { useLanguage } from "@/components/providers/language-provider";
import type { SectionCopy, SectionId } from "@/content/types";

interface SectionProps {
  id: SectionId;
  children: ReactNode;
  width?: "content" | "narrow";
  className?: string;
}

/** Owns the vertical rhythm so no section hardcodes its own padding. */
export function Section({ id, children, width = "content", className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("py-section", className)}
    >
      <div
        className={cn(
          "mx-auto w-full px-6",
          width === "narrow" ? "max-w-3xl" : "max-w-6xl",
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  id: SectionId;
  copy: SectionCopy;
  className?: string;
}

/** Centred title over a cyan rule, matching the reference. */
export function SectionHeader({ id, copy, className }: SectionHeaderProps) {
  const { t } = useLanguage();

  return (
    <Reveal className={cn("mb-14 flex flex-col items-center text-center", className)}>
      <p className="font-mono text-xs tracking-wider2 text-accent uppercase">
        {t(copy.eyebrow)}
      </p>

      <h2
        id={`${id}-title`}
        className="mt-3 font-display text-h2 font-semibold text-text"
      >
        {t(copy.title)}
      </h2>

      <div className="accent-rule mt-5" aria-hidden="true" />

      <p className="mt-5 max-w-prose text-prose text-muted">{t(copy.lede)}</p>
    </Reveal>
  );
}
