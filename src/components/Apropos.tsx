import { motion } from "framer-motion";
import { aproposTexts, skills } from "../data/aproposData";
import { Sparkles } from "lucide-react";

interface AproposProps {
  darkMode: boolean;
}

const Apropos: React.FC<AproposProps> = () => {

  return (
    <section
      id="apropos"
     className="py-20 sm:py-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500 "   >
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 dark:bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/20 dark:bg-green-400/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Titre principal avec effet */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-8 h-8 text-green-500 dark:text-green-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb 10">
              À propos de{" "}
              <span className="text-green-600 dark:text-green-400 font-bold">
                moi
              </span>
            </h2>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-8 h-8 text-green-500 dark:text-green-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Paragraphe d'introduction avec carte stylisée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-3xl blur-2xl" />
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-green-100 dark:border-gray-700">
            <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed space-y-6">
              <p className="text-center">
                Je m'appelle{" "}
                <span className="font-bold text-green-600 dark:text-green-400 text-2xl">
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

        {/* Blocs de compétences avec design premium */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Effet glow au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
              
              <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-gray-800/90 border-2 border-gray-200 dark:border-gray-700 
                            hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 shadow-lg hover:shadow-2xl
                            hover:-translate-y-1">
                
                {/* Icône avec fond animé */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-green-400 to-green-600 shadow-lg"
                  >
                    <skill.icon
                      size={28}
                      className="text-white"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {skill.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {skill.desc}
                </p>

                {/* Barre décorative en bas */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phrase de conclusion avec style badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-xl opacity-30" />
            <div className="relative bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 
                          px-8 py-5 rounded-full border-2 border-green-200 dark:border-green-800 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 max-w-2xl leading-relaxed">
                  Mon ambition est de contribuer à la{" "}
                  <span className="font-bold text-green-600 dark:text-green-400">
                    transformation numérique
                  </span>{" "}
                  à travers des solutions logicielles modernes et orientées données.
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