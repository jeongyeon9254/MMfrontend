import React from 'react';
import styled from 'styled-components';

// Component
import { Grid, Image, Box, Tag } from '../../element/index';
import icon_downCircle from '../../../img/Icon/icon_downCircle.svg';

const MainComment = props => {
  // 유저 정보를 가져옵니다
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // props값 관리
  const info = props.info;
  const out = props.out;
  const set = props.set;
  const commenttId = info.commentId;

  // 모달창 닫기
  const onModal = () => {
    set(commenttId);
    out();
  };

  return (
    <Grid row wrap="nowrap" gap="12px">
      <Grid width="40px">
        <Image src={info.image} photoRound></Image>
      </Grid>
      <Grid width="85%">
        <Box comment>
          <Grid align="center" row gap="6px">
            <Grid row align="center" gap="5px">
              <NameText>{info.nickname}</NameText>
              <Grid width="40px">
                <Tag mbti={info.mbti} _type="black" wrap="nowrap">
                  {info.mbti}
                </Tag>
              </Grid>
              <TimeText>{info.createdAt.split(' ')[0]}</TimeText>
              {userInfo.nickname === info.nickname ? (
                <Circle onClick={onModal} alt="댓글삭제" src={icon_downCircle}></Circle>
              ) : null}
            </Grid>
            <Text>{info.comment}</Text>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

const NameText = styled.p`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.small};
`;

const TimeText = styled.p`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.maxSmall};
  color: #9b9b9b;
`;

const Text = styled.p`
  width: 100%;
  white-space: normal;
`;

const Circle = styled.img`
  display: inline-block;
  margin: 0 0 0 auto;
  cursor: pointer;
`;

export default MainComment;
