"use client";

import { useLanguage } from "@/components/providers/language-provider";
import type { Stat } from "@/content/types";

export function StatTile({ stat }: { stat: Stat }) {
  const { t } = useLanguage();
  const label = t(stat.label);

  return (
    // The value and label share one accessible name, so "5" is never announced
    // orphaned from "projects shipped".
    <div className="flex flex-col gap-1" aria-label={`${stat.value} ${label}`}>
      <span aria-hidden="true" className="font-display text-3xl font-bold text-accent">
        {stat.value}
      </span>
      {/* min-h keeps all four tiles aligned when a French caption wraps to 2 lines. */}
      <span aria-hidden="true" className="min-h-[2lh] text-xs leading-snug text-muted">
        {label}
      </span>
    </div>
  );
}
