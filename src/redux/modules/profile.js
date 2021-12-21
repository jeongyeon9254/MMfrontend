import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const GET_PROFILE = 'GET_PROFILE';

const getProfile = createAction(GET_PROFILE, () => ({}));

const initialState = {
  list: [],
};

const getProfileDB = (post_id = null) => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [GET_PROFILE]: (state, action) => produce(state, draft => {}),
  },
  initialState,
);

const actionCreators = {
  getProfileDB,
};

export { actionCreators };
