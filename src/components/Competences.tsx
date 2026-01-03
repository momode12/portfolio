import React from "react";
import { motion } from "framer-motion";
import { competences } from "../data/competenceData";
import type { Comp } from "../data/competenceData";
import { Sparkles } from "lucide-react";

interface CompetenceProps {
  darkMode: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Competences: React.FC<CompetenceProps> = () => {
  return (
    <section
      id="competence"
      className="pt-0 pb-12 xs:pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
            
        <motion.h2
          {...fadeInUp}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 xs:mb-4 sm:mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 flex-wrap px-2"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400 flex-shrink-0" />
          </motion.div>
          
          <span className="leading-tight">
            Mes{" "}
            <span className="text-green-600 dark:text-green-400">
              Compétences
            </span>
          </span>
          
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0.3
            }}
          >
            <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400 flex-shrink-0" />
          </motion.div>
        </motion.h2>
             

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 xs:mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-2 xs:px-4"
        >
         Voici un aperçu de mes compétences techniques et des outils que j'utilise
          régulièrement avec mon niveau de maîtrise.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
          {competences.map((comp: Comp, i) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl xs:rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                <div className="relative h-full p-4 xs:p-5 sm:p-6 rounded-2xl xs:rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 flex flex-col">
                  <div className="flex flex-col items-center text-center mb-4 xs:mb-5 sm:mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-xl xs:rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 xs:mb-4 shadow-lg"
                    >
                      <Icon size={24} className="xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {comp.title}
                    </h3>
                  </div>

                  <div className="flex-1 space-y-2 xs:space-y-2.5 sm:space-y-3">
                    {comp.techs.map((tech, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: j * 0.1 }}
                        className="group/item"
                      >
                        <div className="flex items-center justify-between p-2 xs:p-2.5 sm:p-3 rounded-lg xs:rounded-xl bg-gray-50 dark:bg-gray-900/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                          <span className="text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/item:text-green-600 dark:group-hover/item:text-green-400 truncate pr-2">
                            {tech.name}
                          </span>
                          <div className="flex items-center gap-1.5 xs:gap-2 flex-shrink-0">
                            <div className="w-12 xs:w-16 sm:w-20 h-1 xs:h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${tech.grade}%` }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                              />
                            </div>
                            <span className="text-xs font-bold text-green-600 dark:text-green-400 min-w-[28px] xs:min-w-[32px] text-right">
                              {tech.grade}%
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          {...fadeInUp}
          className="mt-10 xs:mt-12 sm:mt-16 md:mt-20 text-center px-2 xs:px-4"
        >
          <div className="inline-flex items-center gap-2 xs:gap-2.5 sm:gap-3 px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
            <span className="text-lg xs:text-xl sm:text-2xl flex-shrink-0">🚀</span>
            <p className="text-xs xs:text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              Je continue à améliorer mes compétences techniques et mon utilisation
          des outils pour rester performant et à jour dans mes projets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Competences;