import React from 'react';
import {View, Text, Pressable} from 'react-native';

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
      <Text>1</Text>
    </View>
  );
};

export default QuantitySelector;
