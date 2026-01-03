import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Youtube, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projectData";
import { Sparkles } from "lucide-react";

interface ProjectProps {
  darkMode: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Projets: React.FC<ProjectProps> = () => {
  const [imageIndexes, setImageIndexes] = useState<number[]>(
    new Array(projects.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((idx, i) => {
          const max = projects[i].images.length;
          return (idx + 1) % max;
        })
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projet"
      className="pt-0 pb-12 xs:pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 xs:mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
        >
          {/* Sparkles gauche */}
          <motion.span
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400 flex-shrink-0" />
          </motion.span>

          {/* Titre */}
          <span className="leading-tight">
            Mes{" "}
            <span className="text-green-600 dark:text-green-400">Projets</span>
          </span>

          {/* Sparkles droite */}
          <motion.span
            animate={{
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400 flex-shrink-0" />
          </motion.span>
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 xs:mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-2 xs:px-4"
        >
          Une sélection de projets réalisés durant mon parcours, illustrant mes
          compétences techniques et ma passion pour la création d'applications
          modernes.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl xs:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative h-full rounded-2xl xs:rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 flex flex-col">
                {/* Image avec overlay */}
                <div className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 overflow-hidden">
                  <motion.img
                    key={imageIndexes[index]}
                    src={project.images[imageIndexes[index]]}
                    alt={project.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Indicateurs de slides */}
                  <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 xs:gap-2">
                    {project.images.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 xs:h-1.5 rounded-full transition-all duration-300 ${
                          i === imageIndexes[index]
                            ? "w-6 xs:w-8 bg-green-400"
                            : "w-1 xs:w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1 p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 xs:mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 xs:mb-5 sm:mb-6 flex-1">
                    {project.desc}
                  </p>

                  {/* Technologies avec style amélioré */}
                  <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-4 xs:mb-5 sm:mb-6">
                    {project.stack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 text-xs font-medium bg-gradient-to-r from-green-50 to-green-100 text-green-700 
                                   dark:from-green-900/30 dark:to-green-800/30 dark:text-green-300 
                                   rounded-full border border-green-200 dark:border-green-800
                                   hover:scale-105 transition-transform cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Boutons améliorés */}
                  <div className="flex flex-col xs:flex-row flex-wrap gap-2 xs:gap-2.5 sm:gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[120px] xs:min-w-[140px] flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm font-semibold 
                                 bg-gray-900 text-white rounded-lg xs:rounded-xl
                                 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 
                                 transition-all shadow-lg hover:shadow-xl group/btn"
                    >
                      <Github
                        size={16}
                        className="xs:w-[18px] xs:h-[18px] group-hover/btn:rotate-12 transition-transform flex-shrink-0"
                      />
                      <span className="truncate">Code source</span>
                    </motion.a>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[120px] xs:min-w-[140px] flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm font-semibold 
                                 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg xs:rounded-xl
                                 hover:from-red-600 hover:to-red-700 
                                 transition-all shadow-lg hover:shadow-xl group/btn"
                    >
                      <Youtube size={16} className="xs:w-[18px] xs:h-[18px] flex-shrink-0" />
                      <span className="truncate">Voir la démo</span>
                      <ArrowUpRight
                        size={14}
                        className="xs:w-4 xs:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform flex-shrink-0"
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="mt-10 xs:mt-12 sm:mt-16 md:mt-20 text-center px-2 xs:px-4">
          <div className="inline-flex items-center gap-2 xs:gap-2.5 sm:gap-3 px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
            <span className="text-lg xs:text-xl sm:text-2xl flex-shrink-0">💼</span>
            <p className="text-xs xs:text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              Applications performantes, maintenables et centrées sur
              l'expérience utilisateur
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projets;