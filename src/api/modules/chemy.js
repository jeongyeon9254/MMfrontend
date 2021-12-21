import instance from '../instance';

// 캐미 mbti get 기능
export const getMyinfoDB = () => {
  instance({
    method: 'get',
    url: '/api/chemy/list',
  });
};

// 빠른매칭 기능
export const getMatchingDB = () => {
  instance({
    method: 'get',
    url: '/api/chemy/matching',
  });
};

// 캐미유저 정보 가져오기 기능
export const getchemyDB = () => {
  instance({
    method: 'get',
    url: `/api/chemy/${userId}`,
  });
};
