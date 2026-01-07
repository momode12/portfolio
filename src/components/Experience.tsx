import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  Sparkles,
  Download,
} from "lucide-react";
import { experiences, educations } from "../data/experienceData";

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = () => {
  const getEducationButtonLabel = (title: string) => {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.includes("baccalauréat") || lowerTitle.includes("licence")) {
      return "Télécharger le diplôme";
    }

    return "Télécharger le certificat";
  };

  return (
    <section
      id="experience"
      className="pt-0 pb-20 sm:pt-0 sm:pb-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500 "
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-green-200/20 dark:bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-green-300/20 dark:bg-green-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Expériences */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 flex-wrap px-2 xs:px-4">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
            </motion.div>

            <span className="leading-tight">
              Expériences{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500">
                Professionnelles
              </span>
            </span>

            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                delay: 0.3,
              }}
            >
              <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
            </motion.div>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 xs:px-4">
            Mon parcours professionnel et les projets qui ont façonné mes
            compétences
          </p>
        </motion.div>

        {/* Timeline Expériences */}
        <div className="relative mb-8 sm:mb-12 md:mb-16">
          {/* Ligne verticale - cachée sur mobile */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600 dark:from-green-500 dark:via-green-400 dark:to-green-500" />

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative sm:pl-20 pb-6 xs:pb-8 sm:pb-12 group"
              >
                {/* Icône - adaptée pour mobile */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="sm:absolute relative left-0 mb-3 xs:mb-4 sm:mb-0 mx-auto sm:mx-0 flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-300"
                >
                  <Icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                {/* Ligne horizontale - cachée sur mobile */}
                <div className="hidden sm:block absolute left-16 top-8 w-4 h-0.5 bg-gradient-to-r from-green-500 to-transparent dark:from-green-400" />

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative bg-white dark:bg-gray-800/90 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 overflow-hidden"
                >
                  <div className="h-1 sm:h-1.5 bg-gradient-to-r from-green-500 to-green-600" />

                  <div className="p-3 xs:p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 xs:gap-3 mb-3 xs:mb-4">
                      <div className="flex-1">
                        <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 xs:mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-tight">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-1.5 xs:gap-2 text-gray-600 dark:text-gray-400 mb-1.5 xs:mb-2">
                          <MapPin size={14} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                          <p className="text-xs xs:text-sm font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-full border border-green-200 dark:border-green-800 self-start">
                        <Calendar
                          size={12}
                          className="text-green-600 dark:text-green-400 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
                        />
                        <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-300 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 xs:mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 xs:gap-3 sm:gap-0 pt-3 xs:pt-4 border-t border-gray-200 dark:border-gray-700">
                      {/* Partie gauche */}
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <Briefcase size={12} className="text-green-600 dark:text-green-400 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Expérience professionnelle
                        </span>
                      </div>

                      {/* Bouton à droite */}
                      {exp.certificate && (
                        <a
                          href={exp.certificate}
                          download
                          className="inline-flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5
                 rounded-lg bg-gradient-to-r
                 from-green-500 to-green-600
                 hover:from-green-600 hover:to-green-700
                 text-white text-xs sm:text-sm font-semibold shadow-md w-full sm:w-auto"
                        >
                          <Download size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">{getEducationButtonLabel(exp.title)}</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Formations */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 flex-wrap px-2 xs:px-4">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
            </motion.div>

            <span className="leading-tight">
              Études &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500">
                Formations
              </span>
            </span>

            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                delay: 0.3,
              }}
            >
              <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
            </motion.div>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 xs:px-4">
            Mon parcours académique et mes formations certifiantes
          </p>
        </motion.div>

        {/* Timeline Formations */}
        <div className="relative">
          {/* Ligne verticale - cachée sur mobile */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600 dark:from-green-500 dark:via-green-400 dark:to-green-500" />

          {educations.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative sm:pl-20 pb-6 xs:pb-8 sm:pb-12 group"
              >
                {/* Icône - adaptée pour mobile */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="sm:absolute relative left-0 mb-3 xs:mb-4 sm:mb-0 mx-auto sm:mx-0 flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-400 to-green-500 shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-300"
                >
                  <Icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                {/* Ligne horizontale - cachée sur mobile */}
                <div className="hidden sm:block absolute left-16 top-8 w-4 h-0.5 bg-gradient-to-r from-green-400 to-transparent" />

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative bg-white dark:bg-gray-800/90 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 overflow-hidden"
                >
                  <div className="h-1 sm:h-1.5 bg-gradient-to-r from-green-400 to-green-500" />

                  <div className="p-3 xs:p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 xs:gap-3 mb-3 xs:mb-4">
                      <div className="flex-1">
                        <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 xs:mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-tight">
                          {edu.title}
                        </h3>
                        <div className="flex items-center gap-1.5 xs:gap-2 text-gray-600 dark:text-gray-400 mb-1.5 xs:mb-2">
                          <MapPin size={14} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                          <p className="text-xs xs:text-sm font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-full border border-green-200 dark:border-green-800 self-start">
                        <Calendar
                          size={12}
                          className="text-green-600 dark:text-green-400 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
                        />
                        <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-300 whitespace-nowrap">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    {edu.mention && (
                      <div className="mb-2 xs:mb-3">
                        <span className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-xs sm:text-sm font-bold shadow-md">
                          <Award size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          {edu.mention}
                        </span>
                      </div>
                    )}

                    <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 xs:mb-4">
                      {edu.description}
                    </p>

                    <div className="flex flex-col gap-2 xs:gap-3 pt-3 xs:pt-4 border-t border-gray-200 dark:border-gray-700">
                      {/* Partie haute */}
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <GraduationCap size={12} className="text-green-600 dark:text-green-400 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Formation académique
                        </span>
                      </div>

                      {/* Boutons en bas */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      { (edu.title.toLowerCase().includes("baccalauréat") ||
                         edu.title.toLowerCase().includes("licence 3")) && (
                            <a
                              href={edu.transcript}
                              download
                              className="inline-flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white text-xs sm:text-sm font-semibold shadow-md w-full sm:w-auto"
                            >
                              <Download size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span className="truncate">Télécharger le relevé de notes</span>
                            </a>
                          )}

                        {edu.certificate && (
                          <a
                            href={edu.certificate}
                            download
                            className="inline-flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5
                 rounded-lg bg-gradient-to-r
                 from-green-500 to-green-600
                 hover:from-green-600 hover:to-green-700
                 text-white text-xs sm:text-sm font-semibold shadow-md w-full sm:w-auto"
                          >
                            <Download size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span className="truncate">{getEducationButtonLabel(edu.title)}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Badge final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 xs:mt-10 sm:mt-12 md:mt-16 text-center px-2 xs:px-4"
        >
          <div className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 shadow-lg">
            <span className="text-lg xs:text-xl sm:text-2xl">🚀</span>
            <p className="text-xs xs:text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              Un parcours riche en expériences et en apprentissages continus
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;