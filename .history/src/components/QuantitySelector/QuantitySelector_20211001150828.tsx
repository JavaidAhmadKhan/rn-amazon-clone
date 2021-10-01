import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';

const QuantitySelector = () => {
  const onMinus = () => {};
  const onPlus = () => {};
  return (
    <View>
      <Pressable onPress={onMinus}>
        <Text>-</Text>
      </Pressable>
      <Text>0</Text>
      <Pressable onPress={onPlus}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
