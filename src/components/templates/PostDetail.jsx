import React, { useState } from 'react';
import styled from 'styled-components';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

// Component
import Header from '../modules/layout/Header';
import MainComment from '../../components/modules/Post/MainComment';
import { Grid, Image, Tag } from '../element/index';
import { ReactComponent as HeartIcon } from '../../img/Icon/icon_heart_no.svg';
import { ReactComponent as OnHeartIcon } from '../../img/Icon/icon_heart_in.svg';
import { ReactComponent as CommentIcon } from '../../img/Icon/chat_bubble.svg';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../redux/modules/post';
import { actionCreators as userAction } from '../../redux/modules/user';
import PostModal from '../modules/Post/PostModal';
import AddComment from '../modules/Post/AddComment';

// Js
import icon_location from '../../img/Icon/icon_location.svg';

const PostDetail = props => {
  const dispatch = useDispatch();
  SwiperCore.use([Pagination]);

  // path
  const pathName = props.location.pathname;
  const boardId = pathName.split('/');

  // 유저 정보
  const getUser = localStorage.getItem('userInfo');
  const data = JSON.parse(getUser);

  // 예외처리용 정보
  const detailInfo = useSelector(state => state.post.detail);
  const mbti = detailInfo.mbti;
  const imgList = detailInfo.imageList;
  const comment = detailInfo.commentList;
  const time = detailInfo.createdAt ? detailInfo.createdAt.split(' ')[0].split('-') : 0;

  console.log(time);

  React.useEffect(() => {
    dispatch(postActions.getDetailDB(boardId[2]));
  }, []);

  React.useEffect(() => {
    dispatch(userAction.getMyPostBoxDB());
  }, []);

  const [modal, setModal] = useState(false);
  const [commentState, setCommentState] = useState(false);

  const [commenttId, setCommenttId] = useState();

  const onCommentModal = () => {
    setModal(true);
    setCommentState(true);
  };

  const outModal = () => {
    setModal(false);
    setCommentState(false);
  };

  const addlike = () => {
    dispatch(postActions.addLikeDB(boardId[2]));
  };

  return (
    <DetailBox>
      <Header
        defaultName={data.nickname}
        name={detailInfo.nickname}
        detail
        _onClick={() => {
          setModal(true);
        }}
      >
        게시글 상세보기
      </Header>

      <Grid>
        <Grid borderTop="1px solid #E8E8E8" row wrap="nowrap" padding="18px 30px" gap="10px">
          <Grid width="auto">
            <Image src={detailInfo.profileImage} photoRound width="50px" margin="0" />
          </Grid>
          <Grid gap="10px" justify="center">
            <Grid row gap="13px">
              <NameText>{detailInfo.nickname}</NameText>
              <Tag mbti={mbti ? mbti : 'INFJ'} _type="black" icon>
                {detailInfo.mbti}
              </Tag>
            </Grid>
            <TimeText>
              {Number(time[1])}월 {time[2]}일
            </TimeText>
          </Grid>
          <Grid gap="9px" justify="center" align="flex-end" width="60%">
            <LocalText>
              <img alt="마커" src={icon_location} />
              서울특별시 {detailInfo.location}
            </LocalText>
            <Tag mbti={mbti ? mbti : 'INFJ'} padding="4px 10px" size="12px">
              {detailInfo.tag}
            </Tag>
          </Grid>
        </Grid>

        <Swiper
          className="swiper-container"
          style={{ width: '100%', position: 'relative' }}
          pagination={{
            type: 'fraction',
          }}
        >
          {imgList
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

        <Grid padding="17px 44px 16px 33px">
          <Text>{detailInfo.content}</Text>
          <Grid row padding="16px 0px 0px 0px" align="center">
            {detailInfo.likeStatus ? (
              <OnHeartIcon style={{ cursor: 'pointer' }} onClick={addlike} />
            ) : (
              <HeartIcon style={{ cursor: 'pointer' }} onClick={addlike} />
            )}
            <Count>{detailInfo.likesCount}</Count>
            <CommentIcon style={{ margin: '0px 0px 0px 14px' }} />
            <Count>{comment ? comment.length : null}</Count>
          </Grid>
        </Grid>
      </Grid>
      <Grid padding="20px 30px" gap="12px" borderTop="1px solid #E8E8E8">
        {comment
          ? comment.map((x, idx) => {
              return (
                <Grid key={idx}>
                  <MainComment
                    set={setCommenttId}
                    info={x}
                    boardId={boardId[2]}
                    out={onCommentModal}
                  ></MainComment>
                </Grid>
              );
            })
          : null}
      </Grid>
      <AddComment boardId={boardId[2]}></AddComment>
      {modal ? (
        <PostModal
          commenttId={commenttId}
          commentState={commentState}
          boardId={boardId[2]}
          out={outModal}
        />
      ) : null}
    </DetailBox>
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
  width: 80px;
  height: 25px;
  background: #fff;
  position: absolute;
  bottom: 6px;
  z-index: 1;
  border-radius: 50px;
  opacity: 0.5;
  left: 50%;
  margin-left: -40px;
`;

const DetailBox = styled.div`
  height: calc(100% + 105px);
  overflow: scroll;
  padding-bottom: 78px;
  margin-top: -3px;
`;

export default PostDetail;
