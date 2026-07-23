import php from "../assets/project/php.png";
import cpe1 from "../assets/project/cpe/cpe_1.png";
import cpe2 from "../assets/project/cpe/cpe_2.png";
import cpe3 from "../assets/project/cpe/cpe_3.png";
import fete1 from "../assets/project/fete/fete_1.png";
import fete2 from "../assets/project/fete/fete_2.png";
import portfolio1 from "../assets/project/portfolio/portfolio1.png";
import portfolio2 from "../assets/project/portfolio/portfolio2.png";
import finance1 from "../assets/project/finance/finance1.png";
import finance2 from "../assets/project/finance/finance2.png";
import grossiste1 from "../assets/project/grossiste/grossiste_1.png";
import grossiste2 from "../assets/project/grossiste/grossiste_2.png";
import grossiste3 from "../assets/project/grossiste/grossiste_3.png";
import immo1 from "../assets/project/immo/1Immo.png";
import immo2 from "../assets/project/immo/2Immo.png";
import immo3 from "../assets/project/immo/3immo.png";
import immo4 from "../assets/project/immo/4immo.png";
import chatbot1 from "../assets/project/chatbot/chatbot1.jpg";
import chatbot2 from "../assets/project/chatbot/chatbot2.jpg";
import chatbot3 from "../assets/project/chatbot/chatbot3.jpg";
import chatbot4 from "../assets/project/chatbot/chatbot4.jpg";
import type { Project } from "../types/project";

