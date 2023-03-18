import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../stores/reducers/homeReducer';

const store = configureStore({
   reducer: {
      homeReducer
   }
});

export default store;
