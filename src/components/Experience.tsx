import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, GraduationCap, Award, Eye } from "lucide-react";
import { experiences, educations } from "../data/experienceData";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../types/common";
import { fadeInDown, fadeInLeft, withDelay, iconSpin, cardHover } from "../lib/animations";
import { SECTION_BG, CARD_BASE, CARD_TOP_BAR, GRADIENT_TEXT, PILL_BADGE } from "../lib/styles";

interface ExperienceProps {
  darkMode: boolean;
}

interface DocumentButtonProps {
  label: string;
  fileUrl: string;
  viewLabel: string;
}

const DocumentButton: React.FC<DocumentButtonProps> = ({ label, fileUrl, viewLabel }) => (
  <a
    href={fileUrl}
    target="_blank"
    rel="noopener noreferrer"
    title={`${viewLabel} : ${label}`}
    className="inline-flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5
               rounded-lg bg-gradient-to-r from-brand-500 to-brand-600
               hover:from-brand-600 hover:to-brand-700
               text-white text-xs sm:text-sm font-semibold shadow-md w-full sm:w-auto"
  >
    <Eye size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
    <span className="truncate">{label}</span>
  </a>
);

const sectionTexts: Record<Language, {
  expTitleBefore: string;
  expTitleHighlight: string;
  expSubtitle: string;
  eduTitleBefore: string;
  eduTitleHighlight: string;
  eduSubtitle: string;
  proExperienceLabel: string;
  academicTrainingLabel: string;
  viewDiploma: string;
  viewCertificate: string;
  viewTranscript: string;
  viewGeneric: string;
  finalBadge: string;
}> = {
  fr: {
    expTitleBefore: "Expériences",
    expTitleHighlight: "Professionnelles",
    expSubtitle: "Mon parcours professionnel et les projets qui ont façonné mes compétences",
    eduTitleBefore: "Études &",
    eduTitleHighlight: "Formations",
    eduSubtitle: "Mon parcours académique et mes formations certifiantes",
    proExperienceLabel: "Expérience professionnelle",
    academicTrainingLabel: "Formation académique",
    viewDiploma: "Voir le diplôme",
    viewCertificate: "Voir le certificat",
    viewTranscript: "Voir le relevé de note",
    viewGeneric: "Voir",
    finalBadge: "Un parcours riche en expériences et en apprentissages continus",
  },
  en: {
    expTitleBefore: "Professional",
    expTitleHighlight: "Experience",
    expSubtitle: "My professional journey and the projects that shaped my skills",
    eduTitleBefore: "Education &",
    eduTitleHighlight: "Training",
    eduSubtitle: "My academic background and certified training",
    proExperienceLabel: "Professional experience",
    academicTrainingLabel: "Academic training",
    viewDiploma: "View diploma",
    viewCertificate: "View certificate",
    viewTranscript: "View transcript",
    viewGeneric: "View",
    finalBadge: "A journey rich in experience and continuous learning",
  },
  de: {
    expTitleBefore: "Berufliche",
    expTitleHighlight: "Erfahrungen",
    expSubtitle: "Mein beruflicher Werdegang und die Projekte, die meine Fähigkeiten geprägt haben",
    eduTitleBefore: "Ausbildung &",
    eduTitleHighlight: "Weiterbildungen",
    eduSubtitle: "Mein akademischer Werdegang und meine zertifizierten Weiterbildungen",
    proExperienceLabel: "Berufserfahrung",
    academicTrainingLabel: "Akademische Ausbildung",
    viewDiploma: "Diplom ansehen",
    viewCertificate: "Zertifikat ansehen",
    viewTranscript: "Notenübersicht ansehen",
    viewGeneric: "Ansehen",
    finalBadge: "Ein Werdegang reich an Erfahrungen und ständigem Lernen",
  },
};

const TRANSCRIPT_IDS = ["bac", "l1", "l2", "l3", "m1"];
const DIPLOMA_IDS = ["bac", "l3"];

