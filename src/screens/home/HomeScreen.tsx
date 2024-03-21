import React, { memo, useCallback } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './HomeScreen.styles';
import { HomeScreenProps } from './HomeScreen.types';
import { useHome } from './useHomeScreen';
import { Movie } from '../../features/movies/moviesSlice.types';
import MovieCard from '../../components/molecules/movie-card';
import HomeHeader from '../../components/molecules/home-header';
import { colors } from '../../styles';

const HomeScreen = memo<HomeScreenProps>(({ navigation }) => {
  const {
    isFetching,
    homeMovies,
    goToMovieDetails,
    goToLists,
    onListEnd,
    goToSearch,
  } = useHome(navigation);

  const renderHomeMovies = useCallback(
    ({ item }: { item: Movie }) => (
      <MovieCard
        title={item?.title}
        imageUri={item?.backdrop_path}
        onCardPress={() => goToMovieDetails(item)}
      />
    ),
    [goToMovieDetails],
  );

  const FlatListFooter = useCallback(
    () => (
      <View style={styles.footer}>
        {isFetching ? (
          <ActivityIndicator
            animating={true}
            size={'large'}
            color={colors.solidWhite}
          />
        ) : null}
      </View>
    ),
    [isFetching],
  );

  return (
    <View style={styles.container}>
      <HomeHeader
        onListPress={() => goToLists()}
        onSearchPress={() => goToSearch()}
      />
      {/* POST LIST */}
      <FlatList
        renderItem={renderHomeMovies}
        data={homeMovies}
        keyExtractor={item => 'movie-' + item?.id}
        style={styles.moviesList}
        onEndReached={onListEnd}
        onEndReachedThreshold={0.8}
        ListFooterComponent={FlatListFooter}
      />
    </View>
  );
});

export default HomeScreen;
