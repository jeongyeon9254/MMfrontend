import React from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Header from '../layout/Header';
import { Grid } from '../../element';
import { useSelector } from 'react-redux';
import { PartyOther, PartyMe, PartyInput } from './index';
const ChatForm = props => {
  const { Boo, _onClick } = props;
  const { userId, nickname } = props.data;

  const Chatx = useSelector(state => state.chat.chatList);

  return (
    <PageShadows className={Boo ? 'open' : ''}>
      <Header point="absolute" _on={_onClick}>
        {nickname}
      </Header>
      <Grid height="89%">
        <PerfectScrollbar component="div">
          <Grid gap="19px" padding="19px 30px">
            {Chatx.map((x, idx) => {
              switch (x.type) {
                case 'TALK':
                  return x.userId === userId ? (
                    <PartyOther key={idx}>{x.message}</PartyOther>
                  ) : (
                    <PartyMe key={idx}>{x.message}</PartyMe>
                  );
                case 'ALARM':
                  return <Alarm key={idx}> {x.message}</Alarm>;
                default:
                  return;
              }
            })}
          </Grid>
        </PerfectScrollbar>
      </Grid>
      <PartyInput></PartyInput>
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
