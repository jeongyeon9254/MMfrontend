import React from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Header from '../layout/Header';
import { Grid, Button, Input, Image, Box } from '../../element';
import { useSelector } from 'react-redux';

const ChatForm = props => {
  const { Boo, _onClick } = props;
  const { userId, nickname } = props.data;
  const [Chatting, setChatting] = React.useState('');
  const ChatPost = e => {
    setChatting(e.target.value);
  };
  const ClickEvent = () => {
    console.log(`채팅 :${Chatting}`);
    setChatting('');
  };

  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header point="absolute" _on={_onClick}>
        {nickname}
      </Header>
      <Grid height="89%">
        <PerfectScrollbar component="div">
          <Grid gap="19px" padding="19px 30px">
            {/* 상대 채팅  */}
            <Grid row width="100%" gap="7px">
              <Image round src="" width="40px" margin="0" />
              <Grid width="80%" row gap="4px" align="flex-end">
                <Box width="80%" padding="7px 10px">
                  안녕하세요~! 잘부탁드립니다, 우주하마입니다!안녕하세요~! 잘부탁드립니다,
                  우주하마입니다!안녕하세요~! 잘부탁드립니다, 우주하마입니다!안녕하세요~!
                  잘부탁드립니다, 우주하마입니다!안녕하세요~! 잘부탁드립니다,
                  우주하마입니다!안녕하세요~! 잘부탁드립니다, 우주하마입니다!안녕하세요~!
                  잘부탁드립니다, 우주하마입니다!
                </Box>
                <Date>오후 7:35</Date>
              </Grid>
            </Grid>
            {/* 입장 및 수락 알람  */}
            <Alarm>홍길동 님이 매칭 신청을 수락하셨습니다! 재밌는 시간 보내세요</Alarm>
            {/* 내 채팅  */}
            <Grid row width="100%" gap="7px" justify="flex-end">
              <Grid width="80%" row gap="4px" align="flex-end">
                <Date>오후 7:35</Date>
                <Box width="80%" padding="7px 10px" black>
                  안녕하세요~! 잘부탁드립니다, 우주하마입니다!안녕하세요~! 잘부탁드립니다,
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Grid>
      <BottomInput>
        <Grid row justify="space-between">
          <Input
            _radius="78px"
            _maxWidth="78%"
            _padding="9px 15px"
            _value={Chatting}
            _onChange={ChatPost}
          />
          <Button BtnAdd padding="9px 16px" radius="30px" _onClick={ClickEvent}>
            전송
          </Button>
        </Grid>
      </BottomInput>
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
  z-index: 99;
  padding-top: 55px;
  transition: all ease 0.3s;
  &.open {
    left: 0px;
  }
`;
const BottomInput = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  padding: 12px 30px 30px;
  border-top: 1px solid #e8e8e8;
  background-color: #fff;
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
