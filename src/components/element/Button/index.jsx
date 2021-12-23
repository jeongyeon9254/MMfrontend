import React from 'react';
import styled from 'styled-components';
import { RedButtonStyle } from './module';

const Button = props => {
  const { width, children, _onClick, color, padding, greenBtn } = props;

  const styles = {
    width,
    color,
    padding,
  };

  if (greenBtn) {
    return (
      <RedButtonStyle {...styles} onClick={_onClick}>
        {children}
      </RedButtonStyle>
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
  padding: null,
};

const ButtonStyle = styled.button`
  width: ${props => props.width};
  background-color: ${props => (props.color ? props.color : props.theme.colors.black)};
  padding: ${props => props.padding};
`;

export default Button;
