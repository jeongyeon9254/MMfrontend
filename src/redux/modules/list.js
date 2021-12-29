import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const UP_LIST = 'UP_LIST';
const DOWN_LIST = 'DOWN_LIST';

const upList = createAction(UP_LIST, () => ({}));
const downList = createAction(DOWN_LIST, () => ({}));

const initialState = {
  state: false,
};

export default handleActions(
  {
    [UP_LIST]: (state, action) =>
      produce(state, draft => {
        draft.state = true;
      }),
    [DOWN_LIST]: (state, action) =>
      produce(state, draft => {
        draft.state = false;
      }),
  },
  initialState,
);

const actionCreators = {
  upList,
  downList,
};

export { actionCreators };
