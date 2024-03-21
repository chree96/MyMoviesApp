import React, { memo } from 'react';
import { ScrollView, Image } from 'react-native';
import { styles } from './MovieDetailsScreen.styles';
import { MovieDetailsScreenProps } from './MovieDetailsScreen.types';
import { useMovieDetailsScreen } from './useMovieDetailsScreen';
import { TmdbBaseImageAddress } from '../../services/http/HttpService';
import IconButton from '../../components/atoms/icon-button';
import MovieDetails from '../../components/organisms/movie-details';

const MovieDetailsScreen = memo<MovieDetailsScreenProps>(({ navigation }) => {
  const {
    movieDetails,
    favoriteBtnIcon,
    watchListBtnIcon,
    onGoBack,
    onFavoritesPress,
    onWatchListPress,
  } = useMovieDetailsScreen(navigation);

  return (
    <ScrollView style={styles.container}>
      <IconButton
        iconName="cross"
        backgroundWithOpacity
        style={styles.backButton}
        onPress={() => onGoBack()}
      />
      <Image
        source={{ uri: TmdbBaseImageAddress + movieDetails?.backdrop_path }}
        style={styles.image}
        resizeMode={'cover'}
      />

      <MovieDetails
        title={movieDetails?.title}
        overview={movieDetails?.overview}
        voteAverage={movieDetails?.vote_average}
        voteCount={movieDetails?.vote_count}
        watchListBtnIcon={watchListBtnIcon}
        favoriteBtnIcon={favoriteBtnIcon}
        style={styles.movieDetailsContainer}
        onWatchListPress={onWatchListPress}
        onFavoritesPress={onFavoritesPress}
      />
    </ScrollView>
  );
});

export default MovieDetailsScreen;
