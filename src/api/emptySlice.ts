import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import Config from 'react-native-config';

export const emptySplitApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
    prepareHeaders: async (headers, {}) => {
      const key = Config.API_KEY;
      if (key) {
        headers.append('appid', key);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
