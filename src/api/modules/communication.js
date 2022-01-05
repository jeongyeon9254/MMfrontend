import { ws } from '../ws';
import { getCookie } from '../../shared/Cookie';
const TOKEN = getCookie('authorization');
export const messages = [];

export const wsConnectSubscribe = roomId => {
  try {
    ws.debug = null;
    console.log('sss');
    ws.connect({ token: TOKEN }, () => {
      ws.subscribe(
        `/sub/chat/room/${roomId}`,
        data => {
          let recv = JSON.parse(data.body);
          console.log('구독후 새로운 메세지 data :' + recv);
          return recv;
        },
        {
          token: TOKEN,
        },
      );
    });
  } catch (err) {
    console.log(err);
  }
};

// 보내는거
export const sendMessage = props => {
  try {
    if (!TOKEN) {
      alert('토큰 값이 없습니다.');
    }
    waitForConnection(ws, () => {
      ws.debug = null;
      ws.send(`/pub/chat/message`, { token: TOKEN }, JSON.stringify(props));
      console.log('메세지보내기 상태', ws.ws.readyState);
    });
  } catch (e) {
    console.log('메세지보내기 상태', ws.ws.readyState);
  }
};

// 웹소켓이 연결될 때 까지 실행하는 함수
const waitForConnection = (ws, callback) => {
  setTimeout(() => {
    if (ws.ws.readyState === 1) {
      callback();
    } else {
      waitForConnection(ws, callback);
    }
  }, 0.1);
};

// 다른 방을 클릭하거나 뒤로가기 버튼 클릭시 연결해제 및 구독해제
const wsDisConnectUnsubscribe = () => {
  try {
    ws.debug = null;
    ws.disconnect(
      () => {
        ws.unsubscribe('sub-0');
        clearTimeout(waitForConnection);
      },
      { token: TOKEN },
    );
  } catch (e) {
    console.log('연결 구독 해체 에러', e);
  }
};
