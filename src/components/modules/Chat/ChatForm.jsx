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
import { getCookie } from '../../../shared/Cookie';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

const ChatForm = props => {
  const dispatch = useDispatch();
  const { Boo, _onClick } = props;
  const { userId, name, roomId } = props.data;

  const [Chatting, setChatting] = React.useState('');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const Chatx = useSelector(state => state.chat.List);
  console.log(Chatx);
  const env = process.env.NODE_ENV;
  const devTarget = env === 'development' ? 'http://13.209.76.178/ws-stomp' : '';
  const TOKEN = getCookie('authorization');
  const sock = new SockJS(devTarget);
  const ws = Stomp.over(sock);

  React.useEffect(() => {
    if (roomId) {
      dispatch(ChatAction.getChatMsListDB(roomId));
      wsConnectSubscribe(roomId);
    }
    return () => {
      wsDisConnectUnsubscribe();
    };
  }, [roomId]);

  const wsConnectSubscribe = Id => {
    try {
      ws.debug = null;
      ws.connect({ token: TOKEN }, () => {
        ws.subscribe(`/sub/chat/room/${Id}`, data => {
          let recv = JSON.parse(data.body);
          console.log('구독후 새로운 메세지 data :' + recv);
          console.log(recv);
          dispatch(ChatAction.PostChatting(recv));
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  // 채팅 보내기
  const sendMessage = new_message => {
    console.log(new_message);
    try {
      // send할 데이터
      const ms = {
        type: 'TALK',
        roomId: roomId,
        message: new_message,
      };
      waitForConnection(ws, () => {
        ws.debug = null;
        ws.send('/pub/chat/message', { token: TOKEN }, JSON.stringify(ms));
      });
    } catch (e) {
      console.log('message 소켓 함수 에러', e);
      console.log('메세지보내기 상태', ws.ws.readyState);
    }
  };

  // 웹소켓이 연결될 때 까지 실행하는 함수
  const waitForConnection = (ws, callback) => {
    setTimeout(() => {
      if (ws.ws.readyState === 1) {
        callback();
      } else {
        waitForConnection(ws, callback);
      }
    }, 0.1);
  };

  // 다른 방을 클릭하거나 뒤로가기 버튼 클릭시 연결해제 및 구독해제
  const wsDisConnectUnsubscribe = () => {
    try {
      ws.debug = null;
      ws.disconnect(
        () => {
          ws.unsubscribe('sub-0');
          clearTimeout(waitForConnection);
        },
        { token: TOKEN },
      );
    } catch (e) {
      console.log('연결 구독 해체 에러', e);
    }
  };

  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header Page point="absolute" _onClick={_onClick}>
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
      <PartyInput sendMessage={sendMessage} roomId={roomId}></PartyInput>
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
