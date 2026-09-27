import type { LocalizedString } from "./types";

export const GITHUB_USERNAME = "melekbouabid";
export const LINKEDIN_SLUG = "bouabid-melek";

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
    fr: "Étudiant en 5ᵉ année du cycle d'ingénieur en informatique à Tek-Up, spécialisé en Data Science et Intelligence Artificielle. Je construis des solutions de bout en bout, du traitement des données et du Machine Learning jusqu'aux assistants RAG, aux API FastAPI et aux interfaces React.",
    en: "Fifth-year computer engineering student at Tek-Up, specialising in Data Science and Artificial Intelligence. I build end-to-end solutions, from data processing and Machine Learning to RAG assistants, FastAPI backends and React interfaces.",
  } satisfies LocalizedString,

  socials: {
    github: `https://github.com/${GITHUB_USERNAME}`,
    linkedin: `https://www.linkedin.com/in/${LINKEDIN_SLUG}`,
  },

  /**
   * Paths under public/ — always render through asset() so the GitHub Pages
   * base path is applied. The French CV and English resume are separate files.
   */
  cv: {
    fr: "/CV.pdf",
    en: "/Resume.pdf",
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
