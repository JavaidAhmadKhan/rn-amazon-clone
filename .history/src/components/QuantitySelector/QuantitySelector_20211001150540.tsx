import React from 'react';
import {View, Text, Pressable} from 'react-native';

const QuantitySelector = () => {
  const onMinus = () => {};
  return (
    <View>
      <Pressable onPress={onMinus}>
        <Text>-</Text>
      </Pressable>
      <Text>0</Text>
      <Pressable onPress={onMinus}>
        <Text>-</Text>
      </Pressable>
      <Text>0</Text>
    </View>
  );
};

export default QuantitySelector;
