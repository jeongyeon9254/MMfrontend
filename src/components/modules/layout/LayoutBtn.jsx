import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { actionCreators as mainActions } from '../../../redux/modules/main';

import setting from '../../../img/Icon/setting.svg';
import icon_replay from '../../../img/Icon/icon_replay.svg';
import icon_detail from '../../../img/Icon/icon_detail.svg';

function LayoutBtn(props) {
  const {
    main,
    chat,
    myinfo,
    fast,
    _onClick,
    DeleteMsRoomOrGoBackRoom,
    setMyInfo,
    login,
    detail,
    Me,
    setModal,
  } = props;

  const dispatch = useDispatch();
  return (
    <>
      {chat ? (
        <Exit
          onClick={() => {
            DeleteMsRoomOrGoBackRoom();
          }}
        >
          방 나가기
        </Exit>
      ) : chat || myinfo ? (
        ''
      ) : (
        <Null></Null>
      )}

      {fast ? <Detail alt="재시도" src={icon_replay} onClick={_onClick}></Detail> : null}

      {myinfo ? (
        <LogOut onClick={_onClick}>
          <img src={setting} alt="" />
        </LogOut>
      ) : (
        ''
      )}

      {main ? (
        <MyLocation
          onClick={() => {
            dispatch(mainActions.getMyListDB());
            setMyInfo();
          }}
        >
          {login ? null : <p>내 위치</p>}
        </MyLocation>
      ) : null}

      {detail ? (
        Me ? (
          <Detail
            alt="수정/삭제"
            src={icon_detail}
            onClick={() => {
              setModal(true);
            }}
          ></Detail>
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </>
  );
}

LayoutBtn.defaultProps = {
  main: false,
  chat: false,
  myinfo: false,
  fast: false,
  _onClick: () => {},
  DeleteMsRoomOrGoBackRoom: () => {},
  setMyInfo: () => {},
  login: false,
  detail: false,
  name: '',
  defaultName: '.',
};

const Exit = styled.div`
  font-size: 14px;
  color: red;
  cursor: pointer;
`;

const Null = styled.div`
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

const MyLocation = styled.div`
  font-size: 14px;
  color: #4e4e4e;
  cursor: pointer;
  font-weight: 700;
`;
export default LayoutBtn;
