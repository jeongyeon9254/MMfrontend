import React from 'react';
import styled from 'styled-components';
import { PartyMe, PartyOther } from './index';
import { Grid, Image } from '../../element';

function ChatListform(props) {
  const { data, username } = props;
  console.log(data);
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
            return <Alarm key={idx}> {item.message}</Alarm>;
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
export default ChatListform;
