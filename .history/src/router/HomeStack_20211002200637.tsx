import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNav from './BottomTabNav';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name="HomeTabs" />
    </Stack.Navigator>
  );
};

export default HomeStack;
