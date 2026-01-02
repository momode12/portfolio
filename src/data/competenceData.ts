import { Code, Smartphone, Database, Wrench, Users, FolderKanban, BarChart3, Brain } from "lucide-react";

// Typages
export interface Tech {
  name: string;
  grade: number; // 0 à 100
}

export interface Comp {
  icon: typeof Code; // type des icônes lucide-react
  title: string;
  techs: Tech[];
}

// Données des compétences
export const competences: Comp[] = [
  {
    icon: Code,
    title: "Frontend",
    techs: [
       { name: "HTML, CSS et JavaScript", grade: 80 },
      { name: "React.js (tsx/jsx)", grade: 80 },
      { name: "React Native", grade: 80 },    
      { name: "Tailwind CSS avec Framer-motion", grade: 80 },
    ],
  },
  {
    icon: Smartphone,
    title: "Backend",
    techs: [
      { name: "Node.js (Express.js)", grade: 80 },
      { name: "Java (Spring Boot)", grade: 60 },
      { name: "Python (Flask)", grade: 80 },
    ],
  },
  {
    icon: Database,
    title: "Bases de données",
    techs: [
      { name: "MySQL", grade: 80 },    
      { name: "MongoDB", grade: 60 },
      { name: "PostgreSQL", grade: 80 },
    ],
  },
  {
    icon: Wrench,
    title: "Outils",
    techs: [
      { name: "Git", grade: 80 },
      { name: "Pandas", grade: 80 },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    techs: [
      { name: "Travail en équipe", grade: 85 },
      { name: "Communication efficace", grade: 80 },
      { name: "Autonomie", grade: 85 },
      { name: "Adaptabilité", grade: 85 },
    ],
  },
  {
    icon: FolderKanban,
    title: "Gestion de projet",
    techs: [
      { name: "Méthodologie Agile / Scrum", grade: 80 },
      { name: "GitHub / Trello", grade: 80 },
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Analyse",
    techs: [
      { name: "SQL avancé", grade: 80 },
      { name: "Python (ML/DL)", grade: 80 },
      { name: "Visualisation (Power BI)", grade: 60 },
      { name: "Nettoyage de données", grade: 80 },
    ],
  },
  {
    icon: Brain,
    title: "Résolution de problèmes",
    techs: [
      { name: "Esprit d'analyse", grade: 80 },
      { name: "Pensée critique", grade: 80 },
      { name: "Débogage et optimisation", grade: 80 },
      { name: "Sens de l'organisation", grade: 80 },
    ],
  },
];