/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Button = (props) => {

  const {
    width,
    children,
    _onClick
  } = props

  const styles = {
    width: width,
  }

  return (
    <ButtonStyle onClick={_onClick} {...styles}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  width: '100%',
  _onClick:()=>{},
}

const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  background-color: red;
`;

export default Button;
