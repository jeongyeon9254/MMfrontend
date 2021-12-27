import React from 'react';
import styled from 'styled-components';

const Container = props => {
  const { children } = props;

  return <ContainerStyle>{children}</ContainerStyle>;
};

const ContainerStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: ${props => props.theme.deviceSizes.mobileM};
  height: 812px;
  margin: 0 auto;
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 18px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default Container;
