import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './HomeHeader.styles';
import { HomeHeaderProps } from './HomeHeader.types';
import IconButton from '../../atoms/icon-button';

export default function HomeHeader({
  onListPress,
  onSearchPress,
}: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyMovies</Text>
      <View style={styles.buttonsContainer}>
        <IconButton
          iconName="lens"
          noBackgroundColor
          onPress={() => onSearchPress()}
        />
        <IconButton
          iconName="favorites"
          noBackgroundColor
          onPress={() => onListPress()}
        />
      </View>
    </View>
  );
}
