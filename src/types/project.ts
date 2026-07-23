import type { Language } from "./common";

export interface ProjectTranslation {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  stack: string[];
  images: string[];
  github: string;
  demo: string;
  translations: Record<Language, ProjectTranslation>;
}