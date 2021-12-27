import React from 'react';
import styled from 'styled-components';
import { ImageRoundStyle, BorderSquare } from './module';
import icon_photo from '../../../img/Icon/icon_photo.svg';

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
        {src ? null : <Default src={icon_photo} />}
      </ImageRoundStyle>
    );
  }

  if (border) {
    return (
      <BorderSquare {...styles} onClick={_onClick}>
        <ImageStyle src={src}></ImageStyle>
        {src ? null : <Default src={icon_photo} />}
      </BorderSquare>
    );
  }

  return (
    <Square {...styles}>
      <ImageStyle src={src}></ImageStyle>
      {src ? null : <Default src={icon_photo} />}
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
  background: ${props => props.theme.colors.gray_1};
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
  width: 100%;
  transform: scale(1.05);
`;

const Default = styled.img`
  position: absolute;
  width: 100%;
  transform: scale(0.35);
`;

export default Image;
