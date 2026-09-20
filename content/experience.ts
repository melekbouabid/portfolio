import type { ExperienceItem, SectionCopy } from "./types";

export const EXPERIENCE_COPY = {
  eyebrow: { fr: "Expérience", en: "Experience" },
  title: {
    fr: "Où j'ai mis les mains",
    en: "Where I've done the work",
  },
  lede: {
    fr: "Deux stages, deux contextes très différents : l'IA appliquée au biomédical, et le mobile en retail.",
    en: "Two internships, two very different contexts: AI applied to medical equipment, and mobile in retail.",
  },
} satisfies SectionCopy;

export const EXPERIENCES: readonly ExperienceItem[] = [
  {
    id: "stiet-philips",
    company: "STIET-Philips",
    role: {
      fr: "Stagiaire Data Science / Intelligence Artificielle",
      en: "Data Science / Artificial Intelligence Intern",
    },
    period: { fr: "2026", en: "2026" },
    duration: { fr: "2 mois", en: "2 months" },
    summary: {
      fr: "POC de GMAO intelligente pour le suivi d'installations médicales — salles IRM et CathLab — couvrant tout le cycle de vie d'une installation : données opérationnelles, techniques, financières et documentaires.",
      en: "An intelligent CMMS proof of concept for tracking medical installations — MRI and CathLab rooms — covering the full lifecycle of an installation: operational, technical, financial and documentary data.",
    },
    highlights: {
      fr: [
        "Implémenté un assistant conversationnel sur une architecture RAG documentaire : indexation et découpage des rapports en fragments exploitables, recherche des passages pertinents, génération de réponses via l'API Gemini — destiné aux administrateurs et aux managers.",
        "Conçu des modèles de scoring pour l'aide à la décision : score de risque équipement (garantie, âge, incidents, réclamations, historique de maintenance) et score de performance d'équipe.",
        "Construit une prédiction statistique de la durée d'installation — moyenne, écart-type, min/max — à partir des installations archivées.",
        "Participé à la conception d'un graphe interactif de préparation d'installation : équipements, composants, éléments de sécurité et documents, avec indicateurs d'état vert/jaune/rouge.",
        "Mis en place des mécanismes de cache et de réindexation après archivage pour garder l'assistant à jour sans recalcul complet.",
      ],
      en: [
        "Implemented a conversational assistant on a documentary RAG architecture: indexing and chunking reports into usable fragments, retrieving the relevant passages, generating answers via the Gemini API — aimed at administrators and managers.",
        "Designed decision-support scoring models: an equipment risk score (warranty, age, incidents, claims, maintenance history) and a team performance score.",
        "Built a statistical prediction of installation duration — mean, standard deviation, min/max — from archived installations.",
        "Contributed to an interactive installation-readiness graph: equipment, components, safety items and documents, with green/amber/red status indicators.",
        "Added caching and post-archival reindexing so the assistant stays current without a full recompute.",
      ],
    },
    stack: [
      "Laravel 12",
      "Python",
      "RAG",
      "API Gemini",
      "Indexation documentaire",
      "Scoring heuristique",
      "Tableaux de bord",
    ],
  },
  {
    id: "ats",
    company: "Advanced Technologies Software (A.T.S)",
    role: {
      fr: "Stagiaire Développement Mobile (Flutter)",
      en: "Mobile Development Intern (Flutter)",
    },
    period: { fr: "2025", en: "2025" },
    duration: { fr: "1 mois", en: "1 month" },
    summary: {
      fr: "Application mobile Flutter pour Ray-Ban permettant de scanner le code-barres ou le QR code d'un produit en magasin et de vérifier sa disponibilité en stock en temps réel.",
      en: "A Flutter mobile app for Ray-Ban that scans a product's barcode or QR code in store and checks stock availability in real time.",
    },
    highlights: {
      fr: [
        "Conçu le module de scan : intégration de la caméra et du lecteur de code-barres / QR code.",
        "Développé la logique de communication avec le backend de disponibilité produit.",
        "Participé aux phases de test et de correction de bugs afin de fiabiliser l'application avant sa livraison.",
      ],
      en: [
        "Built the scanning module: camera integration and barcode / QR reader.",
        "Developed the communication layer against the product-availability backend.",
        "Took part in testing and bug-fixing to harden the app before delivery.",
      ],
    },
    stack: ["Flutter", "Dart", "Intégration caméra", "API REST"],
  },
] as const;
