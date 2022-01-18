import React from 'react';
import styled from 'styled-components';
import { ImageRoundStyle, BorderSquare, ImagePhotoRoundStyle, Nobackground } from './module';
import icon_photo from '../../../img/Icon/icon_photo.svg';
import Bit from '../../modules/Bit';

const Image = props => {
  const {
    // props
    _onClick,
    src,
    mbti,
    // css
    width,
    margin,
    round,
    border,
    _border,
    pointer,
    // 분기 name
    photoRound,
    radius,
    nobackground,
  } = props;

  const select = Bit.find(x => x.name === mbti);

  const styles = {
    width,
    margin,
    src,
    _border,
    pointer,
    radius,
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

  if (nobackground) {
    return (
      <Nobackground>
        <ImageStyle src={src}></ImageStyle>
      </Nobackground>
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
  radius: '20px',
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
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.05);
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
