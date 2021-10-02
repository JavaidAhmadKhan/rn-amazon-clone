import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCartScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoppingCartScreen}
        name="HomeScreen"
        options={{title: 'Home'}}
      />

      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
