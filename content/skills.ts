import type { SectionCopy, SkillGroup } from "./types";

export const SKILLS_COPY = {
  eyebrow: { fr: "Compétences", en: "Skills" },
  title: {
    fr: "Ce avec quoi je travaille",
    en: "What I work with",
  },
  lede: {
    fr: "Évalué sur ce que j'ai réellement livré, pas sur ce que j'ai déjà croisé.",
    en: "Rated on what I have actually shipped, not on what I have merely seen.",
  },
} satisfies SectionCopy;

/**
 * PROFICIENCY RUBRIC — junior Data Science / AI engineer.
 *
 * The CV states no proficiency levels, so these are derived from evidence of use
 * and capped at a junior ceiling. Keeping the rubric here makes the numbers
 * auditable instead of arbitrary:
 *
 *   85      used daily across BOTH an internship and a personal project
 *   80      shipped in a named project or internship
 *   70-75   solid working use
 *   55-65   coursework or a single exposure
 *
 * Nothing exceeds 85. A fourth-year student claiming 95% in PyTorch reads as a
 * red flag to exactly the ML engineers who would interview him.
 *
 * Melek: these are my calibration, not yours — adjust freely, it is one file.
 */

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: "machine-learning",
    layout: "bars",
    title: { fr: "Machine Learning", en: "Machine Learning" },
    skills: [
      {
        name: "Python",
        level: 85,
        note: {
          fr: "Langage principal — data, ML et backend",
          en: "Primary language — data, ML and backend",
        },
      },
      {
        name: "Pandas",
        level: 85,
        note: {
          fr: "Nettoyage et préparation sur tous les projets data",
          en: "Cleaning and preparation across every data project",
        },
      },
      {
        name: "Scikit-learn",
        level: 85,
        note: {
          fr: "Entraînement et évaluation — CSIS, Riot Games",
          en: "Training and evaluation — CSIS, Riot Games",
        },
      },
      {
        name: "XGBoost",
        level: 80,
        note: {
          fr: "Détection de risque social (CSIS)",
          en: "Social-risk detection (CSIS)",
        },
      },
      {
        name: "Random Forest",
        level: 80,
        note: {
          fr: "Modèle de comparaison sur CSIS",
          en: "Comparison model on CSIS",
        },
      },
      {
        name: "NumPy",
        level: 80,
        note: {
          fr: "Feature engineering et calcul vectorisé",
          en: "Feature engineering and vectorised computation",
        },
      },
    ],
  },
  {
    id: "genai-rag",
    layout: "bars",
    title: { fr: "IA Générative & RAG", en: "Generative AI & RAG" },
    skills: [
      {
        name: "LangChain",
        level: 80,
        note: {
          fr: "Assistant juridique RAG sur le droit tunisien",
          en: "RAG legal assistant over Tunisian law",
        },
      },
      {
        name: "Bases vectorielles",
        level: 80,
        note: {
          fr: "Indexation, chunking, recherche par similarité",
          en: "Indexing, chunking, similarity search",
        },
      },
      {
        name: "Recherche sémantique",
        level: 78,
        note: {
          fr: "Sélection des passages pertinents avant génération",
          en: "Selecting relevant passages before generation",
        },
      },
      {
        name: "Prompt engineering",
        level: 75,
        note: {
          fr: "Réponses fondées sur les sources, anti-hallucination",
          en: "Source-grounded answers, hallucination control",
        },
      },
      {
        name: "API Gemini",
        level: 72,
        note: {
          fr: "Génération de réponses — stage STIET-Philips",
          en: "Answer generation — STIET-Philips internship",
        },
      },
    ],
  },
  {
    id: "deep-learning",
    layout: "bars",
    title: { fr: "Deep Learning", en: "Deep Learning" },
    skills: [
      {
        name: "TensorFlow",
        level: 65,
        note: { fr: "Cursus académique", en: "Academic coursework" },
      },
      {
        name: "Keras",
        level: 65,
        note: { fr: "Prototypage de réseaux", en: "Network prototyping" },
      },
      {
        name: "PyTorch",
        level: 60,
        note: { fr: "Cursus académique", en: "Academic coursework" },
      },
    ],
  },
  {
    id: "languages",
    layout: "bars",
    title: { fr: "Langages", en: "Languages" },
    skills: [
      {
        name: "Python",
        level: 85,
        note: { fr: "Data science, IA, backend", en: "Data science, AI, backend" },
      },
      {
        name: "SQL",
        level: 75,
        note: { fr: "MySQL, PostgreSQL — requêtes analytiques", en: "MySQL, PostgreSQL — analytical queries" },
      },
      {
        name: "JavaScript",
        level: 72,
        note: { fr: "Interfaces React des projets", en: "React front-ends across projects" },
      },
      {
        name: "TypeScript",
        level: 70,
        note: { fr: "E-Bike Rental Platform", en: "E-Bike Rental Platform" },
      },
      {
        name: "Java",
        level: 62,
        note: { fr: "Programmation orientée objet", en: "Object-oriented programming" },
      },
      {
        name: "C / C++",
        level: 58,
        note: { fr: "Fondamentaux et algorithmique", en: "Fundamentals and algorithms" },
      },
    ],
  },
  {
    id: "backend",
    layout: "tags",
    title: { fr: "Web & Backend", en: "Web & Backend" },
    items: ["FastAPI", "Django", "Flask", "Node.js", "Express", "Spring Boot", ".NET", "Flutter"],
  },
  {
    id: "frontend",
    layout: "tags",
    title: { fr: "Frontend", en: "Frontend" },
    items: ["React", "TypeScript", "Tailwind CSS", "Streamlit", "HTML", "CSS"],
  },
  {
    id: "databases",
    layout: "tags",
    title: { fr: "Bases de données", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j"],
  },
  {
    id: "big-data",
    layout: "tags",
    title: { fr: "Big Data", en: "Big Data" },
    items: ["PySpark", "Traitement à grande échelle"],
  },
  {
    id: "tools",
    layout: "tags",
    wide: true,
    title: { fr: "Outils & MLOps", en: "Tools & MLOps" },
    items: ["Git", "Docker", "MLflow", "Power BI", "Seaborn", "Matplotlib", "Jupyter", "Postman"],
  },
] as const;
