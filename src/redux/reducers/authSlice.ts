import {createSlice} from '@reduxjs/toolkit';
import type {User} from '../../types/auth';

type AuthState = {
  user: User | null;
};

const initialState: AuthState = {
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
  extraReducers: () => {},
});

export const {setUser, logout} = slice.actions;

export default slice.reducer;
