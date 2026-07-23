# Portfolio — HERITIANA Julien

Portfolio personnel développé en **React + TypeScript + Vite**, présentant mon parcours, mes compétences, mes projets et mes expériences académiques et professionnelles. Le site est multilingue (FR / EN / DE), supporte le mode sombre, et propose un formulaire de contact fonctionnel via EmailJS.

🔗 Démo en ligne : *(ajouter le lien de déploiement ici)*
https://julien-heritiana.vercel.app/
---

## 📋 Sommaire

- [Stack technique](#-stack-technique)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Variables d'environnement](#-variables-denvironnement)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Fonctionnalités](#-fonctionnalités)
- [Linting & qualité de code](#-linting--qualité-de-code)
- [Build & déploiement](#-build--déploiement)
- [Notes techniques](#-notes-techniques)

---

## 🛠 Stack technique

| Catégorie          | Technologie                                      |
|---------------------|---------------------------------------------------|
| Framework           | [React 19](https://react.dev/)                    |
| Langage             | [TypeScript 5.9](https://www.typescriptlang.org/)  |
| Build tool          | [Vite 7](https://vite.dev/)                        |
| Styling             | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`, config via `@theme` dans `index.css`) |
| Animations          | [Framer Motion](https://www.framer.com/motion/)    |
| Icônes              | [lucide-react](https://lucide.dev/), [react-icons](https://react-icons.github.io/react-icons/) |
| Effet machine à écrire | [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter) |
| Particules d'arrière-plan | [react-tsparticles](https://particles.js.org/) + [tsparticles-slim](https://www.npmjs.com/package/tsparticles-slim) |
| Formulaire de contact | [EmailJS](https://www.emailjs.com/) (`emailjs-com`) |
| Linting             | [ESLint 9](https://eslint.org/) (flat config) + [typescript-eslint](https://typescript-eslint.io/) |
| Gestionnaire de paquets | [pnpm](https://pnpm.io/) *(recommandé)* |

---

## ✅ Prérequis

- **Node.js** ≥ 20.x (recommandé : dernière version LTS)
- **pnpm** ≥ 9.x

Installer pnpm si ce n'est pas déjà fait :

```bash
npm install -g pnpm
```

Vérifier les versions :

```bash
node -v
pnpm -v
```

---

## 🚀 Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/momode12/portfolio.git
cd portfolio
```

2. **Installer les dépendances**

```bash
pnpm install
```

3. **Configurer les variables d'environnement**

Créer un fichier `.env` à la racine du projet (voir section suivante).

4. **Lancer le serveur de développement**

```bash
pnpm dev
```

Le site est accessible sur **http://localhost:5173** (port par défaut de Vite).

---

## 🔐 Variables d'environnement

Le formulaire de contact utilise [EmailJS](https://www.emailjs.com/). Crée un fichier `.env` à la racine du projet avec les clés suivantes :

```bash
VITE_EMAILJS_SERVICE_ID=ton_service_id
VITE_EMAILJS_TEMPLATE_ID=ton_template_id
VITE_EMAILJS_PUBLIC_KEY=ta_public_key
```

> ⚠️ Toutes les variables exposées côté client via Vite **doivent** commencer par le préfixe `VITE_`.
> Ces valeurs sont disponibles depuis le tableau de bord [EmailJS](https://dashboard.emailjs.com/admin).
> Redémarre `pnpm dev` après toute modification du `.env` (Vite ne recharge pas les variables d'environnement à chaud).

Le fichier `.env` est ignoré par Git (voir `.gitignore`) — ne jamais le committer.

---

## 📜 Scripts disponibles

| Commande         | Description                                                |
|-------------------|--------------------------------------------------------------|
| `pnpm dev`        | Lance le serveur de développement avec Hot Module Replacement (HMR) |
| `pnpm build`      | Vérifie les types (`tsc -b`) puis génère le build de production dans `dist/` |
| `pnpm preview`    | Sert localement le build de production pour le tester avant déploiement |
| `pnpm lint`       | Analyse le code avec ESLint (`eslint .`)                    |

---

## 📁 Structure du projet

```
portfolio/
├── .env                      # Variables d'environnement (non commité)
├── .gitignore
├── index.html
├── package.json
├── eslint.config.js          # Configuration ESLint (flat config)
├── tsconfig.json             # Config TypeScript racine (references)
├── tsconfig.app.json         # Config TypeScript pour le code applicatif (src/)
├── tsconfig.node.json        # Config TypeScript pour les fichiers d'outillage (vite.config.ts)
├── vite.config.ts            # Configuration Vite (+ plugin Tailwind CSS v4)
│
└── src/
    ├── main.tsx               # Point d'entrée de l'application
    ├── index.css              # Import Tailwind + thème (@theme) + variant dark mode
    ├── App.tsx                # Composant racine : routing par sections, dark mode, 404
    │
    ├── assets/                # Images, CV, certificats et diplômes (PDF)
    │   ├── CV/
    │   ├── Certificat_diplome/
    │   └── project/
    │
    ├── context/
    │   └── LanguageContext.tsx  # Contexte React pour la langue courante (fr/en/de)
    │
    ├── types/                 # Types TypeScript centralisés par domaine
    │   ├── common.ts
    │   ├── contact.ts
    │   ├── navbar.ts
    │   ├── project.ts
    │   ├── service.ts
    │   └── experience.ts
    │
    ├── lib/                   # Logique et styles réutilisables
    │   ├── animations.ts       # Variants Framer Motion partagés
    │   ├── styles.ts           # Classes Tailwind réutilisables (cartes, badges, fonds)
    │   └── colors.ts           # Couleurs "brand" en hex brut (pour tsparticles)
    │
    ├── data/                  # Contenu textuel traduit (FR/EN/DE) par section
    │   ├── aboutData.ts
    │   ├── aproposData.ts
    │   ├── competenceData.ts
    │   ├── experienceData.ts
    │   ├── projectData.ts
    │   ├── serviceData.ts
    │   ├── dataFooter.ts
    │   └── navbarData.ts
    │
    ├── components/            # Composants de section et UI
    │   ├── Navbar.tsx
    │   ├── LanguageSwitcher.tsx
    │   ├── About.tsx
    │   ├── Apropos.tsx
    │   ├── Competences.tsx
    │   ├── Experience.tsx
    │   ├── Projets.tsx
    │   ├── Service.tsx
    │   ├── Footer.tsx
    │   └── ParticlesBackground.tsx
    │
    └── pages/
        └── NotFoundPage.tsx    # Page 404 (hash de section inconnu)
```

---

## ✨ Fonctionnalités

- 🌍 **Multilingue** : Français / Anglais / Allemand, avec persistance du choix dans le `localStorage`
- 🌓 **Mode sombre / clair** : basculement manuel, persisté dans le `localStorage`, respecte aussi la préférence système par défaut
- 🎨 **Thème centralisé** : couleur de marque (`brand-*`) définie une seule fois dans `index.css` via `@theme`
- 🧭 **Navigation par sections** : scroll fluide + mise à jour automatique du hash d'URL selon la section visible
- 📄 **404 intelligent** : affichage d'une page 404 si le hash de l'URL ne correspond à aucune section connue
- ✉️ **Formulaire de contact** : envoi d'e-mails via EmailJS, avec états de chargement, succès et erreur
- 🎞️ **Animations fluides** : transitions et effets au scroll via Framer Motion
- ✨ **Fond animé** : particules interactives (hover / clic) via tsparticles
- 📑 **Documents téléchargeables** : CV, diplômes, certificats et relevés de notes accessibles directement depuis les sections Expérience/Formation

---

## 🔍 Linting & qualité de code

Le projet utilise ESLint 9 avec la configuration "flat config" (`eslint.config.js`).

```bash
pnpm lint
```

### Aller plus loin (optionnel)

Pour un projet en production, il est recommandé d'activer les règles de lint **type-aware** :

```js
// eslint.config.js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // ou, pour des règles plus strictes :
      // tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

Il est également possible d'ajouter des règles de lint spécifiques à React :

```bash
pnpm add -D eslint-plugin-react-x eslint-plugin-react-dom
```

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

---

## 📦 Build & déploiement

Générer le build de production :

```bash
pnpm build
```

Cette commande :
1. Vérifie les types avec `tsc -b`
2. Génère les fichiers optimisés dans le dossier `dist/`

Prévisualiser le build localement avant déploiement :

```bash
pnpm preview
```

Le dossier `dist/` peut ensuite être déployé sur n'importe quel hébergeur de sites statiques (Vercel, Netlify, GitHub Pages, etc.). Pense à configurer les variables d'environnement (`VITE_EMAILJS_*`) directement dans les paramètres de la plateforme d'hébergement.

---

## 📝 Notes techniques

- **Tailwind CSS v4** : ce projet n'utilise pas de fichier `tailwind.config.js` — toute la configuration du thème (couleurs `brand-*`) se trouve dans `src/index.css` via la directive `@theme`.
- **Dark mode** : Tailwind v4 active `dark:` selon la préférence système par défaut. Ce comportement est surchargé dans `index.css` via `@custom-variant dark (&:where(.dark, .dark *));` pour permettre un toggle manuel piloté par une classe `.dark` sur `<html>`.
- **React Compiler** : non activé sur ce projet (impact sur les performances de build/dev). Voir la [documentation officielle](https://react.dev/learn/react-compiler/installation) pour l'ajouter si besoin.
- **HMR** : géré par [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) (Babel).

---

## 👤 Auteur

**HERITIANA Julien**
Étudiant en Master 2 — Gouvernance et Ingénierie des Données (GID), ENI Fianarantsoa
Développeur Full Stack / IA

- 📧 heritianajulien12@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/heritiana-julien-0a0132358/)
- 🔗 [GitHub](https://github.com/momode12)
