import React from 'react';
import {View, Text} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => {};
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Button;
