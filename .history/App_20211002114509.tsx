import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';


import AddressScreen from './src/screens/AddressScreen/AddressScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import ProductScreen from './src/screens/ProductScreen/ProductScreen';
import ShoppingCartScreen from './src/screens/ShopppingCartScreen/ShopppingCartScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <HomeScreen /> */}
      <AddressScreen />
    </SafeAreaView>
  );
};

export default App;
