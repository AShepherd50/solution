import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from "./RootNavigation";
import 'react-native-gesture-handler';
import PostScreen from "./PostScreen";
import Post from './Post'

const AppStack = createStackNavigator()

export function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Post"
          component={Post}
        />
        <AppStack.Screen
          name="Details"
          component={PostScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
