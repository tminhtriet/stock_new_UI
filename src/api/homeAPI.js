import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/urls';

export const homeAPI = createApi({
   reducerPath: 'homeAPI',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: builder => ({
      getListUser: builder.query({
         query: () => ({
            url: 'ListUser',
            method: 'GET'
         })
      }),
      editUser: builder.query({
         query: body => ({
            url: 'EditUser',
            method: 'POST',
            body
         })
      })
   })
});

export const { useGetListUserQuery, useEditUserQuery } = homeAPI;
