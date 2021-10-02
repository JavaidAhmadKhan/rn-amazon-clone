import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNav from './BottomTabNav';

const Root = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen component={BottomTabNav} name="HomeTabs" />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
