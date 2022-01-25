import instance from '../instance';

// 캐미 mbti get 기능
export const getMyinfoDB = () => {
  return instance({
    method: 'get',
    url: '/api/chemy/list',
  });
};

// 지역별 mbti 전체 get 기능
export const getChemyDB = (locationId, locDetailId) => {
  return instance({
    method: 'get',
    url: `/api/chemy/list/${locationId}/${locDetailId}`,
  });
};

// 지역별캐미 mbti 필터 get 기능
export const getLocationChemy = (locationId, locDetailId, InterestId) => {
  return instance({
    method: 'get',
    url: `/api/chemy/list/${locationId}/${locDetailId}/${InterestId}`,
  });
};

// 빠른매칭 기능
export const getMatchingDB = () => {
  return instance({
    method: 'get',
    url: '/api/chemy/auto',
  });
};

// 캐미유저 정보 가져오기 기능
export const getchemyDB = userId => {
  return instance({
    method: 'get',
    url: `/api/chemy/${userId}`,
  });
};

// 샘플페이지 정보 가져오기 기능
export const getGuestDB = () => {
  return instance({
    method: 'get',
    url: `/api/chemy/guest`,
  });
};
