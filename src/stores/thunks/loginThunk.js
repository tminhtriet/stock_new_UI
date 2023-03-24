import { createAsyncThunk } from '@reduxjs/toolkit';
import { useLoginQuery } from '../../api/loginAPI';

export const getUserLogin = createAsyncThunk('login/getUserLogin', async () => {
   const response = await useLoginQuery();
   return response.data;
});
