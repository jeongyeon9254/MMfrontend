import axios from 'axios';

const instance = axios.create({
  baseURL: '',

  // 헤더에 넣을 정보
  headers: {
    Authorization: '토큰',
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

//interceptors를 POST요청 가지고 결과 값을 캐치해서 return.
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

//interceptors를 GET요청 가지고 결과 값을 캐치해서 return.
instance.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
