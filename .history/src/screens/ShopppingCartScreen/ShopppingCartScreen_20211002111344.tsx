import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import CartProductItem from '../../components/CartProductItem/CartProductItem';
import products from '../../data/cart';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <View>
        <Text style={{fontSize: 18}}>
          Subtotal ({products.length} items):
          <Text style={{color: '#111'}}>₹{totalPrice.toFixed(0)}</Text>
        </Text>
      </View>
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
