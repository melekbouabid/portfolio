import type { SectionCopy } from "./types";

export const CONTACT_COPY = {
  eyebrow: { fr: "Contact", en: "Contact" },
  title: {
    fr: "Parlons de votre projet data",
    en: "Let's talk about your data project",
  },
  lede: {
    fr: "Je cherche un stage ou une alternance en Data Science / IA. Si vous avez un sujet intéressant, écrivez-moi.",
    en: "I'm looking for an internship or apprenticeship in Data Science / AI. If you have an interesting problem, get in touch.",
  },
} satisfies SectionCopy;

export const CONTACT = {
  preferred: { fr: "Moyen de contact préféré", en: "Preferred contact method" },
  emailCta: { fr: "Envoyer un e-mail", en: "Send an email" },
  copy: { fr: "Copier", en: "Copy" },
  copied: { fr: "Copié", en: "Copied" },
  phoneLabel: { fr: "Téléphone", en: "Phone" },
  locationLabel: { fr: "Localisation", en: "Location" },
  languagesLabel: { fr: "Langues", en: "Languages" },
} as const;

export const FOOTER = {
  builtWith: {
    fr: "Conçu avec Next.js et Tailwind CSS",
    en: "Built with Next.js and Tailwind CSS",
  },
  backToTop: { fr: "Haut de page", en: "Back to top" },
  skipToContent: { fr: "Aller au contenu", en: "Skip to content" },
} as const;
