import instance from '../instance';
import axios from 'axios';

export const kakaoLogin = code => {
  instance({
    method: 'GET',
    url: `/user/kakao/callback`,
  })
    .then(res => {
      console.log(res); // 토큰이 넘어올 것임

      const ACCESS_TOKEN = res.data.accessToken;

      localStorage.setItem('token', ACCESS_TOKEN); //예시로 로컬에 저장함

      // history.replace('/main'); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
    })
    .catch(err => {
      console.log('소셜로그인 에러', err);
      window.alert('로그인에 실패하였습니다.');
      // history.replace('/login'); // 로그인 실패하면 로그인화면으로 돌려보냄
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
