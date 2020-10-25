import React, { useEffect, useState } from "react";

import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import AppContext from "./context/AppContext";
// import ParentProvider from "./redux/ParentProvider";
import store from "./redux/store";
import { initialFetch } from "./redux/reducers/InitialLoad";
// import { loginSuccess } from "./redux/reducers/userModule";
// import firebaseApp from "./utils/firebase";

import Splash from "./Components/Loaders/Splash";
import { Provider } from "react-redux";
import Navigation from "./navigation/Navigation";

import { useSelector } from "react-redux";

const App = () => {
  const [appReady, setAppReady] = useState(false);

  const toggleAppReady = () => {
    setAppReady(true);
    console.log("Splash Removed");
  };

  let [fontsLoaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });

  useEffect(() => {
    store.dispatch(initialFetch());
  }, []);

  //   firebaseApp.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //TODO check if theres a better way to do this - adding listener somewhere else ?
  // store.dispatch(loginSuccess(user));
  //       console.log("firebase - auth user!");
  //     } else {
  //       console.log("firebase - guest user");
  //     }
  //   });

  return (
    <AppContext.Provider
      value={{
        appReady,
        toggleAppReady: toggleAppReady,
      }}
    >
      <Provider store={store}>
        {!fontsLoaded || !appReady ? <Splash /> : <Navigation />}
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
