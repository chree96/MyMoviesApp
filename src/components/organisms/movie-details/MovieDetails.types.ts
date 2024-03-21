import { StyleProps, ViewStyle } from 'react-native';

export interface MovieDetailsProps {
  title: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
  watchListBtnIcon: string;
  favoriteBtnIcon: string;
  style?: StyleProps<ViewStyle>;
  onWatchListPress: () => void;
  onFavoritesPress: () => void;
}
