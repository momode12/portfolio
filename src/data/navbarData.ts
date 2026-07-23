import type { NavbarLink, NavbarConfig } from "../types/navbar";

export const navbarLinks: Record<"fr" | "en" | "de", NavbarLink[]> = {
  fr: [
    { id: "accueil", name: "Accueil" },
    { id: "apropos", name: "À propos" },
    { id: "projet", name: "Projets" },
    { id: "competence", name: "Compétences" },
    { id: "experience", name: "Expérience" },
    { id: "service", name: "Service" },
  ],
  en: [
    { id: "accueil", name: "Home" },
    { id: "apropos", name: "About" },
    { id: "projet", name: "Projects" },
    { id: "competence", name: "Skills" },
    { id: "experience", name: "Experience" },
    { id: "service", name: "Services" },
  ],
  de: [
    { id: "accueil", name: "Start" },
    { id: "apropos", name: "Über mich" },
    { id: "projet", name: "Projekte" },
    { id: "competence", name: "Fähigkeiten" },
    { id: "experience", name: "Erfahrung" },
    { id: "service", name: "Dienstleistungen" },
  ],
};

export const navbarConfig: Record<"fr" | "en" | "de", NavbarConfig> = {
  fr: {
    logo: { firstName: "HERITIANA", lastName: "Julien" },
    buttons: { contact: "Contacter" },
    tooltips: {
      darkMode: "Mode sombre",
      lightMode: "Mode clair",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
  },
  en: {
    logo: { firstName: "HERITIANA", lastName: "Julien" },
    buttons: { contact: "Contact" },
    tooltips: {
      darkMode: "Dark mode",
      lightMode: "Light mode",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
  },
  de: {
    logo: { firstName: "HERITIANA", lastName: "Julien" },
    buttons: { contact: "Kontakt" },
    tooltips: {
      darkMode: "Dunkler Modus",
      lightMode: "Heller Modus",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
  },
};