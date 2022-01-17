import React from 'react';
import styled from 'styled-components';
import { Button } from '../../element';
import { useDispatch } from 'react-redux';
import { actionCreators as ChatAction } from '../../../redux/modules/chat';
import { actionCreators as matchingAction } from '../../../redux/modules/matching';

function UserButton(props) {
  const { guestId, hostInfo } = props;
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const guestInfo = {
    guestEmail: hostInfo.username,
    guestMbti: hostInfo.mbti,
    guestNick: hostInfo.nickname,
    guestImg: hostInfo.profileImage,
  };

  const ClickRefusal = () => {
    console.log(`거절하겠습니다: ${guestId}`);
    dispatch(matchingAction.deleteMatchingChatDB(guestId));
  };

  const ClickAccept = () => {
    console.log(`수락하겠습니다: ${guestId}`);
    dispatch(ChatAction.postChatRoomListDB(guestInfo, hostInfo.userId));
  };
  return (
    <Fiexd>
      <Button
        BtnAdd
        radius="50px"
        width="49%"
        color="#F6F6F6"
        fontcolor="#3F3F41"
        _onClick={ClickAccept}
      >
        수락하기
      </Button>
      <Button
        BtnAdd
        radius="50px"
        width="49%"
        color="#EC6464"
        fontcolor="#fff"
        _onClick={ClickRefusal}
      >
        거절하기
      </Button>
    </Fiexd>
  );
}
const Fiexd = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding: 0px 30px 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default UserButton;
