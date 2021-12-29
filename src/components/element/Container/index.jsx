import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ImgBg, ContainerStyle } from './module';
const Container = props => {
  const { children } = props;
  return (
    <ImgBg>
      <ContainerStyle>
        <PerfectScrollbar component="div">{children}</PerfectScrollbar>
      </ContainerStyle>
    </ImgBg>
  );
};

export default Container;
