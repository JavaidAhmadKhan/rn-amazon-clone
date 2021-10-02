/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import {SafeAreaView, Text, View} from 'react-native';


const Stack = createStackNavigator();

const HeaderComponent = () => {
  return (
    <View>
      <TextInput>Test</TextInput>
    </View>
  );
};

const HomeStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
    </SafeAreaView>
  );
};

export default HomeStack;
