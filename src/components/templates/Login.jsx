import React from 'react';
import styled from 'styled-components';
import imgfile from '../../img/kakaologin.png';
import { Grid } from '../element/index';
import Header from '../modules/layout/Header';

const Login = () => {
  const kakaoclick = () => {
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?client_id=5d14d9239c0dbefee951a1093845427f&redirect_uri=http://localhost:8080/user/kakao/callback&response_type=code';
  };

  return (
    <>
      <Header>로그인</Header>
      <Grid height="100%" justify="center" align="center">
        <LoginBox>
          <p>카카오톡으로 간편로그인을 진행해주세요!</p>
          <KaKaoBtn onClick={kakaoclick}></KaKaoBtn>
        </LoginBox>
      </Grid>
    </>
  );
};

const KaKaoBtn = styled.button`
  background-image: url(${imgfile});
  padding: 0;
  margin: 0;
  width: 300px;
  height: 45px;
  border: 1px solid transparent;
  border-radius: 90px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 37%;
  gap: 12px;
  transform: translateX(-50%);
`;

export default Login;
