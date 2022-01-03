import { ws } from '../ws';
import { getCookie } from '../../shared/Cookie';
const TOKEN = getCookie('authorization');
console.log(TOKEN);
export const messages = [];

export const UserInRoom = roomId => {
  ws.connect(
    { token: TOKEN },
    frame => {
      ws.subscribe(`/sub/chat/room/${roomId}`, message => {
        console.log(message);
        let recv = JSON.parse(message.body);
        const ms = {
          type: 'ENTER',
          roomId: roomId,
          // username: userInfo.nickname,
          // profileImage: userInfo.profileImage,
          message: '',
        };
        sendMessage(ms);
        return recv;
      });
    },
    // error => {
    //   alert('서버 연결에 실패 하였습니다. 다시 접속해 주십시요.');
    //   document.location.href = '/';
    // },
  );
};
// 받기
export const recvMessage = recv => {
  messages.unshift({ type: recv.type, sender: recv.sender, message: recv.message });
};
export const sendMessage = props => {
  ws.send('/pub/chat/message', { token: TOKEN }, JSON.stringify(props));
};
