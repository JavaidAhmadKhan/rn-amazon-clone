import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import CartProductItem from '../../components/CartProductItem/CartProductItem';
import Button from '../../components/Button/Button';
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
          Subtotal ({products.length} items):{' '}
          <Text style={{color: '#e47911', fontWeight: 'bold'}}>
            ₹{totalPrice.toFixed(0)}
          </Text>
        </Text>
        <Button
          text="Proceed to checkout"
          onPress={() => console.warn('Proceed to checkout')}
          containerStyles={{backgroundColor: '#bfa92c', borderColor: '#7a7138'}}
        />
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        
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
