"use client";

import { motion, useReducedMotion } from "motion/react";

import { barFill, viewportOnce } from "@/lib/motion";
import { useLanguage } from "@/components/providers/language-provider";
import type { Skill } from "@/content/types";

/**
 * A single proficiency row.
 *
 * role="img" with a composed label, deliberately: role="progressbar" is wrong
 * (nothing is progressing) and role="meter" has patchy screen-reader support.
 */
export function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { t, lang } = useLanguage();
  const reduce = useReducedMotion();

  const label =
    lang === "fr"
      ? `${skill.name} — niveau ${skill.level} pour cent`
      : `${skill.name} — level ${skill.level} per cent`;

  return (
    <li>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-text">{skill.name}</span>
        <span className="font-mono text-xs text-muted tabular-nums">{skill.level}%</span>
      </div>

      <div
        role="img"
        aria-label={label}
        className="mt-2 h-1 w-full overflow-hidden rounded-pill bg-surface-2"
      >
        {reduce ? (
          <div
            className="h-full rounded-pill bg-gradient-to-r from-accent to-sky"
            style={{ width: `${skill.level}%` }}
          />
        ) : (
          <motion.div
            className="h-full origin-left rounded-pill bg-gradient-to-r from-accent to-sky"
            variants={barFill(skill.level, index)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          />
        )}
      </div>

      {/*
        Always visible, not hover-revealed. The reference hides this note behind
        :hover, which makes it unreachable on touch.
      */}
      <p className="mt-1.5 text-xs text-faint">{t(skill.note)}</p>
    </li>
  );
}
