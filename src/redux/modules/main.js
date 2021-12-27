import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

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
  return async function (dispatch, getState, { history }) {
    // 첫 요청
    await axios
      .get('https://run.mocky.io/v3/1ed4adfb-c9fd-44a8-b995-f25dfe6fb6ae')
      .then(response => {
        dispatch(getList({ ...response.data }));
      })
      .catch(err => {
        console.log(err);
      });
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
