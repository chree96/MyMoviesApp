import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.solidBlack,
    flex: 1,
  },
  tabBar: {
    backgroundColor: colors.solidBlack,
    borderWidth: 0,
  },
  tabView: {
    paddingHorizontal: 16,
  },
  tabBarLabel: {
    justifyContent: 'center',
    paddingBottom: 8,
    borderBottomWidth: 2,
  },
  tabBarText: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  emptyList: {
    alignSelf: 'center',
    marginTop: 120,
  },
});
