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

/**
 * Owns the vertical rhythm so no section hardcodes its own padding, and pairs
 * every <section> with the heading that names it for assistive tech.
 */
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
  /** "01".."07". Locale-independent, and hidden from screen readers. */
  index: string;
  copy: SectionCopy;
  className?: string;
}

export function SectionHeader({ id, index, copy, className }: SectionHeaderProps) {
  const { t } = useLanguage();

  return (
    <Reveal className={cn("mb-14", className)}>
      <p className="flex items-center gap-3 font-mono text-label tracking-label text-accent uppercase">
        {/* Read as "About", not "zero one em-dash about". */}
        <span aria-hidden="true">{index} —</span>
        <span>{t(copy.eyebrow)}</span>
      </p>

      <h2
        id={`${id}-title`}
        className="mt-4 font-display text-h2 font-bold text-text"
      >
        {t(copy.title)}
      </h2>

      <div className="accent-rule mt-5" aria-hidden="true" />

      <p className="mt-5 max-w-prose text-prose text-muted">{t(copy.lede)}</p>
    </Reveal>
  );
}
