import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const homeAPI = createApi({
   reducerPath: 'homeAPI',
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

export const { useLoginQuery } = homeAPI;
