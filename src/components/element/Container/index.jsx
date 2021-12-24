import React from 'react';
import styled from 'styled-components';

const Container = props => {
  const { children } = props;

  return <ContainerStyle>{children}</ContainerStyle>;
};

const ContainerStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: ${props => props.theme.deviceSizes.mobileL};
  margin: 0 auto;
  padding: 16px;
`;

export default Container;
