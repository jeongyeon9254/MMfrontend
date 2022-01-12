import React from 'react';
import styled from 'styled-components';
import { MyPartBox, MyinfoBit, Myinterests, Mypost } from './index';
import { Grid, Box } from '../../element';

function MyBody() {
  const Info = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <Body>
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
        <MyPartBox title="한줄 소개">
          <Mypost />
        </MyPartBox>
      </Grid>
    </Body>
  );
}
const Body = styled.div`
  position: absolute;
  left: 0px;
  top: 39%;
  padding: 20px 30px;
  width: 100%;
  height: 35.9vh;
  overflow-y: scroll;
`;
export default MyBody;
