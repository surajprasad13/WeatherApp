// api.js
import {emptySplitApi} from './emptySlice';

import Config from 'react-native-config';

export const api = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    current: builder.mutation({
      query: data => ({
        url: 'weather',
        params: {
          ...data,
          appid: Config.API_KEY,
        },
        method: 'GET',
      }),
    }),
  }),
});

export const {useCurrentMutation} = api;
