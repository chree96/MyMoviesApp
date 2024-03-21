import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 240,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    marginTop: 24,
    borderColor: 'grey',
    borderWidth: 1,
  },
  flex: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  titleContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  title: {
    color: colors.solidWhite,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
