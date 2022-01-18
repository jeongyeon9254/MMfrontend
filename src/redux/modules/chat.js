import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { getChatRoomList, postChatRoomList, getChatMsList } from '../../api/modules/chat';
import { actionCreators as matchingAction } from './matching';

const PUSH_CHAT = 'PUSH_CHAT';
const LOAD_CHATLIST = 'LOAD_CHATLIST';
const LOAD_CHATTING = 'LOAD_CHATTING';
const ADD_CHATTING = 'ADD_CHATTING';
const Delet_CHAT = 'Delet_CHAT';
const LOADING_CHAT = 'LOADING_CHAT';
const RESET_CHAT = 'RESET_CHAT';

const pushChatting = createAction(PUSH_CHAT, ms => ({ ms }));
const ListChatRoom = createAction(LOAD_CHATLIST, list => ({ list }));
const LoadChatting = createAction(LOAD_CHATTING, (chatting, page) => ({ chatting, page }));
const AddChatting = createAction(ADD_CHATTING, (chatting, page) => ({ chatting, page }));
const DeletMsList = createAction(Delet_CHAT, () => ({}));
const resetList = createAction(RESET_CHAT, () => ({}));
const LoadingList = createAction(LOADING_CHAT, () => ({}));

const initialState = {
  List: [{}],
  Room: [{}],
  loading: false,
  page: 0,
};

// 채팅방 만들기
const postChatRoomListDB = (guestInfo, hostId) => {
  return async function (dispatch, getState, { history }) {
    try {
      await postChatRoomList(guestInfo);
      dispatch(matchingAction.PutMatchingList(hostId));
      history.push('/chat');
    } catch (e) {
      console.log(e);
    }
  };
};

// 채팅방 리스트 가지고 오기
const getChatRoomListDB = () => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await getChatRoomList();
      dispatch(ListChatRoom(res.data));
      dispatch(LoadingList());
    } catch (err) {
      console.log(err);
    }
  };
};

// 첫 채팅 목록 가지고 오기
const getRecentlyMsListDB = (roomId, page = null) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log('// 첫 채팅 목록 가지고 오기');
      const res = await getChatMsList(roomId, page);
      dispatch(LoadChatting(res.data, page));
    } catch (e) {
      console.log(e);
    }
  };
};

// 채팅 메세지 목록 가져오기
const getChatMsListDB = (roomId, page) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log('// 채팅 메세지 목록 가져오기');
      const res = await getChatMsList(roomId, page);
      dispatch(AddChatting(res.data, page));
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
        const { chatting, page } = action.payload;
        draft.List = chatting;
        draft.page = 0;
        draft.page = page + 1;
      }),
    [ADD_CHATTING]: (state, action) =>
      produce(state, draft => {
        const { chatting, page } = action.payload;
        draft.List.unshift(...chatting);
        draft.page = page + 1;
      }),
    [Delet_CHAT]: (state, action) =>
      produce(state, draft => {
        draft.List = [];
      }),
    [LOADING_CHAT]: (state, action) =>
      produce(state, draft => {
        draft.loading = true;
      }),
    [RESET_CHAT]: (state, action) =>
      produce(state, draft => {
        draft.loading = false;
        draft.List = [];
        draft.Room = [];
      }),
  },
  initialState,
);

const actionCreators = {
  getChatRoomListDB,
  PostChatting,
  postChatRoomListDB,
  getChatMsListDB,
  DeletMsList,
  resetList,
  getRecentlyMsListDB,
};

export { actionCreators };
