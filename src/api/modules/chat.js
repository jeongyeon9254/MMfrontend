import instance from '../instance';

//채팅방 목록 가져오기
export const getChatRoomList = () => {
  return instance({
    method: 'get',
    url: `/chat/rooms`,
  });
};

//채팅방 만들기
export const postChatRoomList = guestinfo => {
  return instance({
    method: 'post',
    url: `/chat/room`,
    data: guestinfo,
  });
};

//채팅방에 메세지 리스트 가져오기 버튼을 눌렸을때
export const getChatMsList = (roomId, page) => {
  return instance({
    method: 'get',
    url: `/chat/room/${roomId}?page=${page}&size=50`,
  });
};

//채팅방 나가기
export const putChatroom = roomId => {
  return instance({
    method: 'put',
    url: `/chat/room/${roomId}`,
  });
};

//채팅방 삭제
export const deleteChatroom = roomId => {
  return instance({
    method: 'delete',
    url: `/chat/room/${roomId}`,
  });
};
