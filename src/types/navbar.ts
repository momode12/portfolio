export interface NavbarLink {
  id: string;   // correspond à l'id de la section
  name: string; // nom affiché dans la Navbar
}

export interface NavbarConfig {
  logo: {
    firstName: string;
    lastName: string;
  };
  buttons: {
    contact: string;
  };
  tooltips: {
    darkMode: string;
    lightMode: string;
    openMenu: string;
    closeMenu: string;
  };
}