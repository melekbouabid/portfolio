import type { LocalizedString } from "./types";

export const HERO = {
  /**
   * The availability chip. Verified on the reference template: this line already
   * spans nearly the full width at 375px in English, so the French string is
   * deliberately shorter rather than a longer literal translation.
   */
  availability: {
    fr: "Ouvert aux stages",
    en: "Open to internships",
  } satisfies LocalizedString,

  greeting: {
    fr: "Bonjour, je suis",
    en: "Hey, I'm",
  } satisfies LocalizedString,

  /** Cycled under the name. Proper nouns, identical in both languages. */
  rotatingRoles: ["Data Science", "Machine Learning", "GenAI / RAG", "MLOps"] as const,

  tagline: {
    fr: "Je construis des systèmes qui transforment des données brutes en décisions — du nettoyage du jeu de données jusqu'à l'API qui sert le modèle.",
    en: "I build systems that turn raw data into decisions — from cleaning the dataset all the way to the API that serves the model.",
  } satisfies LocalizedString,

  note: {
    fr: "→ Cycle d'ingénieur à Tek-Up, spécialité Data Science & IA. Deux stages, cinq projets livrés.",
    en: "→ Engineering degree at Tek-Up, majoring in Data Science & AI. Two internships, five projects shipped.",
  } satisfies LocalizedString,

  cta: {
    about: { fr: "À propos de moi", en: "About me" },
    projects: { fr: "Voir les projets", en: "View projects" },
    contact: { fr: "Me contacter", en: "Get in touch" },
  },

  school: {
    fr: "Tek-Up · 2024–2027",
    en: "Tek-Up · 2024–2027",
  } satisfies LocalizedString,

  scrollCue: {
    fr: "défiler",
    en: "scroll",
  } satisfies LocalizedString,
} as const;
