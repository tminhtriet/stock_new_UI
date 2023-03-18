import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useLoginQuery } from '../../api/homeAPI';

const getUserLogin = createAsyncThunk('getUserLogin', async (username, password) => {
   const response = await useLoginQuery({ username, password });
   return response.data;
});

const homeReducer = createSlice({
   name: 'homeReducer',
   initialState: {
      language: 'vn'
   },
   reducers: {
      changeLanguage: (state, action) => {
         state.language = action.payload;
      }
   },
   extraReducers: builder => {
      builder.addCase(getUserLogin.fulfilled, (state, action) => {
         console.log(state, action);
      });
   }
});

export const { changeLanguage } = homeReducer.actions;
export default homeReducer.reducer;
