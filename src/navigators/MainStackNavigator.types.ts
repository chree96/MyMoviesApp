import { StackNavigationProp } from '@react-navigation/stack';
import { Screen } from '../constants/Screen';

type RootStackParamList = {
  [Screen.Home]: undefined;
  [Screen.MovieDetails]: undefined;
  [Screen.Lists]: undefined;
  [Screen.Search]: undefined;
};
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screen.Home
>;
export type MovieDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screen.MovieDetails
>;
export type ListsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screen.Lists
>;
export type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screen.Search
>;
