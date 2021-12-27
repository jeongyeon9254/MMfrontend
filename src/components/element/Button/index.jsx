import React from 'react';
import styled from 'styled-components';
import { BtnGenderStyle, BtnBottomStyle, BtnIconStyle, BtnRoundStyle, BtnTagStyle } from './module';

const Button = props => {
  const {
    height,
    width,
    children,
    _onClick,
    color,
    padding,
    margin,
    size,
    BtnBottom,
    BtnIcon,
    BtnRound,
    BtnTag,
    BtnGender,
  } = props;

  const styles = {
    width,
    color,
    padding,
    margin,
    size,
    height,
  };

  if (BtnGender) {
    return (
      <BtnGenderStyle {...styles} onClick={_onClick}>
        {children}
      </BtnGenderStyle>
    );
  }

  if (BtnBottom) {
    return (
      <BtnBottomStyle {...styles} onClick={_onClick}>
        {children}
      </BtnBottomStyle>
    );
  }

  if (BtnIcon) {
    return (
      <BtnIconStyle {...styles} onClick={_onClick}>
        {children}
      </BtnIconStyle>
    );
  }

  if (BtnRound) {
    return (
      <BtnRoundStyle {...styles} onClick={_onClick}>
        {children}
      </BtnRoundStyle>
    );
  }

  if (BtnTag) {
    return (
      <BtnTagStyle {...styles} onClick={_onClick}>
        {children}
      </BtnTagStyle>
    );
  }

  return (
    <ButtonStyle {...styles} onClick={_onClick}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  width: null,
  color: null,
  padding: '10px',
};

const ButtonStyle = styled.button`
  padding: ${props => props.padding};
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin: ${props => props.margin};
  width: 100%;
  box-sizing: border-box;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
`;

export default Button;
