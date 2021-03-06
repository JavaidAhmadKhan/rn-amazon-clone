import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
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
          <Text>{item.ratings}</Text>
        </View>
        {/* Price */}
        <Text style={styles.price}>
          from ₹{item.price}
          <Text style={styles.oldPrice}> ₹{item.oldPrice}</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
