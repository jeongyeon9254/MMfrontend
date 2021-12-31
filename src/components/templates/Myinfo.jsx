import React from 'react';
import styled from 'styled-components';
import Header from '../modules/layout/Header';
import Bit from '../modules/Bit';
import { Grid, Image, Box } from '../element';
import { MyinfoHead, MyPartBox, MyinfoBit, Myinterests } from '../modules/Myinfo';
const Myinfo = () => {
  const Info = JSON.parse(localStorage.getItem('userInfo'));
  const location = '성동구';
  const mbti = 'ENTJ';
  console.log(Info);
  return (
    <div>
      <Header bg="transparent" white>
        내 정보
      </Header>
      <MyinfoHead></MyinfoHead>
      <Body>
        <Grid gap="28px">
          <MyPartBox title="나의 MBTI">
            <MyinfoBit mbti={mbti} />
          </MyPartBox>
          <MyPartBox title="나의 관심사">
            <Myinterests Disable />
          </MyPartBox>
          <MyPartBox title="한줄 소개">
            <MyinfoBit data={Info.interestList} mbti={mbti} />
          </MyPartBox>
        </Grid>
      </Body>
    </div>
  );
};

const Body = styled.div`
  position: absolute;
  left: 0px;
  top: 45%;
  padding: 20px 30px;
  width: 100%;
`;

export default Myinfo;
