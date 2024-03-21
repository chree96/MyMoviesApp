import { useCallback, useEffect, useState } from 'react';
import { Screen } from '../../constants/Screen';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUserToken } from '../../features/tmdb-auth/tmdbAuthSlice';
import { retrieveUserToken } from '../../features/tmdb-auth/tmdbAuthActions';
import { useFetchHomeMoviesQuery } from '../../features/api/apiSlice';
import { setSelectedMovie } from '../../features/movies/moviesSlice';
import { Movie } from '../../features/movies/moviesSlice.types';
import { HomeScreenNavigationProp } from '../../navigators/MainStackNavigator.types';

export const useHome = (navigation: HomeScreenNavigationProp) => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);
  const { data, isFetching, isError } = useFetchHomeMoviesQuery(page);

  const userToken = useAppSelector(selectUserToken);

  const [homeMovies, setHomeMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (!isFetching && !isError) {
      setHomeMovies(prevMovies => [...prevMovies, ...data?.results]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFetching]);

  useEffect(() => {
    if (!userToken) {
      dispatch(retrieveUserToken());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToMovieDetails = useCallback(
    (movie: Movie) => {
      dispatch(setSelectedMovie(movie));
      navigation.navigate(Screen.MovieDetails);
    },
    [dispatch, navigation],
  );

  const goToLists = useCallback(() => {
    navigation.navigate(Screen.Lists);
  }, [navigation]);

  const onListEnd = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const goToSearch = useCallback(() => {
    navigation.navigate(Screen.Search);
  }, [navigation]);

  return {
    isFetching,
    homeMovies,
    goToMovieDetails,
    goToLists,
    onListEnd,
    goToSearch,
  };
};
