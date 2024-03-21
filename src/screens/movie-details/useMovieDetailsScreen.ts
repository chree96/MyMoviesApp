import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addToFavorites,
  addToWatchList,
  removeFromFavorites,
  removeFromWatchList,
  selectIsFavoriteMovie,
  selectIsWatchListMovie,
  selectSelectedMovie,
} from '../../features/movies/moviesSlice';
import { MovieDetailsScreenNavigationProp } from '../../navigators/MainStackNavigator.types';
import { Screen } from '../../constants/Screen';

export const useMovieDetailsScreen = (
  navigation: MovieDetailsScreenNavigationProp,
) => {
  const dispatch = useAppDispatch();
  const movieDetails = useAppSelector(selectSelectedMovie);
  const isFavoriteMovie = useAppSelector(selectIsFavoriteMovie);
  const isWatchListMovie = useAppSelector(selectIsWatchListMovie);

  const watchListBtnIcon = useMemo(
    () => (isWatchListMovie ? 'check' : 'addCircle'),
    [isWatchListMovie],
  );

  const favoriteBtnIcon = useMemo(
    () => (isFavoriteMovie ? 'heart' : 'outLineHeart'),
    [isFavoriteMovie],
  );

  const onGoBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate(Screen.Home);
    }
  }, [navigation]);

  const onFavoritesPress = useCallback(() => {
    if (isFavoriteMovie) {
      dispatch(removeFromFavorites(movieDetails?.id));
    } else {
      dispatch(addToFavorites(movieDetails));
    }
  }, [dispatch, isFavoriteMovie, movieDetails]);

  const onWatchListPress = useCallback(() => {
    if (isWatchListMovie) {
      dispatch(removeFromWatchList(movieDetails?.id));
    } else {
      dispatch(addToWatchList(movieDetails));
    }
  }, [dispatch, isWatchListMovie, movieDetails]);

  return {
    movieDetails,
    favoriteBtnIcon,
    watchListBtnIcon,
    onGoBack,
    onFavoritesPress,
    onWatchListPress,
  };
};
