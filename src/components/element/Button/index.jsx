/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import './Index.css';

const Button = props => {
  const { width, children, _onClick, _class, color, padding } = props;

  const styles = {
    width,
    color,
    padding,
  };

  return (
    <ButtonStyle className={_class} {...styles} onClick={_onClick}>
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
  background-color: ${props => props.color};
  padding: ${props => props.padding};
`;

export default Button;
