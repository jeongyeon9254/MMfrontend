import instance from '../instance';
import axios from 'axios';

export const kakaoLogin = code => {
  return instance({
    method: 'GET',
    url: `/user/kakao/callback?code=${code}`,
  });
};

// 내 정보 수정 기능
export const editMyinfoDB = data => {
  return instance({
    method: 'put',
    url: '/api/profile',
    data: data,
  });
};

// 내 mbti 정보 가져오기
export const getMyMbitInfo = () => {
  return instance({
    method: 'get',
    url: '/api/profile/mbti',
  });
};
