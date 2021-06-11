import React from 'react';
import {ButtonContainer, Title} from './Button.styles';

const Button = ({title = '', onPress = () => {}}) => {
  return (
    <ButtonContainer testID="button-id" onPress={onPress}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
