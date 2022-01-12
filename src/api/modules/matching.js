import instance from '../instance';
// 매칭 신청
export const postMatchingChat = guestId => {
  return instance({
    method: 'post',
    url: `/matching/${guestId}`,
  });
};

// 신청 내역 조회
export const getMatchingSendCheck = () => {
  return instance({
    method: 'get',
    url: `/matching/send`,
  });
};

// 신청 받은 내역 조회
export const getMatchingReceiveCheck = () => {
  return instance({
    method: 'get',
    url: `/matching/receive`,
  });
};

//신청 삭제
export const deleteMatchingChat = guestId => {
  return instance({
    method: 'delete',
    url: `/matching/${guestId}`,
  });
};