// Le stack, les images et les liens sont identiques quelle que soit la langue
export const projects: Project[] = [
  {
    id: "chatbot-nlp",
    stack: ["React.js (tsx)", "Tailwind CSS", "Flask", "MongoDB", "TF-IDF", "SVM", "BM-25"],
    images: [chatbot1, chatbot2, chatbot3, chatbot4],
    github: "https://github.com/momode12/Int_mod",
    demo: "https://huggingface.co/spaces/heritiana2026/chatbot-medical-demo",
    translations: {
      fr: {
        title: "Chatbot intelligent NLP",
        desc: "Application web chatbot inteligent en Malagasy dans le domaine de santé.",
      },
      en: {
        title: "Intelligent NLP Chatbot",
        desc: "Intelligent chatbot web application in Malagasy for the healthcare domain.",
      },
      de: {
        title: "Intelligenter NLP-Chatbot",
        desc: "Intelligente Chatbot-Webanwendung auf Malagasy im Gesundheitsbereich.",
      },
    },
  },
  {
    id: "immo-mada",
    stack: ["React.js", "Tailwind CSS", "Flask", "MongoDB", "Scikit-learn", "Google Colab", "Random Forest"],
    images: [immo1, immo2, immo3, immo4],
    github: "https://github.com/momode12/prediction_de_prix",
    demo: "https://huggingface.co/spaces/heritiana2026/prediction_de_prix_immobilier",
    translations: {
      fr: {
        title: "Estimateur de Prix Immobilier IA – Madagascar",
        desc: "Prédiction de prix immobiliers pour le marché malgache via un modèle Random Forest.",
      },
      en: {
        title: "AI Real Estate Price Estimator – Madagascar",
        desc: "Real estate price prediction for the Malagasy market using a Random Forest model.",
      },
      de: {
        title: "KI-Immobilienpreisschätzer – Madagaskar",
        desc: "Vorhersage von Immobilienpreisen für den madagassischen Markt mit einem Random-Forest-Modell.",
      },
    },
  },
  {
    id: "gestion-vente",
    stack: ["React.js(tsx)", "Tailwind CSS", "Flask", "PostgreSQL"],
    images: [grossiste1, grossiste2, grossiste3],
    github: "https://github.com/momode12/Grossiste_PPN",
    demo: "https://vente-pi.vercel.app/",
    translations: {
      fr: {
        title: "Gestion de vente",
        desc: "Application web pour la gestion de stock et de ventes dans un grossiste PPN à Mananjary.",
      },
      en: {
        title: "Sales Management",
        desc: "Web application for stock and sales management at a PPN wholesaler in Mananjary.",
      },
      de: {
        title: "Verkaufsverwaltung",
        desc: "Webanwendung zur Lager- und Verkaufsverwaltung für einen PPN-Großhändler in Mananjary.",
      },
    },
  },
  {
    id: "gestion-evenement",
    stack: ["React.js(tsx)", "React Native", "Tailwind CSS", "Flask", "PostgreSQL"],
    images: [fete1, fete2],
    github: "https://github.com/momode12/Gestion_evenement",
    demo: "https://youtu.be/93BpuWzdH8U",
    translations: {
      fr: {
        title: "Gestion d'événement",
        desc: "Application web et mobile pour la gestion d'événements pour gérer les paiements, l'entrée et sortie des invités ou des clients par scan de QR code.",
      },
      en: {
        title: "Event Management",
        desc: "Web and mobile application for event management, handling payments and guest or customer entry/exit via QR code scanning.",
      },
      de: {
        title: "Veranstaltungsverwaltung",
        desc: "Web- und mobile Anwendung zur Veranstaltungsverwaltung, zur Abwicklung von Zahlungen sowie Ein- und Ausgang von Gästen oder Kunden per QR-Code-Scan.",
      },
    },
  },
  {
    id: "portfolio",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: [portfolio1, portfolio2],
    github: "https://github.com/momode12/portfolio",
    demo: "https://youtu.be/mngjxN3l8dc",
    translations: {
      fr: {
        title: "Mon portfolio",
        desc: "Portfolio personnel présentant mon parcours, mes compétences, mes projets et mes expériences académiques et professionnelles.",
      },
      en: {
        title: "My Portfolio",
        desc: "Personal portfolio showcasing my background, skills, projects, and academic and professional experience.",
      },
      de: {
        title: "Mein Portfolio",
        desc: "Persönliches Portfolio mit meinem Werdegang, meinen Fähigkeiten, Projekten sowie akademischen und beruflichen Erfahrungen.",
      },
    },
  },
  {
    id: "cpe-ambatomena",
    stack: ["React.js", "React Native", "Express.js", "PostgreSQL"],
    images: [cpe1, cpe2, cpe3],
    github: "https://github.com/momode12/QR_code",
    demo: "https://youtu.be/XMRRvtrTqr8",
    translations: {
      fr: {
        title: "Gestion de Présence et d'Absence des élèves (CPE Ambatomena)",
        desc: "Projet de stage en L3 : application de suivi des présences des étudiants via scan de QR code.",
      },
      en: {
        title: "Student Attendance Management (CPE Ambatomena)",
        desc: "L3 internship project: student attendance tracking application via QR code scanning.",
      },
      de: {
        title: "Anwesenheitsverwaltung der Schüler (CPE Ambatomena)",
        desc: "Praktikumsprojekt in L3: Anwendung zur Anwesenheitsverfolgung der Schüler per QR-Code-Scan.",
      },
    },
  },
  {
    id: "stock-dgbf",
    stack: ["React", "Express.js", "MySQL"],
    images: [finance1, finance2],
    github: "https://github.com/momode12/Gestion_de_stock_DGBF",
    demo: "https://youtu.be/WIud454PejA",
    translations: {
      fr: {
        title: "Gestion de Stock de l'Imprimerie Nationale",
        desc: "Projet de stage en L2 : Application web pour les stocks, les clients et les ventes de l'Imprimerie Nationale.",
      },
      en: {
        title: "National Printing Office Inventory Management",
        desc: "L2 internship project: web application for inventory, customers, and sales at the National Printing Office.",
      },
      de: {
        title: "Lagerverwaltung der Staatsdruckerei",
        desc: "Praktikumsprojekt in L2: Webanwendung für Lager, Kunden und Verkäufe der Staatsdruckerei.",
      },
    },
  },
  {
    id: "gestion-soutenance",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    images: [php],
    github: "https://github.com/momode12/PHP",
    demo: "https://youtu.be/2-bLhJ5stz0",
    translations: {
      fr: {
        title: "Gestion de Soutenance",
        desc: "Application web permettant de gérer les soutenances, les étudiants et les organismes.",
      },
      en: {
        title: "Thesis Defense Management",
        desc: "Web application for managing thesis defenses, students, and organizations.",
      },
      de: {
        title: "Verteidigungsverwaltung",
        desc: "Webanwendung zur Verwaltung von Abschlussverteidigungen, Studierenden und Institutionen.",
      },
    },
  },
];