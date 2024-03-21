import { useCallback, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectFavoriteMovies,
  selectWatchListMovies,
  setSelectedMovie,
} from '../../features/movies/moviesSlice';
import { ListsScreenNavigationProp } from '../../navigators/MainStackNavigator.types';
import { Screen } from '../../constants/Screen';
import { Movie } from '../../features/movies/moviesSlice.types';

export const useListsScreen = (navigation: ListsScreenNavigationProp) => {
  const dispatch = useAppDispatch();

  const favoriteMovies = useAppSelector(selectFavoriteMovies);
  const watchListMovies = useAppSelector(selectWatchListMovies);

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'favorites', title: 'Favorites' },
    { key: 'watchList', title: 'WatchList' },
  ]);

  const goToMovieDetails = useCallback(
    (movie: Movie) => {
      dispatch(setSelectedMovie(movie));
      navigation.navigate(Screen.MovieDetails);
    },
    [dispatch, navigation],
  );

  return {
    layout,
    index,
    setIndex,
    routes,
    favoriteMovies,
    watchListMovies,
    goToMovieDetails,
  };
};
