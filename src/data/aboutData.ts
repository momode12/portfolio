import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import type { ComponentType } from "react";

export interface SocialLink {
  icon: ComponentType;
  url: string;
  color: string;
}

// Textes et labels
export const aboutTexts = {
  name: "HERITIANA",
  surname: "Julien",
  imageAlt: "HERITIANA Julien",
  
  // Badges
  badges: {
    student: "Étudiant à l'ENI Fianarantsoa",
    developer: "Développeur Full Stack",
  },
  
  // Description principale
  description: {
    intro: "Étudiant en informatique combinant",
    fullStack: "développement web full-stack",
    dataEngineering: "ingénierie des données",
    middle: "Je m'attache à produire des solutions techniques élégantes et performantes, avec une spécialisation en",
    specializations: {
      dataEng: "Data Engineering",
      ai: "Intelligence Artificielle",
      software: "Génie Logiciel",
    },
  },
  
buttons: {
    downloadCV: "Télécharger mon CV",
    learnMore: "En savoir plus",
    aboutPath: "/apropos", // 👈 Ajoutez cette ligne
  },
};

// Expertises pour le typewriter
export const expertises: string[] = [
  "Développement web full-stack efficace",
  "Ingénierie et valorisation des données",
  "Solutions intelligentes avec IA avancée",
];

// Liens sociaux
export const socialLinks: SocialLink[] = [
  { icon: FaFacebookF, url: "https://www.facebook.com/HeritianaJuli", color: "#1877F2" },
  { icon: FaWhatsapp, url: "https://wa.me/0344092549", color: "#25D366" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/heritiana-julien-0a0132358/", color: "#0A66C2" },
  { icon: FaInstagram, url: "https://www.instagram.com/heritiana586/", color: "#E1306C" },
  { icon: FaGithub, url: "https://github.com/momode12", color: "#181717" },
  { icon: FaTwitter, url: "https://x.com/Heritiana586", color: "#1DA1F2" },
];