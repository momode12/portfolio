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
import type { Language } from "../context/LanguageContext";

import pnudCert from "../assets/Certificat_diplome/ATTESTATION_DE_PARTICIPATION _ HERITIANA_Julien.pdf";
import ideaCert from "../assets/Certificat_diplome/ATTESTATION_DE _ORMATION_Data_Science _HERITIANA_Julien.pdf";
import financeCert from "../assets/Certificat_diplome/CERTIFICAT_DE_STAGE_FINANCE_HERITIANA_Julien.pdf";
import bacCert from "../assets/Certificat_diplome/DIPLOME_BACC _HERITIANA_Julien.pdf";
import licenceCert from "../assets/Certificat_diplome/DIPLOME_LICENCE _HERITIANA_Julien.pdf";
import releveTranscript from "../assets/Certificat_diplome/RELEVE_DE_NOTE_BAC_HERITIANA _Julien.pdf";
import releveL3Transcript from "../assets/Certificat_diplome/RELEVE_DE_NOTE_L3_HERITIANA_Julien.pdf";
import ODC_robot from "../assets/Certificat_diplome/HERITIANA_Julien_Formation_robotique_ODC.pdf";
import ideathon_ingedata from "../assets/Certificat_diplome/Certification_ideathon_ingedata_odc.pdf";
import releveM1Transcript from "../assets/Certificat_diplome/RELEVE_DE_NOTE_M1_HERITIANA_Julien.pdf";
import releveL2Transcript from "../assets/Certificat_diplome/RELEVE_DE_NOTE_L2_HERITIANA_Julien.pdf";
import releveL1Transcript from "../assets/Certificat_diplome/RELEVE_DE_NOTE_L1_HERITIANA_Julien.pdf";

interface ExperienceTranslation {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  icon: React.ElementType;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  certificate?: string;
  translations: Record<Language, ExperienceTranslation>;
}

interface EducationTranslation {
  title: string;
  institution: string;
  period: string;
  description: string;
  mention?: string;
}

export interface EducationItem {
  id: string;
  icon: React.ElementType;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  certificate?: string;
  transcript?: string;
  translations: Record<Language, EducationTranslation>;
}

