// api.js
import {emptySplitApi} from './emptySlice';

export const api = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    // Define your endpoints here
    login: builder.mutation<any, any>({
      query: loginData => ({
        url: 'user/login',
        method: 'POST',
        body: loginData,
      }),
    }),
    register: builder.mutation({
      query: registerData => ({
        url: 'landing/auth/register',
        method: 'POST',
        body: registerData,
      }),
    }),
    user: builder.query({
      query: () => ({
        url: 'user',
      }),
    }),
    // Add more endpoints as needed
  }),
});

export const {useLoginMutation, useRegisterMutation, useUserQuery} = api;
