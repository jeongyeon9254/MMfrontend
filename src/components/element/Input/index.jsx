import React from 'react';
import styled from 'styled-components';
const Input = props => {
  const { children, _type, border } = props;

  const styles = {
    border,
  };

  return <InputStyle {...styles}></InputStyle>;
};

Input.defaultProps = {};

const InputStyle = styled.input`
  padding: 12px 16px;
  border: 1px solid #e1e1e1;
  border-radius: 7px;
  font-size: ${props => props.theme.fontSizes.small};
`;

export default Input;
