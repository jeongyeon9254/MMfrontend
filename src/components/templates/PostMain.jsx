import React from 'react';
import { history } from '../../redux/configureStore';
import MapKategorieNav from '../modules/main/MapKategorieNav';
import Header from '../modules/layout/Header';
import PostCard from '../modules/Post/PostCard';
import MainComment from '../modules/Post/MainComment';

const PostMain = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <>
      <Header>커뮤니티</Header>
      <MapKategorieNav userInfo={userInfo} />
      <PostCard />
      <MainComment />
      <MainComment />
      <MainComment />
    </>
  );
};

export default PostMain;
