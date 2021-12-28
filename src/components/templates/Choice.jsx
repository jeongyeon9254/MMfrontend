import React from 'react';
import styled from 'styled-components';
import { Input, Grid, Image } from '../element';

import Header from '../modules/layout/Header';
import arrUp from '../../img/Icon/arrow_up.svg';
const Choice = () => {
  const user = {
    nickname: '닉네임 변경',
    profileImage: 'https://lank.png',
    gender: 'male',
    ageRange: '30대',
    intro: '소개글입니다',
    location: '종로구',
    longitude: '15.1212',
    latitude: '15.21212',
    mbti: 'INTJ',
    interestList: [{ interest: '공부' }, { interest: '운동' }],
    signStatus: true,
  };
  return (
    <div>
      <Header>요청 목록</Header>
      <Grid height="100%">
        <Grid
          row
          justify="space-between"
          padding="12px 33px"
          borderBot="1px solid #E8E8E8"
          borderTop="1px solid #E8E8E8"
        >
          <ListText>내가 받은 매칭 신청 목록 2개</ListText> <img src={arrUp} />
        </Grid>
        <Grid row>
          <Image src="" round mbti="INTP" width="50px" />
          <div>
            <div>
              <p>인팁</p> <p>INTP</p>
            </div>
            <div>안녕하세요 :) 어떤 영화 좋아하세요 ? </div>
          </div>
          <p>오후 7:36</p>
        </Grid>
        <div>
          <p>내가 받은 매칭 신청 목록 2개</p> <p>'</p>
        </div>
      </Grid>
    </div>
  );
};
const ListText = styled.p`
  font-size: 10px;
  color: #9b9b9b;
`;
export default Choice;
