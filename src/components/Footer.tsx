import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Send, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { contactInfos, copyrightText } from "../data/dataFooter";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setError(false);

    emailjs
      .sendForm(
        "service_julien1204",
        "template_julien1204",
        form.current,
        "An-QdrhnClt4ckpzk"
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
        }
      );
  };

  return (
    <div className="pt-0 pb-20 sm:pt-0 sm:pb-24 bg-gradient-to-b from-white via-green-50 to-white 
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500  ">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-300/10 dark:bg-green-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 dark:bg-blue-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-3 flex-wrap"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
          </motion.div>
          
          <span>
            Me{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500">
              Contacter
            </span>
          </span>
          
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 0.3
            }}
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-green-500 dark:text-green-400" />
          </motion.div>
        </motion.h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Une question, une collaboration ou un projet en tête ? Envoyez-moi un message et je vous répondrai rapidement.
        </p>

        {/* Formulaire de contact */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 
                     max-w-2xl mx-auto p-8 sm:p-10 text-left"
        >
          {/* Message de succès */}
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-xl flex items-center gap-3"
            >
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              <p className="text-green-700 dark:text-green-300 font-medium">
                Message envoyé avec succès ! Je vous répondrai bientôt.
              </p>
            </motion.div>
          )}

          {/* Message d'erreur */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-xl flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              <p className="text-red-700 dark:text-red-300 font-medium">
                Erreur lors de l'envoi. Veuillez réessayer.
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Nom complet
              </label>
              <input
                type="text"
                name="user_name"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                           bg-transparent text-gray-900 dark:text-gray-100 
                           focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all
                           disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Votre nom et prénom"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Adresse email
              </label>
              <input
                type="email"
                name="user_email"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                           bg-transparent text-gray-900 dark:text-gray-100 
                           focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all
                           disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="exemple@gmail.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                         bg-transparent text-gray-900 dark:text-gray-100 
                         focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all resize-none
                         disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Votre message..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold 
                       bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl
                       hover:from-green-600 hover:to-green-700 
                       shadow-lg hover:shadow-xl transition-all
                       disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Envoi en cours...
              </>
            ) : sent ? (
              <>
                <CheckCircle size={18} />
                Message envoyé !
              </>
            ) : (
              <>
                <Send size={18} />
                Envoyer le message
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Infos de contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300"
        >
          {contactInfos.map(({ icon: Icon, value }, i) => (
            <div key={i} className="flex flex-col items-center">
              <Icon className="w-6 h-6 text-green-500 mb-2" />
              <p>{value}</p>
            </div>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
          {copyrightText}
        </div>
      </div>
    </div>
  );
};

export default Footer;