import React from 'react';
import styled from 'styled-components';

const Container = props => {
  const { children } = props;

  return <ContainerStyle>{children}</ContainerStyle>;
};

const ContainerStyle = styled.button`
  box-sizing: border-box;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

export default Container;
