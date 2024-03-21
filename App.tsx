import React from 'react';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  return <MainStackNavigator />;
}
