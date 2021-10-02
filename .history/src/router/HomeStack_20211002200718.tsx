import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNav from './BottomTabNav';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={ProductScreen} name="HomeTabs" />
    </Stack.Navigator>
  );
};

export default HomeStack;
