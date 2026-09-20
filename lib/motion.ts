import type { Transition, Variants } from "motion/react";

/**
 * Shared motion vocabulary. Every reveal on the site is built from these, so the
 * timing reads as one system rather than per-component guesswork.
 *
 * Values are derived from the reference template's observed initial states:
 * y=24 for cards, y=32 for project cards, y=-20 for the navbar.
 *
 * Rules: transform and opacity only (never height/width/top), and `once: true`
 * everywhere — re-triggering reveals on scroll-up is what makes a portfolio
 * feel cheap.
 */

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_QUART = [0.25, 1, 0.5, 1] as const;

const base: Transition = { duration: 0.55, ease: EASE_OUT };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: base },
};

/** Heavier blocks: project cards, the featured panel. */
export const fadeUpLg: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: EASE_QUART } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const navIn: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT, delay: 0.2 } },
};

export const sheet: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE_QUART } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.2, ease: "easeIn" } },
};

/**
 * Orchestration parent. Children only need `variants={fadeUp}` — no per-child
 * delay arithmetic.
 */
export const stagger = (staggerChildren = 0.08, delayChildren = 0.05): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Lists over ~6 items: 0.08 would finish 0.7s after the first, which drags. */
export const staggerFast = stagger(0.05, 0.04);
export const staggerTight = stagger(0.06, 0.05);
export const staggerSlow = stagger(0.12, 0.08);

/** Skill bars animate scaleX, never width — width is a layout property. */
export const barFill = (level: number, index = 0): Variants => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: level / 100,
    transition: { duration: 0.9, ease: EASE_OUT, delay: 0.15 + Math.min(index * 0.05, 0.4) },
  },
});

/** One viewport config for the whole site. */
export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" } as const;
