import type { LocalizedList, LocalizedString, SectionCopy, Stat } from "./types";

export const ABOUT_COPY = {
  eyebrow: { fr: "À propos", en: "About" },
  title: {
    fr: "De la donnée brute à la décision",
    en: "From raw data to decision",
  },
  lede: {
    fr: "Pourquoi je travaille de bout en bout plutôt que sur un seul maillon.",
    en: "Why I work end to end rather than on a single link in the chain.",
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
    "Je suis en 5ᵉ année du cycle d'ingénieur en informatique à Tek-Up, spécialisé en Data Science et Intelligence Artificielle. Ce qui m'intéresse n'est pas un modèle isolé dans un notebook, mais le chemin complet : collecte et préparation des données, feature engineering, entraînement et évaluation, puis mise en production derrière une API que quelqu'un peut réellement appeler.",
    "Ce cycle, je l'ai parcouru en entier plusieurs fois — avec XGBoost et Random Forest sur des problèmes de classification et de scoring, avec MLflow pour garder une trace des expériences, et avec FastAPI pour exposer les modèles. En stage chez STIET-Philips, j'ai construit un assistant conversationnel RAG sur des rapports techniques d'installations médicales ; l'enjeu n'était pas le modèle de langage, mais le découpage des documents et la qualité de la recherche sémantique en amont.",
    "Ma base fullstack — React, Django, FastAPI, Docker — n'est pas un à-côté : c'est ce qui me permet de livrer une solution data utilisable, pas seulement un score dans un carnet Jupyter.",
  ],
  en: [
    "I'm a fifth-year computer engineering student at Tek-Up, majoring in Data Science and Artificial Intelligence. What interests me isn't a model sitting alone in a notebook, but the whole path: collecting and preparing the data, feature engineering, training and evaluation, then shipping it behind an API someone can actually call.",
    "I've walked that full cycle several times — with XGBoost and Random Forest on classification and scoring problems, with MLflow to keep experiments traceable, and with FastAPI to serve the models. During my internship at STIET-Philips I built a RAG assistant over technical reports for medical installations; the hard part wasn't the language model, it was how documents were chunked and how good the semantic search was upstream.",
    "My fullstack base — React, Django, FastAPI, Docker — isn't a side interest: it's what lets me deliver a data solution people can use, not just a score in a Jupyter notebook.",
  ],
};

/** Every number here is countable from the CV. */
export const STATS: readonly Stat[] = [
  { value: "5", label: { fr: "Projets livrés", en: "Projects shipped" } },
  { value: "2", label: { fr: "Stages en entreprise", en: "Industry internships" } },
  { value: "5ᵉ", label: { fr: "Année d'ingénierie", en: "Year of engineering" } },
  { value: "3", label: { fr: "Langues parlées", en: "Languages spoken" } },
] as const;
