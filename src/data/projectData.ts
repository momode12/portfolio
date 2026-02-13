import php from "../assets/project/php.png";
import cpe1 from "../assets/project/cpe_1.png";
import cpe2 from "../assets/project/cpe_2.png";
import cpe3 from "../assets/project/cpe_3.png";
import fete1 from "../assets/project/fete_1.png";
import fete2 from "../assets/project/fete_2.png";
import portfolio1 from "../assets/project/portfolio1.png";
import portfolio2 from "../assets/project/portfolio2.png";
import finance1 from "../assets/project/finance1.png";
import finance2 from "../assets/project/finance2.png";
import grossite1 from "../assets/project/grossite_1.png";
import grossite2 from "../assets/project/grossite_2.png";
import grossite3 from "../assets/project/grossite_3.png";

export interface Project {
  title: string;
  desc: string;
  stack: string[];
  images: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
    {
    title: "Gestion de vente",
    desc: "Application web pour la gestion de stock et de ventes dans un frossiste PPN à Mananjary.",
    stack: ["React.js(tsx)","Tailwind CSS", "Flask", "PostgreSQL"],
    images: [grossite1, grossite2, grossite3],
    github: "https://github.com/momode12/Grossiste_PPN",
    demo: "https://vente-pi.vercel.app/",
  },
  {
    title: "Gestion d'événement",
    desc: "Application web et mobile pour la gestion d’événements pour gérer les paiements, l'entrée et sortie des invités ou des clients par scan de QR code.",
    stack: ["React.js(tsx)", "React Native", "Tailwind CSS", "Flask", "PostgreSQL"],
    images: [fete1, fete2],
    github: "https://github.com/momode12/Gestion_evenement",
    demo: "https://youtu.be/93BpuWzdH8U",
  },
    {
    title: "Mon portfolio",
    desc: "Portfolio personnel présentant mon parcours, mes compétences, mes projets et mes expériences académiques et professionnelles.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: [portfolio1, portfolio2],
    github: "https://github.com/momode12/portfolio",
    demo: "https://youtu.be/mngjxN3l8dc",
  },

    {
    title: "Gestion de Présence et d’Absence des élèves (CPE Ambatomena)",
    desc: "Projet de stage en L3 : application de suivi des présences des étudiants via scan de QR code.",
    stack: ["React.js", "React Native", "Express.js", "PostgreSQL"],
    images: [cpe1, cpe2, cpe3],
    github: "https://github.com/momode12/QR_code",
    demo: "https://youtu.be/XMRRvtrTqr8",
  },
    {
    title: "Gestion de Stock de l'Imprimerie Nationale",
    desc: "Projet de stage en L2 : Application web pour les stocks, les clients et les ventes de l’Imprimerie Nationale.",
    stack: ["React", "Express.js", "MySQL"],
    images: [finance1, finance2],
    github: "https://github.com/momode12/Gestion_de_stock_DGBF",
    demo: "https://youtu.be/WIud454PejA",
  },
  {
    title: "Gestion de Soutenance",
    desc: "Application web permettant de gérer les soutenances, les étudiants etles organismes.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    images: [php],
    github: "https://github.com/momode12/PHP",
    demo: "https://youtu.be/2-bLhJ5stz0",
  },


  

];
