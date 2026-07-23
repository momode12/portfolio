import type { Language } from "./common";

export interface ExperienceTranslation {
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

export interface EducationTranslation {
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