"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { fadeUp, viewportOnce } from "@/lib/motion";

type Tag = "div" | "section" | "article" | "li" | "ul" | "p" | "span";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  as?: Tag;
}

/**
 * The single scroll-reveal wrapper. Nothing else should hand-roll a motion.div
 * with whileInView.
 *
 * The reduced-motion branch renders a plain element rather than a motion one:
 * `initial={{opacity:0}}` is serialised into the static HTML as
 * style="opacity:0", so a reveal that never fires leaves content permanently
 * invisible. The CSS media query in globals.css only shortens durations — it
 * cannot rescue an observer that never triggered. Hence both guards.
 */
export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const M = motion[as];

  return (
    <M
      data-reveal
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </M>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  as?: Tag;
}

/** Parent that walks its <Reveal> children through hidden -> visible. */
export function StaggerGroup({
  children,
  variants,
  className,
  as = "div",
}: StaggerGroupProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const M = motion[as];

  return (
    <M
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </M>
  );
}

/** Child of a StaggerGroup: inherits the parent's orchestration, no own viewport. */
export function StaggerItem({
  children,
  variants = fadeUp,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const M = motion[as];

  return (
    <M data-reveal className={className} variants={variants}>
      {children}
    </M>
  );
}
