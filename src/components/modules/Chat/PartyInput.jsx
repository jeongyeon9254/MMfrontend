import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Input } from '../../element';
import { ChatEmoticon, ChatPreview } from './index';
import mood from '../../../img/Icon/mood.svg';
import moment from 'moment';

function PartyInput(props) {
  const [Chatting, setChatting] = React.useState('');
  const [Open, SetOpen] = React.useState(false);
  const [Emoticon, SetEmoticon] = React.useState('');
  const [Preview, SetPreview] = React.useState(false);
  const { roomId, sendMessage, Emit, scrollTomBottom } = props;
  const date = `${moment().hours()}:${moment().minutes()}`;
  // 보내는거
  const ChatPost = e => {
    setChatting(e.target.value);
  };
  const GetEmoticon = data => {
    SetEmoticon(data);
  };

  // 문자 전송 sendEvent
  const TxtSend = () => {
    if (Chatting !== '') {
      // send할 데이터
      const ms = {
        type: 'TALK',
        roomId: roomId,
        message: Chatting,
        date: date,
      };
      sendMessage(ms);
      // console.log(ms);
      setChatting('');
    }
  };

  // 이모티콘 전송 sendEvent
  const EmoticonSend = () => {
    const icon = {
      type: 'EMO',
      roomId: roomId,
      message: Emoticon.number,
    };
    sendMessage(icon);
    // console.log(icon);
    SetPreview(false);
  };

  // 전송이벤트
  const ClickEvent = () => {
    if (Preview) {
      EmoticonSend();
    } else {
      TxtSend();
    }
    scrollTomBottom();
  };

  // enter event
  const Pressevent = e => {
    if (e.key === 'Enter') {
      ClickEvent();
    }
  };
  return (
    <BottomInput>
      <Grid row justify="space-between" padding="12px 17px">
        <InputBox>
          <Input
            _radius="78px"
            _maxWidth="100%"
            _padding="9px 36px 9px 16px"
            _value={Chatting}
            _onChange={ChatPost}
            onKeyPress={e => {
              Pressevent(e);
            }}
          />
          <EmoticonBtn
            onClick={() => {
              SetOpen(!Open);
              Emit(!Open);
            }}
          >
            <img src={mood} alt="이모티콘 버튼" />
          </EmoticonBtn>
        </InputBox>
        <Button
          BtnAdd
          shadow="0px"
          size="14px"
          padding="9px 16px"
          radius="30px"
          _onClick={ClickEvent}
        >
          전송
        </Button>
      </Grid>
      {Preview ? <ChatPreview On={Preview} click={SetPreview} data={Emoticon}></ChatPreview> : ''}
      <ChatEmoticon
        Open={Open}
        On={Preview}
        EmoticonSend={EmoticonSend}
        click={SetPreview}
        Emit={GetEmoticon}
      ></ChatEmoticon>
    </BottomInput>
  );
}
const BottomInput = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  padding: 0px;
  border-top: 1px solid #e8e8e8;
  background-color: #fff;
`;
const InputBox = styled.div`
  position: relative;
  width: 75%;
`;
const EmoticonBtn = styled.div`
  position: absolute;
  right: 9px;
  top: 6px;
  cursor: pointer;
`;

export default PartyInput;
