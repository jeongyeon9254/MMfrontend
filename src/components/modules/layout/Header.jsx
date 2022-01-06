import React, { Dispatch } from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';
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
import { delCookie } from '../../../shared/Cookie';

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
    _onClick,
    name,
    defaultName,
    Page,
  } = props;

  const dispatch = useDispatch();

  const styles = {
    main,
    point,
    bg,
    white,
  };

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
    history.push('/login');
    delCookie('authorization');
    localStorage.clear();
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
        {myinfo ? <LogOut onClick={logOutBack}>로그아웃</LogOut> : ''}
        {detail ? (
          name === defaultName ? (
            <Detail alt="수정/삭제" src={icon_detail} onClick={_onClick}></Detail>
          ) : null
        ) : null}
      </Grid>
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
  z-index: 50;
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
export default Header;
