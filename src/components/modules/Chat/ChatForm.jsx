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
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const Chatting = useSelector(state => state.chat.List);
  const loading = useSelector(state => state.chat.loading);
  const page = useSelector(state => state.chat.page);
  const [height, setHeight] = React.useState(null);

  const [On, SetOn] = React.useState(false);

  //스크롤 엑션
  const scrollTomBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const scrollRef = React.useCallback(x => {
    if (x !== null) {
      setHeight(x.getBoundingClientRect().height);
    }
  });

  console.log(height);

  // const InfinitesScrolling = () => {
  //   if (roomId) {
  //     if (scrollRef.current.scrollTop <= Height) {
  //       dispatch(ChatAction.getChatMsListDB(roomId, page));
  //       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  //     }
  //   }
  // };
  const deleteChatroomAction = () => {
    dispatch(ChatAction.deleteChatroomDB(roomId));
  };

  React.useEffect(() => {
    scrollTomBottom();
  }, [Chatting.length]);

  React.useEffect(() => {
    return () => {
      if (roomId) {
        wsDisConnectUnsubscribe();
      }
    };
  }, [roomId]);

  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header
        Page
        point="absolute"
        _onClick={_onClick}
        sendStop={sendStop}
        deleteChatroomAction={deleteChatroomAction}
        chat
      >
        {guestNick}
      </Header>
      <ScrollBox
        id="ScrollBox"
        ref={scrollRef}
        // onScroll={InfinitesScrolling}
        className={On ? 'on' : ''}
      >
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
                  case 'QUIT':
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
      <PartyInput
        sendMessage={sendMessage}
        roomId={roomId}
        Emit={SetOn}
        scrollTomBottom={scrollTomBottom}
      ></PartyInput>
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
  &.on {
    height: 54%;
  }
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
