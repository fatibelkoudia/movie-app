import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";
i18n.use(initReactI18next).init({
  resources: {
    en,
    fr,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
