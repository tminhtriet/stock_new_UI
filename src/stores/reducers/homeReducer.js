import { createSlice } from '@reduxjs/toolkit';
import { getListUser, postEditUser } from '../thunks/homeThunk';

const homeReducer = createSlice({
   name: 'home',
   initialState: {
      language: 'vn',
      users: [],
      isLoading: false,
      page: 1,
      size: 24
   },
   reducers: {
      changeLanguage: (state, action) => {
         state.language = action.payload;
      }
   },
   extraReducers: {
      [getListUser.pending]: state => {
         console.log('get user pending');
         state.isLoading = true;
      },
      [getListUser.fulfilled]: (state, action) => {
         console.log(state, action);
         state.users = state.payload;
         state.isLoading = false;
      },
      [getListUser.rejected]: state => {
         console.log('rejected');
         state.isLoading = false;
      },
      [postEditUser.pending]: state => {
         console.log(`Pending ${state}`);
      },
      [postEditUser.fulfilled]: (state, action) => {
         console.log(state, action);
      },
      [postEditUser.rejected]: state => {
         console.log(`Rejected ${state}`);
      }
   }
});

export const { changeLanguage } = homeReducer.actions;
export default homeReducer.reducer;
