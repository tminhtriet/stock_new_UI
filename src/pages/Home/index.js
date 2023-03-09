import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = props => {
   const { t } = useTranslation();

   return (
      <div>
         {t('Hello')}
      </div>
   );
};

export default Home;