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
      en: "Assess social risk among young people from heterogeneous data, and make Tunisian law queryable in natural language without the model hallucinating answers.",
    },
    highlights: {
      fr: [
        "Modèle XGBoost entraîné sur 10 000 profils (18 features socio-comportementales) : prédit un score de risque et un type de crime parmi 21 catégories, ~85% d'accuracy en classification binaire.",
        "Assistant juridique RAG : indexation TF-IDF de 1 485+ articles de loi tunisienne, recherche par similarité cosinus, réponses générées et sourcées via une chaîne de fallback LLM (Groq LLaMA 3.3 → Gemini Flash → Claude Haiku).",
        "API FastAPI sécurisée par JWT, frontend React 18 avec dashboard de suivi des prédictions en temps réel (Recharts).",
      ],
      en: [
        "XGBoost model trained on 10,000 profiles (18 socio-behavioral features): predicts a risk score and one of 21 crime types, ~85% accuracy on the binary classifier.",
        "Legal RAG assistant: TF-IDF index over 1,485+ Tunisian law articles, cosine-similarity retrieval, source-grounded answers through an LLM fallback chain (Groq LLaMA 3.3 → Gemini Flash → Claude Haiku).",
        "JWT-secured FastAPI backend, React 18 frontend with a real-time prediction dashboard (Recharts).",
      ],
    },
    stack: ["Python", "FastAPI", "XGBoost", "scikit-learn", "RAG (TF-IDF)", "React", "Recharts", "JWT"],
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
        "4 modules de prédiction : classification du tier de rang, régression de progression, détection d'anomalies \"smurf\", prédiction d'issue de match (variantes early/full/cascade/strict).",
        "Résilience API Riot : cache des réponses, retry avec backoff exponentiel, mapping des états (actif/expiré/rate-limited).",
        "Suivi des expériences avec MLflow, API FastAPI (`/api/v1`) consommée par une interface React/TypeScript avec pages de comparaison de joueurs et cartes d'explicabilité.",
      ],
      en: [
        "4 prediction modules: rank tier classification, progression regression, smurf anomaly detection, match outcome prediction (early/full/cascade/strict variants).",
        "Riot API resilience: response caching, exponential backoff retries, health-state mapping (active/expired/rate-limited).",
        "Experiment tracking with MLflow, FastAPI backend (`/api/v1`) consumed by a React/TypeScript frontend with player-comparison pages and explainability cards.",
      ],
    },
    stack: ["Python", "FastAPI", "scikit-learn", "MLflow", "React", "TypeScript", "Recharts", "API Riot Games"],
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
      fr: "Donner à un escape game un site de réservation public et un back-office capable de suivre les créneaux en temps réel et d'exporter les données, sans jamais accepter de double réservation.",
      en: "Give an escape game venue a public booking site and a back-office able to track slots in real time and export data, with zero double-bookings.",
    },
    highlights: {
      fr: [
        "Réservation en ligne avec délai minimum de 90 minutes, verrouillage atomique des créneaux via PostgreSQL advisory lock (aucune double réservation même en cas de clics simultanés).",
        "Dashboard admin JWT : gestion des scénarios, des réservations, export Excel/PDF, notifications en temps réel via SSE.",
        "Backend Express + PostgreSQL conteneurisé avec Docker Compose, 14 tests d'intégration + test de charge à 60 utilisateurs simultanés, interface bilingue FR/EN.",
      ],
      en: [
        "Online booking with a 90-minute minimum lead time, atomic slot locking via a PostgreSQL advisory lock (zero double-booking even under simultaneous clicks).",
        "JWT-secured admin dashboard: scenario management, reservations, Excel/PDF export, real-time notifications via SSE.",
        "Express + PostgreSQL backend containerized with Docker Compose, 14 integration tests plus a 60-concurrent-user load test, bilingual FR/EN interface.",
      ],
    },
    stack: ["React", "Express", "PostgreSQL", "Docker", "JWT", "SSE"],
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
        "Application React/Vite générant des profils synthétiques en JSON/CSV, avec répartition 50/50 criminel/non-criminel.",
        "Corrélations statistiques réalistes entre type de crime et profil (ex. vol → profil économique précaire ; crimes violents → troubles psychologiques et contexte familial instable), pour tester des dashboards sur des distributions plausibles.",
      ],
      en: [
        "React/Vite application generating synthetic profiles in JSON/CSV, with a 50/50 criminal/non-criminal split.",
        "Realistic statistical correlations between crime type and profile (e.g. theft → precarious economic profile; violent crime → psychological issues and unstable family background), used to test dashboards on plausible distributions.",
      ],
    },
    stack: ["React", "Vite", "JavaScript"],
  },
] as const;
