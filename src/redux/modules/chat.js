import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { creatRoom } from '../../api/modules/chat';
const PUSH_CHAT = 'PUSH_CHAT';
const LOAD_CHATLIST = 'LOAD_CHATLIST';

const pushChatRoom = createAction(PUSH_CHAT, ms => ({ ms }));
const ListChatRoom = createAction(LOAD_CHATLIST, list => ({ list }));

const initialState = {
  roomGet: [],
  roomPost: [],
  List: [
    {
      type: 'TALK',
      roomId: '1',
      username: '인텁',
      profileImage: 'https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_960_720.jpg',
      message: 'What have you done?',
      userId: '1',
    },

    {
      type: 'TALK',
      roomId: '1',
      username: '주영',
      profileImage: 'https://cdn.pixabay.com/photo/2019/12/25/11/11/christmas-4718303_960_720.jpg',
      message: '경보(음), 경고 신호 (→false alarm)She decided to sound the alarm',
      userId: '42',
    },
    {
      type: 'ALARM',
      roomId: '1',
      username: '인텁',
      profileImage: 'https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_960_720.jpg',
      message: '엔진 결함이 있다는 것을 알았지만 승객들을 불안하게 만들고 싶지 않았다.',
      userId: '1',
    },
    {
      type: 'TALK',
      roomId: '1',
      username: '주영',
      profileImage: 'https://cdn.pixabay.com/photo/2019/12/25/11/11/christmas-4718303_960_720.jpg',
      message: '시계의 알람을 7시에 맞추다',
      userId: '42',
    },
    {
      type: 'TALK',
      roomId: '1',
      username: '인텁',
      profileImage: 'https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_960_720.jpg',
      message: '이 경보 장치 어떻게 끄는지 아세요',
      userId: '1',
    },
    {
      type: 'TALK',
      roomId: '1',
      username: '인텁',
      profileImage: 'https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_960_720.jpg',
      message: '4',
      userId: '1',
    },
  ],
  Room: [],
};

const loadChatRoomList = (post_id = null) => {
  return async function (dispatch, getState, { history }) {
    const res = await creatRoom();
    console.log(res);
    dispatch(ListChatRoom(res.data));
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
  },
  initialState,
);

const actionCreators = {
  loadChatRoomList,
  pushChatRoom,
};

export { actionCreators };
