import axios from "axios";
import { bestBuyKey } from "../../private/constants";
// Initial state
const initialState = {
  trendItems: [],
  popularItems: [],
  allItemsReady: false,
  itemsLoading: false,
  error: null,
};

//Actions
const GET_ALL_DATA_INIT = "GET_ALL_DATA_INIT";
const GET_ALL_DATA_SUCCESS = "GET_ALL_DATA_SUCCESS";
const GET_ALL_DATA_FAIL = "GET_ALL_DATA_FAIL";

//Action creators
export const getInitialData = () => ({
  type: GET_ALL_DATA_INIT,
});

export const getAllDataSuccess = (trendData, popularData) => ({
  type: GET_ALL_DATA_SUCCESS,
  trendData: trendData,
  popularData: popularData,
});

export const getAllDataFail = (error) => ({
  type: GET_ALL_DATA_FAIL,
  payload: error,
});

export const initialFetch = () => {
  const trendingPath = `https://api.bestbuy.com/beta/products/trendingViewed?apiKey=${bestBuyKey}`;
  const popularPath = `https://api.bestbuy.com/beta/products/mostViewed?apiKey=${bestBuyKey}`;

  const getPromise = async (endpoint) => await axios.get(endpoint);

  const getTrendItems = () => getPromise(trendingPath);
  const getPopularItems = () => getPromise(popularPath);

  return (dispatch) => {
    dispatch(getInitialData());
    axios
      .all([getTrendItems(), getPopularItems()])
      .then(
        axios.spread((trendResult, popularResult) => {
          const trends = trendResult.data.results;
          const populars = popularResult.data.results;
          dispatch(getAllDataSuccess(trends, populars));
        })
      )
      .catch((error) => {
        dispatch(getAllDataFail(error));
      });
  };
};

const initialLoad = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA_INIT:
      return {
        ...state,
        itemsLoading: true,
      };
    case GET_ALL_DATA_SUCCESS:
      return {
        ...state,
        trendItems: action.trendData,
        popularItems: action.popularData,
        itemsLoading: false,
        allItemsReady: true,
      };
    case GET_ALL_DATA_FAIL:
      return {
        ...state,
        itemsLoading: false,
        allItemsReady: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default initialLoad;
