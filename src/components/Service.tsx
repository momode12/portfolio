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
      className="pt-0 pb-20 sm:pt-0 sm:pb-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500  "
    >
      <div>
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-4 text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
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
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
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
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
              </motion.span>
            </motion.h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Des solutions sur mesure pour accompagner vos projets digitaux, de
              la conception au déploiement
            </p>
          </motion.div>

          {/* Grille de services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  {/* Effet glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Carte */}
                  <div className="relative h-full bg-white dark:bg-gray-800/90 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 overflow-hidden">
                    {/* Barre décorative */}
                    <div
                      className={`h-2 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo}`}
                    />

                    <div className="p-6">
                      {/* Icône */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center mb-5 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Titre */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span
                              className={`mt-1 w-1.5 h-1.5 rounded-full ${service.color.replace(
                                "text-",
                                "bg-"
                              )} flex-shrink-0`}
                            />
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
