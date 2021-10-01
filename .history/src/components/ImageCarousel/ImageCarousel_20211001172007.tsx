import React from 'react';
import {View, FlatList, Image, useWindowDimensions} from 'react-native';

import styles from './styles';

const ImageCarousel = ({images}: {images: [string]}) => {
    const windowWidth = useWindowDimensions().width
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image style={styles.image} source={{uri: item}} />
        )}
        horizontal
      />
    </View>
  );
};

export default ImageCarousel;
