import instance from '../instance';

// 승인 버튼
export const getApproveDB = () => {
  return function (dispatch, getState, { history }) {
    instance({
      method: 'get',
      url: `/api/chemy/${userId}`,
    });
  };
};
