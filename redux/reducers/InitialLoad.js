// Initial state
const initialState = {
  trendItems: '',
  popularItems: '',
  allItemsReady: false,
};

const receiveData = (request, json) => ({ type: request, payload: json });

//Actions
const GET_ALL_DATA_INIT = 'GET_ALL_DATA_INIT';
const GET_ALL_DATA_SUCCESS = 'GET_ALL_DATA_SUCCESS';
const GET_ALL_DATA_FAIL = 'GET_ALL_DATA_FAIL';

//Action creators
export const getInitialData = () => ({
  type: GET_ALL_DATA_INIT
});

export const getAllDataSuccess = () => ({
  type: GET_ALL_DATA_SUCCESS
});

export const getAllDataFail = () => ({
  type: GET_ALL_DATA_FAIL
});

const initialLoad = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_DATA_INIT":
      return Object.assign({}, state, {
        loading: true
      });
    case "GET_ALL_DATA_SUCCESS":
      return Object.assign({}, state, {
        loading: false,
        isLoaded: true
      });
    default:
      return state;
  }
};

export default initialLoad;