import instance from '../instance';
import axios from 'axios';

export const kakaoLogin = code => {
  return instance({
    method: 'GET',
    url: `/user/kakao/callback?code=${code}`,
  });
};

//내정보 추가기입 기능
export const addMyinfoDB = data => {
  return instance({
    method: 'PUT',
    url: '/user/profile',
    data: data,
  });
};

// 내 정보 수정 기능
export const editMyinfoDB = data => {
  return instance({
    method: 'put',
    url: '/api/profile/edit',
    data: data,
  });
};
