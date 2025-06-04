// components/button.tsx
import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import tailwind from 'twrnc';

type ButtonProps = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ text, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={tailwind`bg-blue-600 px-4 py-2 rounded-lg ${disabled ? 'opacity-50' : ''}`}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={tailwind`text-white text-center font-semibold`}>{text}</Text>
    </TouchableOpacity>
  );
};
