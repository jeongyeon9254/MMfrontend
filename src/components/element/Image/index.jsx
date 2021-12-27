import React from 'react';
import styled from 'styled-components';
import { ImageRoundStyle, BorderSquare } from './module';

const Image = props => {
  const { width, margin, _onClick, round, border, src } = props;

  const styles = {
    width,
    margin,
    src,
  };

  if (round) {
    return (
      <ImageRoundStyle {...styles} onClick={_onClick}>
        <ImageStyle src={src}></ImageStyle>
      </ImageRoundStyle>
    );
  }

  if (border) {
    return (
      <BorderSquare {...styles} onClick={_onClick}>
        <ImageStyle src={src}></ImageStyle>
      </BorderSquare>
    );
  }

  return (
    <Square {...styles}>
      <ImageStyle src={src}></ImageStyle>
    </Square>
  );
};

Image.defaultProps = {
  width: '100%',
  margin: '0 auto',
  src: 'https://reacteek-1.s3.ap-northeast-2.amazonaws.com/ch-1.png',
};

const Square = styled.div`
  width: ${props => props.width};
  margin: ${props => props.margin};
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const ImageStyle = styled.img`
  position: absolute;
  transform: scale(1.05);
  width: 100%;
`;

export default Image;
