import React from 'react';
import styled from 'styled-components';

import { Image, Grid } from '../element/index';
import StartLogo from '../../img/Icon/Start_logo.svg';
import StartTitle from '../../img/Icon/Start_title.svg';
import { history } from '../../redux/configureStore';

const Start = props => {
  const click = () => {
    props.No(false);
  };

  return (
    <Body className="open" onClick={click}>
      <Grid align="center" padding=" 289px 0px 0px 0px">
        <Grid width="112px" height="110px">
          <Image nobackground src={StartLogo}></Image>
        </Grid>
        <Grid width="208px" height="35px" margin="20px 0px 0px 0px">
          <Image nobackground src={StartTitle}></Image>
        </Grid>
        <Grid row justify="center" margin="5px 0px">
          <Thick>MBTI 궁합을 기반</Thick>
          <Thin>으로 한</Thin>
          <Thick>매칭 서비스</Thick>
        </Grid>
        <ClickTxt className="blink">화면을 터치해주세요</ClickTxt>
      </Grid>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: 50;
  background-color: white;
  transition: all 0.2s;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -5%;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Thick = styled.p`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.small};
`;
const Thin = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.small};
`;

const ClickTxt = styled.p`
  position: absolute;
  bottom: -74px;
  left: 99px;
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: 400;
  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
  & {
    animation: blink-effect 1.5s step-end infinite;
  }n-o
`;

export default Start;
