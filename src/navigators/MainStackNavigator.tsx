import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from '../constants/Screen';
import MovieDetailsScreen from '../screens/movie-details';
import ListsScreen from '../screens/lists';
import { colors } from '../styles';
import SearchScreen from '../screens/search';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screen.Home}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screen.MovieDetails}
          component={MovieDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screen.Lists}
          component={ListsScreen}
          options={{
            headerShown: true,
            title: 'MyLists',
            headerStyle: {
              backgroundColor: colors.solidBlack,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: colors.solidWhite,
            },
            headerTintColor: colors.solidWhite,
          }}
        />
        <Stack.Screen
          name={Screen.Search}
          component={SearchScreen}
          options={{
            headerShown: true,
            title: 'Search',
            headerStyle: {
              backgroundColor: colors.solidBlack,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: colors.solidWhite,
            },
            headerTintColor: colors.solidWhite,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
