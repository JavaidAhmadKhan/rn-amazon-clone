import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BottomTabNav from './BottomTabNav';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen component={BottomTabNav} name="Home" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
