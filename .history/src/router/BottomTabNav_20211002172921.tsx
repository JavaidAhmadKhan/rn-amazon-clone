import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ShoppingCartScreen from '../screens/ShopppingCartScreen/ShopppingCartScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen component={HomeScreen} name="home" />
      <Tab.Screen component={HomeScreen} name="profile" />
      <Tab.Screen component={ShoppingCartScreen} name="shoppingCart" />
      <Tab.Screen component={HomeScreen} name="more" />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
