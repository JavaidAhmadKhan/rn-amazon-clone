import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity, item} = cartItem;
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.rightContainer}>
        {/* Title */}
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((e, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color="#e47911"
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        {/* Price */}
        <Text style={styles.price}>
          from ₹{item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}> ₹{item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default CartProductItem;
