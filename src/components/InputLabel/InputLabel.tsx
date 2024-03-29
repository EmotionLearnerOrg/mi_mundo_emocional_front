import React from 'react';
import { makeInputLabelStyle } from './InputLabel.style';
import { Text } from 'react-native-magnus';

const InputLabel = ({ title, color }: { title: string, color: string }) => {
  const style = makeInputLabelStyle();

  return (
    <Text style={style.text} px={10} fontSize={16} mb={8} color={color}>
      {title}
    </Text>
  );
};

export default InputLabel;
