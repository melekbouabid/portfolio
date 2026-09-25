import type { LocalizedString } from "./types";

/**
 * ⚠️  PLACEHOLDERS — replace before the first deploy.
 *
 * Melek's CV links "LinkedIn" and "GitHub" as anchor text, but the underlying
 * hrefs are bare (`https://github.com/`, `https://linkedin.com/`) with no handle,
 * so the real usernames are unknown. `grep -r PLACEHOLDER content/` must return
 * nothing before publishing. See DEPLOY.md.
 */
export const GITHUB_USERNAME = "PLACEHOLDER_GITHUB_USERNAME";
export const LINKEDIN_SLUG = "PLACEHOLDER_LINKEDIN_SLUG";

/** True once the handles above are filled in. Dead links are hidden until then. */
export const SOCIALS_READY = !GITHUB_USERNAME.startsWith("PLACEHOLDER");

export const SITE = {
  name: "Melek Bouabid",
  firstName: "Melek",
  lastName: "Bouabid",

  email: "melekbouabid62@gmail.com",
  phone: "+216 93 874 342",
  /** tel: needs the number without spaces. */
  phoneHref: "+21693874342",

  location: {
    fr: "Tunis, Tunisie",
    en: "Tunis, Tunisia",
  } satisfies LocalizedString,

  role: {
    fr: "Étudiant Ingénieur en Informatique — Data Science & IA",
    en: "Computer Engineering Student — Data Science & AI",
  } satisfies LocalizedString,

  shortRole: {
    fr: "Data Science & IA",
    en: "Data Science & AI",
  } satisfies LocalizedString,

  description: {
    fr: "Étudiant en 4ᵉ année du cycle d'ingénieur à Tek-Up, spécialisé en Data Science et Intelligence Artificielle. Machine learning, NLP, architectures RAG et mise en production via API.",
    en: "Fourth-year engineering student at Tek-Up, specialising in Data Science and Artificial Intelligence. Machine learning, NLP, RAG architectures and production deployment via APIs.",
  } satisfies LocalizedString,

  socials: {
    github: `https://github.com/${GITHUB_USERNAME}`,
    linkedin: `https://www.linkedin.com/in/${LINKEDIN_SLUG}`,
  },

  /**
   * Paths under public/ — always render through asset() so the GitHub Pages
   * base path is applied. Only the French CV exists; the EN entry points at the
   * same file and the UI labels it accordingly.
   */
  cv: {
    fr: "/CV.pdf",
    en: "/Resume.pdf",
  } satisfies LocalizedString,

  cvLabel: {
    fr: "CV",
    en: "Resume",
  } satisfies LocalizedString,

  englishCvLabel: {
    fr: "CV en anglais",
    en: "English Resume",
  } satisfies LocalizedString,
} as const;

export const SPOKEN_LANGUAGES = [
  {
    name: { fr: "Arabe", en: "Arabic" },
    level: { fr: "Langue maternelle", en: "Native" },
  },
  {
    name: { fr: "Français", en: "French" },
    level: { fr: "Courant", en: "Fluent" },
  },
  {
    name: { fr: "Anglais", en: "English" },
    level: { fr: "Courant", en: "Fluent" },
  },
] as const;
