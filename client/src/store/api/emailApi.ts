import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emailApi = createApi({
  reducerPath: 'emailApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:5000/api/email/',
    credentials:"include"
 }),
  endpoints: (builder) => ({
    getEmailLayout: builder.query({
      query: () => 'getEmailLayout',
    }),
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: 'uploadImage',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useGetEmailLayoutQuery, useUploadImageMutation } = emailApi;
