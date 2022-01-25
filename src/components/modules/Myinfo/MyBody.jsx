import React from 'react';
import styled from 'styled-components';
import { MyPartBox, MyinfoBit, Myinterests, Mypost } from './index';
import { Grid, Box } from '../../element';

function MyBody() {
  const Info = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <Body>
      <ScrollBox>
        <Grid gap="27px">
          <MyPartBox title="나의 MBTI">
            <MyinfoBit mbti={Info.mbti} />
          </MyPartBox>
          <MyPartBox title="나의 관심사">
            <Myinterests Disable data={Info.interestList} />
          </MyPartBox>
          <MyPartBox title="한줄 소개">
            <Box padding="10px 17px">{Info.intro ? Info.intro : ' '}</Box>
          </MyPartBox>
          <MyPartBox title="내가 올린 게시물">
            <Mypost />
          </MyPartBox>

          {/* <MyBottom Edit _onClick={ClickEvent}>
            내 정보 수정하기
          </MyBottom> */}
        </Grid>
      </ScrollBox>
    </Body>
  );
}
const Body = styled.div`
  position: absolute;
  left: 0px;
  top: 42%;
  width: 100%;
`;
const ScrollBox = styled.div`
  height: 449px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0px 30px 30px 30px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    display: none;
    height: 8px;
    background-color: #999;
  }
  ::-webkit-scrollbar-corner {
    background-color: none;
  }
  @media only screen and (max-width: 450px) {
    height: 50vh;
  }
`;
export default MyBody;
