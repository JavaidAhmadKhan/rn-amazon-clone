import React from 'react';
import {View, Text, FlatList} from 'react-native';

const ImageCarousel = ({images}) => {
  return (
    <View>
      <Text>Images</Text>
      <FlatList
      data={images}
      renderItem={({item} => )}
      />
    </View>
  );
};

export default ImageCarousel;
