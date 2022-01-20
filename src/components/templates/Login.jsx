import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import imgfile from '../../img/kakaologin.png';
import { Grid, Image } from '../element/index';
import Header from '../modules/layout/Header';
import Start from '../modules/Start';
import { actionCreators as userAction } from '../../redux/modules/user';
import Logo from '../../img/Icon/Start_logo.svg';
import { history } from '../../redux/configureStore.js';
import { set } from 'lodash';
const Login = props => {
  const dispatch = useDispatch();
  const kakaoclick = () => {
    dispatch(userAction.logInDB());
    window.location.href =
      // 'https://kauth.kakao.com/oauth/authorize?client_id=5d14d9239c0dbefee951a1093845427f&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code';
      'https://kauth.kakao.com/oauth/authorize?client_id=5d14d9239c0dbefee951a1093845427f&redirect_uri=https://www.bizchemy.com/user/kakao/callback&response_type=code';
  };
  const [open, setopen] = React.useState(false);

  React.useEffect(() => {
    setopen(true);
  }, []);

  const no = () => {
    setopen(false);
  };

  return (
    <>
      <Header main>로그인</Header>
      {open ? <Start No={no} /> : null}
      <Grid align="center" padding="203px 0px 0px 0px">
        <Grid width="112px" height="110px">
          <Image nobackground src={Logo}></Image>
        </Grid>
        <Grid margin="53px 0px 0px 0px">
          <LoginBox>
            <p>카카오톡으로 간편로그인을 진행해주세요!</p>
            <KaKaoBtn onClick={kakaoclick}></KaKaoBtn>
            <SampleBtn
              onClick={() => {
                history.push('/sample');
              }}
            >
              비즈케미 둘러보기
            </SampleBtn>
          </LoginBox>
        </Grid>
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
const SampleBtn = styled.button`
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
export default Login;
