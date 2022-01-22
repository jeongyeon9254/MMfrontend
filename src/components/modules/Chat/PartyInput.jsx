import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Grid, Button, Input } from '../../element';
import { ChatEmoticon, ChatPreview } from './index';
import mood from '../../../img/Icon/mood.svg';
import moment from 'moment';

function PartyInput(props) {
  const ListData = useSelector(state => state.chat.List);
  const disabled = ListData.find(el => {
    return el.type === 'QUIT';
  });
  const [Chatting, setChatting] = React.useState('');
  const [Open, SetOpen] = React.useState(false);
  const [Emoticon, SetEmoticon] = React.useState('');
  const [Preview, SetPreview] = React.useState(false);
  const { roomId, sendMessage, Emit, scrollTomBottom, MsQuit } = props;
  const date = `${moment().hours()}:${moment().minutes()}`;
  // 보내는거
  const ChatPost = e => {
    setChatting(e.target.value);
  };
  const GetEmoticon = data => {
    SetEmoticon(data);
  };
  function urlify(text) {
    try {
      var urlRegex = /(https?:\/\/[^\s]+)/g;

      return text.replace(urlRegex, function (url) {
        return '<a target="_blank" href="' + url + '">' + url + '</a>';
      });
    } catch (e) {
      console.log(e);
    }
  }

  // 문자 전송 sendEvent
  const TxtSend = () => {
    let Cattext = urlify(Chatting);
    if (Chatting !== '') {
      if (Chatting.length < 250) {
        // send할 데이터
        const ms = {
          type: 'TALK',
          roomId: roomId,
          message: Cattext,
          date: date,
        };
        sendMessage(ms);
        setChatting('');
      }
    }
  };

  // 이모티콘 전송 sendEvent
  const EmoticonSend = () => {
    const icon = {
      type: 'EMO',
      roomId: roomId,
      message: Emoticon.number,
      date: date,
    };
    sendMessage(icon);
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
  if (!MsQuit) {
    return (
      <BottomInput>
        {disabled ? (
          <Grid row justify="space-between" padding="12px 17px">
            <DisabledBox />
            <DisabledBtn />
          </Grid>
        ) : (
          <>
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
            {Preview ? (
              <ChatPreview On={Preview} click={SetPreview} data={Emoticon}></ChatPreview>
            ) : (
              ''
            )}
            <ChatEmoticon
              Open={Open}
              On={Preview}
              EmoticonSend={EmoticonSend}
              click={SetPreview}
              Emit={GetEmoticon}
            ></ChatEmoticon>
          </>
        )}
      </BottomInput>
    );
  } else {
    return (
      <BottomInput>
        {' '}
        <Grid row justify="space-between" padding="12px 17px">
          <FakeInput></FakeInput>
          <FakeInBtn></FakeInBtn>
        </Grid>
      </BottomInput>
    );
  }
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
const DisabledBox = styled.div`
  background-color: #eee;
  border-radius: 30px;
  width: 80%;
  height: 40px;
`;
const DisabledBtn = styled.div`
  background-color: #eee;
  border-radius: 30px;
  width: 15%;
  height: 40px;
`;
const EmoticonBtn = styled.div`
  position: absolute;
  right: 9px;
  top: 6px;
  cursor: pointer;
`;

const FakeInput = styled.div`
  width: 80%;
  border-radius: 30px;
  background-color: #fff;
  border: 1px solid #000;
  height: 30px;
`;
const FakeInBtn = styled.div`
  width: 15%;
  border-radius: 30px;
  background-color: #fff;
  border: 1px solid #000;
  height: 30px;
`;

export default PartyInput;
