import instance from '../instance';

// 채팅방 입장
export const getApproveDB = userId => {
  return instance({
    method: 'get',
    url: `/api/chemy/${userId}`,
  });
};

//채팅방 목록 가져오기
export const getChatRoomList = () => {
  return instance({
    method: 'get',
    url: '/chat/rooms',
  });
};

//채팅방 만들기
export const postChatRoomList = guestId => {
  return instance({
    method: 'post',
    url: `/chat/room?guestId=${guestId}`,
  });
};

//채팅방에 메세지 리스트 가져오기 버튼을 눌렸을때
export const getChatMsList = roomId => {
  return instance({
    method: 'get',
    url: `/chat/room/${roomId}`,
  });
};

// 채팅방 퇴장 => 퇴장시 방 유지
export const deleteOutRoom = roomId => {
  return instance({
    method: 'get',
    url: `/quit/{roomId}`,
  });
};
