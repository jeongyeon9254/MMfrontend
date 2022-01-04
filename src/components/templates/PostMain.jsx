import React, { useState } from 'react';
import styled from 'styled-components';

// Component
import MapKategorieNav from '../modules/main/MapKategorieNav';
import Header from '../modules/layout/Header';
import PostCard from '../modules/Post/PostCard';

// JS
import { history } from '../../redux/configureStore';

// Redux
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postAcitions } from '../../redux/modules/post.js';

const PostMain = () => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  React.useEffect(() => {
    dispatch(postAcitions.getPostDB());
  }, []);

  const postList = useSelector(state => state.post.postList);

  console.log(postList);

  return (
    <PostBox>
      <Header>커뮤니티</Header>
      <MapKategorieNav userInfo={userInfo} />
      {postList
        ? postList.map((x, idx) => {
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
    </PostBox>
  );
};

const PostBox = styled.div`
  overflow: scroll;
  height: calc(100% + 105px);
  padding: 0;
`;

export default PostMain;
