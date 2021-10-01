import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import product from '../../data/product';

const ProductScreen = () => {
  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>
      {/* Image Coursel */}

      {/* Option Selector */}

      {/* Price */}
      <Text style={styles.price}>
          from ₹{item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ₹{item.oldPrice}</Text>
          )}
        </Text>
      {/* Description */}

      {/* Quantity Selector */}

      {/* Buttons */}
    </View>
  );
};

export default ProductScreen;
