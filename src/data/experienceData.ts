import {
  Code,
  Rocket,
  Activity,
  Building2,
  GraduationCap,
  Award,
  BookOpen,
  Brain,
} from "lucide-react";

/* =======================
   TYPES
======================= */

import pnudCert from "../assets/Certificat_diplome/pnud.jpg";
import ideaCert from "../assets/Certificat_diplome/idea.jpg";
import financeCert from "../assets/Certificat_diplome/stage_L2.jpg";
import bacCert from "../assets/Certificat_diplome/Bacc.jpg";
import licenceCert from "../assets/Certificat_diplome/licence.jpg";
import releveTranscript from "../assets/Certificat_diplome/releve.jpg";

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  certificate?: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  mention?: string;
  icon: React.ElementType;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  certificate?: string;
  transcript?: string;
}

/* =======================
   EXPERIENCES
======================= */

export const experiences: ExperienceItem[] = [
  {
    title: "Développement d'une application web de gestion commerciale",
    company: "Projet personnel – Grossiste PPN à Mananjary & Fianarantsoa",
    period: "Août 2025 - Présent",
    description:
      "Conception et développement d'une application web mobile de gestion des produits, commandes et ventes pour un grossiste PPN, avec une interface moderne et intuitive.[React.js (tsx), Python (flask), React native, PostgreSQL].",
    icon: Code,
    color: "text-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
  },
  {
    title: "Développeur Frontend – Plateforme AMGV",
    company: "PNUD Madagascar – Association des Maires des Grandes Villes",
    period: "Novembre 2024 - Mars 2025",
    description:
      "Participation à la conception et à l'intégration frontend d'une plateforme collaborative dans le cadre du Mois de l'Innovation à Fianarantsoa, puis de la Semaine d'Accélération à Antsirabe. React.js (tsx).",
    icon: Rocket,
    color: "text-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    certificate: pnudCert,
  },
  {
    title: "Application de gestion de présence et d'absence des élèves par scan de QR Code",
    company: "Lycée CPE Ambatomena Fianarantsoa",
    period: "Août 2024 - Octobre 2024",
    description:
      "Développement d'une application mobile et web permettant aux enseignants de gérer les présences des élèves via le scan de QR code [React.js (jsx), Node.js (Express.js), PostgreSQL, React Native (jsx)].",
    icon: Activity,
    color: "text-green-500",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600",
  },
  {
    title: "Développement d'un logiciel de gestion de stock",
    company: "Direction Générale du Budget et des Finances (Imprimerie Nationale)",
    period: "Août 2023 - Octobre 2023",
    description:
      "Création d'un système complet de gestion de stock avec React.js, Express.js et MySQL, permettant le suivi des entrées et sorties de produits.",
    icon: Building2,
    color: "text-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    certificate: financeCert,
  },
];

/* =======================
   FORMATIONS
======================= */

export const educations: EducationItem[] = [
  {
    title: "Master 1 - Gouvernance et Ingénierie des Données",
    institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
    period: "2024 - Présent",
    description:
      "Master orienté en intelligence artificielle, big data et gouvernance des données.",
    icon: Rocket,
    color: "text-pink-500",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600",
  },
  {
    title: "Formation Data Science",
    institution: "Idea Academy à l'Ecole Nationale d'Informatique Fianarantsoa (ENI)",
    period: "Août 2024",
    description:
      "Formation intensive en Data Science : analyse de données, machine learning et visualisation avec KNIME Platforme Analytics (Outils no-code).",
    mention: "Certificat obtenu",
    icon: Brain,
    color: "text-cyan-500",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-600",
    certificate: ideaCert,
  },
  {
    title: "Licence 3 en Informatique Générale (IG)",
    institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
    period: "2023 - 2024",
    description:
      "Licence en Informatique Générale, spécialisation Génie Logiciel et Bases de Données.",
    mention: "Mention Bien",
    icon: GraduationCap,
    color: "text-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
    certificate: licenceCert,
  },
  {
    title: "Licence 2 en Informatique Générale (IG)",
    institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
    period: "2022 - 2023",
    description:
      "Approfondissement en développement logiciel, bases de données et algorithmique.",
    icon: Code,
    color: "text-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
  },
  {
    title: "Licence 1 en Informatique Générale (IG)",
    institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
    period: "2021 - 2022",
    description:
      "Fondamentaux de la programmation, des systèmes informatiques et des mathématiques appliquées.",
    icon: BookOpen,
    color: "text-green-500",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600",
  },
  {
    title: "Baccalauréat Série C",
    institution: "Lycée Saint François Xavier Ambatomena Fianarantsoa",
    period: "2020 - 2021",
    description:
      "Baccalauréat série C, bases solides en Mathématiques et Physique-Chimie.",
    mention: "Mention Assez-Bien",
    icon: Award,
    color: "text-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    transcript: releveTranscript, 
    certificate: bacCert,
    
  },
];
