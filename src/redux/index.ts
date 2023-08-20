import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import {api} from '../api'; // Import your API slice
import {setupListeners} from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authSlice from './reducers/authSlice';

const persistConfig = {
  key: 'root', // Key for the storage
  storage: AsyncStorage, // Storage engine to use
  whitelist: ['auth'], // List of reducers to persist
  // You can also use blacklist to exclude certain reducers from persisting
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [api.reducerPath]: api.reducer,
    auth: authSlice,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
