import i18n from 'i18next';
import ICU from 'i18next-icu';
import en from 'i18next-icu/locale-data/en';
import ru from 'i18next-icu/locale-data/ru';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

i18n
  .use(new ICU({
    localeData: [en, ru]
  }))
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    saveMissing: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });
