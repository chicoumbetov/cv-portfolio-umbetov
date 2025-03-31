import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./en/translation.json";
import translationFR from "./fr/translation.json";

export const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  ru: {},
} as const;

const i18nRoot = i18n.createInstance();
export const i18nextLng = "i18nextLng";

i18nRoot.use(LanguageDetector).init({
  lng: localStorage.getItem(i18nextLng) || "en", // Default language
  fallbackLng: "en",
  resources,
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18nRoot;
