import React from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";

interface NotFoundProps {
  darkMode: boolean;
}

const texts: Record<Language, {
  title: string;
  message: string;
  backHome: string;
}> = {
  fr: {
    title: "404",
    message: "Page non trouvée",
    backHome: "Retour à l'accueil",
  },
  en: {
    title: "404",
    message: "Page not found",
    backHome: "Back to home",
  },
  de: {
    title: "404",
    message: "Seite nicht gefunden",
    backHome: "Zurück zur Startseite",
  },
};

const NotFound: React.FC<NotFoundProps> = ({ darkMode }) => {
  const { language } = useLanguage();
  const t = texts[language];

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-6xl font-bold mb-4">{t.title}</h1>
      <p className="text-xl mb-6">{t.message}</p>
      <a
        href="/"
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        {t.backHome}
      </a>
    </div>
  );
};

export default NotFound;