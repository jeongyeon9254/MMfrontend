import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Input, Image, Box } from '../../element';
import { useDispatch } from 'react-redux';
import { actionCreators as ChatAction } from '../../../redux/modules/chat';

function PartyInput(props) {
  const dispatch = useDispatch();
  const [Chatting, setChatting] = React.useState('');
  const { roomId } = props;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const ChatPost = e => {
    setChatting(e.target.value);
  };

  const ClickEvent = () => {
    if (Chatting !== '') {
      const ms = {
        type: 'TALK',
        roomId: roomId,
        message: Chatting,
      };
      const req = {
        type: 'TALK',
        roomId: roomId,
        message: Chatting,
        sender: userInfo.username,
      };
      console.log(ms);
      dispatch(ChatAction.PostChatting(ms, req));
      dispatch(ChatAction.getChatMsListDB(roomId));
      setChatting('');
    } else {
      alert('정보를 입력해주세요');
    }
  };
  const Pressevent = e => {
    if (e.key === 'Enter') {
      ClickEvent();
    }
  };
  return (
    <BottomInput>
      <Grid row justify="space-between">
        <Input
          _radius="78px"
          _maxWidth="78%"
          _padding="9px 15px"
          _value={Chatting}
          _onChange={ChatPost}
          onKeyPress={e => {
            Pressevent(e);
          }}
        />
        <Button BtnAdd padding="9px 16px" radius="30px" _onClick={ClickEvent}>
          전송
        </Button>
      </Grid>
    </BottomInput>
  );
}
const BottomInput = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  padding: 12px 30px 30px;
  border-top: 1px solid #e8e8e8;
  background-color: #fff;
`;

export default PartyInput;
