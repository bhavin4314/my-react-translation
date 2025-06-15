import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    // lng: "en", // fixed language
    fallbackLng: "en",
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"], // save user's choice
    //   excludeCacheFor: ["cimode"], // don't cache debug mode
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
