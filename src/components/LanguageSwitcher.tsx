import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Globe } from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import type { Language } from "../types/common";

const languages: { code: Language; label: string; countryCode: string }[] = [
  { code: "fr", label: "Français", countryCode: "fr" },
  { code: "en", label: "English", countryCode: "gb" },
  { code: "de", label: "Deutsch", countryCode: "de" },
];

const headerLabel: Record<Language, string> = {
  fr: "Choisir la langue",
  en: "Choose language",
  de: "Sprache wählen",
};

const FlagIcon = ({ countryCode, alt }: { countryCode: string; alt: string }) => (
  <img
    src={`https://flagcdn.com/w40/${countryCode}.png`}
    srcSet={`https://flagcdn.com/w80/${countryCode}.png 2x`}
    alt={alt}
    className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm"
  />
);

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === language)!;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
        aria-label="Changer de langue"
        aria-expanded={open}
      >
        <Languages size={18} className="text-gray-600 dark:text-gray-300" />
        <FlagIcon countryCode={current.countryCode} alt={current.label} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700">
              <Globe size={14} className="text-gray-400 dark:text-gray-500" />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {headerLabel[language]}
              </span>
            </div>

            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition cursor-pointer ${
                  language === lang.code
                    ? "bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <FlagIcon countryCode={lang.countryCode} alt={lang.label} />
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;