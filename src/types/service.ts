import type { Language } from "./common";

export interface ServiceTranslation {
  title: string;
  description: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  icon: React.ElementType;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  translations: Record<Language, ServiceTranslation>;
}