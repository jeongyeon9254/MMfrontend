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

const Chat = () => {
  // 받은 요청 수
  const dispatch = useDispatch();
  const Room = useSelector(state => state.chat.Room);
  // 채팅방을 받아서 저장 해 놓고 쓴다.
  // const rooms = useSelector(state => state.chat.room);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [open, setOpen] = React.useState(true);
  const [Paging, setPaging] = React.useState(false);
  const [RommNum, setRommNum] = React.useState('');
  const [Data, setData] = React.useState({});
  console.log(Room);
  React.useEffect(() => {}, []);

  React.useEffect(() => {
    dispatch(ChatAction.getChatRoomListDB());
  }, []);

  React.useEffect(() => {
    if (RommNum) {
      dispatch(ChatAction.getChatMsListDB(RommNum));
    }
  }, [RommNum]);
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
                  //채팅방 입장할때
                  dispatch(ChatAction.loadChatCommetList(x.roomId, userInfo.nickname));
                  //입장한 채팅방 메세지 정보 가져 오기
                  // setRommNum(x.roomId);
                  dispatch(ChatAction.getChatMsListDB(x.roomId));
                }}
                data={x}
                key={idx}
              ></ChatList>
            );
          })}
        </Boad>
      </Grid>
      <ChatForm
        Boo={Paging}
        data={Data !== {} ? Data : ''}
        _onClick={() => {
          setPaging(!Paging);
          setData({});
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