export const experiences: ExperienceItem[] = [
  {
    id: "ideathon",
    icon: Trophy,
    color: "text-yellow-500",
    gradientFrom: "from-yellow-400",
    gradientTo: "to-amber-600",
    certificate: ideathon_ingedata,
    translations: {
      fr: {
        title: "Prix Coup de Cœur du Jury – Orange Ainga Data (Ideathon)",
        company: "Orange Digital Center Madagascar & Ingedata",
        period: "04 Juillet 2026",
        description:
          "Participation avec l'équipe de l'ENI Fianarantsoa à la 1ère édition d'Orange Ainga Data, un ideathon réunissant près de 200 étudiants autour du thème « La Data au service de l'Innovation : Créer, Connecter, Transformer ». Remporté le Prix Coup de Cœur du Jury pour un projet de newsletter personnalisée.",
      },
      en: {
        title: "Jury's Special Prize – Orange Ainga Data (Ideathon)",
        company: "Orange Digital Center Madagascar & Ingedata",
        period: "July 4, 2026",
        description:
          "Took part with the ENI Fianarantsoa team in the 1st edition of Orange Ainga Data, an ideathon bringing together nearly 200 students around the theme \"Data serving Innovation: Create, Connect, Transform\". Won the Jury's Special Prize for a personalized newsletter project.",
      },
      de: {
        title: "Sonderpreis der Jury – Orange Ainga Data (Ideathon)",
        company: "Orange Digital Center Madagascar & Ingedata",
        period: "4. Juli 2026",
        description:
          "Teilnahme mit dem Team der ENI Fianarantsoa an der 1. Ausgabe von Orange Ainga Data, einem Ideathon mit fast 200 Studierenden zum Thema „Daten im Dienste der Innovation: Erschaffen, Verbinden, Transformieren“. Gewinn des Sonderpreises der Jury für ein Projekt zu personalisierten Newslettern.",
      },
    },
  },
  {
    id: "ppn-app",
    icon: Code,
    color: "text-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
    translations: {
      fr: {
        title: "Développement d'une application web de gestion commerciale",
        company: "Projet personnel – Grossiste PPN à Mananjary & Fianarantsoa",
        period: "Août 2025 - Février 2026",
        description:
          "Conception et développement d'une application web mobile de gestion des produits, commandes et ventes pour un grossiste PPN, avec une interface moderne et intuitive. [React.js (tsx), Python (Flask), React Native, PostgreSQL].",
      },
      en: {
        title: "Development of a commercial management web application",
        company: "Personal project – PPN wholesaler in Mananjary & Fianarantsoa",
        period: "August 2025 - February 2026",
        description:
          "Design and development of a mobile web application for managing products, orders and sales for a PPN wholesaler, with a modern and intuitive interface. [React.js (tsx), Python (Flask), React Native, PostgreSQL].",
      },
      de: {
        title: "Entwicklung einer Webanwendung für die Handelsverwaltung",
        company: "Persönliches Projekt – PPN-Großhändler in Mananjary & Fianarantsoa",
        period: "August 2025 - Februar 2026",
        description:
          "Konzeption und Entwicklung einer mobilen Webanwendung zur Verwaltung von Produkten, Bestellungen und Verkäufen für einen PPN-Großhändler, mit moderner und intuitiver Oberfläche. [React.js (tsx), Python (Flask), React Native, PostgreSQL].",
      },
    },
  },
  {
    id: "amgv",
    icon: Rocket,
    color: "text-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    certificate: pnudCert,
    translations: {
      fr: {
        title: "Développeur Frontend – Plateforme AMGV",
        company: "PNUD Madagascar – Association des Maires des Grandes Villes",
        period: "Novembre 2024 - Mars 2025",
        description:
          "Participation à la conception et à l'intégration frontend d'une plateforme collaborative dans le cadre du Mois de l'Innovation à Fianarantsoa, puis de la Semaine d'Accélération à Antsirabe. React.js (tsx).",
      },
      en: {
        title: "Frontend Developer – AMGV Platform",
        company: "UNDP Madagascar – Association of Mayors of Major Cities",
        period: "November 2024 - March 2025",
        description:
          "Contributed to the design and frontend integration of a collaborative platform as part of the Innovation Month in Fianarantsoa, then the Acceleration Week in Antsirabe. React.js (tsx).",
      },
      de: {
        title: "Frontend-Entwickler – AMGV-Plattform",
        company: "UNDP Madagaskar – Verband der Bürgermeister der Großstädte",
        period: "November 2024 - März 2025",
        description:
          "Mitwirkung an Konzeption und Frontend-Integration einer kollaborativen Plattform im Rahmen des Innovationsmonats in Fianarantsoa und der Beschleunigungswoche in Antsirabe. React.js (tsx).",
      },
    },
  },
  {
    id: "qrcode-app",
    icon: Activity,
    color: "text-green-500",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600",
    translations: {
      fr: {
        title:
          "Application de gestion de présence et d'absence des élèves par scan de QR Code",
        company: "Lycée CPE Ambatomena Fianarantsoa",
        period: "Août 2024 - Octobre 2024",
        description:
          "Développement d'une application mobile et web permettant aux enseignants de gérer les présences des élèves via le scan de QR code [React.js (jsx), Node.js (Express.js), PostgreSQL, React Native (jsx)].",
      },
      en: {
        title:
          "Student attendance management application via QR code scanning",
        company: "CPE Ambatomena High School, Fianarantsoa",
        period: "August 2024 - October 2024",
        description:
          "Development of a mobile and web application allowing teachers to manage student attendance via QR code scanning [React.js (jsx), Node.js (Express.js), PostgreSQL, React Native (jsx)].",
      },
      de: {
        title:
          "Anwendung zur Anwesenheitsverwaltung von Schülern per QR-Code-Scan",
        company: "Gymnasium CPE Ambatomena, Fianarantsoa",
        period: "August 2024 - Oktober 2024",
        description:
          "Entwicklung einer mobilen und Web-Anwendung, mit der Lehrer die Anwesenheit der Schüler per QR-Code-Scan verwalten können [React.js (jsx), Node.js (Express.js), PostgreSQL, React Native (jsx)].",
      },
    },
  },
  {
    id: "stock-software",
    icon: Building2,
    color: "text-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    certificate: financeCert,
    translations: {
      fr: {
        title: "Développement d'un logiciel de gestion de stock",
        company:
          "Direction Générale du Budget et des Finances (Imprimerie Nationale)",
        period: "Août 2023 - Octobre 2023",
        description:
          "Création d'un système complet de gestion de stock avec React.js, Express.js et MySQL, permettant le suivi des entrées et sorties de produits.",
      },
      en: {
        title: "Development of inventory management software",
        company: "General Directorate of Budget and Finance (National Printing Office)",
        period: "August 2023 - October 2023",
        description:
          "Created a complete inventory management system with React.js, Express.js and MySQL, enabling tracking of product inflows and outflows.",
      },
      de: {
        title: "Entwicklung einer Lagerverwaltungssoftware",
        company: "Generaldirektion für Haushalt und Finanzen (Staatsdruckerei)",
        period: "August 2023 - Oktober 2023",
        description:
          "Erstellung eines vollständigen Lagerverwaltungssystems mit React.js, Express.js und MySQL zur Verfolgung von Wareneingängen und -ausgängen.",
      },
    },
  },
];

