import {
  Code,
  Server,
  Database,
  Brain,
  BarChart3,
  Wrench,
  FolderKanban,
  Users,
} from "lucide-react";
import type { Language } from "../context/LanguageContext";

export interface Tech {
  name: string;
  grade: number;
}

export interface Comp {
  icon: typeof Code;
  title: string;
  techs: Tech[];
}

export const competences: Record<Language, Comp[]> = {
  fr: [
    {
      icon: Code,
      title: "Frontend",
      techs: [
        { name: "HTML / CSS / JS", grade: 80 },
        { name: "TypeScript", grade: 75 },
        { name: "React.js", grade: 80 },
        { name: "React Native", grade: 80 },
        { name: "Tailwind CSS", grade: 80 },
        { name: "Framer Motion", grade: 75 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      techs: [
        { name: "Node.js / Express", grade: 80 },
        { name: "Python / Flask", grade: 80 },
        { name: "Java / Spring Boot", grade: 60 },
        { name: "API REST", grade: 80 },
      ],
    },
    {
      icon: Database,
      title: "Bases de données",
      techs: [
        { name: "MySQL", grade: 80 },
        { name: "PostgreSQL", grade: 80 },
        { name: "MongoDB", grade: 60 },
        { name: "Merise / UML", grade: 80 },
      ],
    },
    {
      icon: Brain,
      title: "Data Science & IA",
      techs: [
        { name: "Pandas & NumPy", grade: 80 },
        { name: "Scikit-learn", grade: 80 },
        { name: "TensorFlow / Keras", grade: 75 },
        { name: "Matplotlib / Seaborn", grade: 80 },
        { name: "Nettoyage de données", grade: 80 },
        { name: "OpenAI API", grade: 75 },
        { name: "Ollama (LLM local)", grade: 70 },
      ],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      techs: [
        { name: "Power BI", grade: 60 },
        { name: "SQL avancé", grade: 80 },
        { name: "Tableaux de bord / KPI", grade: 75 },
        { name: "Analyse EDA", grade: 80 },
      ],
    },
    {
      icon: Wrench,
      title: "DevOps & Outils",
      techs: [
        { name: "Git / GitHub", grade: 80 },
        { name: "Docker", grade: 75 },
        { name: "Jenkins (CI/CD)", grade: 70 },
        { name: "SonarQube", grade: 70 },
        { name: "Nexus Registry", grade: 65 },
        { name: "Google Colab", grade: 80 },
        { name: "Anaconda", grade: 80 },
      ],
    },
    {
      icon: FolderKanban,
      title: "Gestion de projet",
      techs: [
        { name: "Agile / Scrum", grade: 80 },
        { name: "Kanban", grade: 75 },
        { name: "Clean Architecture", grade: 75 },
        { name: "MVC", grade: 80 },
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      techs: [
        { name: "Travail en équipe", grade: 85 },
        { name: "Communication", grade: 80 },
        { name: "Autonomie", grade: 85 },
        { name: "Adaptabilité", grade: 85 },
        { name: "Esprit critique", grade: 80 },
        { name: "Débogage & optimisation", grade: 80 },
      ],
    },
  ],
  en: [
    {
      icon: Code,
      title: "Frontend",
      techs: [
        { name: "HTML / CSS / JS", grade: 80 },
        { name: "TypeScript", grade: 75 },
        { name: "React.js", grade: 80 },
        { name: "React Native", grade: 80 },
        { name: "Tailwind CSS", grade: 80 },
        { name: "Framer Motion", grade: 75 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      techs: [
        { name: "Node.js / Express", grade: 80 },
        { name: "Python / Flask", grade: 80 },
        { name: "Java / Spring Boot", grade: 60 },
        { name: "REST API", grade: 80 },
      ],
    },
    {
      icon: Database,
      title: "Databases",
      techs: [
        { name: "MySQL", grade: 80 },
        { name: "PostgreSQL", grade: 80 },
        { name: "MongoDB", grade: 60 },
        { name: "Merise / UML", grade: 80 },
      ],
    },
    {
      icon: Brain,
      title: "Data Science & AI",
      techs: [
        { name: "Pandas & NumPy", grade: 80 },
        { name: "Scikit-learn", grade: 80 },
        { name: "TensorFlow / Keras", grade: 75 },
        { name: "Matplotlib / Seaborn", grade: 80 },
        { name: "Data cleaning", grade: 80 },
        { name: "OpenAI API", grade: 75 },
        { name: "Ollama (local LLM)", grade: 70 },
      ],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      techs: [
        { name: "Power BI", grade: 60 },
        { name: "Advanced SQL", grade: 80 },
        { name: "Dashboards / KPIs", grade: 75 },
        { name: "EDA Analysis", grade: 80 },
      ],
    },
    {
      icon: Wrench,
      title: "DevOps & Tools",
      techs: [
        { name: "Git / GitHub", grade: 80 },
        { name: "Docker", grade: 75 },
        { name: "Jenkins (CI/CD)", grade: 70 },
        { name: "SonarQube", grade: 70 },
        { name: "Nexus Registry", grade: 65 },
        { name: "Google Colab", grade: 80 },
        { name: "Anaconda", grade: 80 },
      ],
    },
    {
      icon: FolderKanban,
      title: "Project Management",
      techs: [
        { name: "Agile / Scrum", grade: 80 },
        { name: "Kanban", grade: 75 },
        { name: "Clean Architecture", grade: 75 },
        { name: "MVC", grade: 80 },
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      techs: [
        { name: "Teamwork", grade: 85 },
        { name: "Communication", grade: 80 },
        { name: "Autonomy", grade: 85 },
        { name: "Adaptability", grade: 85 },
        { name: "Critical thinking", grade: 80 },
        { name: "Debugging & optimization", grade: 80 },
      ],
    },
  ],
  de: [
    {
      icon: Code,
      title: "Frontend",
      techs: [
        { name: "HTML / CSS / JS", grade: 80 },
        { name: "TypeScript", grade: 75 },
        { name: "React.js", grade: 80 },
        { name: "React Native", grade: 80 },
        { name: "Tailwind CSS", grade: 80 },
        { name: "Framer Motion", grade: 75 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      techs: [
        { name: "Node.js / Express", grade: 80 },
        { name: "Python / Flask", grade: 80 },
        { name: "Java / Spring Boot", grade: 60 },
        { name: "REST-API", grade: 80 },
      ],
    },
    {
      icon: Database,
      title: "Datenbanken",
      techs: [
        { name: "MySQL", grade: 80 },
        { name: "PostgreSQL", grade: 80 },
        { name: "MongoDB", grade: 60 },
        { name: "Merise / UML", grade: 80 },
      ],
    },
    {
      icon: Brain,
      title: "Data Science & KI",
      techs: [
        { name: "Pandas & NumPy", grade: 80 },
        { name: "Scikit-learn", grade: 80 },
        { name: "TensorFlow / Keras", grade: 75 },
        { name: "Matplotlib / Seaborn", grade: 80 },
        { name: "Datenbereinigung", grade: 80 },
        { name: "OpenAI API", grade: 75 },
        { name: "Ollama (lokales LLM)", grade: 70 },
      ],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      techs: [
        { name: "Power BI", grade: 60 },
        { name: "Fortgeschrittenes SQL", grade: 80 },
        { name: "Dashboards / KPIs", grade: 75 },
        { name: "EDA-Analyse", grade: 80 },
      ],
    },
    {
      icon: Wrench,
      title: "DevOps & Tools",
      techs: [
        { name: "Git / GitHub", grade: 80 },
        { name: "Docker", grade: 75 },
        { name: "Jenkins (CI/CD)", grade: 70 },
        { name: "SonarQube", grade: 70 },
        { name: "Nexus Registry", grade: 65 },
        { name: "Google Colab", grade: 80 },
        { name: "Anaconda", grade: 80 },
      ],
    },
    {
      icon: FolderKanban,
      title: "Projektmanagement",
      techs: [
        { name: "Agile / Scrum", grade: 80 },
        { name: "Kanban", grade: 75 },
        { name: "Clean Architecture", grade: 75 },
        { name: "MVC", grade: 80 },
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      techs: [
        { name: "Teamarbeit", grade: 85 },
        { name: "Kommunikation", grade: 80 },
        { name: "Selbstständigkeit", grade: 85 },
        { name: "Anpassungsfähigkeit", grade: 85 },
        { name: "Kritisches Denken", grade: 80 },
        { name: "Debugging & Optimierung", grade: 80 },
      ],
    },
  ],
};