import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enTranslation from './locales/en/translation.json';
import laTranslation from './locales/la/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      la: {
        translation: laTranslation,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if translation key is missing
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