export const educations: EducationItem[] = [
  {
    id: "m2",
    icon: Rocket,
    color: "text-pink-500",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600",
    translations: {
      fr: {
        title: "Master 2 - Gouvernance et Ingénierie des Données (GID)",
        institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
        period: "2025 à Présent",
        description:
          "Master orienté en IA, big data, data science et gouvernance des données.",
      },
      en: {
        title: "Master's 2 - Data Governance and Engineering (GID)",
        institution: "National School of Computer Science Fianarantsoa (ENI)",
        period: "2025 to Present",
        description:
          "Master's program focused on AI, big data, data science and data governance.",
      },
      de: {
        title: "Master 2 - Datenverwaltung und -technik (GID)",
        institution: "Nationale Hochschule für Informatik Fianarantsoa (ENI)",
        period: "2025 bis heute",
        description:
          "Masterstudiengang mit Schwerpunkt auf KI, Big Data, Data Science und Datenverwaltung.",
      },
    },
  },
  {
    id: "robotics",
    icon: Brain,
    color: "text-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
    certificate: ODC_robot,
    translations: {
      fr: {
        title: "Formation en Robotique",
        institution: "Orange Digitale Center Fianarantsoa",
        period: "Novembre 2025",
        description:
          "Formation pratique en robotique axée sur l'électronique, la programmation de microcontrôleurs et la conception de projets robotiques innovants.",
        mention: "Formation certifiante",
      },
      en: {
        title: "Robotics Training",
        institution: "Orange Digital Center Fianarantsoa",
        period: "November 2025",
        description:
          "Hands-on robotics training focused on electronics, microcontroller programming and the design of innovative robotics projects.",
        mention: "Certified training",
      },
      de: {
        title: "Ausbildung in Robotik",
        institution: "Orange Digital Center Fianarantsoa",
        period: "November 2025",
        description:
          "Praktische Ausbildung in Robotik mit Schwerpunkt auf Elektronik, Mikrocontroller-Programmierung und der Entwicklung innovativer Robotikprojekte.",
        mention: "Zertifizierte Ausbildung",
      },
    },
  },
  {
    id: "m1",
    icon: Rocket,
    color: "text-pink-500",
    gradientFrom: "from-pink-500",
    gradientTo: "to-pink-600",
    transcript: releveM1Transcript,
    translations: {
      fr: {
        title: "Master 1 - Gouvernance et Ingénierie des Données (GID)",
        institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
        period: "2024 - 2025",
        description: "Master orienté en IA, big data et gouvernance des données.",
      },
      en: {
        title: "Master's 1 - Data Governance and Engineering (GID)",
        institution: "National School of Computer Science Fianarantsoa (ENI)",
        period: "2024 - 2025",
        description: "Master's program focused on AI, big data and data governance.",
      },
      de: {
        title: "Master 1 - Datenverwaltung und -technik (GID)",
        institution: "Nationale Hochschule für Informatik Fianarantsoa (ENI)",
        period: "2024 - 2025",
        description: "Masterstudiengang mit Schwerpunkt auf KI, Big Data und Datenverwaltung.",
      },
    },
  },
  {
    id: "datascience",
    icon: Brain,
    color: "text-cyan-500",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-600",
    certificate: ideaCert,
    translations: {
      fr: {
        title: "Formation Data Science",
        institution:
          "Idea Academy à l'Ecole Nationale d'Informatique Fianarantsoa (ENI)",
        period: "Août 2024",
        description:
          "Formation intensive en Data Science : analyse de données, machine learning et visualisation avec KNIME Platforme Analytics (Outils no-code).",
        mention: "Formation certifiante",
      },
      en: {
        title: "Data Science Training",
        institution:
          "Idea Academy at the National School of Computer Science Fianarantsoa (ENI)",
        period: "August 2024",
        description:
          "Intensive training in Data Science: data analysis, machine learning and visualization with the KNIME Analytics Platform (no-code tools).",
        mention: "Certified training",
      },
      de: {
        title: "Data-Science-Ausbildung",
        institution:
          "Idea Academy an der Nationalen Hochschule für Informatik Fianarantsoa (ENI)",
        period: "August 2024",
        description:
          "Intensive Ausbildung in Data Science: Datenanalyse, maschinelles Lernen und Visualisierung mit der KNIME Analytics Platform (No-Code-Tools).",
        mention: "Zertifizierte Ausbildung",
      },
    },
  },
  {
    id: "l3",
    icon: GraduationCap,
    color: "text-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
    transcript: releveL3Transcript,
    certificate: licenceCert,
    translations: {
      fr: {
        title: "Licence 3 en Informatique Générale (IG)",
        institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
        period: "2023 - 2024",
        description:
          "Licence en Informatique Générale, spécialisation Génie Logiciel et Bases de Données.",
        mention: "Mention Bien",
      },
      en: {
        title: "Bachelor's 3 in General Computer Science (IG)",
        institution: "National School of Computer Science Fianarantsoa (ENI)",
        period: "2023 - 2024",
        description:
          "Bachelor's degree in General Computer Science, specialization in Software Engineering and Databases.",
        mention: "Grade: Good",
      },
      de: {
        title: "Bachelor 3 in Allgemeiner Informatik (IG)",
        institution: "Nationale Hochschule für Informatik Fianarantsoa (ENI)",
        period: "2023 - 2024",
        description:
          "Bachelorstudium der Allgemeinen Informatik mit Spezialisierung auf Softwaretechnik und Datenbanken.",
        mention: "Note: Gut",
      },
    },
  },
  {
    id: "l2",
    icon: Code,
    color: "text-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
    transcript: releveL2Transcript,
    translations: {
      fr: {
        title: "Licence 2 en Informatique Générale (IG)",
        institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
        period: "2022 - 2023",
        description:
          "Approfondissement en développement logiciel, bases de données et algorithmique.",
      },
      en: {
        title: "Bachelor's 2 in General Computer Science (IG)",
        institution: "National School of Computer Science Fianarantsoa (ENI)",
        period: "2022 - 2023",
        description:
          "Deepened skills in software development, databases and algorithms.",
      },
      de: {
        title: "Bachelor 2 in Allgemeiner Informatik (IG)",
        institution: "Nationale Hochschule für Informatik Fianarantsoa (ENI)",
        period: "2022 - 2023",
        description:
          "Vertiefung in Softwareentwicklung, Datenbanken und Algorithmik.",
      },
    },
  },
  {
    id: "l1",
    icon: BookOpen,
    color: "text-green-500",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-600",
    transcript: releveL1Transcript,
    translations: {
      fr: {
        title: "Licence 1 en Informatique Générale (IG)",
        institution: "Ecole Nationale d'Informatique Fianarantsoa (ENI)",
        period: "2021 - 2022",
        description:
          "Fondamentaux de la programmation, des systèmes informatiques et des mathématiques appliquées.",
      },
      en: {
        title: "Bachelor's 1 in General Computer Science (IG)",
        institution: "National School of Computer Science Fianarantsoa (ENI)",
        period: "2021 - 2022",
        description:
          "Fundamentals of programming, computer systems and applied mathematics.",
      },
      de: {
        title: "Bachelor 1 in Allgemeiner Informatik (IG)",
        institution: "Nationale Hochschule für Informatik Fianarantsoa (ENI)",
        period: "2021 - 2022",
        description:
          "Grundlagen der Programmierung, Computersysteme und angewandten Mathematik.",
      },
    },
  },
  {
    id: "bac",
    icon: Award,
    color: "text-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    transcript: releveTranscript,
    certificate: bacCert,
    translations: {
      fr: {
        title: "Baccalauréat Série C",
        institution: "Lycée Saint François Xavier Ambatomena Fianarantsoa",
        period: "2020 - 2021",
        description:
          "Baccalauréat série C, bases solides en Mathématiques et Physique-Chimie.",
        mention: "Mention Assez-Bien",
      },
      en: {
        title: "High School Diploma - Science Track (Series C)",
        institution: "Saint François Xavier Ambatomena High School, Fianarantsoa",
        period: "2020 - 2021",
        description:
          "Science-focused Baccalaureate (Series C), solid foundations in Mathematics and Physics-Chemistry.",
        mention: "Grade: Fairly Good",
      },
      de: {
        title: "Abitur - Naturwissenschaftlicher Zweig (Reihe C)",
        institution: "Gymnasium Saint François Xavier Ambatomena, Fianarantsoa",
        period: "2020 - 2021",
        description:
          "Naturwissenschaftliches Abitur (Reihe C), solide Grundlagen in Mathematik und Physik-Chemie.",
        mention: "Note: Befriedigend",
      },
    },
  },
];