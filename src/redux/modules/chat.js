import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { getChatRoomList, postChatRoomList, getChatMsList } from '../../api/modules/chat';

const PUSH_CHAT = 'PUSH_CHAT';
const LOAD_CHATLIST = 'LOAD_CHATLIST';
const LOAD_CHATTING = 'LOAD_CHATTING';

const pushChatting = createAction(PUSH_CHAT, ms => ({ ms }));
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
    const res = postChatRoomList(userId);
  };
};

// 채팅방 리스트 가지고 오기
const getChatRoomListDB = () => {
  return async function (dispatch, getState, { history }) {
    const res = await getChatRoomList();
    dispatch(ListChatRoom(res.data));
  };
};

// 채팅방 입장
const loadChatCommetList = (roomId, hostname) => {
  return async function (dispatch, getState, { history }) {
    const ms = {
      type: 'ENTER',
      roomId: roomId,
      message: `${hostname}님이 입장 하였습니다.`,
    };
    dispatch(pushChatting(ms));
  };
};

// 채팅 메세지 목록 가져오기
const getChatMsListDB = roomId => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log(roomId);
      const res = await getChatMsList(roomId);
      console.log(res.data.chatMessageDtoList);
      dispatch(LoadChatting(res.data.chatMessageDtoList));
    } catch (e) {
      console.log(e);
    }
  };
};

// 채팅 메세지 보내기
const PostChatting = (ms, req) => {
  return async function (dispatch, getState, { history }) {
    dispatch(pushChatting(req));
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
  pushChatting,
  loadChatCommetList,
  PostChatting,
  postChatRoomListDB,
  getChatMsListDB,
};

export { actionCreators };
