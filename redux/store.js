import { createStore, applyMiddleware } from "redux";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const client = axios.create({
  responseType: 'json'
});

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(axiosMiddleware(client))))

export default store;