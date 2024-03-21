import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tmdbAuthSlice from '../features/tmdb-auth/tmdbAuthSlice';
import { apiSlice } from '../features/api/apiSlice';
import moviesSlice from '../features/movies/moviesSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'movies',
  storage: AsyncStorage,
};

const persistedMovieSlice = persistReducer(persistConfig, moviesSlice);

export const store = configureStore({
  reducer: {
    tmdbAuth: tmdbAuthSlice,
    movies: persistedMovieSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
