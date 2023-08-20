import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/data/2.5/`,
  }),
  endpoints: () => ({}),
});
