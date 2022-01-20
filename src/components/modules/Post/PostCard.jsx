import React from 'react';
import styled from 'styled-components';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// Component
import { Grid, Image, Tag } from '../../element/index';
import { ReactComponent as HeartIcon } from '../../../img/Icon/icon_heart_no.svg';
import { ReactComponent as OnHeartIcon } from '../../../img/Icon/icon_heart_in.svg';
import { ReactComponent as CommentIcon } from '../../../img/Icon/chat_bubble.svg';
import icon_location from '../../../img/Icon/icon_location.svg';

const PostCard = props => {
  // 페이지 네이션 사용
  SwiperCore.use([Pagination]);

  // props값 관리
  const info = props.info;
  const addlike = props.addlike;
  const imgList = info.imageList;
  const time = info.createdAt.split(' ')[0].split('-');

  return (
    <Grid>
      {/* 상단 정보창 */}
      <Grid borderTop="1px solid #E8E8E8" row wrap="nowrap" padding="18px 30px" gap="10px">
        <Grid width="auto">
          <Image src={info.profileImage} photoRound width="50px" margin="0" />
        </Grid>

        <Grid gap="10px" justify="center">
          <Grid row gap="13px">
            <NameText>{info.nickname}</NameText>
            <Tag mbti={info.mbti} _type="black" icon>
              {info.mbti}
            </Tag>
          </Grid>
          <TimeText>
            {Number(time[1])}월 {time[2]}일
          </TimeText>
        </Grid>

        <Grid gap="9px" justify="center" align="flex-end" width="60%">
          <LocalText>
            <img alt="마커" src={icon_location}></img>
            {info.location} {info.locDetail}
          </LocalText>
          <Tag mbti={info.mbti} padding="4px 10px" size="12px">
            {info.tag}
          </Tag>
        </Grid>
      </Grid>

      {/* 이미지 슬라이드 스와이퍼 */}
      <SwiperBox>
        <Swiper
          className="swiper-container"
          style={{ width: '100%', position: 'relative' }}
          pagination={{
            type: 'fraction',
            fontSize: '12px',
          }}
        >
          {imgList.length !== 0
            ? imgList[0].imageLink === ''
              ? null
              : imgList.map((list, idx) => {
                  return (
                    <SwiperSlide key={list.imageId}>
                      <Image src={list.imageLink} />
                    </SwiperSlide>
                  );
                })
            : null}
          <PaginationBakc />
        </Swiper>
      </SwiperBox>

      {/* 하단 댓글과 좋아요 버튼 */}
      <Grid padding="17px 44px 16px 33px">
        <Text>{info.content}</Text>
        <Grid row padding="16px 0px 0px 0px" align="center">
          {info.likeStatus ? (
            <OnHeartIcon style={{ cursor: 'pointer' }} onClick={addlike} />
          ) : (
            <HeartIcon style={{ cursor: 'pointer' }} onClick={addlike} />
          )}
          <Count>{info.likesCount}</Count>
          <CommentIcon style={{ margin: '0px 0px 0px 14px' }} />
          <Count>{info.commentList.length}</Count>
        </Grid>
      </Grid>
    </Grid>
  );
};

const SwiperBox = styled.div`
  .swiper-pagination {
    font-size: 14px;
    bottom: 15px;
    letter-spacing: -1px;
    color: #3f3f41;
  }
`;

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
  display: flex;
  align-items: center;
`;

const Count = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
  margin: 0px 0px 0px 4px;
`;

const Text = styled.p`
  display: block;
  word-break: break-all;
  line-height: 1.5;
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.small};
`;
const PaginationBakc = styled.div`
  width: 53px;
  height: 19px;
  background: #fff;
  position: absolute;
  bottom: 13px;
  z-index: 1;
  border-radius: 50px;
  opacity: 0.5;
  left: 50%;
  margin-left: -26.5px;
`;

export default PostCard;
