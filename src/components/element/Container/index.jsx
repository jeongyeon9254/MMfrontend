import React from 'react';
import { ImgBg, ContainerStyle } from './module';
const Container = props => {
  const { children } = props;
  return (
    <ImgBg>
      <ContainerStyle>{children}</ContainerStyle>
    </ImgBg>
  );
};

export default Container;
