/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

const Stack = createStackNavigator();

const HeaderComponent = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <TextInput />
      
    </SafeAreaView>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderComponent />,
      }}>
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{title: 'Home'}}
      />

      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default HomeStack;
