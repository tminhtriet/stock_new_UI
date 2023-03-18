import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import vn from './translations/vn.json';

i18n.use(initReactI18next).init({
   fallbackLng: 'en',
   resources: {
      en: {
         translation: en
      },
      vn: {
         translation: vn
      }
   }
});

export default i18n;
