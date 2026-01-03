import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/serviceData";
import { Sparkles } from "lucide-react";

interface ServiceProps {
  darkMode: boolean;
}

const Service: React.FC<ServiceProps> = () => {
  return (
    <section
      id="service"
      className="pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
    >
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-0 left-2 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-green-200/20 dark:bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-green-300/20 dark:bg-green-400/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-14 md:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white flex-wrap"
            >
              {/* Sparkles gauche */}
              <motion.span
                animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.15, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
              </motion.span>

              {/* Titre */}
              <span>
                Mes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500">
                  Services
                </span>
              </span>

              {/* Sparkles droite */}
              <motion.span
                animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.15, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
              </motion.span>
            </motion.h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Des solutions sur mesure pour accompagner vos projets digitaux, de
              la conception au déploiement
            </p>
          </motion.div>

          {/* Grille de services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Effet glow - VERT */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                  {/* Carte */}
                  <div className="relative h-full bg-white dark:bg-gray-800/90 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 overflow-hidden">
                    {/* Barre décorative - VERT */}
                    <div className="h-1.5 sm:h-2 bg-gradient-to-r from-green-400 to-green-600" />

                    <div className="p-5 sm:p-6">
                      {/* Icône - VERT */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 sm:mb-5 shadow-lg"
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>

                      {/* Titre */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-5 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1.5 sm:space-y-2">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                          >
                            {/* Point vert */}
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Effet brillant */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;