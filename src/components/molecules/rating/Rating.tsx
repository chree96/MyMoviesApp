import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Rating.styles';
import { Star } from '../../atoms/svg';
import { RatingProps } from './Rating.types';

export default function Rating({ voteAverage, voteCount, style }: RatingProps) {
  return (
    <View style={style}>
      <Text style={styles.title}>Rating</Text>

      <View style={styles.rowContainer}>
        <Star width={62} />
        <View style={styles.voteContainer}>
          <Text style={styles.bigTitle}>{voteAverage?.toFixed()}</Text>
          <Text style={styles.descriptionSmall}>{voteCount + ' reviews'}</Text>
        </View>
      </View>
    </View>
  );
}
