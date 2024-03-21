import React, { memo, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './SearchScreen.styles';
import { useSearchScreen } from './useSearchScreen';
import { SearchScreenProps } from './SearchScreen.types';

const SearchScreen = memo<SearchScreenProps>(({ navigation }) => {
  const { movies, text, onSearchMovies, goToMovieDetails } =
    useSearchScreen(navigation);

  const renderSearchedMovies = useCallback(
    ({ item }) =>
      item?.title ? (
        <TouchableOpacity
          style={styles.movieItemContainer}
          onPress={() => goToMovieDetails(item)}>
          <Text style={styles.movieItemText}>{item?.title}</Text>
        </TouchableOpacity>
      ) : null,
    [goToMovieDetails],
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        placeholder={'Search movies'}
        onChangeText={(value: string) => onSearchMovies(value)}
        autoCapitalize
        style={styles.input}
      />

      <FlatList
        renderItem={renderSearchedMovies}
        data={movies}
        keyExtractor={item => 'searched-movie-' + item?.id}
        style={styles.moviesList}
      />
    </View>
  );
});

export default SearchScreen;
