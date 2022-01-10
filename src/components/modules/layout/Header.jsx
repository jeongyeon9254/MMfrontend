import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Alert } from '../../element';
import arrow_left from '../../../img/Icon/arrow_left.svg';
import arrow_left_w from '../../../img/Icon/arrow_left_w.svg';
import icon_search from '../../../img/Icon/icon_search.svg';
import Phone_head from '../../../img/Icon/phone_head.png';
import Phone_head_w from '../../../img/Icon/phone_head_w.png';
import icon_detail from '../../../img/Icon/icon_detail.svg';
// JS
import { history } from '../../../redux/configureStore';
import { useDispatch } from 'react-redux';
import { actionCreators as mainActions } from '../../../redux/modules/main';
import { actionCreators as imageActions } from '../../../redux/modules/preview';
import { actionCreators as modalActions } from '../../../redux/modules/modal';
import { delCookie } from '../../../shared/Cookie';
import LoginNeed from '../../templates/LoginNeed';

const Header = props => {
  const {
    children,
    main,
    chat,
    post,
    point,
    _on,
    bg,
    white,
    myinfo,
    detail,
    zIndex,
    _onClick,
    name,
    defaultName,
    Page,
  } = props;

  const styles = {
    main,
    point,
    bg,
    white,
    zIndex,
  };

  const dispatch = useDispatch();

  const getUser = localStorage.getItem('userInfo');
  const data = JSON.parse(getUser);

  // 모달창
  const [Alt, setAlt] = useState(false);

  const goHome = () => {
    console.log('home');
    history.push('/');
    dispatch(mainActions.reset());
    dispatch(mainActions.kategorieReset());
    dispatch(imageActions.resetPreview());
  };

  const goBack = () => {
    console.log('back');
    history.goBack();
    dispatch(mainActions.reset());
    dispatch(mainActions.kategorieReset());
    dispatch(imageActions.resetPreview());
  };

  const logOutBack = () => {
    delCookie('authorization');
    localStorage.clear();
    history.push('/LoginNeed');
  };

  const next = () => {
    logOutBack();
    exit();
  };

  const exit = () => {
    setAlt(false);
  };

  return (
    <HeaderStyle {...styles} height="50px">
      <Grid>
        <img
          className="mock"
          style={{ width: '100%' }}
          src={white ? Phone_head_w : Phone_head}
          alt=""
        />
      </Grid>
      <Grid row justify="space-between">
        {main ? null : (
          <div
            className="backBtn"
            onClick={() => {
              _on ? goHome() : Page ? _onClick() : goBack();
            }}
          >
            <img alt="뒤로가기 버튼" src={white ? arrow_left_w : arrow_left}></img>
          </div>
        )}
        <TiTle {...styles}>{children}</TiTle>
        {chat ? <Search src={icon_search} /> : ''}
        {post ? <Exit>방 나가기</Exit> : chat || myinfo ? '' : <Null></Null>}
        {myinfo ? (
          <LogOut
            onClick={() => {
              setAlt(true);
            }}
          >
            로그아웃
          </LogOut>
        ) : (
          ''
        )}
        {detail ? (
          name === defaultName ? (
            <Detail alt="수정/삭제" src={icon_detail} onClick={_onClick}></Detail>
          ) : null
        ) : null}
      </Grid>
      {Alt ? (
        <Alert MyBit logout yes={next} no={exit}>
          <Grid gap="15px" padding="16px 51px 8px 24px">
            <AltTitle>로그아웃을 하시겠습니까?</AltTitle>
            <AltContent>후에도 비즈케미는 계속 {data.nickname}님을 기다리고 있을게요!</AltContent>
          </Grid>
        </Alert>
      ) : null}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  position: ${props => (props.point ? props.point : 'fixed')};
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 23px 15px;
  border-radius: 30px 30px 0px 0px;
  border-bottom: ${props => (props.white ? '0px' : '1px solid #eee')};
  background-color: ${props => (props.bg ? props.bg : props.theme.colors.white)};
  z-index: ${props => (props.zIndex ? props.zIndex : '50')};
  gap: 13px;
  .backBtn {
    height: 24px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
  @media only screen and (max-width: 450px) {
    padding: 13px 23px;
    gap: 0;
    .mock {
      display: none;
    }
  }
`;
const TiTle = styled.h2`
  font-size: ${props => props.theme.fontSizes.xxl};
  color: ${props => (props.white ? '#fff' : props.theme.colors.gray_2)};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Null = styled.div`
  height: 24px;
  width: 24px;
`;
const Exit = styled.div`
  font-size: 14px;
  color: #4e4e4e;
`;
const Search = styled.img`
  height: 24px;
  width: 24px;
`;
const Detail = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
const LogOut = styled.div`
  font-size: 14px;
  color: #999;
  cursor: pointer;
  line-height: 24px;
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
export default Header;
