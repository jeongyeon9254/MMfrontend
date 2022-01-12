import instance from '../instance';
import multi from '../multi';

export const getPost = page => {
  return instance({
    method: 'get',
    url: `/api/post?page=${page}&size=4 `,
  });
};

export const getKategoriPost = (interestId, page) => {
  return instance({
    method: 'get',
    url: `/api/post/interest/${interestId}?page=${page}&size=4`,
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
