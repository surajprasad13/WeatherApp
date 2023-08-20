import {createSlice} from '@reduxjs/toolkit';
import {WeatherResponse} from '../../types/weather';

interface WeatherState {
  current: null | WeatherResponse;
}

const initialState: WeatherState = {
  current: null,
};

const slice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = slice.actions;

export default slice.reducer;
