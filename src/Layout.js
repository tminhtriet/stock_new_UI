import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { homeReducer } from './stores/selectors/homeSelector';
import { changeLanguage } from './stores/actions/homeAction';

const Layout = () => {
   const dispatch = useDispatch();
   const homeSelectorReducer = useSelector(homeReducer);
   
   useEffect(() => {
      dispatch(changeLanguage("vn"));
   });

   return (
      <div className="main-content">
         <Outlet />
      </div>
   );
};

export default Layout;