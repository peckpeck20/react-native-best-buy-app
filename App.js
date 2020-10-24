import React, { useEffect, useState } from "react";

import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import ParentProvider from "./redux/ParentProvider";
import firebaseApp from "./utils/firebase";
// import store from "./redux/store";
// import { loginSuccess } from "./redux/reducers/userModule";

import Splash from "./Components/Loaders/Splash";

const App = () => {
  const [appReady, setAppReady] = useState(false);

  const toggleAppReady = () => {
    setAppReady(!appReady);
  };

  let [fontsLoaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        //TODO check if theres a better way to do this - adding listener somewhere else ?
        // store.dispatch(loginSuccess(user));
        console.log("firebase - auth user!");
      } else {
        console.log("firebase - guest user");
      }
    });
  }, []);

  if (!appReady && !fontsLoaded) return <Splash />;

  return <ParentProvider toggleAppReady={toggleAppReady} />;
};

export default App;
