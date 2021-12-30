import instance from '../instance';
import axios from 'axios';

export const kakaoLogin = code => {
  return instance({
    method: 'GET',
    url: `/user/kakao/callback?code=${code}`,
  });
};

// 내 정보 가져오기 기능
export const getMyinfoDB = () => {
  return instance({
    method: 'get',
    url: '/user/profile',
  });
};

//내정보 추가기입 기능
export const addMyinfoDB = data => {
  return instance({
    method: 'put',
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
