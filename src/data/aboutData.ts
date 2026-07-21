import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import type { ComponentType } from "react";
import type { Language } from "../context/LanguageContext";

export interface SocialLink {
  icon: ComponentType;
  url: string;
  color: string;
}

interface AboutTexts {
  name: string;
  surname: string;
  imageAlt: string;
  badges: {
    student: string;
    developer: string;
  };
  description: {
    intro: string;
    fullStack: string;
    dataEngineering: string;
    middle: string;
    specializations: {
      software: string;
      dataEng: string;
      ai: string;
    };
  };
  buttons: {
    downloadCV: string;
    learnMore: string;
    aboutPath: string;
  };
}

// Textes et labels traduits
export const aboutTexts: Record<Language, AboutTexts> = {
  fr: {
    name: "HERITIANA",
    surname: "Julien",
    imageAlt: "HERITIANA Julien",
    badges: {
      student: "Étudiant à l'ENI Fianarantsoa",
      developer: "Développeur Full Stack/IA",
    },
    description: {
      intro: "Étudiant en Intelligence Artificielle combinant",
      fullStack: "développement web full-stack",
      dataEngineering: "science des données",
      middle: "Je m'attache à produire des solutions techniques élégantes et performantes, avec une spécialisation en",
      specializations: {
        software: "Génie Logiciel",
        dataEng: "Data Engineering",
        ai: "Intelligence Artificielle",
      },
    },
    buttons: {
      downloadCV: "Télécharger mon CV",
      learnMore: "En savoir plus",
      aboutPath: "/apropos",
    },
  },
  en: {
    name: "HERITIANA",
    surname: "Julien",
    imageAlt: "HERITIANA Julien",
    badges: {
      student: "Student at ENI Fianarantsoa",
      developer: "Full Stack/AI Developer",
    },
    description: {
      intro: "Artificial Intelligence student combining",
      fullStack: "full-stack web development",
      dataEngineering: "data science",
      middle: "I focus on building elegant and high-performing technical solutions, with a specialization in",
      specializations: {
        software: "Software Engineering",
        dataEng: "Data Engineering",
        ai: "Artificial Intelligence",
      },
    },
    buttons: {
      downloadCV: "Download my CV",
      learnMore: "Learn more",
      aboutPath: "/about",
    },
  },
  de: {
    name: "HERITIANA",
    surname: "Julien",
    imageAlt: "HERITIANA Julien",
    badges: {
      student: "Student an der ENI Fianarantsoa",
      developer: "Full-Stack-/KI-Entwickler",
    },
    description: {
      intro: "Student der Künstlichen Intelligenz mit Schwerpunkt",
      fullStack: "Full-Stack-Webentwicklung",
      dataEngineering: "Data Science",
      middle: "Ich lege Wert auf elegante und leistungsstarke technische Lösungen, mit einer Spezialisierung in",
      specializations: {
        software: "Softwaretechnik",
        dataEng: "Data Engineering",
        ai: "Künstliche Intelligenz",
      },
    },
    buttons: {
      downloadCV: "Lebenslauf herunterladen",
      learnMore: "Mehr erfahren",
      aboutPath: "/ueber-mich",
    },
  },
};

// Expertises pour le typewriter
export const expertises: Record<Language, string[]> = {
  fr: [
    "Développement web full-stack efficace",
    "Ingénierie et valorisation des données",
    "Solutions intelligentes avec IA avancée",
  ],
  en: [
    "Efficient full-stack web development",
    "Data engineering and data valorization",
    "Smart solutions with advanced AI",
  ],
  de: [
    "Effiziente Full-Stack-Webentwicklung",
    "Data Engineering und Datenaufbereitung",
    "Intelligente Lösungen mit fortschrittlicher KI",
  ],
};

// Liens sociaux (identiques dans toutes les langues)
export const socialLinks: SocialLink[] = [
  { icon: FaFacebookF, url: "https://www.facebook.com/HeritianaJuli", color: "#1877F2" },
  { icon: FaWhatsapp, url: "https://wa.me/0344092549", color: "#25D366" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/heritiana-julien-0a0132358/", color: "#0A66C2" },
  { icon: FaInstagram, url: "https://www.instagram.com/heritiana586/", color: "#E1306C" },
  { icon: FaGithub, url: "https://github.com/momode12", color: "#181717" },
  { icon: FaTwitter, url: "https://x.com/Heritiana586", color: "#1DA1F2" },
];