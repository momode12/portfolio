// src/data/navbarData.ts
export interface NavbarLink {
  id: string;   // correspond à l'id de la section
  name: string; // nom affiché dans la Navbar
}

export const navbarLinks: NavbarLink[] = [
  { id: "accueil", name: "Accueil" },
  { id: "apropos", name: "À propos" },
  { id: "projet", name: "Projets" },
  { id: "competence", name: "Compétences" },
  { id: "experience", name: "Expérience" },
  { id: "service", name: "Service" },
];

export const navbarConfig = {
  logo: {
    firstName: "HERITIANA",
    lastName: "Julienbb",
  },
  buttons: {
    contact: "Contacter",
  },
  tooltips: {
    darkMode: "Mode sombre",
    lightMode: "Mode clair",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
};