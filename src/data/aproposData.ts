import type { Language } from "../context/LanguageContext";

interface AproposTexts {
  name: string;
  study: string;
  intro: {
    before: string;      // "Je m'appelle"
    afterName: string;   // ", étudiant en"
    afterStudy: string;  // ". Passionné par la"
    programming: string; // "programmation"
    midData: string;     // ", la"
    data: string;         // "data"
    andAI: string;       // "et l'"
    ai: string;           // "intelligence artificielle"
    end: string;         // ", j'aime transformer des idées en solutions concrètes."
  };
  intro2: {
    before: string;       // "Je m'intéresse également à la"
    dataScience: string;  // "science des données"
    mid: string;          // ", à"
    dataAnalysis: string; // "l'analyse de données"
    andAuto: string;      // "ainsi qu'à"
    automation: string;   // "l'automatisation"
    end: string;          // ", domaines que j'explore avec enthousiasme. J'adore apprendre de nouvelles technologies et relever des défis complexes."
  };
  conclusion: {
    before: string;              // "Soutenir la"
    digitalTransformation: string; // "transformation numérique"
    end: string;                 // "par le développement de solutions logicielles modernes."
  };
}

export const aproposTexts: Record<Language, AproposTexts> = {
  fr: {
    name: "HERITIANA Julien",
    study: "Master 2 à l'ENI Fianarantsoa",
    intro: {
      before: "Je m'appelle",
      afterName: ", étudiant en",
      afterStudy: ". Passionné par la",
      programming: "programmation",
      midData: ", la",
      data: "data",
      andAI: "et l'",
      ai: "intelligence artificielle",
      end: ", j'aime transformer des idées en solutions concrètes.",
    },
    intro2: {
      before: "Je m'intéresse également à la",
      dataScience: "science des données",
      mid: ", à",
      dataAnalysis: "l'analyse de données",
      andAuto: "ainsi qu'à",
      automation: "l'automatisation",
      end: ", domaines que j'explore avec enthousiasme. J'adore apprendre de nouvelles technologies et relever des défis complexes.",
    },
    conclusion: {
      before: "Soutenir la",
      digitalTransformation: "transformation numérique",
      end: "par le développement de solutions logicielles modernes.",
    },
  },
  en: {
    name: "HERITIANA Julien",
    study: "Master's degree at ENI Fianarantsoa",
    intro: {
      before: "My name is",
      afterName: ", a student in",
      afterStudy: ". Passionate about",
      programming: "programming",
      midData: ",",
      data: "data",
      andAI: "and",
      ai: "artificial intelligence",
      end: ", I love turning ideas into concrete solutions.",
    },
    intro2: {
      before: "I am also interested in",
      dataScience: "data science",
      mid: ",",
      dataAnalysis: "data analysis",
      andAuto: "as well as",
      automation: "automation",
      end: ", fields I explore with enthusiasm. I love learning new technologies and tackling complex challenges.",
    },
    conclusion: {
      before: "Supporting",
      digitalTransformation: "digital transformation",
      end: "through the development of modern software solutions.",
    },
  },
  de: {
    name: "HERITIANA Julien",
    study: "Master 2 an der ENI Fianarantsoa",
    intro: {
      before: "Mein Name ist",
      afterName: ", Student im",
      afterStudy: ". Begeistert von",
      programming: "Programmierung",
      midData: ",",
      data: "Daten",
      andAI: "und",
      ai: "künstlicher Intelligenz",
      end: ", verwandle ich gerne Ideen in konkrete Lösungen.",
    },
    intro2: {
      before: "Ich interessiere mich auch für",
      dataScience: "Data Science",
      mid: ",",
      dataAnalysis: "Datenanalyse",
      andAuto: "sowie für",
      automation: "Automatisierung",
      end: ", Bereiche, die ich mit Begeisterung erkunde. Ich lerne gerne neue Technologien und meistere komplexe Herausforderungen.",
    },
    conclusion: {
      before: "Unterstützung der",
      digitalTransformation: "digitalen Transformation",
      end: "durch die Entwicklung moderner Softwarelösungen.",
    },
  },
};