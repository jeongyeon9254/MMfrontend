import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { getMyinfoDB, getChemyDB, getGuestDB, getLocationChemy } from '../../api/modules/chemy';

const GET_LIST = 'GET_LIST';
const GET_MYLIST = 'GET_MYLIST';
const GET_GUEST = 'GET_GUEST';
const CHEMY_LIST = 'CHEMY_LIST';
const RESET = 'RESET';
const SET_KATEGORIE = 'SET_KATEGORIE';
const RESET_KATEGORIE = 'RESET_KATEGORIE';

const getList = createAction(GET_LIST, data => ({ data }));
const getMyList = createAction(GET_MYLIST, data => ({ data }));
const getGuestList = createAction(GET_GUEST, data => ({ data }));
const chemyList = createAction(CHEMY_LIST, data => ({ data }));
const reset = createAction(RESET, () => ({}));
const setKategorie = createAction(SET_KATEGORIE, name => ({ name }));
const kategorieReset = createAction(RESET_KATEGORIE, () => ({}));

const initialState = {
  list: {
    gps: null,
    lat: null,
    lng: null,
    result: [],
  },
  kategorie: null,
  myInfo: false,
};

const getListDB = () => {
  return async function (dispatch, getState, { history }) {
    getMyinfoDB()
      .then(res => {
        console.log(res.data);
        dispatch(getList(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const getMyListDB = () => {
  return async function (dispatch, getState, { history }) {
    getMyinfoDB()
      .then(res => {
        console.log(res.data);
        dispatch(getMyList(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const getLocationDB = (locationId, locDetailId, InterestId) => {
  return async function (dispatch, getState, { history }) {
    getLocationChemy(locationId, locDetailId, InterestId)
      .then(res => {
        console.log(res.data);
        dispatch(chemyList(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const getGuestListDB = () => {
  return async function (dispatch, getState, { history }) {
    getGuestDB()
      .then(res => {
        dispatch(getGuestList(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const chemyListDB = (locationId, locDetailId) => {
  return async function (dispatch, getState, { history }) {
    getChemyDB(locationId, locDetailId)
      .then(res => {
        console.log(res.data);
        dispatch(chemyList(res.data));
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
        draft.list.result = data.userList;
        draft.myInfo = false;
      }),
    [GET_MYLIST]: (state, action) =>
      produce(state, draft => {
        const data = action.payload.data;
        draft.list.result = data.userList;
        draft.myInfo = true;
      }),
    [GET_GUEST]: (state, action) =>
      produce(state, draft => {
        const data = action.payload.data;

        draft.list.result = data.userList;

        draft.list.gps = data.location;
        draft.list.lat = data.latitude;
        draft.list.lng = data.longitude;
      }),
    [CHEMY_LIST]: (state, action) =>
      produce(state, draft => {
        const data = action.payload.data;
        draft.list.result = data.userList;

        draft.list.gps = data.location;
        draft.list.lat = data.latitude;
        draft.list.lng = data.longitude;
        draft.myInfo = false;
      }),
    [RESET]: (state, action) =>
      produce(state, draft => {
        draft.list.result = null;
        draft.list.gps = null;
        draft.list.lat = null;
        draft.list.lng = null;
        draft.myInfo = false;
      }),
    [SET_KATEGORIE]: (state, action) =>
      produce(state, draft => {
        draft.kategorie = action.payload.name;
      }),
    [RESET_KATEGORIE]: (state, action) =>
      produce(state, draft => {
        draft.kategorie = null;
      }),
  },
  initialState,
);

const actionCreators = {
  getListDB,
  getList,
  chemyListDB,
  reset,
  setKategorie,
  kategorieReset,
  getGuestListDB,
  getLocationDB,
  getMyListDB,
};

export { actionCreators };
