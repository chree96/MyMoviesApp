import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  overviewContainer: {
    marginTop: 12,
  },
  bigTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  ratingContainer: {
    marginVertical: 24,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '49%',
    backgroundColor: colors.codGrey,
  },
});
