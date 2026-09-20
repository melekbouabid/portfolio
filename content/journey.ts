import type { SectionCopy, TimelineItem } from "./types";

export const JOURNEY_COPY = {
  eyebrow: { fr: "Parcours", en: "Journey" },
  title: { fr: "Le chemin jusqu'ici", en: "The path so far" },
  lede: {
    fr: "Les étapes qui ont façonné ma manière de travailler.",
    en: "The steps that shaped how I work.",
  },
} satisfies SectionCopy;

/** Every entry is dated from the CV — nothing here is invented. */
export const JOURNEY: readonly TimelineItem[] = [
  {
    id: "tekup-start",
    year: "2024",
    kind: "education",
    title: { fr: "Entrée à Tek-Up", en: "Started at Tek-Up" },
    body: {
      fr: "Début du cycle d'ingénieur en informatique, spécialité Data Science & Intelligence Artificielle.",
      en: "Began the computer engineering degree, majoring in Data Science & Artificial Intelligence.",
    },
  },
  {
    id: "ats-internship",
    year: "2025",
    kind: "work",
    title: { fr: "Premier stage — A.T.S", en: "First internship — A.T.S" },
    body: {
      fr: "Un mois en développement mobile Flutter sur une application de scan produit pour Ray-Ban. Première expérience de code livré à un client réel.",
      en: "A month of Flutter mobile development on a product-scanning app for Ray-Ban. First experience of code shipped to a real client.",
    },
  },
  {
    id: "csis",
    year: "2025",
    kind: "project",
    title: { fr: "CSIS — premier projet IA complet", en: "CSIS — first full AI project" },
    body: {
      fr: "Machine learning supervisé, NLP et une première architecture RAG sur le droit tunisien. C'est là que le cycle de vie complet d'un projet ML est devenu concret.",
      en: "Supervised machine learning, NLP and a first RAG architecture over Tunisian law. This is where the full ML project lifecycle became concrete.",
    },
  },
  {
    id: "stiet",
    year: "2026",
    kind: "work",
    title: { fr: "Stage Data Science — STIET-Philips", en: "Data Science internship — STIET-Philips" },
    body: {
      fr: "Deux mois sur une GMAO intelligente pour installations médicales : assistant RAG documentaire, modèles de scoring de risque et prédiction de durée d'installation.",
      en: "Two months on an intelligent CMMS for medical installations: a documentary RAG assistant, risk-scoring models and installation-duration prediction.",
    },
  },
  {
    id: "riot",
    year: "2026",
    kind: "project",
    title: { fr: "Riot Games Analytics Platform", en: "Riot Games Analytics Platform" },
    body: {
      fr: "Première plateforme ML industrialisée de bout en bout : collecte API, MLflow pour le suivi des expériences, service via FastAPI et interface React.",
      en: "First end-to-end industrialised ML platform: API collection, MLflow for experiment tracking, FastAPI serving and a React interface.",
    },
  },
  {
    id: "graduation",
    year: "2027",
    kind: "milestone",
    title: { fr: "Diplôme d'ingénieur", en: "Engineering degree" },
    body: {
      fr: "Fin du cycle d'ingénieur, spécialité Data Science & IA.",
      en: "Completion of the engineering degree, majoring in Data Science & AI.",
    },
  },
] as const;
