import React from 'react';
import {View, FlatList, Image, useWindowDimensions} from 'react-native';

import styles from './styles';

const ImageCarousel = ({images}: {images: [string]}) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default ImageCarousel;
