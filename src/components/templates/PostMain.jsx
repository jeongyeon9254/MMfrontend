import React, { useState } from 'react';
import styled from 'styled-components';

// Component
import MapKategorieNav from '../modules/main/MapKategorieNav';
import Header from '../modules/layout/Header';
import PostCard from '../modules/Post/PostCard';

// JS
import { history } from '../../redux/configureStore';
import icon_pen from '../../img/Icon/icon_pen.svg';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postAcitions } from '../../redux/modules/post.js';

// component
import { Button } from '../element/index.js';

const PostMain = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  React.useEffect(() => {
    dispatch(postAcitions.getPostDB());
  }, []);

  const postList = useSelector(state => state.post.postList);

  const list = [...postList];

  const arr =
    list !== []
      ? list.sort((a, b) => {
          return b.postId - a.postId;
        })
      : [];

  const kategorie = useSelector(state => state.main.kategorie);

  console.log(kategorie);

  let filterLists;
  if (kategorie !== null) {
    filterLists = arr.filter(x => x.tag === kategorie);
  }
  if (kategorie === null || kategorie === '전체보기') {
    filterLists = arr;
  }

  return (
    <PostBox>
      <Header>커뮤니티</Header>
      <MapKategorieNav userInfo={userInfo} />
      {postList
        ? filterLists.map((x, idx) => {
            return (
              <div
                key={x.postId}
                onClick={() => {
                  history.push(`/postMain/${x.postId}`);
                }}
              >
                <PostCard info={x} />
              </div>
            );
          })
        : null}
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
`;

export default PostMain;
