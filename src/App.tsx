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

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  /** ============================
   *  CLASSE COMMUNE POUR SECTIONS
   * ============================ */
  const sectionClass = "mt-[-20px] pt-[20px]";

  /** ============================
   *  DÉTECTION DU SCROLL (SANS URL)
   * ============================ */
  useEffect(() => {
    const sections = [
      "accueil",
      "apropos",
      "projet",
      "competence",
      "experience",
      "service",
      "footer",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** ============================
   *  DARK MODE
   * ============================ */
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  /** ============================
   *  RENDER
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
