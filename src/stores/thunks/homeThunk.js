import { createAsyncThunk } from '@reduxjs/toolkit';
import { useGetListUserQuery, useEditUserQuery } from '../../api/homeAPI';

export const getListUser = createAsyncThunk('home/getListUser', async () => {
   const response = await useGetListUserQuery();
   return response.data;
});

export const postEditUser = createAsyncThunk('home/editUser', async params => {
   const res = await useEditUserQuery(params);
   return res;
});
