import React from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
const Container = props => {
  const { children } = props;

  return (
    <ContainerStyle>
      <PerfectScrollbar component="div">{children}</PerfectScrollbar>
    </ContainerStyle>
  );
  // return <ContainerStyle>{children}</ContainerStyle>
};

const ContainerStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: ${props => props.theme.deviceSizes.mobileM};
  max-height: 812px;
  height: 100%;
  margin: 0 auto;
  padding: 16px 0px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 18px;
  overflow-y: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default Container;
