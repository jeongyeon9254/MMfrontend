import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ImgBg, ContainerStyle, ScrollBox } from './module';
const Container = props => {
  const { children, scroll } = props;
  if (scroll) {
    return <ScrollBox></ScrollBox>;
  }
  return (
    <ImgBg>
      <ContainerStyle>
        <PerfectScrollbar component="div">{children}</PerfectScrollbar>
      </ContainerStyle>
    </ImgBg>
  );
  // return <ContainerStyle>{children}</ContainerStyle>
};

export default Container;
