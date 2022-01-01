import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { creatRoom } from '../../api/modules/chat';
const PUSH_CHAT = 'PUSH_CHAT';
const LOAD_CHATLIST = 'LOAD_CHATLIST';

const pushChatRoom = createAction(PUSH_CHAT, ms => ({ ms }));
const ListChatRoom = createAction(PUSH_CHAT, list => ({ list }));

const initialState = {
  roomGet: [
    {
      nickname: '인텁',
      intro:
        '소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다',
      mbti: 'INFJ',
      profileImg: 'https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625_960_720.jpg',
      userId: '1',
      roomId: '1',
      date: '오후 7:36',
      interestList: [{ interest: '게임' }, { interest: '제테크' }, { interest: '운동' }],
      location: '서울특별시 종로구',
    },
    {
      nickname: '줄줄줄',
      intro: '소개글입니다 소개글입니다 소개글입니다',
      mbti: 'ESFJ',
      profileImg: '',
      roomId: '2',
      date: '오전 4:40',
      interestList: [{ interest: '공부' }, { interest: '운동' }, { interest: '게임' }],
      location: '서울특별시 종로구',
    },
    {
      nickname: '줄잉',
      intro: '소개글입니다 소개글입니다 ',
      mbti: 'ENFP',
      profileImg: 'https://cdn.pixabay.com/photo/2016/11/29/03/44/animal-1867125_960_720.jpg',
      roomId: '34',
      date: '오전 4:50',
      interestList: [{ interest: '제테크' }, { interest: '운동' }],
      location: '서울특별시 종로구',
    },
    {
      nickname: '노노',
      intro: '',
      mbti: 'INFJ',
      profileImg: 'https://cdn.pixabay.com/photo/2021/12/17/11/44/woman-6876298_960_720.jpg',
      roomId: '10',
      date: '오후 6:30',
      interestList: [{ interest: '공부' }, { interest: '운동' }],
      location: '서울특별시 종로구',
    },
  ],
  roomPost: [
    {
      nickname: '짱구',
      intro: '소개글입니다 소개글입니다 소개글입니다',
      mbti: 'ENTP',
      profileImg:
        'https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg',
      roomId: '3',
      date: '오전 10:36',
      interestList: [{ interest: '공부' }, { interest: '운동' }],
      location: '서울특별시 종로구',
    },
    {
      nickname: '인스타짱',
      intro: '',
      mbti: 'INFP',
      profileImg: 'https://cdn.pixabay.com/photo/2016/11/29/03/44/animal-1867125_960_720.jpg',
      roomId: '4',
      date: '오후 7:00',
      interestList: [{ interest: '공부' }, { interest: '운동' }],
      location: '서울특별시 종로구',
    },
    {
      nickname: '히사시부',
      intro:
        '소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다',
      mbti: 'ISFP',
      profileImg: '',
      roomId: '5',
      date: '오후 9:36',
      interestList: [{ interest: '공부' }, { interest: '운동' }],
      location: '서울특별시 종로구',
    },
  ],
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
    const res = await creatRoom;
    dispatch(ListChatRoom(res));
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
