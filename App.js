import React from "react";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
//packages
import * as firebase from "firebase";
import { Dimensions } from "react-native";

import { firebaseKey } from "./private/constants";
import ParentProvider from "./redux/ParentProvider";
import store from './redux/store';
import { loginSuccess } from './redux/reducers/userModule';


export const { width, height } = Dimensions.get("screen");

//init firebase
const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "react-native-db-69e1b.firebaseapp.com",
  databaseURL: "https://react-native-db-69e1b.firebaseio.com",
  projectId: "react-native-db-69e1b",
  storageBucket: "react-native-db-69e1b.appspot.com"
  // messagingSenderId: "420654183697"
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ appReady: true });
    firebase.initializeApp(firebaseConfig);
    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        store.dispatch(loginSuccess(user));
        console.log("User is authenticated!");
      } else {
        console.log("Guest online");
      }
    });
    console.log("App started successfully");
  }

  render() {
    if (!this.state.appReady) {
      return null;
      // return <Expo.AppLoading />;
    }
    return <ParentProvider />
  }
}

