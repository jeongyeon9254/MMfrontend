import instance from '../instance';

// 승인 버튼
export const getApproveDB = () => {
  instance({
    method: 'get',
    url: `/api/chemy/${userId}`,
  });
};
