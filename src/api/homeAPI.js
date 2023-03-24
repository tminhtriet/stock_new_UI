import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const homeAPI = createApi({
   reducerPath: 'homeAPI',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://' }),
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
