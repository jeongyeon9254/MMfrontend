import React from 'react';
import { Grid, Image, Tag } from '../../element/index';
import styled from 'styled-components';
import { ReactComponent as HeartIcon } from '../../../img/Icon/icon_heart_no.svg';
import { ReactComponent as CommentIcon } from '../../../img/Icon/chat_bubble.svg';

const PostCard = () => {
  const getUser = localStorage.getItem('userInfo');
  const data = JSON.parse(getUser);

  const interestList = data.interestList;

  interestList.map((interest, idx) => console.log(interest.interest));

  return (
    <>
      <Grid borderTop="1px solid #E8E8E8" row wrap="nowrap" padding="18px 20px 0px 20px">
        <Grid width="100%" row wrap="nowrap" align="center" gap="10px">
          <Grid row align="center" margin="0px">
            <Image photoRound width="50px">
              {data.profileImage}
            </Image>
          </Grid>
          <Grid width="100%" gap="7px">
            <NameText>{data.nickname}</NameText>
            <TimeText>3시간 전</TimeText>
          </Grid>
        </Grid>
        <Grid padding="2px 0px 0px 0px" width="50%" height="19px">
          <Tag mbti={data.mbti} _type="black" icon>
            INTJ
          </Tag>
        </Grid>
        <Grid gap="9px" padding="4px 0px 0px 37px" align="flex-end">
          <LocalText>{`서울특별시 ${data.location}`}</LocalText>
          <Grid row justify="flex-end">
            <Tag mbti={data.mbti}>{}</Tag>
          </Grid>
        </Grid>
      </Grid>
      <Grid padding="21px 0px 0px 0px">
        <Image></Image>
      </Grid>
      <Grid borderBot="1px solid #E8E8E8" padding="17px 44px 16px 33px">
        <PostRead></PostRead>
        <Grid row padding="16px 0px 0px 0px">
          <HeartIcon />
          <Count>24</Count>
          <CommentIcon style={{ margin: '0px 0px 0px 14px' }} />
          <Count>24</Count>
        </Grid>
      </Grid>
    </>
  );
};

const NameText = styled.p`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.xl};
`;

const TimeText = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.base};
  color: #9b9b9b;
`;

const LocalText = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.extraSmall};
  color: #9b9b9b;
`;

const Count = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
  margin: 0px 0px 0px 4px;
`;

const PostRead = styled.textarea`
  display: block;
  resize: none;
  outline: none;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
`;

export default PostCard;
