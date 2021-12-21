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
  return function (dispatch, getState, { history }) {
    instance({
      method: 'get',
      url: '/user/profile',
    });
  };
};

//내정보 추가기입 기능
export const addMyinfoDB = () => {
  return function (dispatch, getState, { history }) {
    instance({
      method: 'put',
      url: '/user/profile',
      data: {
        nickname: nickname,
        profile_image: profile_image,
        intro: intro,
        location: location,
        longitude: longitude,
        latitude: latitude,
        Interest: Interest,
        mbti: mbti,
      },
    });
  };
};

// 내 정보 수정 기능
export const editMyinfoDB = () => {
  return function (dispatch, getState, { history }) {
    instance({
      method: 'put',
      url: '/api/profile/edit',
      data: {
        nickname: nickname,
        profile_image: profile_image,
        intro: intro,
        location: location,
        Interest: Interest,
        mbti: mbti,
      },
    });
  };
};
