import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Navigation from "../navigation/Navigation";

const ParentProvider = ({ toggleAppReady }) => {
  return (
    <Provider store={store}>
      <Navigation toggleAppReady={toggleAppReady} />
    </Provider>
  );
};

export default ParentProvider;
