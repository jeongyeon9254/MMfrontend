import React, { useState } from 'react';
import styled from 'styled-components';

// JS
import { history } from '../../redux/configureStore';
import icon_pen from '../../img/Icon/icon_pen.svg';
import icno_circle from '../../img/Icon/icno_circle.svg';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postAcitions } from '../../redux/modules/post.js';

// component
import { Button, Grid } from '../element/index.js';
import MapCategoryNav from '../modules/Main/MapCategoryNav';
import Header from '../modules/layout/Header';
import PostCard from '../modules/Post/PostCard';
import MainComment from '../../components/modules/Post/MainComment';
import Null from '../../shared/Null';
import Skeleton from '../../shared/Skeleton';

const PostMain = () => {
  const dispatch = useDispatch();

  // 유저 정보를 가져옵니다
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // 리덕스 정보 관리
  const postList = useSelector(state => state.post.postList);
  const page = useSelector(state => state.post.page);
  const loading = useSelector(state => state.post.loading);

  // 카테고리 필터
  const [category, setCategory] = useState(0);

  // 처음 0페이지를 받아오고 스크롤을 최상단으로 위치시킵니다
  React.useEffect(() => {
    dispatch(postAcitions.getPostDB(page));
    document.getElementById('allBox').scrollTop = 0;
  }, []);

  // 리스트 id순(생성순)으로 정렬
  const list = [...postList];
  const arr =
    list !== []
      ? list.sort((a, b) => {
          return b.postId - a.postId;
        })
      : [];

  // 무한스크롤 관리
  const allBox = document.getElementById('allBox');
  const scrollBox = document.getElementById('scrollBox');
  const infinityScroll = () => {
    const recentHeight = allBox.scrollTop;
    const scrollBoxHeight = scrollBox.offsetHeight;
    const allBoxHeight = allBox.offsetHeight;

    if (recentHeight + allBoxHeight - 17 === scrollBoxHeight) {
      if (category === 0) {
        dispatch(postAcitions.getPostScrollDB(page));
      } else {
        dispatch(postAcitions.getKategorScrolliDB(category, page));
      }
    }
  };

  return (
    <PostBox id="allBox" onScroll={infinityScroll}>
      <Header _on>커뮤니티</Header>

      {/* 카테고리 선택 버튼 */}
      <div className="navBox">
        <MapCategoryNav userInfo={userInfo} setCategory={setCategory} post />
      </div>

      {/* 포스트 슬라이드 */}
      <div id="scrollBox">
        {loading ? <Skeleton></Skeleton> : null}
        {arr.length > 0 ? (
          arr.map((x, idx) => {
            return (
              <div
                key={x.postId}
                onClick={() => {
                  history.push(`/postMain/${x.postId}`);
                }}
              >
                <PostCard info={x} />
                {x.commentList.length > 0 ? (
                  x.commentList.length > 1 ? (
                    <CommentBox>
                      <MainComment info={x.commentList[0]} />
                      <MainComment info={x.commentList[1]} />
                    </CommentBox>
                  ) : (
                    <CommentBox>
                      <MainComment info={x.commentList[0]} />
                    </CommentBox>
                  )
                ) : null}
                {x.commentList.length > 2 ? (
                  <Grid width="20px;" margin="0 auto 20px auto">
                    <img alt="더보기" src={icno_circle}></img>
                  </Grid>
                ) : null}
              </div>
            );
          })
        ) : (
          <Grid padding="40px 0 0 0">
            <Null post></Null>
          </Grid>
        )}
      </div>

      {/* 게시글 작성 버튼 */}
      <div className="postBtnBox">
        <Button
          BtnRound
          width="68px"
          _onClick={() => {
            history.push(`/postWrite`);
          }}
        >
          <img alt="글쓰기버튼" src={icon_pen}></img>
        </Button>
      </div>
    </PostBox>
  );
};

const PostBox = styled.div`
  overflow: scroll;
  height: calc(100% + 105px);
  padding: 0;
  position: relative;
  .postBtnBox {
    position: fixed;
    bottom: 25px;
    right: 30px;
    z-index: 2;
  }
  .navBox {
    position: fixed;
    background: #fff;
    z-index: 3;
  }
  #scrollBox {
    padding-top: 60px;
    box-sizing: border-box;
  }
`;

const CommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #e8e8e8;
  box-sizing: border-box;
  padding: 20px 30px;
`;

export default PostMain;
