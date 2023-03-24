import { createSlice } from '@reduxjs/toolkit';
import { getUserLogin } from '../thunks/loginThunk';

const loginReducer = createSlice({
   name: 'login',
   initialState: {
      userLogin: null,
      isLoading: false
   },
   reducers: {
      // changeLanguage: (state, action) => {
      //    state.language = action.payload;
      // }
   },
   extraReducers: {
      [getUserLogin.pending]: state => {
         console.log('get user login pending');
         state.isLoading = true;
      },
      [getUserLogin.fulfilled]: (state, action) => {
         console.log(state, action);
         state.userLogin = state.payload;
         state.isLoading = false;
      },
      [getUserLogin.rejected]: state => {
         console.log('rejected');
         state.isLoading = false;
      }
   }
});

// export const {  } = loginReducer.actions;
export default loginReducer.reducer;
