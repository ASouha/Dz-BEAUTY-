import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './locales/fr/translation.json';
import ar from './locales/ar/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: fr, // English translations
      },
      ar: {
        translation: ar, // Arabic translations
      },
    },
    lng: 'fr', // Default language (set to 'en' for English)
    fallbackLng: 'fr', // If translations are not available in the current language, use English
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;