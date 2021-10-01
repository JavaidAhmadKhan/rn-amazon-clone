import React from 'react';
import {View, StyleSheet} from 'react-native';

import ProductItem from '../../components/ProductItem/ProductItem';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <ProductItem />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
