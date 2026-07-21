import {
  Code,
  Rocket,
  Activity,
  Building2,
  GraduationCap,
  Award,
  BookOpen,
  Brain,
  Trophy,
} from "lucide-react";

import pnudCert from "../assets/Certificat_diplome/ATTESTATION_DE_PARTICIPATION _ HERITIANA_Julien.pdf";
import ideaCert from "../assets/Certificat_diplome/ATTESTATION_DE _ORMATION_Data_Science _HERITIANA_Julien.pdf";
import financeCert from "../assets/Certificat_diplome/CERTIFICAT_DE_STAGE_FINANCE_HERITIANA_Julien.pdf";
import bacCert from "../assets/Certificat_diplome/DIPLOME_BACC _HERITIANA_Julien.pdf";
import licenceCert from "../assets/Certificat_diplome/DIPLOME_LICENCE _HERITIANA_Julien.pdf";
import releveTranscript from "../assets/Certificat_diplome/RELEVE_DE_NOTE_BAC_HERITIANA _Julien.pdf";
import releveL3Transcript from "../assets/Certificat_diplome/RELEVE_DE_NOTE_L3_HERITIANA_Julien.pdf";
import ODC_robot from "../assets/Certificat_diplome/HERITIANA_Julien_Formation_robotique_ODC.pdf";
import ideathon_ingedata from "../assets/Certificat_diplome/Certification_ideathon_ingedata_odc.pdf"


import releveM1Transcript from "../assets/Certificat_diplome/RELEVE_DE_NOTE_M1_HERITIANA_Julien.pdf";
import releveL2Transcript from "../assets/Certificat_diplome/RELEVE_DE_NOTE_L2_HERITIANA_Julien.pdf";
import releveL1Transcript from "../assets/Certificat_diplome/RELEVE_DE_NOTE_L1_HERITIANA_Julien.pdf";
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

export const experiences: ExperienceItem[] = [
    {
    title: "Prix Coup de Cœur du Jury – Orange Ainga Data (Ideathon)",
    company: "Orange Digital Center Madagascar & Ingedata",
    period: "04 Juillet 2026",
    description:
      "Participation avec l'équipe de l'ENI Fianarantsoa à la 1ère édition d'Orange Ainga Data, un ideathon réunissant près de 200 étudiants autour du thème « La Data au service de l'Innovation : Créer, Connecter, Transformer ». Remporté le Prix Coup de Cœur du Jury pour un projet de newsletter personnalisée.",
    icon: Trophy,
    color: "text-yellow-500",
    gradientFrom: "from-yellow-400",
    gradientTo: "to-amber-600",
    certificate: ideathon_ingedata,
  },
  {
    title: "Développement d'une application web de gestion commerciale",
    company: "Projet personnel – Grossiste PPN à Mananjary & Fianarantsoa",
    period: "Août 2025 - Février 2026",
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
    title:
      "Application de gestion de présence et d'absence des élèves par scan de QR Code",
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
    company:
      "Direction Générale du Budget et des Finances (Imprimerie Nationale)",
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

export const educations: EducationItem[] = [
   {
    title: "Master 2 - Gouvernance et Ingénierie des Données (GID)",
    institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
    period: "2025 à Présent",
    description:
      "Master orienté en IA, big data, data science et gouvernance des données.",
    icon: Rocket,
    color: "text-pink-500",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600",
  },
    {
    title: "Formation en Robotique",
    institution: "Orange Digitale Center Fianarantsoa",
    period: "Novembre 2025",
    description:
      "Formation pratique en robotique axée sur l’électronique, la programmation de microcontrôleurs et la conception de projets robotiques innovants.",
    mention: "Formation certifiante",
    icon: Brain,
    color: "text-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
    certificate: ODC_robot,
  },
  {
    title: "Master 1 - Gouvernance et Ingénierie des Données (GID)",
    institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
    period: "2024 - 2025",
    description:
      "Master orienté en IA, big data et gouvernance des données.",
    icon: Rocket,
    color: "text-pink-500",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600",
    transcript: releveM1Transcript,
  },
  {
    title: "Formation Data Science",
    institution:
      "Idea Academy à l'Ecole Nationale d'Informatique Fianarantsoa (ENI)",
    period: "Août 2024",
    description:
      "Formation intensive en Data Science : analyse de données, machine learning et visualisation avec KNIME Platforme Analytics (Outils no-code).",
    mention: "Formation certifiante",
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
    transcript: releveL3Transcript,
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
    transcript: releveL2Transcript,
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
    transcript: releveL1Transcript,
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
