import instance from '../instance';
import axios from 'axios';

export const getPost = code => {
  return instance({
    method: 'get',
    url: `/api/post?page=0&size=10`,
  });
};
