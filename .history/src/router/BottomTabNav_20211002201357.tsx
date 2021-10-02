import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ShoppingCartScreen from '../screens/ShopppingCartScreen/ShopppingCartScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: '#fff',
        activeTintColor: '#48a3c6',
      }}>
      <Tab.Screen
        component={HomeStack}
        name="home"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="profile"
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="user" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingCartScreen}
        name="shoppingCart"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="cart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="more"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
