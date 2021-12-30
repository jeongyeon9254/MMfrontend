import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Input, Image, Box } from '../../element';
import { useDispatch } from 'react-redux';
import { actionCreators as ChatAction } from '../../../redux/modules/chat';

function PartyInput(props) {
  const dispatch = useDispatch();
  const [Chatting, setChatting] = React.useState('');
  const { roomId } = props;
  const userInfo = {
    nickname: '주르',
    profileImage: 'https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_960_720.jpg',
    gender: 'male',
    ageRange: '30대',
    intro: '소개글입니다',
    location: '종로구',
    longitude: '15.1212',
    latitude: '15.21212',
    mbti: 'INTJ',
    interestList: [{ interest: '공부' }, { interest: '운동' }],
    signStatus: true,
    userId: '42',
  };

  const ChatPost = e => {
    setChatting(e.target.value);
  };

  const ClickEvent = () => {
    const ms = {
      type: 'TALK',
      roomId: roomId,
      username: userInfo.nickname,
      profileImage: userInfo.profileImage,
      message: Chatting,
      userId: userInfo.userId,
    };
    dispatch(ChatAction.pushChatRoom(ms));
    setChatting('');
  };

  return (
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
  );
}
const BottomInput = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  padding: 12px 30px 30px;
  border-top: 1px solid #e8e8e8;
  background-color: #fff;
`;

export default PartyInput;
