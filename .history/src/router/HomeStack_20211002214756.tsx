/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import {SafeAreaView, Text} from 'react-native';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          header: () => <Text>Test</Text>,
        }}>
        <Stack.Screen
          component={HomeScreen}
          name="HomeScreen"
          options={{title: 'Home'}}
        />

        <Stack.Screen component={ProductScreen} name="ProductDetails" />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default HomeStack;
