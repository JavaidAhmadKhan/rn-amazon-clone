import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const ProductItem = (props: ProductItemProps) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
        }}
      />
      <View style={styles.rightContainer}>
        {/* Title */}
        <Text style={styles.title} numberOfLines={3}>
          Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color="#e47911"
          />
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color="#e47911"
          />
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color="#e47911"
          />
          <FontAwesome
            style={styles.star}
            name="star-half-full"
            size={18}
            color="#e47911"
          />
          <FontAwesome
            style={styles.star}
            name="star-o"
            size={18}
            color="#e47911"
          />
          <Text>12,321</Text>
        </View>
        {/* Price */}
        <Text style={styles.price}>
          from ₹950
          <Text style={styles.oldPrice}> ₹870</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
