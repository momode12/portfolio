import type { Variants, Transition } from "framer-motion";

// Apparition depuis le bas (titres, cartes, paragraphes)
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 } as Transition,
};

// Apparition depuis le haut (en-têtes de section)
export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 } as Transition,
};

// Apparition depuis la gauche (timeline, listes)
export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 } as Transition,
};

// Apparition depuis la droite
export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 } as Transition,
};

// Zoom léger (cartes, blocs mis en avant)
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 } as Transition,
};

// Conteneur avec enfants qui apparaissent en cascade
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Délai par index — utile dans un .map()
export const withDelay = (index: number, base = 0.1): Transition => ({
  duration: 0.6,
  delay: index * base,
});

// Survol carte (élévation + léger zoom)
export const cardHover = {
  whileHover: { y: -5, scale: 1.02 },
};

// Survol icône (rotation complète)
export const iconSpin = {
  whileHover: { scale: 1.1, rotate: 360 },
  transition: { duration: 0.5 } as Transition,
};

// Survol bouton (scale classique)
export const buttonHover = {
  whileHover: { scale: 1.05, y: -2 },
  whileTap: { scale: 0.95 },
};