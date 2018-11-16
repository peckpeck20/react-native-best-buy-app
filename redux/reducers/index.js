import { combineReducers } from 'redux';
import initialLoad from './InitialLoad';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
  initialLoad: initialLoad
})