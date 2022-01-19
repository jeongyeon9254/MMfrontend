import instance from '../instance';

// 댓글등록
export const addComment = (postId, comment) => {
  return instance({
    data: comment,
    method: 'post',
    url: `/api/comment/${postId}`,
  });
};

// 댓글삭제
export const deleteComment = (postId, commentId) => {
  return instance({
    method: 'delete',
    url: `/api/comment/${postId}/${commentId}`,
  });
};
