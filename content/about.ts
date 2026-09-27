import type { LocalizedList, LocalizedString, SectionCopy, Stat } from "./types";

export const ABOUT_COPY = {
  eyebrow: { fr: "À propos", en: "About" },
  title: {
    fr: "De la donnée brute à la décision",
    en: "From raw data to decision",
  },
  lede: {
    fr: "Je relie les données, les modèles et les produits pour transformer un problème concret en solution utilisable.",
    en: "I connect data, models and products to turn a concrete problem into a usable solution.",
  },
  intro: {
    fr: "Bonjour, je m'appelle",
    en: "Hey, my name is",
  },
} satisfies SectionCopy & { intro: LocalizedString };

/** Quick-read summary above the full breakdown in the skills section. */
export const HEADLINE_SKILLS = [
  "Python",
  "Scikit-learn",
  "XGBoost",
  "LangChain",
  "RAG",
  "FastAPI",
  "MLflow",
  "React",
  "Docker",
] as const;

/** Written from the CV profile paragraph, split for readability on the web. */
export const ABOUT_BODY: LocalizedList = {
  fr: [
    "Je suis en 5ᵉ année du cycle d'ingénieur en informatique à Tek-Up, spécialisé en Data Science et Intelligence Artificielle. Je travaille sur le chemin complet : collecte et préparation des données, feature engineering, entraînement et évaluation, puis mise en production derrière une API réellement exploitable.",
    "Mes projets couvrent la classification et le scoring avec XGBoost et Random Forest, le suivi d'expériences avec MLflow, les assistants RAG et la recherche sémantique, ainsi que des plateformes servies par FastAPI. Chez STIET-Philips, j'ai construit un assistant conversationnel RAG sur des rapports techniques d'installations médicales, avec un travail centré sur le découpage documentaire et la qualité de la recherche en amont.",
    "Ma base fullstack — React, TypeScript, Django, FastAPI et Docker — me permet de relier les modèles à des interfaces et des produits utilisables, comme une plateforme d'analytics ML, des outils de réservation ou des applications de données synthétiques.",
  ],
  en: [
    "I'm a fifth-year computer engineering student at Tek-Up, majoring in Data Science and Artificial Intelligence. I work across the full path: collecting and preparing data, feature engineering, training and evaluation, then shipping models behind an API people can actually use.",
    "My projects cover classification and scoring with XGBoost and Random Forest, experiment tracking with MLflow, RAG assistants and semantic search, as well as FastAPI-powered platforms. During my internship at STIET-Philips, I built a RAG assistant over technical reports for medical installations, focusing on document chunking and the quality of upstream retrieval.",
    "My fullstack base — React, TypeScript, Django, FastAPI and Docker — lets me connect models to usable interfaces and products, including an ML analytics platform, booking tools and synthetic-data applications.",
  ],
};

/** Every number here is countable from the CV. */
export const STATS: readonly Stat[] = [
  { value: "5", label: { fr: "Projets livrés", en: "Projects shipped" } },
  { value: "2", label: { fr: "Stages en entreprise", en: "Industry internships" } },
  { value: "5ᵉ", label: { fr: "Année d'ingénierie", en: "Year of engineering" } },
  { value: "3", label: { fr: "Langues parlées", en: "Languages spoken" } },
] as const;
