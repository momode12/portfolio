import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  Download,
  GraduationCap,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import profilePic from "../assets/project/soutenance.jpg";
import cvFile from "../assets/CV/CV_Julien.pdf";  // Import du CV ici
import { expertises, socialLinks, aboutTexts } from "../data/aboutData";

interface AboutProps {
  darkMode: boolean;
}

interface SocialLink {
  icon: LucideIcon;
  url: string;
  color: string;
}

const About: React.FC<AboutProps> = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="accueil"
      className="py-20 sm:py-24 px-4 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 
                 transition-colors duration-500 "
    >
      {/* Éléments décoratifs animés */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-green-300/20 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="flex items-center justify-center py-2 px-4 relative z-10">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Section Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-600 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

              <div className="relative">
                <img
                  src={profilePic}
                  alt={aboutTexts.imageAlt}
                  className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700 transition-all duration-500 group-hover:scale-105 group-hover:border-green-400 dark:group-hover:border-green-500 relative z-10"
                />

                {/* Badge animé */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-2 -right-2 bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-xl z-20"
                >
                  <GraduationCap size={28} />
                </motion.div>
              </div>
            </div>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-700 dark:text-green-300 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg border border-green-200 dark:border-green-700 cursor-default"
              >
                <GraduationCap size={18} /> {aboutTexts.badges.student}
              </motion.span>

              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold shadow-lg border border-blue-200 dark:border-blue-700 cursor-default"
              >
                {aboutTexts.badges.developer}
              </motion.span>
            </div>
          </motion.div>

          {/* Section Texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Nom avec effet */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-6 h-6 text-green-500 dark:text-green-400" />
                <h1 className="text-4xl md:text-5xl mt-8 font-bold text-gray-900 dark:text-white">
                  {aboutTexts.name}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500">
                    {aboutTexts.surname}
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Typewriter */}
            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium h-8">
              <Typewriter
                words={expertises}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {aboutTexts.description.intro}{" "}
              <span className="text-green-600 dark:text-green-400 font-semibold">
                {aboutTexts.description.fullStack}
              </span>{" "}
              et{" "}
              <span className="text-green-600 dark:text-green-400 font-semibold">
                {aboutTexts.description.dataEngineering}
              </span>
              . {aboutTexts.description.middle}{" "}
              <span className="text-green-600 dark:text-green-400 font-semibold">
                {aboutTexts.description.specializations.dataEng}
              </span>
              ,{" "}
              <span className="text-green-600 dark:text-green-400 font-semibold">
                {aboutTexts.description.specializations.ai}
              </span>{" "}
              et{" "}
              <span className="text-green-600 dark:text-green-400 font-semibold">
                {aboutTexts.description.specializations.software}
              </span>
              .
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href={cvFile}
                download="CV_Julien.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Download size={20} /> {aboutTexts.buttons.downloadCV}
              </motion.a>

              <motion.button
                onClick={() => scrollToSection("apropos")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-600 dark:border-green-500 hover:bg-green-50 dark:hover:bg-gray-700 cursor-pointer"
              >
                {aboutTexts.buttons.learnMore}{" "}
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </div>

            {/* Liens sociaux */}
            <div className="flex gap-4 pt-6 flex-wrap">
              {(socialLinks as SocialLink[]).map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
                    style={{ color: social.color }}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
