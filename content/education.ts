import type { EducationItem, SectionCopy } from "./types";

export const EDUCATION_COPY = {
  eyebrow: { fr: "Formation", en: "Education" },
  title: { fr: "Le cadre académique", en: "Academic grounding" },
  lede: {
    fr: "La théorie et la pratique menées en parallèle.",
    en: "Theory and practice carried in parallel.",
  },
} satisfies SectionCopy;

export const EDUCATION: readonly EducationItem[] = [
  {
    id: "tekup",
    school: "Tek-Up",
    location: { fr: "Tunisie", en: "Tunisia" },
    degree: {
      fr: "Cycle d'Ingénieur en Informatique — Data Science & IA",
      en: "Computer Engineering Degree — Data Science & AI",
    },
    period: { fr: "2024 – 2027", en: "2024 – 2027" },
    current: true,
    focus: {
      fr: [
        "Machine Learning supervisé et non supervisé",
        "Deep Learning",
        "Traitement du langage naturel (NLP)",
        "Big Data et traitement distribué",
        "Bases de données relationnelles et NoSQL",
        "Génie logiciel et architectures web",
      ],
      en: [
        "Supervised and unsupervised Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Big Data and distributed processing",
        "Relational and NoSQL databases",
        "Software engineering and web architecture",
      ],
    },
  },
] as const;
