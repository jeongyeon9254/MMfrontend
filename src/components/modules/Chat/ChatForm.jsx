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

const ChatForm = props => {
  const dispatch = useDispatch();
  const { Boo, _onClick, sendMessage, wsDisConnectUnsubscribe } = props;
  const { userId, name, roomId } = props.data;
  const msRef = React.useRef('');
  const [Chatting, setChatting] = React.useState('');
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const Chatx = useSelector(state => state.chat.List);

  React.useEffect(() => {
    if (roomId) {
      dispatch(ChatAction.getChatMsListDB(roomId));
    }
    return () => {
      wsDisConnectUnsubscribe();
    };
  }, [roomId]);

  //스크롤 엑션
  const scrollTomBottom = () => {};

  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header Page point="absolute" _onClick={_onClick}>
        {name}
      </Header>
      <ScrollBox>
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
      </ScrollBox>
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
const ScrollBox = styled.div`
  width: 100%;
  height: 89%;
  overflow-y: scroll;
`;

const Alarm = styled.p`
  font-size: 10px;
  color: #9b9b9b;
  width: 100%;
  text-align: center;
`;
export default ChatForm;
