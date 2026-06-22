import {
  PenTool,
  Database,
  Code2,
  Brain,
  LineChart,
  Rocket,
} from "lucide-react";

/* =======================
   TYPES
======================= */

export interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

/* =======================
   SERVICES
======================= */

export const services: ServiceItem[] = [
  {
    icon: PenTool,
    title: "Conception Logicielle",
    description:
      "Modélisation et architecture des systèmes avant tout développement, pour des solutions claires et maintenables.",
    features: [
      "Diagrammes UML : cas d'utilisation, séquence, classes, activités",
      "Modélisation des données avec Merise (MCD / MLD / MPD)",
      "Architecture logicielle : MVC, Clean Architecture, couches métier",
      "Rédaction des spécifications fonctionnelles et techniques",
      "Revue et validation des modèles avant implémentation",
    ],
    color: "text-violet-500",
    gradientFrom: "from-violet-500",
    gradientTo: "to-violet-600",
  },
  {
    icon: Database,
    title: "Bases de Données",
    description:
      "Conception, optimisation et sécurisation de bases de données relationnelles et NoSQL.",
    features: [
      "Modélisation relationnelle (Merise, UML)",
      "PostgreSQL, MySQL, MongoDB",
      "Optimisation des requêtes et des performances",
      "Gestion des accès, transactions et intégrité des données",
      "Migration et sauvegarde des bases de données",
    ],
    color: "text-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
  },
  {
    icon: Code2,
    title: "Développement Full Stack Web & Mobile",
    description:
      "Conception et développement d'applications web et mobiles robustes, modernes et cross-platform.",
    features: [
      "Frontend : React.js, TypeScript, JavaScript, Tailwind CSS, HTML / CSS",
      "Mobile : React Native (Android & iOS)",
      "Backend API REST : Node.js / Express, Flask (Python)",
      "Architecture claire et code maintenable",
      "Connexion sécurisée aux bases de données et aux API",
    ],
    color: "text-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
  },
  {
    icon: Brain,
    title: "Data Science & Intelligence Artificielle",
    description:
      "Exploitation avancée des données pour l'analyse, la modélisation et le déploiement de solutions intelligentes.",
    features: [
      "1. Collecte et exploration des données (EDA)",
      "2. Nettoyage et traitement des données",
      "3. Sélection et ingénierie des features",
      "4. Conception et entraînement des modèles ML / Deep Learning",
      "5. Évaluation et interprétation des modèles",
      "6. Optimisation et tuning des hyperparamètres",
      "7. Mise en production et monitoring des solutions IA",
    ],
    color: "text-pink-500",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600",
  },
  {
    icon: LineChart,
    title: "Business Intelligence & Analyse Décisionnelle",
    description:
      "Mise en place de solutions d'analyse et de visualisation pour le pilotage et la prise de décision.",
    features: [
      "Tableaux de bord interactifs avec Power BI",
      "Définition et suivi des indicateurs clés (KPI)",
      "Analyse descriptive, exploratoire et prédictive",
      "Valorisation et storytelling des données métier",
      "Rapports automatisés pour les équipes décisionnelles",
    ],
    color: "text-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
  },
  {
    icon: Rocket,
    title: "Déploiement & CI/CD",
    description:
      "Mise en production automatisée et fiable des applications via un pipeline DevOps complet.",
    features: [
      "1. Push du code sur GitHub",
      "2. Déclenchement automatique via webhook Jenkins",
      "3. Analyse qualité avec SonarQube (Quality Gate)",
      "4. Build d'une image Docker",
      "5. Push vers un registry privé Nexus",
      "6. Déploiement automatique via Docker Compose",
      "7. Notification de fin de pipeline",
    ],
    color: "text-cyan-500",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-600",
  },
];