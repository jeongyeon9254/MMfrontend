import React from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Phone from '../../../img/Icon/phone.png';
const Container = props => {
  const { children } = props;

  return (
    <ImgBg>
      <ContainerStyle>
        <PerfectScrollbar component="div">{children}</PerfectScrollbar>
      </ContainerStyle>
    </ImgBg>
  );
  // return <ContainerStyle>{children}</ContainerStyle>
};
const ImgBg = styled.div`
  background-image: url(${Phone});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 876px;
  width: 441px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const ContainerStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 372px;
  max-height: 774px;
  height: 100%;
  padding-top: 55px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 0px 0px 32px 32px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 63px;
  transform: translateX(-50%);
`;
const PageDown = styled.div`
  padding-top: 54px;
`;
export default Container;
