import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import ProductScreen from './src/screens/ProductScreen/ProductScreen';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ProductScreen />
    </SafeAreaView>
  );
};

export default App;
