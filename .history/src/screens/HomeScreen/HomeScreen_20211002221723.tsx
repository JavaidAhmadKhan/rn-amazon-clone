import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ProductItem from '../../components/ProductItem/ProductItem';
import products from '../../data/products';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  console.log(searchValue);
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
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

export default HomeScreen;
