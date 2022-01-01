import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import { Input, Grid, Tag } from '../../element';
import { MyPartBox, Mymbtibtn } from './index';

function MyEdit() {
  return (
    <Body>
      {' '}
      <Header point="relative">내 정보 수정하기</Header>
      <Grid padding="20px 30px" gap="20px">
        <MyPartBox title="나의 이름">
          <Input _borderColor="#ECECEC" _bg="#ECECEC" _padding="8px 14px" _value="홍길동" />
        </MyPartBox>
        <MyPartBox title="나의 MBTI">
          <Mymbtibtn></Mymbtibtn>
        </MyPartBox>
        <MyPartBox title="관심사 설정">
          <Input />
        </MyPartBox>
        <MyPartBox title="한줄 소개">
          <Input />
        </MyPartBox>
      </Grid>
    </Body>
  );
}
const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  left: 0px;
  top: 0px;
  display: none;
  z-index: 999;
  .swiper-container {
    padding: 2px;
  }
`;
export default MyEdit;
