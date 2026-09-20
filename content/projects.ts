import type { ProjectItem, SectionCopy } from "./types";

export const PROJECTS_COPY = {
  eyebrow: { fr: "Projets", en: "Projects" },
  title: {
    fr: "Ce que j'ai construit",
    en: "What I've built",
  },
  lede: {
    fr: "Chaque projet part d'un problème concret et va jusqu'à une interface utilisable.",
    en: "Each project starts from a concrete problem and runs through to a usable interface.",
  },
} satisfies SectionCopy;

export const PROJECTS: readonly ProjectItem[] = [
  {
    id: "csis",
    name: "CSIS — Criminal Study Intelligent System",
    year: "2025",
    featured: true,
    category: {
      fr: "Machine Learning · NLP · RAG",
      en: "Machine Learning · NLP · RAG",
    },
    problem: {
      fr: "Évaluer un risque social chez les jeunes à partir de données hétérogènes, et rendre le droit tunisien interrogeable en langage naturel sans que le modèle invente ses réponses.",
      en: "Assess social risk among young people from heterogeneous data, and make Tunisian law queryable in natural language without the model inventing its answers.",
    },
    highlights: {
      fr: [
        "Entraîné et comparé des modèles supervisés (XGBoost, Random Forest) pour la détection de risque social, avec nettoyage des données, feature engineering et NLP sur les contenus textuels.",
        "Conçu un assistant juridique RAG (LangChain + base vectorielle) : ingestion et découpage des textes de droit tunisien en chunks, recherche sémantique par similarité vectorielle, réponses contextualisées et fondées sur les sources — ce qui réduit nettement le risque d'hallucination.",
        "Restitué les scores de risque, les résultats NLP et l'assistant via une interface Streamlit et un tableau de bord Power BI.",
      ],
      en: [
        "Trained and compared supervised models (XGBoost, Random Forest) for social-risk detection, with data cleaning, feature engineering and NLP over text content.",
        "Designed a RAG legal assistant (LangChain + vector store): ingesting and chunking Tunisian legal texts, vector-similarity semantic search, and answers grounded in the retrieved sources — which sharply reduces hallucination risk.",
        "Surfaced risk scores, NLP results and the assistant through a Streamlit interface and a Power BI dashboard.",
      ],
    },
    stack: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "LangChain",
      "Base vectorielle",
      "NLP",
      "Streamlit",
      "Power BI",
    ],
  },
  {
    id: "riot-analytics",
    name: "Riot Games Analytics Platform",
    year: "2026",
    featured: false,
    category: {
      fr: "ML end-to-end · MLOps",
      en: "End-to-end ML · MLOps",
    },
    problem: {
      fr: "Prédire l'issue d'un match League of Legends, estimer le rang d'un joueur et repérer les comptes suspects — sur des données récupérées en continu via une API publique à quotas.",
      en: "Predict a League of Legends match outcome, estimate a player's rank and flag suspicious accounts — on data pulled continuously through a rate-limited public API.",
    },
    highlights: {
      fr: [
        "Développé des modèles de classification et de régression pour le résultat de match et le rang, plus un modèle de détection d'anomalies pour repérer les comptes « smurfs ».",
        "Construit le pipeline complet : collecte via l'API Riot Games avec cache et retry/backoff, feature engineering, entraînement Scikit-learn.",
        "Industrialisé le suivi des expériences avec MLflow et exposé les modèles via une API FastAPI consommée par une interface React.",
      ],
      en: [
        "Built classification and regression models for match outcome and rank, plus an anomaly-detection model to flag smurf accounts.",
        "Built the full pipeline: collection through the Riot Games API with caching and retry/backoff, feature engineering, Scikit-learn training.",
        "Industrialised experiment tracking with MLflow and served the models through a FastAPI endpoint consumed by a React front-end.",
      ],
    },
    stack: ["Python", "Scikit-learn", "MLflow", "FastAPI", "React", "API Riot Games"],
  },
  {
    id: "the-room",
    name: "The Room",
    year: null,
    featured: false,
    category: {
      fr: "Fullstack · Temps réel",
      en: "Fullstack · Real-time",
    },
    problem: {
      fr: "Donner à un escape game un site de réservation public et un back-office capable de suivre les créneaux en temps réel et d'exporter les données.",
      en: "Give an escape-game venue a public booking site and a back office that tracks slots in real time and exports its data.",
    },
    highlights: {
      fr: [
        "Développé le site public de réservation en React et un dashboard d'administration.",
        "Backend Express + PostgreSQL conteneurisé avec Docker.",
        "Notifications en temps réel via SSE, et export des données au format PDF et Excel.",
      ],
      en: [
        "Built the public booking site in React alongside an admin dashboard.",
        "Express + PostgreSQL backend, containerised with Docker.",
        "Real-time notifications over SSE, plus PDF and Excel data export.",
      ],
    },
    stack: ["React", "Express", "PostgreSQL", "Docker", "SSE"],
  },
  {
    id: "e-bike",
    name: "E-Bike Rental Platform",
    year: null,
    featured: false,
    category: {
      fr: "Marketplace · Paiements",
      en: "Marketplace · Payments",
    },
    problem: {
      fr: "Permettre à des particuliers de louer leurs vélos électriques entre eux, ce qui suppose authentification, gestion des annonces et paiement en ligne.",
      en: "Let private owners rent electric bikes to one another — which means authentication, listing management and online payment.",
    },
    highlights: {
      fr: [
        "Backend en Django REST Framework, frontend en React / TypeScript.",
        "Authentification par JWT et intégration des paiements via Stripe.",
      ],
      en: [
        "Django REST Framework backend, React / TypeScript front-end.",
        "JWT authentication and Stripe payment integration.",
      ],
    },
    stack: ["Django REST Framework", "React", "TypeScript", "JWT", "Stripe"],
  },
  {
    id: "generator-data-crime",
    name: "Generator Data Crime",
    year: null,
    featured: false,
    category: {
      fr: "Outil data · Données synthétiques",
      en: "Data tooling · Synthetic data",
    },
    problem: {
      fr: "Tester des pipelines de traitement et des tableaux de bord analytiques avant d'avoir accès à de vraies données criminologiques — sans travailler sur des données sensibles.",
      en: "Test processing pipelines and analytical dashboards before real criminology data is available — without handling sensitive records.",
    },
    highlights: {
      fr: [
        "Application React / Vite générant des jeux de données criminologiques synthétiques en JSON et CSV.",
        "Corrélations statistiques réalistes entre les variables, pour que les pipelines et les dashboards soient testés sur des distributions plausibles.",
      ],
      en: [
        "A React / Vite app generating synthetic criminology datasets as JSON and CSV.",
        "Realistic statistical correlations between variables, so pipelines and dashboards are exercised against plausible distributions.",
      ],
    },
    stack: ["React", "Vite", "Génération de données synthétiques"],
  },
] as const;
