import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ShoppingCartScreen from '../screens/ShopppingCartScreen/ShopppingCartScreen';
import AddressScreen from '../screens/AddressScreen/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoppingCartScreen}
        name="cart"
        options={{title: 'Home'}}
      />

      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
