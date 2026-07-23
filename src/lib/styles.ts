// Fond dégradé standard d'une section (About, Apropos, Experience, Projets, Service, Footer)
export const SECTION_BG =
  "bg-gradient-to-b from-white via-brand-50 to-white " +
  "dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500";

// Carte standard (Experience, Projets, Service)
export const CARD_BASE =
  "bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg hover:shadow-2xl " +
  "transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 " +
  "hover:border-brand-400 dark:hover:border-brand-500 overflow-hidden";

// Barre colorée en haut de carte
export const CARD_TOP_BAR = "h-1.5 bg-gradient-to-r from-brand-500 to-brand-600";

// Badge / pill (dates, mentions, labels)
export const PILL_BADGE =
  "inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-50 to-brand-100 " +
  "dark:from-brand-900/30 dark:to-brand-800/30 rounded-full border border-brand-200 dark:border-brand-800";

// Texte en dégradé (mot mis en valeur dans un titre : "Mes " + "Projets")
export const GRADIENT_TEXT =
  "text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600 " +
  "dark:from-brand-400 dark:to-brand-500";

// Icône dans un badge circulaire dégradé (timelines, services)
export const ICON_BADGE =
  "flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 " +
  "shadow-lg group-hover:shadow-2xl transition-all duration-300";

// Blob décoratif flouté en arrière-plan de section
export const DECOR_BLOB =
  "absolute rounded-full blur-3xl bg-brand-200/20 dark:bg-brand-500/5";

// Bouton principal (CTA plein, ex: "Envoyer", "Télécharger CV")
export const BUTTON_PRIMARY =
  "flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white rounded-xl " +
  "bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 " +
  "shadow-lg hover:shadow-xl transition-all";

// Bouton secondaire (contour)
export const BUTTON_OUTLINE =
  "flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-xl border-2 " +
  "border-brand-600 dark:border-brand-500 text-gray-800 dark:text-gray-200 " +
  "bg-white dark:bg-gray-800 hover:bg-brand-50 dark:hover:bg-gray-700 " +
  "shadow-xl hover:shadow-2xl transition-all duration-300";