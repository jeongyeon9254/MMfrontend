import instance from '../instance';
import axios from 'axios';

export const getPost = code => {
  return instance({
    method: 'get',
    url: `/api/post?page=0&size=10`,
  });
};

export const deletePost = postId => {
  return instance({
    method: 'delete',
    url: `/api/post/${postId}`,
  });
};

export const getDetailPost = postId => {
  return instance({
    method: 'get',
    url: `/api/post/${postId}`,
  });
};
