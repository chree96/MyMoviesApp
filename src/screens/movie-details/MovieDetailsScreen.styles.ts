import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.solidBlack,
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 9999,
  },
  image: {
    width: '100%',
    height: 240,
  },
  movieDetailsContainer: {
    paddingHorizontal: 8,
  },
});
