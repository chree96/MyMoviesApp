import React, { memo, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './ListsScreen.styles';
import { ListsScreenProps } from './ListsScreen.types';
import { useListsScreen } from './useListsScreen';
import { Movie } from '../../features/movies/moviesSlice.types';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { colors } from '../../styles';
import MovieCard from '../../components/molecules/movie-card';
import { EmptyList } from '../../components/atoms/svg';

const ListsScreen = memo<ListsScreenProps>(({ navigation }) => {
  const {
    layout,
    index,
    setIndex,
    routes,
    favoriteMovies,
    watchListMovies,
    goToMovieDetails,
  } = useListsScreen(navigation);

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

  const FavoritesRoute = useCallback(
    () => (
      <FlatList
        renderItem={renderHomeMovies}
        data={favoriteMovies}
        keyExtractor={item => 'favorite-movie-' + item?.id}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <EmptyList />
          </View>
        )}
      />
    ),
    [favoriteMovies, renderHomeMovies],
  );

  const WatchListRoute = useCallback(
    () => (
      <FlatList
        renderItem={renderHomeMovies}
        data={watchListMovies}
        keyExtractor={item => 'watchList-movie-' + item?.id}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <EmptyList />
          </View>
        )}
      />
    ),
    [watchListMovies, renderHomeMovies],
  );

  const renderScene = SceneMap({
    favorites: FavoritesRoute,
    watchList: WatchListRoute,
  });

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={({ route, focused, color }) => (
              <View
                style={[
                  styles.tabBarLabel,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    width: layout.width / 2,
                    borderBottomColor: focused
                      ? colors.solidWhite
                      : colors.solidBlack,
                  },
                ]}>
                <Text
                  style={[
                    styles.tabBarText,
                    {
                      color,
                    },
                  ]}>
                  {route.title}
                </Text>
              </View>
            )}
            tabStyle={styles.tabBar}
            activeColor={colors.solidWhite}
            inactiveColor={colors.doveGrey}
          />
        )}
        initialLayout={{ width: layout.width }}
        sceneContainerStyle={styles.tabView}
      />
    </View>
  );
});

export default ListsScreen;
