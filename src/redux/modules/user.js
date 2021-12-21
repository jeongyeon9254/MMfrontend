import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const LOG_IN = 'LOG_IN';

const logIn = createAction(LOG_IN, () => ({}));

const initialState = {
  list: [],
};

const logInDB = (post_id = null) => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [LOG_IN]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

const actionCreators = {
  logInDB,
};

export { actionCreators };
