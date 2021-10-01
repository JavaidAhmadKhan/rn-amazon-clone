import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
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
            <FontAwesome name="start" size={18} color="e47911" />
          </View>
          {/* Price */}
          <Text style={styles.price}>from ₹950</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingsContainer: {},
});

export default HomeScreen;
