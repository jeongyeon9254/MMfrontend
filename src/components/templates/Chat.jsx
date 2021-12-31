import React from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import { useSelector } from 'react-redux';
import Footer from '../modules/layout/Footer';
import Header from '../modules/layout/Header';
import { Grid } from '../element';
import { ChatForm, ChatList, Announcement } from '../modules/Chat/';

const Chat = () => {
  // 받은 요청 수
  const roomGet = useSelector(state => state.chat.roomGet);
  // 채팅방을 받아서 저장 해 놓고 쓴다.
  // const rooms = useSelector(state => state.chat.room);
  const [open, setOpen] = React.useState(true);
  const [Paging, setPaging] = React.useState(false);
  const [Data, setData] = React.useState({});

  React.useEffect(() => {}, [Data]);
  return (
    <div>
      <Header>채팅</Header>
      <Announcement num={roomGet.length}></Announcement>
      <Grid height="100%">
        <Boad className={open ? 'Open' : ''}>
          {roomGet.map((x, idx) => {
            return (
              <ChatList
                OnClick={e => {
                  //api 요청 보내면서 유저 정보를 가지고 온다. redux에 저장 해서 userBox에서 가지고 온다.
                  setPaging(!Paging);
                  setData(x);
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
