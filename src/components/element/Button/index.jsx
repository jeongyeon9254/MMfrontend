import React from 'react';
import styled from 'styled-components';
import { BtnTextStyle, BtnBottomStyle, BtnIconStyle, BtnRoundStyle, BtnTagStyle } from './module';

const Button = props => {
  const {
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
    BtnText,
  } = props;

  const { width, children, _onClick, color, padding } = props;

  const styles = {
    width,
    color,
    padding,
    margin,
    size,
  };

  if (BtnText) {
    return (
      <BtnTextStyle {...styles} onClick={_onClick}>
        {children}
      </BtnTextStyle>
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
  padding: ${props => (props.padding ? props.padding : props.theme.colors.paddings)};
  background-color: ${props => (props.color ? props.color : props.theme.colors.white)};
  margin: ${props => (props.margin ? props.margin : props.theme.colors.margins)};
  width: 100%;
  box-sizing: border-box;
  font-size: ${props => (props.size ? props.size : props.theme.fontSizes.base)};
`;

export default Button;
