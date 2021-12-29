import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Bit from '../Bit';
import { Grid, Button } from '../../element/index';
import AddIntro from './AddIntro';

const AddInterest = () => {
  const [Intro, setIntro] = useState(false);

  if (Intro === true) {
    return (
      <>
        <AddIntro />
      </>
    );
  }

  return (
    <>
      <Header>관심사 설정하기</Header>
      <Grid padding="122px 30px 0px 30px">
        <Grid gap="10px">
          <InterestTitle>
            <span style={{ fontWeight: '700' }}>관심사</span>를 선택해주세요!
          </InterestTitle>
          <Grid gap="5px">
            <InterestCommet>관심사는 최대 2개까지 중복선택이 가능합니다! </InterestCommet>
          </Grid>
        </Grid>
        <Grid row gap="8px" margin="48px 0px 0px 0px">
          <Button BtnTag>일상</Button>
          <Button BtnTag>운동</Button>
          <Button BtnTag>공부</Button>
          <Button BtnTag>게임</Button>
          <Button BtnTag>재테크</Button>
        </Grid>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          width="315px"
          BtnBottom
          _onClick={() => {
            setIntro(true);
          }}
        >
          다음으로
        </Button>
      </Grid>
    </>
  );
};

const InterestTitle = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxxl};
`;

const InterestCommet = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
`;

export default AddInterest;
