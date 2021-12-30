import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const SET_CHAT = 'SET_CHAT';

const setChatRoom = createAction(SET_CHAT, () => ({}));

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
  chatList: [
    {
      type: 'TALK',
      roomId: '',
      username: '',
      profileImage: '',
      message: '',
    },
  ],
};

const setChatRoomDB = (post_id = null) => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [SET_CHAT]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

const actionCreators = {
  setChatRoomDB,
};

export { actionCreators };