const Experience: React.FC<ExperienceProps> = () => {
  const { language } = useLanguage();
  const t = sectionTexts[language];

  const getEducationButtonLabel = (id: string) =>
    DIPLOMA_IDS.includes(id) ? t.viewDiploma : t.viewCertificate;

  const showTranscript = (id: string) => TRANSCRIPT_IDS.includes(id);
  const showDiplome = (id: string) => DIPLOMA_IDS.includes(id);

  return (
    <section id="experience" className={`pt-0 pb-20 sm:pt-0 sm:pb-24 ${SECTION_BG}`}>
      <div className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-brand-200/20 dark:bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-brand-300/20 dark:bg-brand-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Expériences */}
        <motion.div {...fadeInDown} className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 flex-wrap px-2 xs:px-4">
            <span className="leading-tight">
              {t.expTitleBefore}{" "}
              <span className={GRADIENT_TEXT}>{t.expTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 xs:px-4">
            {t.expSubtitle}
          </p>
        </motion.div>

        {/* Timeline Expériences */}
        <div className="relative mb-8 sm:mb-12 md:mb-16">
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600 dark:from-brand-500 dark:via-brand-400 dark:to-brand-500" />

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const tr = exp.translations[language];
            return (
              <motion.div
                key={exp.id}
                {...fadeInLeft}
                transition={withDelay(index)}
                className="relative sm:pl-20 pb-6 xs:pb-8 sm:pb-12 group"
              >
                <motion.div
                  {...iconSpin}
                  className="sm:absolute relative left-0 mb-3 xs:mb-4 sm:mb-0 mx-auto sm:mx-0 flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-300"
                >
                  <Icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                <div className="hidden sm:block absolute left-16 top-8 w-4 h-0.5 bg-gradient-to-r from-brand-500 to-transparent dark:from-brand-400" />

                <motion.div
                  {...cardHover}
                  className={`relative ${CARD_BASE} rounded-lg xs:rounded-xl sm:rounded-2xl`}
                >
                  <div className={CARD_TOP_BAR} />

                  <div className="p-3 xs:p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 xs:gap-3 mb-3 xs:mb-4">
                      <div className="flex-1">
                        <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 xs:mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-tight">
                          {tr.title}
                        </h3>
                        <div className="flex items-center gap-1.5 xs:gap-2 text-gray-600 dark:text-gray-400 mb-1.5 xs:mb-2">
                          <MapPin size={14} className="text-brand-600 dark:text-brand-400 flex-shrink-0" />
                          <p className="text-xs xs:text-sm font-medium">{tr.company}</p>
                        </div>
                      </div>

                      <div className={`${PILL_BADGE} self-start px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2`}>
                        <Calendar size={12} className="text-brand-600 dark:text-brand-400 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-brand-700 dark:text-brand-300 whitespace-nowrap">
                          {tr.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 xs:mb-4">
                      {tr.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 xs:gap-3 sm:gap-0 pt-3 xs:pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <Briefcase size={12} className="text-brand-600 dark:text-brand-400 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {t.proExperienceLabel}
                        </span>
                      </div>

                      {exp.certificate && (
                        <DocumentButton
                          label={getEducationButtonLabel(exp.id)}
                          fileUrl={exp.certificate}
                          viewLabel={t.viewGeneric}
                        />
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
        <motion.div {...fadeInDown} className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 flex-wrap px-2 xs:px-4">
            <span className="leading-tight">
              {t.eduTitleBefore}{" "}
              <span className={GRADIENT_TEXT}>{t.eduTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 xs:px-4">
            {t.eduSubtitle}
          </p>
        </motion.div>

        {/* Timeline Formations */}
        <div className="relative">
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600 dark:from-brand-500 dark:via-brand-400 dark:to-brand-500" />

          {educations.map((edu, index) => {
            const Icon = edu.icon;
            const tr = edu.translations[language];
            return (
              <motion.div
                key={edu.id}
                {...fadeInLeft}
                transition={withDelay(index)}
                className="relative sm:pl-20 pb-6 xs:pb-8 sm:pb-12 group"
              >
                <motion.div
                  {...iconSpin}
                  className="sm:absolute relative left-0 mb-3 xs:mb-4 sm:mb-0 mx-auto sm:mx-0 flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-300"
                >
                  <Icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                <div className="hidden sm:block absolute left-16 top-8 w-4 h-0.5 bg-gradient-to-r from-brand-400 to-transparent" />

                <motion.div
                  {...cardHover}
                  className={`relative ${CARD_BASE} rounded-lg xs:rounded-xl sm:rounded-2xl`}
                >
                  <div className="h-1 sm:h-1.5 bg-gradient-to-r from-brand-400 to-brand-500" />

                  <div className="p-3 xs:p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 xs:gap-3 mb-3 xs:mb-4">
                      <div className="flex-1">
                        <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 xs:mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-tight">
                          {tr.title}
                        </h3>
                        <div className="flex items-center gap-1.5 xs:gap-2 text-gray-600 dark:text-gray-400 mb-1.5 xs:mb-2">
                          <MapPin size={14} className="text-brand-600 dark:text-brand-400 flex-shrink-0" />
                          <p className="text-xs xs:text-sm font-medium">{tr.institution}</p>
                        </div>
                      </div>

                      <div className={`${PILL_BADGE} self-start px-2.5 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2`}>
                        <Calendar size={12} className="text-brand-600 dark:text-brand-400 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-brand-700 dark:text-brand-300 whitespace-nowrap">
                          {tr.period}
                        </span>
                      </div>
                    </div>

                    {tr.mention && (
                      <div className="mb-2 xs:mb-3">
                        <span className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-brand-400 to-brand-500 text-white rounded-full text-xs sm:text-sm font-bold shadow-md">
                          <Award size={12} className="xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          {tr.mention}
                        </span>
                      </div>
                    )}

                    <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3 xs:mb-4">
                      {tr.description}
                    </p>

                    <div className="flex flex-col gap-2 xs:gap-3 pt-3 xs:pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-1.5 xs:gap-2">
                        <GraduationCap size={12} className="text-brand-600 dark:text-brand-400 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {t.academicTrainingLabel}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        {showTranscript(edu.id) && edu.transcript && (
                          <DocumentButton label={t.viewTranscript} fileUrl={edu.transcript} viewLabel={t.viewGeneric} />
                        )}

                        {showDiplome(edu.id) && edu.certificate && (
                          <DocumentButton label={t.viewDiploma} fileUrl={edu.certificate} viewLabel={t.viewGeneric} />
                        )}

                        {!showDiplome(edu.id) && edu.certificate && (
                          <DocumentButton
                            label={getEducationButtonLabel(edu.id)}
                            fileUrl={edu.certificate}
                            viewLabel={t.viewGeneric}
                          />
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
          <div className={`${PILL_BADGE} px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4 shadow-lg`}>
            <p className="text-xs xs:text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              {t.finalBadge}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;