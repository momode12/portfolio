import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/serviceData";
import { useLanguage } from "../context/useLanguage";
import type { Language } from "../types/common";
import { fadeInDown, withDelay, iconSpin } from "../lib/animations";
import { SECTION_BG, CARD_BASE, CARD_TOP_BAR, GRADIENT_TEXT, DECOR_BLOB } from "../lib/styles";

interface ServiceProps {
  darkMode: boolean;
}

const sectionTexts: Record<Language, {
  titleBefore: string;
  titleHighlight: string;
  subtitle: string;
}> = {
  fr: {
    titleBefore: "Mes",
    titleHighlight: "Services",
    subtitle:
      "Des solutions sur mesure pour accompagner vos projets digitaux, de la conception au déploiement",
  },
  en: {
    titleBefore: "My",
    titleHighlight: "Services",
    subtitle:
      "Tailored solutions to support your digital projects, from design to deployment",
  },
  de: {
    titleBefore: "Meine",
    titleHighlight: "Dienstleistungen",
    subtitle:
      "Maßgeschneiderte Lösungen zur Begleitung Ihrer digitalen Projekte, von der Konzeption bis zur Bereitstellung",
  },
};

const Service: React.FC<ServiceProps> = () => {
  const { language } = useLanguage();
  const t = sectionTexts[language];

  return (
    <section
      id="service"
      className={`pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 ${SECTION_BG}`}
    >
      <div className={`${DECOR_BLOB} top-0 left-2 sm:left-10 w-40 h-40 sm:w-72 sm:h-72`} />
      <div className={`${DECOR_BLOB} bottom-10 sm:bottom-20 right-2 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 dark:bg-brand-400/5`} />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInDown} className="text-center mb-12 sm:mb-14 md:mb-16">
            <motion.h2
              {...fadeInDown}
              className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white flex-wrap"
            >
              <span>
                {t.titleBefore}{" "}
                <span className={GRADIENT_TEXT}>{t.titleHighlight}</span>
              </span>
            </motion.h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              {t.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const tr = service.translations[language];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={withDelay(index)}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                  <div className={`relative h-full ${CARD_BASE} rounded-2xl sm:rounded-3xl`}>
                    <div className={CARD_TOP_BAR} />

                    <div className="p-5 sm:p-6">
                      <motion.div
                        {...iconSpin}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center mb-4 sm:mb-5 shadow-lg"
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>

                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {tr.title}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-5 leading-relaxed">
                        {tr.description}
                      </p>

                      <ul className="space-y-1.5 sm:space-y-2">
                        {tr.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

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