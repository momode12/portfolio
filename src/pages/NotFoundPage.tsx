import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import type { Language } from "../types/common";
import { fadeInUp } from "../lib/animations";

const texts: Record<Language, {
  title: string;
  message: string;
  goHome: string;
  goBack: string;
}> = {
  fr: {
    title: "Page introuvable",
    message: "La page que vous cherchez n'existe pas ou a été déplacée.",
    goHome: "Retour à l'accueil",
    goBack: "Page précédente",
  },
  en: {
    title: "Page not found",
    message: "The page you're looking for doesn't exist or has been moved.",
    goHome: "Back to home",
    goBack: "Previous page",
  },
  de: {
    title: "Seite nicht gefunden",
    message: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    goHome: "Zurück zur Startseite",
    goBack: "Vorherige Seite",
  },
};

const NotFound = () => {
  const { language } = useLanguage();
  const t = texts[language];

  const goHome = () => {
    window.location.href = "/";
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">

        {/* 404 animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-6"
        >
          <span className="text-[120px] sm:text-[160px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-600 select-none">
            404
          </span>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-brand-400 opacity-60"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute bottom-4 -left-2 w-4 h-4 rounded-full bg-brand-300 opacity-40"
          />
        </motion.div>

        {/* Texte */}
        <motion.div {...fadeInUp} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {t.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            {t.message}
          </p>
        </motion.div>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={goHome}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25 w-full sm:w-auto justify-center"
          >
            <Home size={16} />
            {t.goHome}
          </button>

          <button
            onClick={goBack}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-brand-400 dark:hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-all w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={16} />
            {t.goBack}
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;