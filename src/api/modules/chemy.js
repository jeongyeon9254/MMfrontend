import instance from '../instance';

// 캐미 mbti get 기능
export const getMyinfoDB = () => {
  return async function (dispatch, getState, { history }) {
    instance({
      method: 'get',
      url: '/api/chemy/list',
    })
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };
};

// 빠른매칭 기능
export const getMatchingDB = () => {
  return async function (dispatch, getState, { history }) {
    instance({
      method: 'get',
      url: '/api/chemy/matching',
    });
  };
};

// 캐미유저 정보 가져오기 기능
export const getchemyDB = () => {
  return async function (dispatch, getState, { history }) {
    instance({
      method: 'get',
      url: `/api/chemy/${userId}`,
    });
  };
};
