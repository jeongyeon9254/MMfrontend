import instance from '../instance';

// 캐미 mbti get 기능
export const getMyinfoDB = () => {
  return instance({
    method: 'get',
    url: '/api/chemy/list',
  });
};

// 캐미 mbti get 기능
export const getChemyDB = locationId => {
  return instance({
    method: 'get',
    url: `/api/chemy/list/${locationId}`,
  });
};

// 지역별캐미 mbti get 기능
export const getLocationChemy = (locationId, InterestId) => {
  return instance({
    method: 'get',
    url: `/api/chemy/list/${locationId}/${InterestId}`,
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

// 샘플 정보 가져오기 기능
export const getGuestDB = () => {
  return instance({
    method: 'get',
    url: `/api/chemy/guest`,
  });
};
