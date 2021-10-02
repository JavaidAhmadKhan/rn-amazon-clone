/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import {SafeAreaView, TextInput, View} from 'react-native';

const Stack = createStackNavigator();

const HeaderComponent = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#48a3c6'}}>
      <View
        style={{
          margin: 10,
          padding: 5,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />
        <TextInput
          style={{height: 40, marginLeft: 10}}
          placeholder="Search..."
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderComponent searchValue={searchValue} />,
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
