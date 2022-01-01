import axios from 'axios';

const request = axios.create({
  baseURL: 'http://13.209.76.178',
  timeout: 3000,
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

//interceptors를 POST요청 가지고 결과 값을 캐치해서 return.
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

//interceptors를 GET요청 가지고 결과 값을 캐치해서 return.
request.interceptors.response.use(
  response => {
    const res = response;
    return res;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default request;
