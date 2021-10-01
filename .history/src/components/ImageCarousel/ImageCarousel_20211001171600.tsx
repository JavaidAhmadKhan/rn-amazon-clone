import React from 'react';
import {View, FlatList, Image} from 'react-native';

const ImageCarousel = ({images}: {images: [string]}) => {
  return (
    <View>
      
      <FlatList
      data={images}
      renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item}} 
      />
    </View>
  );
};

export default ImageCarousel;
