import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Image, Tag } from '../../element';
import { SkeletonChat, ChatRoomLast } from './index';

const ChatList = props => {
  const { OnClick } = props;
  const { guestImg, guestMbti, guestNick, lastMessage, messageType, messageTime } = props.data;
  const loading = useSelector(state => state.chat.loading);

  const start = lastMessage !== null && messageType !== null && messageTime !== null;
  if (loading) {
    return (
      <Grid list _onClick={OnClick} gap="11px" Btop="0px" pad="17px 30px">
        <Image src={guestImg} round mbti={guestMbti} width="56px" margin="0px" />
        <Grid gap="10px" width="80%">
          <Grid row align="center" gap="6px">
            <Name>{guestNick}</Name>{' '}
            <Tag mbti={guestMbti} _type="black">
              {guestMbti}
            </Tag>
          </Grid>{' '}
          {start ? (
            <ChatRoomLast type={messageType} ms={lastMessage} date={messageTime} />
          ) : (
            '매칭에 성공 하였습니다.'
          )}
        </Grid>
      </Grid>
    );
  } else {
    return (
      <>
        <SkeletonChat type="List" />
        <SkeletonChat type="List" />
        <SkeletonChat type="List" />
        <SkeletonChat type="List" />
        <SkeletonChat type="List" />
      </>
    );
  }
};

const Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: bold;
`;

export default ChatList;
