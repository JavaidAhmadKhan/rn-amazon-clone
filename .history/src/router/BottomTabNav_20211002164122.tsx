import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeScreen} name="Home" />
    </Tab.Navigator>
  );
};

export default Router;
