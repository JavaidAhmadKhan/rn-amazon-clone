import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import CartProductItem from '../../components/CartProductItem/CartProductItem';
import products from '../../data/cart';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <View></View>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCartScreen;
