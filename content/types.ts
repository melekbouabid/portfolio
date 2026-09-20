/**
 * Content model.
 *
 * Pure data types — no React, no 'use client'. This module is imported from both
 * the server graph (metadata, JSON-LD) and the client graph (sections).
 *
 * French is the source language: every string was written from Melek's French CV
 * first, then translated. `Localized<T>` requires both, so a missing `en` is a
 * compile error rather than a blank region in production.
 */

export const LANGS = ["fr", "en"] as const;
export type Lang = (typeof LANGS)[number];

export type Localized<T> = { readonly [L in Lang]: T };

export type LocalizedString = Localized<string>;
export type LocalizedList = Localized<readonly string[]>;

/** The picker returned by useLanguage(). Generic so it narrows correctly. */
export type Translate = <T>(value: Localized<T>) => T;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "education"
  | "journey"
  | "contact";

export interface NavItem {
  readonly id: SectionId;
  readonly label: LocalizedString;
  /**
   * Shorter label used below xl. French nav labels run ~22% wider than English
   * and overflow the desktop bar at lg; this keeps one breakpoint for both.
   */
  readonly short: LocalizedString;
  /** "01".."07", or null for the hero, which is not numbered. */
  readonly index: string | null;
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

export interface SectionCopy {
  readonly eyebrow: LocalizedString;
  readonly title: LocalizedString;
  readonly lede: LocalizedString;
}

export interface Stat {
  readonly value: string;
  readonly label: LocalizedString;
}

export interface SpokenLanguage {
  readonly name: LocalizedString;
  readonly level: LocalizedString;
}

/** A skill rendered as a bar. `level` is 0-100; see content/skills.ts for the rubric. */
export interface Skill {
  readonly name: string;
  readonly level: number;
  readonly note: LocalizedString;
}

export interface SkillGroup {
  readonly id: string;
  readonly title: LocalizedString;
  /**
   * "bars" for the four groups that carry the narrative; "tags" for the rest.
   * A nine-item bar list is visual noise, and Big Data has a single entry.
   */
  readonly layout: "bars" | "tags";
  /** Populated when layout === "bars". */
  readonly skills?: readonly Skill[];
  /** Populated when layout === "tags". Tech names are never translated. */
  readonly items?: readonly string[];
  /** Renders full-width in the grid. */
  readonly wide?: boolean;
}

export interface ExperienceItem {
  readonly id: string;
  readonly role: LocalizedString;
  readonly company: string;
  readonly period: LocalizedString;
  readonly duration: LocalizedString;
  readonly summary: LocalizedString;
  readonly highlights: LocalizedList;
  readonly stack: readonly string[];
}

export interface ProjectItem {
  readonly id: string;
  readonly name: string;
  readonly year: string | null;
  readonly category: LocalizedString;
  readonly problem: LocalizedString;
  readonly highlights: LocalizedList;
  readonly stack: readonly string[];
  readonly featured: boolean;
}

export interface EducationItem {
  readonly id: string;
  readonly degree: LocalizedString;
  readonly school: string;
  readonly location: LocalizedString;
  readonly period: LocalizedString;
  readonly current: boolean;
  readonly focus: LocalizedList;
}

export interface TimelineItem {
  readonly id: string;
  readonly year: string;
  readonly kind: "education" | "work" | "project" | "milestone";
  readonly title: LocalizedString;
  readonly body: LocalizedString;
}
