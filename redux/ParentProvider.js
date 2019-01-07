import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { AppDrawer } from '../navigation/AppDrawer';

const ParentProvider = () => (
  <Provider store={store}>
    <AppDrawer />
  </Provider>
)

export default ParentProvider;