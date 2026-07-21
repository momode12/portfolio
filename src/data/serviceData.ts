import {
  PenTool,
  Database,
  Code2,
  Brain,
  LineChart,
  Rocket,
} from "lucide-react";
import type { Language } from "../context/LanguageContext";

/* =======================
   TYPES
======================= */

interface ServiceTranslation {
  title: string;
  description: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  icon: React.ElementType;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  translations: Record<Language, ServiceTranslation>;
}

/* =======================
   SERVICES
======================= */

export const services: ServiceItem[] = [
  {
    id: "conception-logicielle",
    icon: PenTool,
    color: "text-violet-500",
    gradientFrom: "from-violet-500",
    gradientTo: "to-violet-600",
    translations: {
      fr: {
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
      },
      en: {
        title: "Software Design",
        description:
          "System modeling and architecture before any development, for clear and maintainable solutions.",
        features: [
          "UML diagrams: use case, sequence, class, activity",
          "Data modeling with Merise (MCD / MLD / MPD)",
          "Software architecture: MVC, Clean Architecture, business layers",
          "Writing functional and technical specifications",
          "Model review and validation before implementation",
        ],
      },
      de: {
        title: "Softwarekonzeption",
        description:
          "Modellierung und Architektur von Systemen vor jeder Entwicklung, für klare und wartbare Lösungen.",
        features: [
          "UML-Diagramme: Anwendungsfall, Sequenz, Klassen, Aktivitäten",
          "Datenmodellierung mit Merise (MCD / MLD / MPD)",
          "Softwarearchitektur: MVC, Clean Architecture, Fachschichten",
          "Erstellung funktionaler und technischer Spezifikationen",
          "Überprüfung und Validierung der Modelle vor der Umsetzung",
        ],
      },
    },
  },
  {
    id: "bases-de-donnees",
    icon: Database,
    color: "text-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    translations: {
      fr: {
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
      },
      en: {
        title: "Databases",
        description:
          "Design, optimization and security of relational and NoSQL databases.",
        features: [
          "Relational modeling (Merise, UML)",
          "PostgreSQL, MySQL, MongoDB",
          "Query and performance optimization",
          "Access management, transactions and data integrity",
          "Database migration and backup",
        ],
      },
      de: {
        title: "Datenbanken",
        description:
          "Entwurf, Optimierung und Absicherung relationaler und NoSQL-Datenbanken.",
        features: [
          "Relationale Modellierung (Merise, UML)",
          "PostgreSQL, MySQL, MongoDB",
          "Optimierung von Abfragen und Performance",
          "Zugriffsverwaltung, Transaktionen und Datenintegrität",
          "Migration und Sicherung von Datenbanken",
        ],
      },
    },
  },
  {
    id: "fullstack-web-mobile",
    icon: Code2,
    color: "text-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    translations: {
      fr: {
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
      },
      en: {
        title: "Full Stack Web & Mobile Development",
        description:
          "Design and development of robust, modern, cross-platform web and mobile applications.",
        features: [
          "Frontend: React.js, TypeScript, JavaScript, Tailwind CSS, HTML / CSS",
          "Mobile: React Native (Android & iOS)",
          "REST API backend: Node.js / Express, Flask (Python)",
          "Clear architecture and maintainable code",
          "Secure connections to databases and APIs",
        ],
      },
      de: {
        title: "Full-Stack-Entwicklung Web & Mobil",
        description:
          "Konzeption und Entwicklung robuster, moderner und plattformübergreifender Web- und Mobilanwendungen.",
        features: [
          "Frontend: React.js, TypeScript, JavaScript, Tailwind CSS, HTML / CSS",
          "Mobil: React Native (Android & iOS)",
          "REST-API-Backend: Node.js / Express, Flask (Python)",
          "Klare Architektur und wartbarer Code",
          "Sichere Anbindung an Datenbanken und APIs",
        ],
      },
    },
  },
  {
    id: "data-science-ia",
    icon: Brain,
    color: "text-pink-500",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600",
    translations: {
      fr: {
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
      },
      en: {
        title: "Data Science & Artificial Intelligence",
        description:
          "Advanced use of data for analysis, modeling and deployment of intelligent solutions.",
        features: [
          "1. Data collection and exploration (EDA)",
          "2. Data cleaning and processing",
          "3. Feature selection and engineering",
          "4. Design and training of ML / Deep Learning models",
          "5. Model evaluation and interpretation",
          "6. Hyperparameter optimization and tuning",
          "7. Production deployment and monitoring of AI solutions",
        ],
      },
      de: {
        title: "Data Science & Künstliche Intelligenz",
        description:
          "Fortgeschrittene Datennutzung für die Analyse, Modellierung und Bereitstellung intelligenter Lösungen.",
        features: [
          "1. Datensammlung und -exploration (EDA)",
          "2. Datenbereinigung und -verarbeitung",
          "3. Auswahl und Engineering von Features",
          "4. Entwurf und Training von ML- / Deep-Learning-Modellen",
          "5. Bewertung und Interpretation der Modelle",
          "6. Optimierung und Tuning der Hyperparameter",
          "7. Produktivsetzung und Monitoring von KI-Lösungen",
        ],
      },
    },
  },
  {
    id: "bi-analyse-decisionnelle",
    icon: LineChart,
    color: "text-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
    translations: {
      fr: {
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
      },
      en: {
        title: "Business Intelligence & Decision Analysis",
        description:
          "Implementation of analysis and visualization solutions for steering and decision-making.",
        features: [
          "Interactive dashboards with Power BI",
          "Definition and tracking of key performance indicators (KPIs)",
          "Descriptive, exploratory and predictive analysis",
          "Business data valorization and storytelling",
          "Automated reports for decision-making teams",
        ],
      },
      de: {
        title: "Business Intelligence & Entscheidungsanalyse",
        description:
          "Implementierung von Analyse- und Visualisierungslösungen für Steuerung und Entscheidungsfindung.",
        features: [
          "Interaktive Dashboards mit Power BI",
          "Definition und Verfolgung von Kennzahlen (KPIs)",
          "Deskriptive, explorative und prädiktive Analyse",
          "Wertsteigerung und Storytelling von Geschäftsdaten",
          "Automatisierte Berichte für Entscheidungsteams",
        ],
      },
    },
  },
  {
    id: "deploiement-cicd",
    icon: Rocket,
    color: "text-cyan-500",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-600",
    translations: {
      fr: {
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
      },
      en: {
        title: "Deployment & CI/CD",
        description:
          "Automated and reliable production deployment of applications via a complete DevOps pipeline.",
        features: [
          "1. Push code to GitHub",
          "2. Automatic trigger via Jenkins webhook",
          "3. Quality analysis with SonarQube (Quality Gate)",
          "4. Build a Docker image",
          "5. Push to a private Nexus registry",
          "6. Automatic deployment via Docker Compose",
          "7. Pipeline completion notification",
        ],
      },
      de: {
        title: "Deployment & CI/CD",
        description:
          "Automatisierte und zuverlässige Produktivsetzung von Anwendungen über eine vollständige DevOps-Pipeline.",
        features: [
          "1. Code-Push auf GitHub",
          "2. Automatische Auslösung über Jenkins-Webhook",
          "3. Qualitätsanalyse mit SonarQube (Quality Gate)",
          "4. Erstellung eines Docker-Images",
          "5. Push in eine private Nexus-Registry",
          "6. Automatisches Deployment über Docker Compose",
          "7. Benachrichtigung nach Abschluss der Pipeline",
        ],
      },
    },
  },
];