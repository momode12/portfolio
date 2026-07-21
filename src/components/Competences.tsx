import React from "react";
import { motion } from "framer-motion";
import { competences } from "../data/competenceData";
import type { Comp } from "../data/competenceData";
import { useLanguage } from "../context/LanguageContext";
import { Sparkles } from "lucide-react";

interface CompetenceProps {
  darkMode: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const sectionTexts: Record<string, { titleBefore: string; titleHighlight: string; subtitle: string; footerBadge: string }> = {
  fr: {
    titleBefore: "Mes",
    titleHighlight: "Compétences",
    subtitle: "Aperçu de mes compétences techniques et outils, avec mon niveau de maîtrise.",
    footerBadge: "En amélioration continue — toujours à jour sur les nouvelles technologies.",
  },
  en: {
    titleBefore: "My",
    titleHighlight: "Skills",
    subtitle: "Overview of my technical skills and tools, with my proficiency level.",
    footerBadge: "Continuously improving — always up to date with new technologies.",
  },
  de: {
    titleBefore: "Meine",
    titleHighlight: "Fähigkeiten",
    subtitle: "Überblick über meine technischen Fähigkeiten und Tools mit meinem Kenntnisstand.",
    footerBadge: "Ständige Weiterentwicklung — immer auf dem neuesten Stand der Technologien.",
  },
};

const Competences: React.FC<CompetenceProps> = () => {
  const { language } = useLanguage();
  const comps = competences[language];
  const texts = sectionTexts[language];

  return (
    <section
      id="competence"
      className="pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre */}
        <motion.h2
          {...fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-2 sm:gap-3 flex-wrap"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.1, 1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
          </motion.div>

          <span>
            {texts.titleBefore}{" "}
            <span className="text-green-600 dark:text-green-400">{texts.titleHighlight}</span>
          </span>

          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
          >
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
          </motion.div>
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          {texts.subtitle}
        </motion.p>

        {/* Grille : 1 col mobile → 2 col tablet → 3 col desktop → 4 col xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {comps.map((comp: Comp, i) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                {/* Glow hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                {/* Carte */}
                <div className="relative h-full rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 overflow-hidden">

                  {/* Barre décorative top */}
                  <div className="h-1 bg-gradient-to-r from-green-400 to-green-600" />

                  <div className="p-4 sm:p-5">
                    {/* En-tête carte */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 shadow-md"
                      >
                        <Icon size={20} className="text-white" />
                      </motion.div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-tight">
                        {comp.title}
                      </h3>
                    </div>

                    {/* Liste des techs */}
                    <div className="space-y-2">
                      {comp.techs.map((tech, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: j * 0.06 }}
                        >
                          {/* Nom + pourcentage discret */}
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">
                              {tech.name}
                            </span>
                            <span className="text-[10px] text-gray-400 dark:text-gray-500 ml-2 flex-shrink-0">
                              {tech.grade}%
                            </span>
                          </div>
                          {/* Barre de progression fine */}
                          <div className="h-1 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.grade}%` }}
                              transition={{ duration: 0.7, delay: 0.1 + j * 0.05 }}
                              className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer badge */}
        <motion.div
          {...fadeInUp}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <span className="text-xl sm:text-2xl">🚀</span>
            <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
              {texts.footerBadge}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Competences;