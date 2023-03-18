import React from 'react';
import ReactDOM from 'react-dom/client';
// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './config/configureStore';

import './index.scss';

import { Home, NotFound } from './pages';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="*" element={<NotFound />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
);
