import React from 'react';
import { styles } from './MovieDetails.styles';
import { Text, View } from 'react-native';
import Rating from '../../molecules/rating';
import Button from '../../atoms/button/Button';
import { colors } from '../../../styles';
import { MovieDetailsProps } from './MovieDetails.types';

export default function MovieDetails({
  title,
  overview,
  voteAverage,
  voteCount,
  watchListBtnIcon,
  favoriteBtnIcon,
  style,
  onWatchListPress,
  onFavoritesPress,
}: MovieDetailsProps) {
  return (
    <View style={[styles.detailsContainer, style]}>
      <Text style={styles.bigTitle}>{title}</Text>

      <View style={styles.overviewContainer}>
        <Text style={styles.title}>Overview</Text>
        <Text style={styles.description}>{overview}</Text>
      </View>

      <Rating
        voteAverage={voteAverage}
        voteCount={voteCount}
        style={styles.ratingContainer}
      />

      <View style={styles.buttonsContainer}>
        <Button
          text={'WATCHLIST'}
          iconName={watchListBtnIcon}
          textColor={colors.solidWhite}
          style={styles.button}
          onPress={() => onWatchListPress()}
        />
        <Button
          text={'FAVORITES'}
          iconName={favoriteBtnIcon}
          textColor={colors.solidWhite}
          style={styles.button}
          onPress={() => onFavoritesPress()}
        />
      </View>
    </View>
  );
}
