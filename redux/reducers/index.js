import { combineReducers } from 'redux';
import initialLoad from './InitialLoad';
import userReducer from './userModule';

export default combineReducers({
  user: userReducer,
  initialLoad: initialLoad
})