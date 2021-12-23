import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const GET_LIST = 'GET_LIST';

const getList = createAction(GET_LIST, data => ({ data }));

const initialState = {
  list: {
    gps: null,
    lat: null,
    lng: null,
    result: [],
  },
};

const getListDB = (data = null) => {
  return function (dispatch, getState, { history }) {
    dispatch(getList({ ...data }));
  };
};

export default handleActions(
  {
    [GET_LIST]: (state, action) =>
      produce(state, draft => {
        const data = action.payload.data;
        draft.list.gps = data.gps;
        draft.list.lat = data.lat;
        draft.list.lng = data.lng;
        draft.list.result = data.result;
      }),
  },
  initialState,
);

const actionCreators = {
  getListDB,
};

export { actionCreators };
