import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import {rootReducer} from './reducers';

const store = createStore(rootReducer,
  devToolsEnhancer())

export default store;