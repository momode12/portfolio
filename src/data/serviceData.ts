import {
  Code2,
  Smartphone,
  Database,
  Brain,
  LineChart,
  Server,
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
   SERVICES – DEV & IA
======================= */

export const services: ServiceItem[] = [
  {
    icon: Code2,
    title: "Développement Web Full Stack",
    description:
      "Conception et développement d’applications web robustes, sécurisées et évolutives.",
    features: [
      "Frontend moderne avec React.js / Next.js",
      "Backend API REST avec Node.js / Express et Flask de python",
      "Architecture logicielle claire (MVC, Clean Architecture)",
      "Applications performantes et maintenables",
    ],
    color: "text-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    description:
      "Développement d’applications mobiles cross-platform orientées performance et expérience utilisateur.",
    features: [
      "Applications mobiles avec React Native",
      "Connexion sécurisée aux API backend",
      "Gestion des états et navigation",
      "Déploiement Android et iOS",
    ],
    color: "text-green-500",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600",
  },
  {
    icon: Database,
    title: "Ingénierie des Bases de Données",
    description:
      "Conception, optimisation et sécurisation de bases de données relationnelles et NoSQL.",
    features: [
      "Modélisation relationnelle (Merise, UML)",
      "PostgreSQL, MySQL, MongoDB",
      "Optimisation des requêtes et performances",
      "Gestion des accès et intégrité des données",
    ],
    color: "text-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
  },
  {
    icon: Brain,
    title: "Data Science & Intelligence Artificielle",
    description:
      "Exploitation avancée des données pour l’analyse, le nettoyage, le prétraitement et le développement de modèles intelligents d’aide à la décision.",
    features: [
      "Analyse exploratoire et statistique des données",
      "Nettoyage et prétraitement des données pour garantir leur qualité",
      "Traitement et transformation des données pour les rendre exploitables",
      "Conception et entraînement de modèles de Machine Learning et Deep Learning",
      "Évaluation et interprétation des modèles prédictifs",
      "Mise en production de solutions d’IA pour l’automatisation et la prédiction",
    ],
    color: "text-pink-500",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600",
  },
  {
    icon: LineChart,
    title: "Business Intelligence & Analyse Décisionnelle",
    description:
      "Mise en place de solutions d’analyse pour le pilotage et la prise de décision.",
    features: [
      "Tableaux de bord analytiques (Power BI)",
      "Indicateurs clés de performance (KPI)",
      "Analyse descriptive et exploratoire",
      "Valorisation des données métier",
    ],
    color: "text-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
  },
  {
    icon: Server,
    title: "Architecture Backend & Déploiement",
    description:
      "Mise en production et gestion technique des applications côté serveur.",
    features: [
      "Déploiement sur serveurs Linux",
      "Configuration backend et API",
      "Gestion des environnements (dev, prod)",
      "Notions de conteneurisation et sécurité",
    ],
    color: "text-cyan-500",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-600",
  },
];
