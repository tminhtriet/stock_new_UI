import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { homeReducer } from './stores/selectors/homeSelector';
import { changeLanguage } from './stores/reducers/homeReducer';

import i18n from './lib/i18n';

const Layout = () => {
   const dispatch = useDispatch();
   const homeSelectorReducer = useSelector(homeReducer);

   useEffect(() => {
      dispatch(changeLanguage('vn'));
   });

   useEffect(() => {
      i18n.changeLanguage(homeSelectorReducer.language);
   }, [homeSelectorReducer.language]);

   return (
      <div className="main-content">
         <Outlet />
      </div>
   );
};

export default Layout;
