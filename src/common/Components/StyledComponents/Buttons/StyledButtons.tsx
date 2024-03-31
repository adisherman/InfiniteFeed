import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text14Bold} from '../StyledText';

interface textBottonProps {
  onPress: () => void;
  text: string;
}

export const TextButton = React.memo((props: textBottonProps) => {
  const {onPress, text} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text14Bold>{text}</Text14Bold>
    </TouchableOpacity>
  );
});
