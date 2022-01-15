import React from 'react';
import styled from 'styled-components';
import { MyPartBox, MyinfoBit, Myinterests, Mypost, MyEdit, MyBottom } from './index';
import { Grid, Box } from '../../element';

function MyBody() {
  const Info = JSON.parse(localStorage.getItem('userInfo'));
  const [Open, setOpen] = React.useState('');
  const ClickEvent = e => {
    setOpen(!Open);
  };
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
        <MyPartBox title="내가 올린 게시물">
          <Mypost />
        </MyPartBox>
        <MyEdit Open={Open} _onClick={ClickEvent}></MyEdit>
        <MyBottom Edit _onClick={ClickEvent}>
          내 정보 수정하기
        </MyBottom>
      </Grid>
    </Body>
  );
}
const Body = styled.div`
  position: absolute;
  left: 0px;
  top: 42%;
  padding: 0px 30px 40px;
  width: 100%;
  height: 440px;
  overflow-y: scroll;
`;
export default MyBody;
