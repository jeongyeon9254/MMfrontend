import React from 'react';
import styled from 'styled-components';
import appicon from '../../../img/appIcon.png';
import background from '../../../img/webBg.png';
import chemy from '../../../img/chemy.svg';
import { Grid } from '../../element';
function Bg() {
  return (
    <>
      <BgPoint>
        <Grid gap="56px">
          <Grid row gap="40px" align="center">
            <img src={appicon} alt="appicon" />
            <Grid width="auto" gap="14px">
              <Subti>MBTI 궁합을 기반으로 한 매칭 서비스 </Subti>
              <img src={chemy} alt="chemy" />
            </Grid>
          </Grid>
          <Grid gap="16px" padding="0px 0px 0px 15px">
            <Grid gap="8px">
              <BoldTi>BIZ Chemy는 성격유형검사 MBTI 궁합을 기반으로 </BoldTi>
              <BoldTi>나와 궁합이 잘 맞는 MBTI 유저와 연결 시켜주는 웹 서비스입니다.</BoldTi>
              <Line></Line>
            </Grid>
            <Grid gap="8px">
              <NormalTi>BIZ Chemy를 통해 여러분과 잘 맞는 친구를 찾아보세요!</NormalTi>
              <NormalTi>친구와의 소통을 통해 한층 즐거운 스스로를 발견할 수 있을거에요.</NormalTi>
            </Grid>
          </Grid>
        </Grid>
      </BgPoint>
      <BgImg src={background} alt="background" />
    </>
  );
}
const BgPoint = styled.div`
  position: absolute;
  left: 162px;
  top: 215px;
  @media only screen and (max-width: 1550px) {
    transform: scale(0.7);
    left: 10px;
    top: 20px;
  }
  @media only screen and (max-width: 1050px) {
    display: none;
  }
`;
const Subti = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const BoldTi = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #1c1c1c;
`;

const NormalTi = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: #3f3f41;
`;

const Line = styled.div`
  height: 8px;
  width: 358px;
  background: linear-gradient(
    45deg,
    #fee01b 0%,
    #a47af9 68%,
    #a47af9 68%,
    #a47af9 86%,
    #8df8d0 100%
  );
  position: relative;
  left: 0px;
  top: -11px;
  opacity: 0.5;
`;

const BgImg = styled.img`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%) scale(1.2);
  @media only screen and (max-width: 1550px) {
    transform: translateY(-60%) scale(1.2);
    right: -39%;
    top: 58%;
  }
  @media only screen and (max-width: 1050px) {
    display: none;
  }
`;
export default Bg;
