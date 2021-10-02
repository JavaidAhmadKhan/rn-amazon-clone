/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import {SafeAreaView, TextInput, View} from 'react-native';

const Stack = createStackNavigator();

const HeaderComponent = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#48a3c6'}}>
      <View  style={{height: 40, margin: 10, padding: 5, backgroundColor: 'white'}}>
        <TextInput
         
          placeholder="Search..."
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderComponent />,
      }}>
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{title: 'Home'}}
      />

      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default HomeStack;
