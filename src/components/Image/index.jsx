import React from 'react';
import styled from 'styled-components';
import { ImageStyle, ImageRoundBigStyle, ImageRoundSmallStyle } from './module';

const Image = props => {
  const { width, children, _onClick, ImageRoundBig, ImageRoundSmall } = props;

  const styles = {
    width: width,
  };

  if (ImageRoundBig) {
    return (
      <ImageRoundBigStyle {...styles} onClick={_onClick}>
        <ImageStyle> {children}</ImageStyle>
      </ImageRoundBigStyle>
    );
  }

  if (ImageRoundSmall) {
    return (
      <ImageRoundSmallStyle {...styles}>
        <ImageStyle> {children}</ImageStyle>
      </ImageRoundSmallStyle>
    );
  }
  return (
    <NomalStyle {...styles}>
      <ImageStyle> {children}</ImageStyle>
    </NomalStyle>
  );
};

Image.defaultProps = {
  width: '100%',
};

const NomalStyle = styled.div`
  width: ${props => props.width};
  background-color: #dfd4d4;
  position: relative;
  scale: 1.2;
  border-radius: 30px;
`;

export default Image;
