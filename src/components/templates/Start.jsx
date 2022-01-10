import React from 'react';
import styled from 'styled-components';

import { Image, Grid } from '../element/index';
import StartLogo from '../../img/Icon/Start_logo.svg';
import StartTitle from '../../img/Icon/Start_title.svg';

const Start = () => {
  return (
    <Grid align="center" padding=" 203px 0px 0px 0px">
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
    </Grid>
  );
};

const Thick = styled.p`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.small};
`;
const Thin = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.small};
`;

export default Start;
