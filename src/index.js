import React from 'react';
import ReactDOM from 'react-dom/client';
// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import configureStore from './config/configureStore';

import './index.scss';

import { Home, NotFound } from './pages';
import Layout from './Layout';
import i18n from './lib/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Change language
i18n.changeLanguage('en');
// config store
const store = configureStore();

console.log(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
