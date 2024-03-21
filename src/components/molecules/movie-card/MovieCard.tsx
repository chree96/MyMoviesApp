import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './MovieCard.styles';
import { MovieCardProps } from './MovieCard.types';
import { TmdbBaseImageAddress } from '../../../services/http/HttpService';

export default function MovieCard({
  onCardPress,
  imageUri,
  title,
}: MovieCardProps) {
  return (
    <TouchableOpacity onPress={() => onCardPress()} style={styles.container}>
      <View style={styles.flex}>
        <Image
          source={{ uri: TmdbBaseImageAddress + imageUri }}
          style={styles.image}
          resizeMode={'cover'}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
