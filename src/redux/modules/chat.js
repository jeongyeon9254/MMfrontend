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
    },
    {
      nickname: '줄줄줄',
      intro:
        '소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다',
      mbti: 'ENFJ',
      profileImg: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg',
      roomId: '2',
      date: '오전 4:30',
    },
    {
      nickname: '줄줄줄',
      intro:
        '소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다',
      mbti: 'ENFJ',
      profileImg: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg',
      roomId: '2',
      date: '오전 4:30',
    },
    {
      nickname: '줄줄줄',
      intro:
        '소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다',
      mbti: 'ENFJ',
      profileImg: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg',
      roomId: '2',
      date: '오전 4:30',
    },
    {
      nickname: '줄줄줄',
      intro:
        '소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다',
      mbti: 'ENFJ',
      profileImg: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg',
      roomId: '2',
      date: '오전 4:30',
    },
    {
      nickname: '줄줄줄',
      intro:
        '소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다',
      mbti: 'ENFJ',
      profileImg: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg',
      roomId: '2',
      date: '오전 4:30',
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
    },
    {
      nickname: '인스타짱',
      intro: '',
      mbti: 'INFP',
      profileImg: 'https://cdn.pixabay.com/photo/2016/11/29/03/44/animal-1867125_960_720.jpg',
      roomId: '4',
      date: '오후 7:00',
    },
    {
      nickname: '히사시부',
      intro:
        '소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다 소개글입니다',
      mbti: 'ISFP',
      profileImg: '',
      roomId: '5',
      date: '오후 9:36',
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
