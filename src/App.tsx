import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Apropos from "./components/Apropos";
import Competences from "./components/Competences";
import Experience from "./components/Experience";
import Projets from "./components/Projets";
import Service from "./components/Service";
import ParticlesBackground from "./components/ParticlesBackground";
import NotFound from "./pages/NotFoundPage";

const SECTIONS = [
  "accueil",
  "apropos",
  "projet",
  "competence",
  "experience",
  "service",
  "footer",
];

/** Vérifie si le hash actuel est une route inconnue */
const isUnknownHash = () => {
  const hash = window.location.hash.replace("#", "");
  // Hash vide = accueil = OK
  // Hash connu = OK
  // Hash inconnu = 404
  return hash !== "" && !SECTIONS.includes(hash);
};

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [activeSection, setActiveSection] = useState("accueil");
  const [notFound, setNotFound] = useState(isUnknownHash);

  const sectionClass = "mt-[-20px] pt-[20px]";

  /** ============================
   *  ÉCOUTE DES CHANGEMENTS DE HASH
   *  (navigation bouton retour/suivant)
   * ============================ */
  useEffect(() => {
    const handleHashChange = () => {
      setNotFound(isUnknownHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  /** ============================
   *  SCROLL → met à jour le hash
   * ============================ */
  useEffect(() => {
    if (notFound) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of SECTIONS) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          if (activeSection !== sectionId) {
            setActiveSection(sectionId);
            history.replaceState(null, "", `#${sectionId}`);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, notFound]);

  /** ============================
   *  HASH → scroll à l'arrivée
   * ============================ */
  useEffect(() => {
    if (notFound) return;
    const hash = window.location.hash.replace("#", "");
    if (hash && SECTIONS.includes(hash)) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [notFound]);

  /** ============================
   *  DARK MODE
   * ============================ */
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  /** ============================
   *  AFFICHE 404 si hash inconnu
   * ============================ */
  if (notFound) {
    return (
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
          <NotFound />
        </div>
      </div>
    );
  }

  /** ============================
   *  RENDER NORMAL
   * ============================ */
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ParticlesBackground darkMode={darkMode} />

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />

      <main className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <section id="accueil" className={sectionClass}>
          <About darkMode={darkMode} />
        </section>

        <section id="apropos" className={sectionClass}>
          <Apropos darkMode={darkMode} />
        </section>

        <section id="projet" className={sectionClass}>
          <Projets darkMode={darkMode} />
        </section>

        <section id="competence" className={sectionClass}>
          <Competences darkMode={darkMode} />
        </section>

        <section id="experience" className={sectionClass}>
          <Experience darkMode={darkMode} />
        </section>

        <section id="service" className={sectionClass}>
          <Service darkMode={darkMode} />
        </section>

        <section id="footer" className={sectionClass}>
          <Footer darkMode={darkMode} />
        </section>
      </main>
    </div>
  );
};

export default App;