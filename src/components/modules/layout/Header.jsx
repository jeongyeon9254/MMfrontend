import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';
import Phone_head from '../../../img/Icon/phone_head.png';
import Phone_head_w from '../../../img/Icon/phone_head_w.png';

//컴포넌트
import { LayoutBackBtn, LayoutBtn } from '.';
const Header = props => {
  const {
    children,
    main,
    chat,
    point,
    _on,
    bg,
    white,
    fast,
    myinfo,
    detail,
    zIndex,
    _onClick,
    Me,
    Page,
    DeleteMsRoomOrGoBackRoom,
    setMyInfo,
    login,
    setModal,
  } = props;

  const styles = {
    main,
    point,
    bg,
    white,
    zIndex,
    login,
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
      <Grid row justify="space-between" align="center">
        <LayoutBackBtn
          main={main}
          Page={Page}
          white={white}
          _onClick={_onClick}
          _on={_on}
          detail={detail}
        />
        <TiTle {...styles}>{children}</TiTle>
        <LayoutBtn
          main={main}
          chat={chat}
          myinfo={myinfo}
          fast={fast}
          _onClick={_onClick}
          DeleteMsRoomOrGoBackRoom={DeleteMsRoomOrGoBackRoom}
          setMyInfo={setMyInfo}
          login={login}
          detail={detail}
          setModal={setModal}
          Me={Me}
        ></LayoutBtn>
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
  z-index: ${props => (props.zIndex ? props.zIndex : '50')};
  gap: 13px;
  .backBtn {
    height: 24px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
  @media only screen and (max-height: 1050px) {
    border-radius: 0px;
  }
  @media only screen and (max-width: 1050px) {
    padding: 13px 23px;
    border-radius: 0px;
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

export default Header;
