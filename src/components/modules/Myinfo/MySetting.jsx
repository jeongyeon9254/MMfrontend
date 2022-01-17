import React from 'react';
import styled from 'styled-components';
import { Grid, Alert } from '../../element';
import { delCookie } from '../../../shared/Cookie';
import { history } from '../../../redux/configureStore';
import close from '../../../img/Icon/close.svg';

import { deleteUser } from '../../../api/modules/user.js';

function MySetting(props) {
  const { Open, _onClick } = props;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // 모달창
  const [Alt, setAlt] = React.useState(false);

  const logOutBack = () => {
    delCookie('authorization');
    localStorage.clear();
    history.push('/login');
  };

  const exit = () => {
    setAlt(false);
  };

  const next = () => {
    logOutBack();
    exit();
  };

  const deleteMe = () => {
    deleteUser();
    logOutBack();
  };

  return (
    <div>
      {Alt ? (
        <Alert MyBit logout yes={next} no={exit}>
          <Grid gap="15px" padding="16px 51px 8px 24px">
            <AltTitle>로그아웃을 하시겠습니까?</AltTitle>
            <AltContent>
              후에도 비즈케미는 계속 {userInfo.nickname}님을 기다리고 있을게요!
            </AltContent>
          </Grid>
        </Alert>
      ) : null}
      <TabBg className={Open ? 'open' : 'close'} onClick={_onClick}></TabBg>
      <TabNav className={Open ? 'open' : 'close'}>
        <TabHead>
          <Grid row padding="22px 30px" justify="space-between">
            <CloseBtn src={close} alt="닫기버튼" onClick={_onClick} />
            <span>설정</span>
            <img src={close} style={{ opacity: 0 }} />
          </Grid>
        </TabHead>
        <TabList
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setAlt(true);
          }}
        >
          로그아웃
        </TabList>
        <TabList>버전 정보 1.0.0</TabList>
        <TabList onClick={deleteMe}>회원탈퇴</TabList>
      </TabNav>
    </div>
  );
}
const TabBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 99;
  display: none;
  &.open {
    display: block;
  }
  &.close {
    display: none;
  }
`;

const TabNav = styled.div`
  background-color: #fff;
  border-radius: 40px 40px 0 0;
  width: 100%;
  position: fixed;
  left: 0px;
  bottom: -100%;
  height: 0px;
  opacity: 0;
  z-index: 100;
  padding-bottom: 32px;
  transition: all ease-out 0.3s;
  &.open {
    bottom: 0;
    height: auto;
    opacity: 1;
  }
  &.close {
    bottom: -100%;
    height: 0px;
    opacity: 0;
  }
`;

const TabHead = styled.div`
  border-bottom: 1px solid #e8e8e8;
  font-size: ${p => p.theme.fontSizes.xxl};
  color: ${p => p.theme.colors.gray_2};
  font-weight: bold;
  margin-bottom: 16px;
`;

const TabList = styled.div`
  font-size: ${p => p.theme.fontSizes.xl};
  padding: 20px 30px;
  &:hover {
    color: #ec6464;
  }
`;
const CloseBtn = styled.img`
  cursor: pointer;
`;
const AltTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
`;
const AltContent = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;
export default MySetting;
