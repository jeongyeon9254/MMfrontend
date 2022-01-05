import React from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Header from '../layout/Header';
import { Grid } from '../../element';
import { useSelector } from 'react-redux';
import { PartyOther, PartyMe, PartyInput } from './index';
import { useDispatch } from 'react-redux';
import { actionCreators as ChatAction } from '../../../redux/modules/chat';
import { ws } from '../../../api/ws';
import { getCookie } from '../../../shared/Cookie';

const ChatForm = props => {
  const dispatch = useDispatch();
  const { Boo, _onClick } = props;
  const { userId, name, roomId } = props.data;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const Chatx = useSelector(state => state.chat.List);
  const TOKEN = getCookie('authorization');

  React.useEffect(() => {
    if (roomId) {
      console.log(roomId);
      dispatch(ChatAction.getChatMsListDB(roomId));
    }
  }, [roomId]);

  ws.connect(
    { token: TOKEN },
    frame => {
      ws.subscribe(`/sub/chat/room/${roomId}`, message => {
        let recv = JSON.parse(message.body);
        dispatch(ChatAction.PostChatting(recv));
      });
    },
    error => {
      alert('서버 연결에 실패 하였습니다. 다시 접속해 주십시요.');
      document.location.href = '/';
    },
  );
  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header point="absolute" _on={_onClick}>
        {name}
      </Header>
      <Grid height="89%">
        <PerfectScrollbar component="div">
          <Grid gap="19px" padding="19px 30px">
            {!Chatx
              ? ''
              : Chatx.map((x, idx) => {
                  switch (x.type) {
                    case 'TALK':
                      return x.sender === userInfo.username ? (
                        <PartyMe key={idx} data={x}>
                          {x.message}
                        </PartyMe>
                      ) : (
                        <PartyOther key={idx} data={x}>
                          {x.message}
                        </PartyOther>
                      );
                    case 'ENTER':
                      return <Alarm key={idx}> {x.message}</Alarm>;
                    default:
                      return;
                  }
                })}
          </Grid>
        </PerfectScrollbar>
      </Grid>
      <PartyInput roomId={roomId}></PartyInput>
    </PageShadows>
  );
};

const PageShadows = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  left: -100%;
  top: 0px;
  z-index: 9999;
  padding-top: 85px;
  transition: all ease 0.3s;
  &.open {
    left: 0px;
  }
`;

const Date = styled.p`
  font-size: 9px;
  color: #9b9b9b;
`;

const Alarm = styled.p`
  font-size: 10px;
  color: #9b9b9b;
  width: 100%;
  text-align: center;
`;
export default ChatForm;
