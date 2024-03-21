import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.solidBlack,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  input: {
    backgroundColor: colors.darkGrey,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  moviesList: {
    marginHorizontal: 8,
    backgroundColor: colors.solidBlack,
    flex: 1,
  },
  movieItemContainer: {
    borderBottomWidth: 0.2,
    borderBottomColor: colors.doveGrey,
    paddingVertical: 10,
  },
  movieItemText: {
    textAlign: 'center',
  },
});
