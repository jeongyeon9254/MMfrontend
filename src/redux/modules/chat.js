import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { getChatRoomList, postChatRoomList, getChatMsList } from '../../api/modules/chat';

const PUSH_CHAT = 'PUSH_CHAT';
const LOAD_CHATLIST = 'LOAD_CHATLIST';
const LOAD_CHATTING = 'LOAD_CHATTING';
const Delet_CHAT = 'Delet_CHAT';

const pushChatting = createAction(PUSH_CHAT, ms => ({ ms }));
const ListChatRoom = createAction(LOAD_CHATLIST, list => ({ list }));
const LoadChatting = createAction(LOAD_CHATTING, chatting => ({ chatting }));
const DeletMsList = createAction(Delet_CHAT, () => ({}));

const initialState = {
  roomGet: [],
  roomPost: [],
  List: [],
  Room: [],
};

// 채팅방 만들기
const postChatRoomListDB = guestInfo => {
  return async function (dispatch, getState, { history }) {
    const res = postChatRoomList(guestInfo);
  };
};

// 채팅방 리스트 가지고 오기
const getChatRoomListDB = () => {
  return async function (dispatch, getState, { history }) {
    const res = await getChatRoomList();
    dispatch(ListChatRoom(res.data));
  };
};

// 채팅 메세지 목록 가져오기
const getChatMsListDB = roomId => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log(roomId);
      const res = await getChatMsList(roomId);
      console.log(res.data);
      dispatch(LoadChatting(res.data));
    } catch (e) {
      console.log(e);
    }
  };
};

// 채팅 메세지 보내기
const PostChatting = req => {
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
    [Delet_CHAT]: (state, action) =>
      produce(state, draft => {
        draft.List = [];
      }),
  },
  initialState,
);

const actionCreators = {
  getChatRoomListDB,
  pushChatting,
  PostChatting,
  postChatRoomListDB,
  getChatMsListDB,
  DeletMsList,
};

export { actionCreators };
