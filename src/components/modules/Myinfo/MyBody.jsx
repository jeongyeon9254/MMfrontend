import React from 'react';
import styled from 'styled-components';
import { MyPartBox, MyinfoBit, Myinterests } from './index';
import { Grid, Box } from '../../element';

function MyBody() {
  const Info = JSON.parse(localStorage.getItem('userInfo'));
  const mbti = 'ENTJ';
  console.log(Info);
  return (
    <Body>
      <Grid gap="27px">
        <MyPartBox title="나의 MBTI">
          <MyinfoBit mbti={mbti} />
        </MyPartBox>
        <MyPartBox title="나의 관심사">
          <Myinterests data={Info.interestList} />
        </MyPartBox>
        <MyPartBox title="한줄 소개">
          <Box padding="12px 17px">
            {Info.info
              ? Info.info
              : ' 안녕하세요~ 같이 재밌게 시간 보낼 친구 찾아요, 현재 강서구에 거주하고 있는 INFP인간입니다 :'}
          </Box>
        </MyPartBox>
      </Grid>
    </Body>
  );
}
const Body = styled.div`
  position: absolute;
  left: 0px;
  top: 42%;
  padding: 20px 30px;
  width: 100%;
`;
export default MyBody;
