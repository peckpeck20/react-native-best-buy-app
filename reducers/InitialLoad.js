const initialLoad = (state = {}, action) => {
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