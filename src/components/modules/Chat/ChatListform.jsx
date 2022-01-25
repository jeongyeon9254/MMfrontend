import React from 'react';
import styled from 'styled-components';

import { PartyMe, PartyOther } from './index';
import { Grid, Image } from '../../element';

import close from '../../../img/Icon/close.png';
function ChatListform(props) {
  const { data, username, ClickDeleteRoom, OpenClick, Open } = props;

  return data ? (
    <>
      {data.map((item, idx) => {
        switch (item.type) {
          case 'TALK':
            return item.senderName === username ? (
              <PartyMe key={idx} data={item}>
                {item.message}
              </PartyMe>
            ) : (
              <PartyOther key={idx} data={item}>
                {item.message}
              </PartyOther>
            );
          case 'ENTER':
            return <Alarm key={idx}> {item.message}</Alarm>;
          case 'QUIT':
            if (Open) {
              return (
                <>
                  <ModalQUIT key={idx}>
                    <Grid gap="10px">
                      <ModalClose src={close} onClick={() => OpenClick(false)}></ModalClose>
                      <p>{item.message}</p>
                      <ModalBtn onClick={ClickDeleteRoom}>방나가기</ModalBtn>
                    </Grid>
                  </ModalQUIT>
                  <ModalBg onClick={() => OpenClick(false)}></ModalBg>
                </>
              );
            } else {
              return '';
            }
          case 'EMO':
            return item.senderName === username ? (
              <EmoticonImgBox key={idx}>
                <Grid row justify="end" align="end" gap="10px">
                  <Date>{item.date}</Date>
                  <img src={item.message} alt="이모티콘" />
                </Grid>
              </EmoticonImgBox>
            ) : (
              <EmoticonImgBox key={idx}>
                <Grid row align="end" gap="10px">
                  <Image round src={item.senderImg} width="40px" margin="0" />
                  <img src={item.message} alt="이모티콘" />
                  <Date>{item.date}</Date>
                </Grid>
              </EmoticonImgBox>
            );
          default:
            return '';
        }
      })}
    </>
  ) : (
    ''
  );
}
const Date = styled.p`
  font-size: 9px;
  color: #9b9b9b;
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

const ModalQUIT = styled.div`
  position: fixed;
  z-index: 99999;
  left: 50%;
  top: 100px;
  background: azure;
  width: 80%;
  padding: 20px 30px 30px;
  transform: translateX(-50%);
`;

const ModalBtn = styled.div`
  padding: 10px;
  border: 1px solid #eee;
  margin-top: 10px;
  border-radius: 30px;
  text-align: center;
  background: #fff;
  cursor: pointer;
  transition: all ease 0.3s;
  z-index: 1000;
  &:hover {
    background: #7860b3;
    color: #fff;
  }
`;

const ModalBg = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  z-index: 999;
  cursor: pointer;
`;

const ModalClose = styled.img`
  width: 17px;
  margin-left: auto;
  cursor: pointer;
`;
export default ChatListform;
