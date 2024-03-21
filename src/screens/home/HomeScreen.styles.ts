import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.solidBlack,
  },
  moviesList: {
    marginHorizontal: 8,
    backgroundColor: colors.solidBlack,
    flex: 1,
    paddingBottom: 100,
  },
  footer: {
    height: 60,
    width: '100%',
    marginTop: 16,
  },
});
