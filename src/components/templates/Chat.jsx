import React from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import { useSelector } from 'react-redux';
import Footer from '../modules/layout/Footer';
import Header from '../modules/layout/Header';

import { Grid } from '../element';

import { ChatForm, ChatList, Announcement } from '../modules/Chat/';
import { useDispatch } from 'react-redux';
import { actionCreators as ChatAction } from '../../redux/modules/chat';

//통신
import { getCookie } from '../../shared/Cookie';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

const Chat = () => {
  // 받은 요청 수
  const dispatch = useDispatch();
  const Room = useSelector(state => state.chat.Room);
  // 채팅방을 받아서 저장 해 놓고 쓴다.
  // const rooms = useSelector(state => state.chat.room);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [open, setOpen] = React.useState(true);
  const [Paging, setPaging] = React.useState(false);
  const [roomNum, setroomNum] = React.useState('');
  const [Data, setData] = React.useState({});

  console.log(Data);

  React.useEffect(() => {
    dispatch(ChatAction.getChatRoomListDB());
    if (roomNum) {
      wsConnectSubscribe(roomNum);
    }
  }, [roomNum]);

  const env = process.env.NODE_ENV;
  const devTarget = env === 'development' ? 'http://13.209.76.178/ws-stomp' : '';
  const TOKEN = getCookie('authorization');
  const sock = new SockJS(devTarget);
  const ws = Stomp.over(sock);

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
  const sendMessage = ms => {
    try {
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
          console.log('연결 해제');
          ws.unsubscribe('sub-0');
          clearTimeout(waitForConnection);
        },
        { token: TOKEN },
      );
    } catch (e) {
      console.log('연결 구독 해체 에러', e);
    }
  };

  const sendStop = () => {
    try {
      const ms = {
        type: 'BREAK',
        roomId: roomNum,
        message: '매칭상대가 방을 나갔습니다.',
      };
      waitForConnection(ws, () => {
        ws.debug = null;
        sendMessage(ms);
        console.log('메세지전송 상태', ws.ws.readyState);
      });
    } catch (e) {
      console.log('메세지 소켓 함수 에러', e);
      console.log('메세지전송 상태', ws.ws.readyState);
    }
  };
  return (
    <div>
      <Header>채팅</Header>
      <Announcement></Announcement>
      <Grid height="100%">
        <Boad className={open ? 'Open' : ''}>
          {Room.map((x, idx) => {
            return (
              <ChatList
                OnClick={e => {
                  //api 요청 보내면서 유저 정보를 가지고 온다. redux에 저장 해서 userBox에서 가지고 온다.
                  setPaging(!Paging);
                  setData(x);
                  //입장한 채팅방 메세지 정보 가져 오기
                  setroomNum(x.roomId);
                  dispatch(ChatAction.getChatMsListDB(x.roomId));

                  //채팅방 입장 잘때
                  const ms = {
                    type: 'ENTER',
                    roomId: x.roomId,
                    message: `${userInfo.nickname}님이 입장 하셨습니다.`,
                  };
                  sendMessage(ms);
                }}
                data={x}
                key={idx}
              ></ChatList>
            );
          })}
        </Boad>
      </Grid>
      <ChatForm
        sendMessage={sendMessage}
        wsDisConnectUnsubscribe={wsDisConnectUnsubscribe}
        Boo={Paging}
        data={Data !== {} ? Data : ''}
        _onClick={() => {
          setPaging(!Paging);
          setData({});
          dispatch(ChatAction.DeletMsList());
        }}
      ></ChatForm>
      <Footer />
    </div>
  );
};
const Boad = styled.div`
  height: 0px;
  overflow: hidden;
  position: relative;
  top: -100px;
  left: 0px;
  z-index: 1;
  opacity: 0;
  transition: all ease 0.3s;
  &.Open {
    height: auto;
    overflow: auto;
    opacity: 1;
    top: 0px;
  }
`;

export default Chat;
