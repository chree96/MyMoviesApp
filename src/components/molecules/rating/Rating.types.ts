import { StyleProps, ViewStyle } from 'react-native';

export interface RatingProps {
  style: StyleProps<ViewStyle>;
  voteAverage: number;
  voteCount: number;
}
