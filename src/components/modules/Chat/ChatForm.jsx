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
  const { Boo, _onClick, sendMessage, wsDisConnectUnsubscribe, sendStop } = props;
  const { guestNick, guestMbti, roomId } = props.data;
  const scrollRef = React.useRef();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const Chatting = useSelector(state => state.chat.List);
  const loading = useSelector(state => state.chat.loading);
  const high = 60;

  const [Height, SetHeight] = React.useState(1500);

  //스크롤 엑션
  const scrollTomBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const InfinitesScrolling = () => {
    if (roomId) {
      if (scrollRef.current.scrollTop <= Height) {
        console.log('안녕');
        console.log(scrollRef.current.scrollTop);
        SetHeight(Height - 1500);
      }
    }
  };

  React.useEffect(() => {
    scrollTomBottom();
  }, [Chatting.length]);

  React.useEffect(() => {
    if (roomId) {
      dispatch(ChatAction.getChatMsListDB(roomId));
    }
    return () => {
      if (roomId) {
        wsDisConnectUnsubscribe();
      }
    };
  }, [roomId]);

  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header Page point="absolute" _onClick={_onClick} sendStop={sendStop} chat>
        {guestNick}
      </Header>
      <ScrollBox ref={scrollRef} onScroll={InfinitesScrolling}>
        <Grid gap="19px" padding="19px 30px">
          {!Chatting
            ? ''
            : Chatting.map((x, idx) => {
                switch (x.type) {
                  case 'TALK':
                    return x.senderName === userInfo.username ? (
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
                  case 'EMO':
                    return x.senderName === userInfo.username ? (
                      <EmoticonImgBox key={idx}>
                        <Grid row justify="end">
                          <img src={x.message} alt="이모티콘" />
                        </Grid>
                      </EmoticonImgBox>
                    ) : (
                      <EmoticonImgBox key={idx}>
                        <Grid row>
                          <img src={x.message} alt="이모티콘" />
                        </Grid>
                      </EmoticonImgBox>
                    );
                  default:
                    return '';
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

const EmoticonImgBox = styled.div`
  height: 100px;
  img {
    height: 100%;
  }
`;

const Alarm = styled.p`
  font-size: 10px;
  color: #9b9b9b;
  width: 100%;
  text-align: center;
`;
export default ChatForm;
