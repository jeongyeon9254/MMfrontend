import React, { useState, useRef } from 'react';
import styled from 'styled-components';

// JS
import { history } from '../../redux/configureStore';
import icon_pen from '../../img/Icon/icon_pen.svg';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../redux/modules/post.js';

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
    dispatch(postActions.getPostDB(page));
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
  const scroll_1 = useRef(null);
  const scroll_2 = useRef(null);

  const infinityScroll = () => {
    const recentScrollTop = scroll_1.current.scrollTop;
    const scrollBoxHeight = scroll_2.current.scrollHeight;
    const allBoxHeight = scroll_1.current.clientHeight;

    if (recentScrollTop + allBoxHeight === scrollBoxHeight) {
      if (category === 0) {
        dispatch(postActions.getPostScrollDB(page));
      } else {
        dispatch(postActions.getCategoryScrollDB(category, page));
      }
    }
  };

  return (
    <PostBox id="allBox">
      <Header _on>커뮤니티</Header>

      {/* 카테고리 선택 버튼 */}
      <div className="navBox">
        <MapCategoryNav userInfo={userInfo} setCategory={setCategory} post />
      </div>

      {/* 포스트 슬라이드 */}
      <div id="scrollBox_1" ref={scroll_1} onScroll={infinityScroll}>
        <div id="scrollBox_2" ref={scroll_2}>
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
                </div>
              );
            })
          ) : (
            <Grid padding="40px 0 0 0">
              <Null post></Null>
            </Grid>
          )}
        </div>
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
  height: 100%;
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
  #scrollBox_1 {
    position: absolute;
    top: 60px;
    width: 100%;
    height: calc(100% + 10px);
    overflow-x: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background-color: #fff;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #d8d8d8;
      border-radius: 30px;
    }
    ::-webkit-scrollbar-button:start:decrement,
    ::-webkit-scrollbar-button:end:increment {
      display: none;
      height: 8px;
      background-color: #999;
    }
    ::-webkit-scrollbar-corner {
      background-color: none;
    }
  }
  #scrollBox_2 {
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
