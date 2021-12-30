import React from 'react';
import styled from 'styled-components';
import { ImageRoundStyle, BorderSquare, ImagePhotoRoundStyle } from './module';
import icon_photo from '../../../img/Icon/icon_photo.svg';
import Bit from '../../modules/Bit';

const Image = props => {
  const { width, margin, _onClick, round, border, src, photoRound, mbti, _border } = props;

  const select = Bit.find(x => x.name === mbti);

  const styles = {
    width,
    margin,
    src,
    _border,
  };

  if (round) {
    return (
      <ImageRoundStyle {...styles} onClick={_onClick}>
        <ImageStyle src={src}></ImageStyle>
        {src ? null : <DefaultMbti src={select.image} />}
      </ImageRoundStyle>
    );
  }

  if (photoRound) {
    return (
      <ImagePhotoRoundStyle {...styles} onClick={_onClick}>
        <ImageStyle src={src}></ImageStyle>
        {src ? null : <DefaultCircle src={icon_photo} />}
      </ImagePhotoRoundStyle>
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
  mbti: 'INFJ',
  _border: '0px',
  // src: 'https://reacteek-1.s3.ap-northeast-2.amazonaws.com/ch-1.png',
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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.5);
`;

const Default = styled.img`
  position: absolute;
  width: 100%;
  transform: scale(0.35);
`;

const DefaultCircle = styled.img`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.3);
`;

const DefaultMbti = styled.img`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.6);
`;

export default Image;
