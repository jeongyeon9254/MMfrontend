import instance from '../instance';
import axios from 'axios';
import multi from '../multi';

export const getPost = page => {
  return instance({
    method: 'get',
    url: `/api/post?page=${page}&size=3`,
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

export const addLike = postId => {
  return instance({
    method: 'post',
    url: `/api/post/likes/${postId}`,
  });
};

export const addPost = multipartFile => {
  return multi({
    method: 'post',
    url: '/api/post',
    data: multipartFile,
  });
};

export const editPost = (postId, data) => {
  return instance({
    method: 'put',
    url: `/api/post/${postId}`,
    data: data,
  });
};
