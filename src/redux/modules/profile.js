import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { getchemyDB } from '../../api/modules/chemy';

const GET_PROFILE = 'GET_PROFILE';

const getProfile = createAction(GET_PROFILE, data => ({ data }));

const initialState = {
  list: {},
};

const getProfileDB = (userId = null) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await getchemyDB(userId);
      dispatch(getProfile(res.data));
    } catch (err) {
      console.log(err);
    }
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
