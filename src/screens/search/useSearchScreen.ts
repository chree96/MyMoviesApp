import { useCallback, useEffect, useState } from 'react';
import { SearchScreenNavigationProp } from '../../navigators/MainStackNavigator.types';
import { searchMovie } from '../../features/movies/moviesActions';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectSearchedMovies,
  setSelectedMovie,
} from '../../features/movies/moviesSlice';
import { Movie } from '../../features/movies/moviesSlice.types';
import { Screen } from '../../constants/Screen';

export const useSearchScreen = (navigation: SearchScreenNavigationProp) => {
  const dispatch = useAppDispatch();

  const searchedMovies = useAppSelector(selectSearchedMovies);

  const [text, setText] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (text?.length > 2) {
      setMovies(searchedMovies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedMovies]);

  const onSearchMovies = useCallback(
    (title: string) => {
      setText(title);

      if (title?.length > 2) {
        dispatch(searchMovie(title));
      }
    },
    [dispatch],
  );

  const goToMovieDetails = useCallback(
    (movie: Movie) => {
      dispatch(setSelectedMovie(movie));
      navigation.navigate(Screen.MovieDetails);
    },
    [dispatch, navigation],
  );

  return { movies, text, onSearchMovies, goToMovieDetails };
};
