import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainFeeds from './Screens/MainFeed';
import DetailsFeeds from './Screens/DetailsFeed';
import home from './Screens/home';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={MainFeeds} />
        <Stack.Screen name="DetailsFeed" component={DetailsFeeds} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

