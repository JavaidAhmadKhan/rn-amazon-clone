import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ShoppingCartScreen from '../screens/ShopppingCartScreen/ShopppingCartScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator showLabel={false}>
      <Tab.Screen component={HomeScreen} name="home" />
      <Tab.Screen component={HomeScreen} name="profile" />
      <Tab.Screen component={ShoppingCartScreen} name="shoppingCart" />
      <Tab.Screen component={HomeScreen} name="more" />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
