/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const { width, children, _onClick } = props;

  const styles = {
    width: width,
  };

  return (
    <ButtonStyle {...styles} onClick={_onClick}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  width: '100%',
};

const ButtonStyle = styled.button`
  width: ${props => props.width};
  background-color: red;
`;

export default Button;
