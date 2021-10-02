import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ShoppingCartScreen from '../screens/ShopppingCartScreen/ShopppingCartScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        component={HomeScreen}
        name="home"
        options={{
            tabBarIcon:({color}) => <Entypo name="home" color={color} size={18} />
        }}
        
      />
      <Tab.Screen component={HomeScreen} name="profile" />
      <Tab.Screen component={ShoppingCartScreen} name="shoppingCart" />
      <Tab.Screen component={HomeScreen} name="more" />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
