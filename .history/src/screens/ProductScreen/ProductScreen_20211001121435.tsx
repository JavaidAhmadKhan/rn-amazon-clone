import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';
import product from '../../data/product';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  console.log(selectedOption);
  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>
      {/* Image Coursel */}

      {/* Option Selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}
        style={{
          flex: 1,
          backgroundColor: '#d1d1d1',
          alignItems: 'center',
          justifyContent: 'center',
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
