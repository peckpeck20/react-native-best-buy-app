import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Navigation from "../navigation/Navigation";

const ParentProvider = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default ParentProvider;
