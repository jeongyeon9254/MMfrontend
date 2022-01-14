import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Grid, Image, Tag } from '../../element';
import { Skeleton } from './index';

const ChatList = props => {
  const { OnClick } = props;
  const { guestImg, guestMbti, guestNick } = props.data;
  const LastChat = '여기는 마지막 채팅글 보일거요 여기는 마지막 채팅글 보일거요';
  const loading = useSelector(state => state.chat.loading);
  console.log(loading);
  if (loading) {
    return (
      <Grid list _onClick={OnClick} gap="11px" Btop="0px" pad="17px 30px">
        <Image src={guestImg} round mbti={guestMbti} width="56px" margin="0px" />
        <Grid gap="12px" width="80%">
          <Grid row align="center" gap="6px">
            <Name>{guestNick}</Name>{' '}
            <Tag mbti={guestMbti} _type="black">
              {guestMbti}
            </Tag>
          </Grid>
          <div>
            <Text>{LastChat}</Text>
            {LastChat.length >= 30 ? <Dot>...</Dot> : ''}
          </div>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <>
        <Skeleton type="List" />
        <Skeleton type="List" />
        <Skeleton type="List" />
        <Skeleton type="List" />
        <Skeleton type="List" />
      </>
    );
  }
};
const Date = styled.p`
  margin: 0px 0px 0px auto;
  font-size: ${props => props.theme.fontSizes.extraSmall};
  color: #8a8a8a;
`;
const Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: bold;
`;
const Text = styled.div`
  font-size: ${props => props.theme.fontSizes.maxSmall};
  color: ${props => props.theme.colors.gray_2};
  height: ${props => props.theme.fontSizes.maxSmall};
  overflow: hidden;
  word-break: keep-all;
  word-wrap: break-word;
`;
const Dot = styled.div`
  height: 10px;
`;
export default ChatList;
