import axios from 'axios';
import {bestBuyKey} from '../../assets/constants';
// Initial state
const initialState = {
  trendItems: '',
  popularItems: '',
  allItemsReady: false,
  itemsLoading : false,
  error : null
};

//Actions
const GET_ALL_DATA_INIT = 'GET_ALL_DATA_INIT';
const GET_ALL_DATA_SUCCESS = 'GET_ALL_DATA_SUCCESS';
const GET_ALL_DATA_FAIL = 'GET_ALL_DATA_FAIL';

//Action creators
export const getInitialData = () => ({
  type: GET_ALL_DATA_INIT
});

export const getAllDataSuccess = (trendData,popularData) => ({
  type: GET_ALL_DATA_SUCCESS,
  trendData: trendData,
  popularData: popularData
});

export const getAllDataFail = (error) => ({
  type: GET_ALL_DATA_FAIL,
  payload: error
});

export const initialFetch = () => {
  const trendingPath = `https://api.bestbuy.com/beta/products/trendingViewed?apiKey=${bestBuyKey}`;

  const popularPath = `https://api.bestbuy.com/beta/products/mostViewed?apiKey=${bestBuyKey}`;

  const getTrendItems = () => (
    axios.get(trendingPath)
  );

  const getPopularItems = () => (
    axios.get(popularPath)
  );

  return (dispatch,getState) => {
    dispatch(getInitialData());
    //2 api resquest in 1
    axios.all([getTrendItems(),getPopularItems()])
    .then(axios.spread((trendResult,popularResult) => {

      let trends = trendResult.data.results;
      let populars = popularResult.data.results;
      dispatch(getAllDataSuccess(trends,populars));
      // console.log(trendResult.data.results);
      // console.log(populars);

    }));

    // axios.get(trendingPath)
    // .then(response => {
    //   dispatch(getAllDataSuccess(response.data.results));
    // })
    
    // .catch((error) =>{
    //   dispatch(getAllDataFail(error));
    // })
  }
}

const initialLoad = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA_INIT:
      return {
        ...state,
        itemsLoading: true
      };
    case GET_ALL_DATA_SUCCESS:
      return {
        ...state,
        trendItems: action.trendData,
        popularItems : action.popularData,
        itemsLoading: false,
        allItemsReady : true
      };
    case GET_ALL_DATA_FAIL:
      return {
        ...state,
        itemsLoading: false,
        allItemsReady : false,
        error : action.payload
      };
    default:
      return state;
  }
};

export default initialLoad;