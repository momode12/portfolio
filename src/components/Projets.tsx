import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Globe, ArrowUpRight } from "lucide-react";
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
      className="pt-0 pb-20 sm:pt-0 sm:pb-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500  "
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="flex items-center justify-center gap-4 text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white"
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
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
          </motion.span>

          {/* Titre */}
          <span>
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
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
          </motion.span>
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-3xl mx-auto px-2"
        >
          Une sélection de projets réalisés durant mon parcours, illustrant mes
          compétences techniques et ma passion pour la création d'applications
          modernes.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 flex flex-col">
                {/* Image avec overlay */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden">
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
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {project.images.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === imageIndexes[index]
                            ? "w-8 bg-green-400"
                            : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                    {project.desc}
                  </p>

                  {/* Technologies avec style amélioré */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-green-50 to-green-100 text-green-700 
                                   dark:from-green-900/30 dark:to-green-800/30 dark:text-green-300 
                                   rounded-full border border-green-200 dark:border-green-800
                                   hover:scale-105 transition-transform cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Boutons améliorés */}
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold 
                                 bg-gray-900 text-white rounded-xl
                                 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 
                                 transition-all shadow-lg hover:shadow-xl group/btn"
                    >
                      <Github
                        size={18}
                        className="group-hover/btn:rotate-12 transition-transform"
                      />
                      <span>Code source</span>
                    </motion.a>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold 
                                 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl
                                 hover:from-green-600 hover:to-green-700 
                                 transition-all shadow-lg hover:shadow-xl group/btn"
                    >
                      <Globe size={18} />
                      <span>Voir la démo</span>
                      <ArrowUpRight
                        size={16}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800">
            <span className="text-2xl">💼</span>
            <p className="text-base font-medium text-gray-700 dark:text-gray-300">
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
