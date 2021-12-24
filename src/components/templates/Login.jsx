import React from 'react';
import styled from 'styled-components';
import imgfile from '../../img/kakaologin.png';

const Login = () => {
  const kakaoclick = () => {
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?client_id=5d14d9239c0dbefee951a1093845427f&redirect_uri=http://localhost:8080/user/kakao/callback&response_type=code';
  };

  return (
    <>
      <KaKaoBtn onClick={kakaoclick}></KaKaoBtn>
    </>
  );
};

const KaKaoBtn = styled.button`
  background-image: url(${imgfile});
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;
