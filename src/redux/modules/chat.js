import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import {
  getChatRoomList,
  postChatRoomList,
  getChatMsList,
  deleteChatroom,
} from '../../api/modules/chat';
import { actionCreators as matchingAction } from './matching';

const PUSH_CHAT = 'PUSH_CHAT';
const LOAD_CHATLIST = 'LOAD_CHATLIST';
const LOAD_CHATTING = 'LOAD_CHATTING';
const ADD_CHATTING = 'ADD_CHATTING';
const Delet_CHAT = 'Delet_CHAT';
const Delet_RoomLIST = 'Delet_RoomLIST';
const MS_LOADING = 'MS_LOADING';
const MS_RESET = 'MS_RESET';
const LOADING_CHAT = 'LOADING_CHAT';
const RESET_CHAT = 'RESET_CHAT';
const ToTalNum = 'ToTalNum';
const NowNum = 'NowNum';

const pushChatting = createAction(PUSH_CHAT, ms => ({ ms }));
const ListChatRoom = createAction(LOAD_CHATLIST, list => ({ list }));
const LoadChatting = createAction(LOAD_CHATTING, (chatting, page) => ({ chatting, page }));
const AddChatting = createAction(ADD_CHATTING, (chatting, page) => ({ chatting, page }));
const total_number = createAction(ToTalNum, num => ({ num }));
const now_number = createAction(NowNum, num => ({ num }));

const DeletMsList = createAction(Delet_CHAT, () => ({}));
const DeletRoomList = createAction(Delet_RoomLIST, roomId => ({ roomId }));
const resetList = createAction(RESET_CHAT, () => ({}));
const LoadingList = createAction(LOADING_CHAT, () => ({}));
const ms_loadingList = createAction(MS_LOADING, () => ({}));
const ms_resetList = createAction(MS_RESET, () => ({}));

const initialState = {
  List: [{}],
  Room: [{}],
  loading: false,
  listloading: false,
  page: 0,
  total: 0,
  now: 0,
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
const getRecentlyMsListDB = (roomId, page) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log('// 첫 채팅 목록 가지고 오기');
      const res = await getChatMsList(roomId, page);
      console.log(res);
      dispatch(LoadChatting(res.data, page));
      dispatch(ms_loadingList());
      dispatch(total_number(res.data[0].totalMessage));
      dispatch(now_number(res.data.length));
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
      console.log(res);
      dispatch(AddChatting(res.data, page));
      dispatch(ms_loadingList());
      dispatch(now_number(res.data.length));
    } catch (e) {
      console.log(e);
    }
  };
};

// 채팅 메세지 보내기
const PostChatting = req => {
  return async function (dispatch, getState, { history }) {
    await dispatch(pushChatting(req));
  };
};

// 채팅방 삭제
const deleteChatroomDB = roomId => {
  return async function (dispatch, getState, { history }) {
    await deleteChatroom(roomId);
    dispatch(DeletRoomList(roomId));
  };
};

export default handleActions(
  {
    [PUSH_CHAT]: (state, action) =>
      produce(state, draft => {
        const { ms } = action.payload;
        draft.List[0].push(ms);
      }),
    [LOAD_CHATLIST]: (state, action) =>
      produce(state, draft => {
        const { list } = action.payload;
        draft.Room = list;
      }),
    [LOAD_CHATTING]: (state, action) =>
      produce(state, draft => {
        const { chatting, page } = action.payload;
        draft.List[page] = chatting;
        draft.page = page + 1;
      }),
    [ADD_CHATTING]: (state, action) =>
      produce(state, draft => {
        const { chatting, page } = action.payload;
        draft.List[page] = chatting;
        draft.page = page + 1;
      }),
    [ToTalNum]: (state, action) =>
      produce(state, draft => {
        const { num } = action.payload;
        draft.total = num;
      }),
    [NowNum]: (state, action) =>
      produce(state, draft => {
        const { num } = action.payload;
        draft.now = state.now + num;
      }),
    [Delet_CHAT]: (state, action) =>
      produce(state, draft => {
        draft.List = [];
      }),
    [Delet_RoomLIST]: (state, action) =>
      produce(state, draft => {
        const { roomId } = action.payload;
        const putList = state.Room.filter(x => {
          return x.roomId !== roomId;
        });
        draft.Room = putList;
      }),
    [LOADING_CHAT]: (state, action) =>
      produce(state, draft => {
        draft.loading = true;
      }),
    [MS_LOADING]: (state, action) =>
      produce(state, draft => {
        draft.listloading = true;
      }),
    [MS_RESET]: (state, action) =>
      produce(state, draft => {
        draft.listloading = false;
        draft.List = [{}];
        draft.now = 0;
        draft.total = 0;
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
  deleteChatroomDB,
  ms_resetList,
};

export { actionCreators };
