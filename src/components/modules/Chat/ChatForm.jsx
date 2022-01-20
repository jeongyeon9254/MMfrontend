import React from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Header from '../layout/Header';
import { Grid, Image } from '../../element';
import { useSelector } from 'react-redux';
import { PartyInput, ChatListform } from './index';
import { useDispatch } from 'react-redux';
import { actionCreators as ChatAction } from '../../../redux/modules/chat';

const ChatForm = props => {
  const dispatch = useDispatch();
  const { Boo, _onClick, sendMessage, wsDisConnectUnsubscribe, sendStop, Emit } = props;
  const { guestNick, roomId } = props.data;
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const Chatting = useSelector(state => state.chat.List);
  const loading = useSelector(state => state.chat.listloading);
  const total = useSelector(state => state.chat.total);
  const page = useSelector(state => state.chat.page);
  const nowNum = useSelector(state => state.chat.now);
  const scrollRef = React.useRef(null);
  const BoxRef = React.useRef({});
  const [On, SetOn] = React.useState(false);
  const [ChildTop, SetChildTop] = React.useState('');

  console.log(BoxRef);
  //스크롤 엑션
  const scrollTomBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const deleteChatroomAction = () => {
    try {
      dispatch(ChatAction.deleteChatroomDB(roomId));
      _onClick();
    } catch (e) {
      console.log(e);
    }
  };
  const InfiniteStairs = () => {
    if (roomId) {
      if (nowNum < total) {
        if (scrollRef.current.scrollTop === 0) {
          dispatch(ChatAction.getChatMsListDB(roomId, page));
          console.log('By');
        }
      }
    }
  };
  const changeNum = () => {
    if (page > 0) {
      const Num = `${page - 1}`;
      const children = BoxRef.current[Num];
      SetChildTop(children.clientHeight);
    }
  };

  const ScrollAction = top => {
    console.log(top);
    scrollRef.current.scrollTo({ top: top, left: 0, behavior: 'auto' });
  };

  React.useEffect(() => {
    changeNum();
  }, [Chatting.length]);

  React.useEffect(() => {
    ScrollAction(ChildTop);
  }, [ChildTop, Chatting.length]);

  React.useEffect(() => {
    Emit(scrollRef);
  }, []);

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
        className={On ? 'on' : ''}
        onScroll={InfiniteStairs}
      >
        <div>
          {loading
            ? Chatting.map((item, index) => {
                return (
                  <Grid
                    gap="19px"
                    padding="19px 30px 0px"
                    key={index}
                    _ref={ref => (BoxRef.current[index] = ref)}
                  >
                    <ChatListform data={item} username={userInfo.username} />
                  </Grid>
                );
              }).reverse()
            : ''}
        </div>
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
ChatForm.defaultProps = {
  Emit: () => {},
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
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d8d8d8;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    display: none;
    height: 8px;
    background-color: #999;
  }
  ::-webkit-scrollbar-corner {
    background-color: none;
  }
  &.on {
    height: 54%;
  }
`;

export default ChatForm;
