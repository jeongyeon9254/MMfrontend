import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { creatRoom } from '../../api/modules/chat';
import { UserInRoom } from '../../api/modules/communication';
import { sendMessage } from '../../api/modules/communication';

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
const PostChatting = props => {
  return async function (dispatch, getState, { history }) {
    const res = await sendMessage(props);
    dispatch(pushChatRoom(props));
  };
};

const loadChatRoomList = (post_id = null) => {
  return async function (dispatch, getState, { history }) {
    const res = await creatRoom();
    console.log(res);
    dispatch(ListChatRoom(res.data));
  };
};

const loadChatCommetList = roomId => {
  return async function (dispatch, getState, { history }) {
    const res = await UserInRoom(roomId);
    console.log(res);
    dispatch(LoadChatting(res ? res : []));
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
  loadChatRoomList,
  pushChatRoom,
  loadChatCommetList,
  PostChatting,
};

export { actionCreators };
