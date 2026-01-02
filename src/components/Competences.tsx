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
      className="pt-0 pb-20 sm:pt-0 sm:pb-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500 "
    >
      <div className="max-w-7xl mx-auto px-4">
            
        <motion.h2
          {...fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-3"
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
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 dark:text-green-400" />
          </motion.div>
          
          <span>
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
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 dark:text-green-400" />
          </motion.div>
        </motion.h2>
             

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-3xl mx-auto px-2"
        >
         Voici un aperçu de mes compétences techniques et des outils que j'utilise
          régulièrement avec mon niveau de maîtrise.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {competences.map((comp: Comp, i) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                <div className="relative h-full p-6 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 flex flex-col">
                  <div className="flex flex-col items-center text-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 shadow-lg"
                    >
                      <Icon size={32} className="text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {comp.title}
                    </h3>
                  </div>

                  <div className="flex-1 space-y-3">
                    {comp.techs.map((tech, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: j * 0.1 }}
                        className="group/item"
                      >
                        <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/item:text-green-600 dark:group-hover/item:text-green-400">
                            {tech.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${tech.grade}%` }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                              />
                            </div>
                            <span className="text-xs font-bold text-green-600 dark:text-green-400 min-w-[32px] text-right">
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
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
            <span className="text-2xl">🚀</span>
            <p className="text-base font-medium text-gray-700 dark:text-gray-300">
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