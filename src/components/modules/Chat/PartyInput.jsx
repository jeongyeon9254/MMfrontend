import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Input } from '../../element';
import moment from 'moment';

function PartyInput(props) {
  const [Chatting, setChatting] = React.useState('');
  const { roomId, sendMessage } = props;
  const date = moment();
  // 보내는거
  const ChatPost = e => {
    setChatting(e.target.value);
  };

  const ClickEvent = () => {
    // send할 데이터
    const ms = {
      type: 'TALK',
      roomId: roomId,
      message: Chatting,
      date: date,
    };
    sendMessage(ms);
    setChatting('');
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
