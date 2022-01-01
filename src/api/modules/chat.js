import instance from '../instance';

// 승인 버튼
export const getApproveDB = userId => {
  return instance({
    method: 'get',
    url: `/api/chemy/${userId}`,
  });
};

//채팅방 만들기
export const creatRoom = nickname => {
  return instance({
    method: 'get',
    url: '/chat/room',
  });
};

//채팅리스트 가져오기
export const getRoomList = () => {
  return instance({
    method: 'get',
    url: '/chat/room',
  });
};

//채팅방 입장 => 승인를 누르면 나는 입장하고 상대방에게 입장승인 알림을 울리게 한다.
export const getInRoom = roomId => {
  return instance({
    method: 'get',
    url: `/chat/room/{roomId}`,
  });
};

// 채팅방 퇴장 => 퇴장시 방 유지
export const deleteOutRoom = roomId => {
  return instance({
    method: 'get',
    url: `/quit/{roomId}`,
  });
};
