import React from 'react';
import { history } from '../../redux/configureStore';
import MapKategorieNav from '../modules/main/MapKategorieNav';
import Header from '../modules/layout/Header';
import PostCard from '../modules/Post/PostCard';

const PostMain = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <>
      <Header
        _on={() => {
          history.push('/');
        }}
      >
        커뮤니티
      </Header>
      <MapKategorieNav userInfo={userInfo} />
      <PostCard />
    </>
  );
};

export default PostMain;
