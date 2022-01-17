import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Heart } from '../../../img/Icon/icon_heart_no.svg';
import { ReactComponent as Sms } from '../../../img/Icon/chat_bubble.svg';

import { Grid, Image } from '../../element/index';

const MyPostCard = props => {
  const mypost = props.postList;
  const img = mypost.imageList[0];

  const time = mypost.createdAt.split(' ')[0].split('-');

  console.log(time);

  return (
    <MyPost>
      <Grid row wrap="nowrap" gap="13px">
        <Grid row width="96px" height="96px" margin="12px 0px 11px 12px">
          <Image src={img.imageLink} border radius="4px" width="96px" height="96px" />
        </Grid>
        <Grid>
          <Grid padding="10px 21px 0px 0px">
            <Title>{mypost.content}</Title>
          </Grid>
          <Grid row wrap="nowrap" margin="6px 0px 0px 0px">
            <Grid>
              <Cnt style={{ color: 'rgba(155, 155, 155, 1)' }}>
                {time[1]}월 {time[2]}일
              </Cnt>
            </Grid>
            <Grid row gap="4px" align="center" wrap="nowrap">
              <Heart />
              <Cnt>{mypost.likesCount}</Cnt>
              <Sms style={{ margin: '0px 0px 0px 14px' }} />
              <Cnt>{mypost.commentList.length}</Cnt>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MyPost>
  );
};

const MyPost = styled.div`
  border: 1px solid #e3e3e3;
  cursor: pointer;
  :hover {
    background-color: #eee;
  }
`;

const Title = styled.p`
  display: -webkit-box;
  font-size: 14px;
  font-weight: 500;
  overflow-wrap: break-word;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  height: 75px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Cnt = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
export default MyPostCard;
