import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ProductItem from '../../components/ProductItem/ProductItem';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import products from '../../data/cart';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({item}) => (<ProductItem item={item.item} />
        //render quantity selector
            )}
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
