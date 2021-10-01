import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';
import product from '../../data/product';

const ProductScreen = () => {
  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>
      {/* Image Coursel */}

      {/* Option Selector */}
      <Picker>
        {product.options.map(option => (
          <Picker.Item label="color" value="java" />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        from ₹{product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ₹{product.oldPrice}</Text>
        )}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity Selector */}

      {/* Buttons */}
    </View>
  );
};

export default ProductScreen;
