import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginAPI = createApi({
   reducerPath: 'loginAPI',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://' }),
   endpoints: builder => ({
      login: builder.query({
         query: body => ({
            url: 'login',
            method: 'POST',
            body
         })
      })
   })
});

export const { useLoginQuery } = loginAPI;
