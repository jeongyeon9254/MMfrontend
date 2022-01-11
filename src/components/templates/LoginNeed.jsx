import React from 'react';
import styled from 'styled-components';
import { Grid, Button } from '../element/index';
import Header from '../modules/layout/Header';
import LoginNeedBG from '../../img/Icon/LoginNeedBG.svg';
import { history } from '../../redux/configureStore';

const LoginNeed = props => {
  return (
    <>
      <Header></Header>
      <NeedBox style={{ backgroundImage: `url(${LoginNeedBG})` }}>
        <Grid align="center" gap="28px" padding="207px 0px 0px 0px">
          <Title>로그인이 필요해요!</Title>
          <Grid align="center" gap="4px">
            <Content>로그인을 하면 비즈케미에서 내 MBTI와</Content>
            <Content>궁합이 잘 맞는 다른 유저를 만날 수 있어요. </Content>
          </Grid>
        </Grid>
        <Grid padding="190px 30px 0px 30px">
          <Button
            BtnAdd
            radius="90px"
            _onClick={() => {
              history.push('/login');
            }}
          >
            <BtnText>로그인 하러가기</BtnText>
          </Button>
        </Grid>
      </NeedBox>
    </>
  );
};

const NeedBox = styled.div`
  width: 100%;
  height: 97%;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 30px;
`;
const Content = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.base};
`;
const BtnText = styled.p`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.xxl};
`;

export default LoginNeed;
