import { motion } from "framer-motion";
import { aproposTexts } from "../data/aproposData";
import { Sparkles } from "lucide-react";

interface AproposProps {
  darkMode: boolean;
}

const Apropos: React.FC<AproposProps> = () => {

  return (
    <section
      id="apropos"
      className="pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      {/* Éléments décoratifs en arrière-plan - adaptés mobile */}
      <div className="absolute top-0 left-2 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-green-200/20 dark:bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-green-300/20 dark:bg-green-400/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre principal avec effet */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 flex-wrap justify-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 dark:text-green-400" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              À propos de{" "}
              <span className="text-green-600 dark:text-green-400 font-bold">
                moi
              </span>
            </h2>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 dark:text-green-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Paragraphe d'introduction avec carte stylisée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 sm:mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-2xl sm:rounded-3xl blur-2xl" />
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border border-green-100 dark:border-gray-700">
            <div className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed space-y-4 sm:space-y-6">
              <p className="text-center">
                Je m'appelle{" "}
                <span className="font-bold text-green-600 dark:text-green-400 text-xl sm:text-2xl">
                  {aproposTexts.name}
                </span>
                , étudiant en{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {aproposTexts.study}
                </span>
                . Passionné par la{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  programmation
                </span>
                , la{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  data
                </span>{" "}
                et l'
                <span className="font-semibold text-green-600 dark:text-green-400">
                  intelligence artificielle
                </span>
                , j'aime transformer des idées en solutions concrètes.
              </p>

              <p className="text-center">
                Je m'intéresse également à la{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  science des données
                </span>
                , à{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  l'analyse de données
                </span>{" "}
                ainsi qu'à{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  l'automatisation
                </span>
                , domaines que j'explore avec enthousiasme. J'adore apprendre de
                nouvelles technologies et relever des défis complexes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Phrase de conclusion avec style badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <div className="inline-block relative px-2 sm:px-0">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-xl opacity-30" />
            <div className="relative bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 
                          px-4 sm:px-6 md:px-8 py-4 sm:py-5 rounded-full border-2 border-green-200 dark:border-green-800 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">🎯</span>
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 dark:text-gray-200 max-w-2xl leading-relaxed text-center">
                  Soutenir la{" "}
                  <span className="font-bold text-green-600 dark:text-green-400">
                    transformation numérique
                  </span>{" "}
                  par le développement de solutions logicielles modernes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Apropos;