import React from 'react';
import styled from 'styled-components';
import { MyPartBox, MyinfoBit, Myinterests, Mypost, MyEdit, MyBottom } from './index';
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
  padding: 0px 20px 0px 30px;
  width: 100%;
  height: 413px;
`;
const ScrollBox = styled.div`
  height: 413px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0px 10px 30px 0px;
  ::-webkit-scrollbar {
    /* 스크롤바 전체 영역 */
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    /* 스크롤이 움직이는 영역  */
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    /*  스크롤  */
    background-color: #eee;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    /*  스크롤의 화살표가 포함된 영역   */
    display: block;
    height: 8px;
    background-color: #999;
  }
  ::-webkit-scrollbar-corner {
    /*  상하+좌우 스크롤이 만나는 공간   */
    background-color: none;
  }
`;
export default MyBody;
