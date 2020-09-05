import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProductsList from './ProductsList'
import ProductExpanded from './ProductExpanded'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsList"
          component={ProductsList}
          options={{ title: 'Products' }}
        />
        <Stack.Screen name="ProductExpanded" component={ProductExpanded} options={{ title: 'Product' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );


}
