import instance from '../instance';
import axios from 'axios';

export const addComment = (postId, comment) => {
  return instance({
    data: comment,
    method: 'post',
    url: `/api/comment/${postId}`,
  });
};

export const deleteComment = (postId, commentId) => {
  return instance({
    method: 'delete',
    url: `/api/comment/${postId}/${commentId}`,
  });
};
