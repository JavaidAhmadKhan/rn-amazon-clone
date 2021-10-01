import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

const ImageCarousel = ({images}: {images: [string]}) => {
  return (
    <View>
      <Text>Images</Text>
      <FlatList
      data={images}
      renderItem={({item} => (
          <Image style={styles.image} source={{uri: item}}
      ))}
      />
    </View>
  );
};

export default ImageCarousel;
