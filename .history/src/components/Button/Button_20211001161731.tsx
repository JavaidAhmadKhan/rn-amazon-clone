import React from 'react';
import {View, Text, Pressable} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => {};
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default Button;
