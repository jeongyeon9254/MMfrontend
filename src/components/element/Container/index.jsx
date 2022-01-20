import React from 'react';
import { ImgBg, ContainerStyle, BgImg } from './module';
import background from '../../../img/webBg.png';
const Container = props => {
  const { children } = props;
  return (
    <>
      <ImgBg>
        <ContainerStyle>{children}</ContainerStyle>
      </ImgBg>
      <BgImg src={background} alt="background" />
    </>
  );
};

export default Container;
