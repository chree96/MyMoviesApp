import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  title: {
    color: colors.solidWhite,
    fontWeight: 'bold',
    fontSize: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
