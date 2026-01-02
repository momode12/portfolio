import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { navbarLinks, navbarConfig } from "../data/navbarData";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  activeSection,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const firstMenuItemRef = useRef<HTMLButtonElement>(null);

  // Verrouillage du scroll quand le menu mobile est ouvert (compatible iOS/Android)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      // Focus sur le premier item pour l'accessibilité
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);

  // Scroll fluide vers une section avec compensation de la hauteur de la navbar
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="w-full bg-white dark:bg-gray-800 shadow-md fixed top-0 z-50 transition-colors duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-lg sm:text-xl font-bold flex items-center cursor-pointer select-none"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          onClick={() => scrollToSection("accueil")}
          tabIndex={0}
          role="button"
          aria-label="Aller à l'accueil"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") scrollToSection("accueil");
          }}
        >
          <span className="text-black dark:text-white">
            {navbarConfig.logo.firstName}
          </span>
          <span className="ml-2 text-green-600 dark:text-green-400">
            {navbarConfig.logo.lastName}
          </span>
        </motion.div>

        {/* Menu Desktop */}
        <motion.ul
          className="hidden md:flex items-center space-x-4 lg:space-x-6 text-gray-700 dark:text-gray-300 font-medium"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {navbarLinks.map((link) => (
            <motion.li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`
                  px-3 py-2 rounded-lg transition duration-200
                  ${
                    activeSection === link.id
                      ? "bg-gray-200 dark:bg-gray-700 text-green-600 dark:text-green-400 font-semibold"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400"
                  }
                `}
              >
                {link.name}
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Boutons Desktop */}
        <motion.div
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* Dark Mode avec Tooltip */}
          <div className="relative">
            <button
              onClick={toggleDarkMode}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              aria-label={darkMode ? navbarConfig.tooltips.lightMode : navbarConfig.tooltips.darkMode}
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>

            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded-lg whitespace-nowrap shadow-lg z-50"
                >
                  {darkMode ? navbarConfig.tooltips.lightMode : navbarConfig.tooltips.darkMode}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-700 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => scrollToSection("footer")}
            className="px-5 py-2.5 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold rounded-lg transition"
          >
            {navbarConfig.buttons.contact}
          </button>
        </motion.div>

        {/* Boutons Mobile : Dark Mode + Menu Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark Mode Mobile */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            aria-label={darkMode ? navbarConfig.tooltips.lightMode : navbarConfig.tooltips.darkMode}
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
          </button>

          {/* Icône Menu Hamburger / Croix */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label={menuOpen ? navbarConfig.tooltips.closeMenu : navbarConfig.tooltips.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-4 sm:px-6 py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300 font-medium">
              {navbarLinks.map((link, index) => (
                <li key={link.id}>
                  <button
                    ref={index === 0 ? firstMenuItemRef : null}
                    onClick={() => scrollToSection(link.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition
                      ${
                        activeSection === link.id
                          ? "bg-gray-200 dark:bg-gray-700 text-green-600 dark:text-green-400 font-semibold"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      }
                    `}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection("footer")}
                  className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-semibold rounded-lg transition"
                >
                  {navbarConfig.buttons.contact}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;