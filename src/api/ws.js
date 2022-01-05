import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
// 배포, 개발 환경 채팅 주소 관리
const env = process.env.NODE_ENV;
const devTarget = env === 'development' ? 'http://13.209.76.178/ws-stomp' : '';
// 소켓
const sock = new SockJS(devTarget);
export const ws = Stomp.over(sock);

//안녕하세용
