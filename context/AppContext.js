import React from "react";

const AppContext = React.createContext({
  appReady: false,
  toggleAppReady: () => {},
});

export default AppContext;
