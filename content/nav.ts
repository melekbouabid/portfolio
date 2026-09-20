import type { NavItem } from "./types";

/**
 * Single source of truth for the navbar links, the <section id>s and the
 * scroll-spy. Never duplicate these ids as string literals elsewhere.
 */
export const NAV_ITEMS: readonly NavItem[] = [
  {
    id: "about",
    index: "01",
    label: { fr: "À propos", en: "About" },
    short: { fr: "À propos", en: "About" },
  },
  {
    id: "skills",
    index: "02",
    label: { fr: "Compétences", en: "Skills" },
    short: { fr: "Compét.", en: "Skills" },
  },
  {
    id: "experience",
    index: "03",
    label: { fr: "Expérience", en: "Experience" },
    short: { fr: "Expér.", en: "Exp." },
  },
  {
    id: "projects",
    index: "04",
    label: { fr: "Projets", en: "Projects" },
    short: { fr: "Projets", en: "Projects" },
  },
  {
    id: "education",
    index: "05",
    label: { fr: "Formation", en: "Education" },
    short: { fr: "Format.", en: "Educ." },
  },
  {
    id: "journey",
    index: "06",
    label: { fr: "Parcours", en: "Journey" },
    short: { fr: "Parcours", en: "Journey" },
  },
  {
    id: "contact",
    index: "07",
    label: { fr: "Contact", en: "Contact" },
    short: { fr: "Contact", en: "Contact" },
  },
] as const;

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
