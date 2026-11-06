import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import es from "../locales/es.json";
import pr from "../locales/pr.json";

const savedLang = typeof window !== "undefined" ? localStorage.getItem("legacy_it_lang") : null;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pr: { translation: pr },
    },
    lng: savedLang || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
