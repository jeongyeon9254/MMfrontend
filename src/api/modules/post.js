import instance from '../instance';
import multi from '../multi';

// 포스트페이지 첫 페이지 가져오기
export const getPost = page => {
  return instance({
    method: 'get',
    url: `/api/post?page=${page}&size=5 `,
  });
};

// 포스트페이지 무한스크롤 기능
export const getKategoriPost = (interestId, page) => {
  return instance({
    method: 'get',
    url: `/api/post/interest/${interestId}?page=${page}&size=4`,
  });
};

// 포스트 등록
export const addPost = multipartFile => {
  return multi({
    method: 'post',
    url: '/api/post',
    data: multipartFile,
  });
};

// 포스트 수정
export const editPost = (postId, data) => {
  return instance({
    method: 'put',
    url: `/api/post/${postId}`,
    data: data,
  });
};

// 포스트 삭제
export const deletePost = postId => {
  return instance({
    method: 'delete',
    url: `/api/post/${postId}`,
  });
};

// 페이지 상세정보 가져오기
export const getDetailPost = postId => {
  return instance({
    method: 'get',
    url: `/api/post/${postId}`,
  });
};

// 좋아요
export const addLike = postId => {
  return instance({
    method: 'post',
    url: `/api/post/likes/${postId}`,
  });
};
