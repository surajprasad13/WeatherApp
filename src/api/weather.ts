// api.js
import {HourlyResponse, WeatherResponse} from '../types/weather';
import {emptySplitApi} from './emptySlice';

import Config from 'react-native-config';

export const api = emptySplitApi.injectEndpoints({
  endpoints: builder => ({
    current: builder.mutation<WeatherResponse, any>({
      query: data => ({
        url: 'weather',
        params: {
          ...data,
          appid: Config.API_KEY,
          units: 'metric',
        },
        method: 'GET',
      }),
    }),

    hourly: builder.mutation<HourlyResponse, any>({
      query: data => ({
        url: 'forecast',
        params: {
          ...data,
          appid: Config.API_KEY,
          units: 'metric',
        },
        method: 'GET',
      }),
    }),
  }),
});

export const {useCurrentMutation, useHourlyMutation} = api;
