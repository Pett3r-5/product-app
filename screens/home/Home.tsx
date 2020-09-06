import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProductsList from './ProductsList'
import ProductExpanded from './ProductExpanded'

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export default function Home() {

  return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="ProductsList"
          component={ProductsList}
          options={{ title: 'Products' }}
        />
        <HomeStack.Screen name="ProductExpanded" component={ProductExpanded} options={{ title: 'Product' }}/>
      </HomeStack.Navigator>
  );


}
