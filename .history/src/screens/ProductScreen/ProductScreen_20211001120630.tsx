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
      <Picker
        style={{
        //   fontSize: 14,
        //   paddingHorizontal: 10,
        //   paddingVertical: 8,
        //   borderWidth: 1,
        //   borderColor: 'blue',
        //   borderRadius: 8,
        //   color: 'black',
        //   paddingRight: 30, // to ensure the text is never behind the icon
        }}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
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
