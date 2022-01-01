import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { getchemyDB } from '../../api/modules/chemy';

const GET_PROFILE = 'GET_PROFILE';

const getProfile = createAction(GET_PROFILE, data => ({ data }));

const initialState = {
  list: {},
};

const getProfileDB = (userId = null) => {
  return function (dispatch, getState, { history }) {
    getchemyDB(userId).then(res => {
      dispatch(getProfile(res.data));
    });
  };
};

export default handleActions(
  {
    [GET_PROFILE]: (state, action) =>
      produce(state, draft => {
        draft.list = { ...action.payload.data };
      }),
  },
  initialState,
);

const actionCreators = {
  getProfileDB,
};

export { actionCreators };
