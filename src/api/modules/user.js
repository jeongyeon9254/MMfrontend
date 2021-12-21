import instance from '../instance';
import axios from 'axios';
import { kakaoAPI } from '../../config';

// 카카오로그인  일단 블로그에서 가져옴
export const KakaoLogin = history => {
  window.Kakao.Auth.login({
    success: response => {
      axios
        .get(`${kakaoAPI}/kakao`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: response.access_token,
          },
        })
        .then(res => {
          localStorage.setItem('token', res.data.token);
          alert('로그인 되었습니다.');
          history.push('/');
        });
    },
  });
};

// 내 정보 가져오기 기능
export const getMyinfoDB = () => {
  instance({
    method: 'get',
    url: '/user/profile',
  });
};

//내정보 추가기입 기능
export const addMyinfoDB = data => {
  instance({
    method: 'put',
    url: '/user/profile',
    data: data,
  });
};

// 내 정보 수정 기능
export const editMyinfoDB = data => {
  instance({
    method: 'put',
    url: '/api/profile/edit',
    data: data,
  });
};
