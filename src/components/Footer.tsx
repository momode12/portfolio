import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactInfos, copyrightText, footerTexts } from "../data/dataFooter";
import { useLanguage } from "../context/LanguageContext";
import { fadeInDown, fadeInUp } from "../lib/animations";
import { SECTION_BG, BUTTON_PRIMARY, DECOR_BLOB } from "../lib/styles";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const { language } = useLanguage();
  const infos = contactInfos[language];
  const t = footerTexts[language];

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Email envoyé avec succès:", result.text);
          setSent(true);
          setLoading(false);
          form.current?.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.error("Erreur lors de l'envoi:", error.text);
          setError(true);
          setLoading(false);
          setTimeout(() => setError(false), 5000);
        },
      );
  };

  return (
    <div className={`pt-0 pb-20 sm:pt-0 sm:pb-24 ${SECTION_BG}`}>
      <div className={`${DECOR_BLOB} top-0 left-0 w-96 h-96 dark:bg-brand-400/5`} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 dark:bg-blue-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          {...fadeInDown}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-3 flex-wrap"
        >
          <span>
            {t.titleBefore}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-400 dark:to-brand-500">
              {t.titleHighlight}
            </span>
          </span>
        </motion.h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        {/* Formulaire de contact */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          {...fadeInUp}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 
                     max-w-2xl mx-auto p-8 sm:p-10 text-left"
        >
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-brand-100 dark:bg-brand-900/30 border border-brand-400 dark:border-brand-700 rounded-xl flex items-center gap-3"
            >
              <CheckCircle className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <p className="text-brand-700 dark:text-brand-300 font-medium">{t.successMessage}</p>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-xl flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              <p className="text-red-700 dark:text-red-300 font-medium">{t.errorMessage}</p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                {t.fullName}
              </label>
              <input
                type="text"
                name="user_name"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                           bg-transparent text-gray-900 dark:text-gray-100 
                           focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all
                           disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder={t.fullNamePlaceholder}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                {t.email}
              </label>
              <input
                type="email"
                name="user_email"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                           bg-transparent text-gray-900 dark:text-gray-100 
                           focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all
                           disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder={t.emailPlaceholder}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              {t.message}
            </label>
            <textarea
              name="message"
              rows={5}
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl
border border-gray-300 dark:border-gray-600 
                           bg-transparent text-gray-900 dark:text-gray-100 
placeholder:text-gray-500 dark:placeholder:text-gray-400
focus:ring-2 focus:ring-brand-500 focus:border-brand-500
outline-none transition-all
disabled:opacity-50 disabled:cursor-not-allowed
resize-none"
              placeholder={t.messagePlaceholder}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            disabled={loading}
            className={`w-full ${BUTTON_PRIMARY} rounded-xl disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {t.sending}
              </>
            ) : sent ? (
              <>
                <CheckCircle size={18} />
                {t.sent}
              </>
            ) : (
              <>
                <Send size={18} />
                {t.send}
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Infos de contact */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300"
        >
          {infos.map(({ icon: Icon, value }, i) => (
            <div key={i} className="flex flex-col items-center">
              <Icon className="w-6 h-6 text-brand-500 mb-2" />
              <p>{value}</p>
            </div>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
          {copyrightText[language]}
        </div>
      </div>
    </div>
  );
};

export default Footer;