import { useTranslation } from 'react-i18next';
import { StockLogo } from '../../images';

const Home = () => {
   const { t } = useTranslation();

   return (
      <div>
         {t('Hello')}
         <img src={StockLogo} alt="logo" />
      </div>
   );
};

export default Home;
