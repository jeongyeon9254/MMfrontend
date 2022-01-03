import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { getChatRoomList, postChatRoomList, getChatMsList } from '../../api/modules/chat';
import { UserInRoom, sendMessage } from '../../api/modules/communication';

const PUSH_CHAT = 'PUSH_CHAT';
const LOAD_CHATLIST = 'LOAD_CHATLIST';
const LOAD_CHATTING = 'LOAD_CHATTING';

const pushChatRoom = createAction(PUSH_CHAT, ms => ({ ms }));
const ListChatRoom = createAction(LOAD_CHATLIST, list => ({ list }));
const LoadChatting = createAction(LOAD_CHATTING, chatting => ({ chatting }));

const initialState = {
  roomGet: [],
  roomPost: [],
  List: [],
  Room: [],
};

// 채팅방 만들기
const postChatRoomListDB = userId => {
  return async function (dispatch, getState, { history }) {
    const res = await postChatRoomList(userId);
    console.log(res);
  };
};

// 채팅방 리스트 가지고 오기
const getChatRoomListDB = () => {
  return async function (dispatch, getState, { history }) {
    const res = await getChatRoomList();
    console.log(res);
    dispatch(ListChatRoom(res.data));
  };
};

// 채팅방 입장
const loadChatCommetList = (roomId, hostname) => {
  return async function (dispatch, getState, { history }) {
    await UserInRoom(roomId);
    const ms = {
      type: 'ENTER',
      roomId: roomId,
      // username: userInfo.nickname,
      // profileImage: userInfo.profileImage,
      message: `${hostname}님이 입장 하였습니다.`,
    };
    dispatch(pushChatRoom(ms));
  };
};

// 채팅 메세지 목록 가져오기
const getChatMsListDB = roomId => {
  return async function (dispatch, getState, { history }) {
    const res = await getChatMsList(roomId);
    console.log(res);
    dispatch(LoadChatting(res));
  };
};

// 채팅 메세지 보내기
const PostChatting = props => {
  return async function (dispatch, getState, { history }) {
    const res = await sendMessage(props);
    dispatch(pushChatRoom(props));
  };
};

export default handleActions(
  {
    [PUSH_CHAT]: (state, action) =>
      produce(state, draft => {
        const { ms } = action.payload;
        draft.List.push(ms);
      }),
    [LOAD_CHATLIST]: (state, action) =>
      produce(state, draft => {
        const { list } = action.payload;
        draft.Room = list;
      }),
    [LOAD_CHATTING]: (state, action) =>
      produce(state, draft => {
        const { chatting } = action.payload;
        draft.List = chatting;
      }),
  },
  initialState,
);

const actionCreators = {
  getChatRoomListDB,
  pushChatRoom,
  loadChatCommetList,
  PostChatting,
  postChatRoomListDB,
  getChatMsListDB,
};

export { actionCreators };
