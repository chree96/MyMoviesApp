import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Movie, MoviesState } from './moviesSlice.types';
import { RootState } from '../../app/store';
import { searchMovie } from './moviesActions';

const initialState: MoviesState = {
  isLoading: false,
  favoriteMovies: [],
  watchListMovies: [],
  searchedMovies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<Movie>) => {
      state.selectedMovie = action?.payload;
    },
    // watchlist reducers
    addToWatchList: (state, action: PayloadAction<Movie>) => {
      state.watchListMovies.push(action.payload);
    },
    removeFromWatchList: (state, action: PayloadAction<number>) => {
      const updatedWatchListMovies = state.watchListMovies.filter(
        movie => movie.id !== action.payload,
      );
      state.watchListMovies = updatedWatchListMovies;
    },
    // favorites reducers
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      state.favoriteMovies.push(action?.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      const updatedFavoriteMovies = state.favoriteMovies.filter(
        movie => movie.id !== action.payload,
      );
      state.favoriteMovies = updatedFavoriteMovies;
    },
  },
  extraReducers: builder => {
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.searchedMovies = action.payload;
    });
  },
});

export const {
  setSelectedMovie,
  addToFavorites,
  removeFromFavorites,
  addToWatchList,
  removeFromWatchList,
} = moviesSlice.actions;

export const selectSelectedMovie = (state: RootState) =>
  state.movies.selectedMovie as Movie;
export const selectIsWatchListMovie = (state: RootState) => {
  const { selectedMovie, watchListMovies } = state.movies;

  return (
    watchListMovies?.findIndex(movie => movie.id === selectedMovie?.id) !== -1
  );
};
export const selectIsFavoriteMovie = (state: RootState) => {
  const { selectedMovie, favoriteMovies } = state.movies;

  return (
    favoriteMovies?.findIndex(movie => movie.id === selectedMovie?.id) !== -1
  );
};
export const selectWatchListMovies = (state: RootState) =>
  state.movies.watchListMovies;
export const selectFavoriteMovies = (state: RootState) =>
  state.movies.favoriteMovies;
export const selectSearchedMovies = (state: RootState) =>
  state.movies.searchedMovies;

export default moviesSlice.reducer;
