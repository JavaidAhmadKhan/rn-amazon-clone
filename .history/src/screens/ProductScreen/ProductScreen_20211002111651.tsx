import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import Button from '../../components/Button/Button';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      {/* Image Coursel */}
      <ImageCarousel images={product.images} />
      {/* Option Selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
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
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button text={'Add to Cart'} onPress={() => {}} />
      <Button
        text={'But Now'}
        onPress={() => {}}
        containerStyles={{backgroundColor: '#fb641b'}}
      />
    </ScrollView>
  );
};

export default ProductScreen;
