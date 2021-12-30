import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Bit from '../Bit';
import { Grid, Input, Button } from '../../element/index';
import AddInterest from './AddInterest';
import { history } from '../../../redux/configureStore';

const AddIntro = () => {
  const [BackInterest, setBackInterest] = useState(false);

  if (BackInterest === true) {
    return (
      <>
        <AddInterest />
      </>
    );
  }

  return (
    <>
      <Header
        _on={() => {
          setBackInterest(true);
        }}
      >
        한줄 소개 작성하기
      </Header>
      <Grid padding="122px 30px 0px 30px">
        <Grid gap="10px">
          <IntroTitle>
            <span style={{ fontWeight: '700' }}>한줄 소개</span>를 작성해주세요!
          </IntroTitle>
          <Grid gap="5px">
            <IntroCommet>다른 사람들에게 저를 소개해보아요! </IntroCommet>
          </Grid>
        </Grid>
      </Grid>
      <Grid row gap="8px" padding="48px 31px 0px 28px">
        <Input _type="textarea" _size="14px"></Input>
      </Grid>
      <Grid margin="0px 30px">
        <Button
          width="315px"
          BtnBottom
          _onClick={() => {
            history.push('/');
          }}
        >
          다음으로
        </Button>
      </Grid>
    </>
  );
};

const IntroTitle = styled.span`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.xxxl};
`;

const IntroCommet = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
`;

export default AddIntro;
