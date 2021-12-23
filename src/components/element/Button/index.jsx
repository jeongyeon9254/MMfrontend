/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import './index.module.css';

const Button = props => {
  const { width, children, _onClick, _class } = props;

  const styles = {
    width: width,
  };

  return (
    <ButtonStyle className={_class} {...styles} onClick={_onClick}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  width: '100px',
};

const ButtonStyle = styled.button`
  width: ${props => props.width};
  background-color: red;
  padding: 10px;
`;

export default Button;
