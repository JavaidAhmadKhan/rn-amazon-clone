import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNav from './BottomTabNav';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={BottomTabNav} name="HomeTabs" />
    </Stack.Navigator>
  );
};

export default HomeStack;
