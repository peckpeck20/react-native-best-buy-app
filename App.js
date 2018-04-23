import React from "react";
import { StyleSheet, Button, Image, ScrollView } from "react-native";
import * as Expo from "expo";
//packages
import * as firebase from "firebase";
import {
  Body,
  Container,
  Text,
  Form,
  Item,
  Label,
  Input,
  Alert,
  Header,
  Content
} from "native-base";
import { DrawerNavigator, DrawerItems, SafeAreaView } from "react-navigation";
//custom
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import CategoryScreen from "./Screens/CategoryScreen";
import AboutScreen from "./Screens/AboutScreen";
import { firebaseKey } from "./assets/constants";
import DrawerContent from "./Components/DrawerContent";
// import TestDrawer from "./Components/Tester";
import WatchListScreen from "./Screens/WatchListScreen";

//init firebase
const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "react-native-db-69e1b.firebaseapp.com",
  databaseURL: "https://react-native-db-69e1b.firebaseio.com",
  projectId: "react-native-db-69e1b",
  storageBucket: "react-native-db-69e1b.appspot.com"
  // messagingSenderId: "420654183697"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appReady: false
    };

    //use this word inside function
    // this.signUpUser = this.signUpUser.bind(this);
    // this.logInUser = this.logInUser.bind(this);
    // this.loginWithFacebook = this.loginWithFacebook.bind(this);
    // this.signOut = this.signOut.bind(this);
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ appReady: true });
  }

  render() {
    if (!this.state.appReady) {
      return <Expo.AppLoading />;
    }
    return <AppDrawer />;
  }
}

const AppDrawer = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
      // navigationOptions: {
      //   tabBarLabel: "Settings"
      // }
    },
    Login: {
      screen: LoginScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Category: {
      screen: CategoryScreen
    },
    About: {
      screen: AboutScreen
    },
    WatchList: {
      screen: WatchListScreen
    }
  },
  {
    initialRouteName: "Login",
    contentComponent: props => <DrawerContent {...props} />
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1

    // justifyContent: 'center',
    // alignItems: 'center'
  },
  drawerHeader: {
    height: 150,
    backgroundColor: "white",
    paddingTop: 20
  },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 75,
    left: "25%"
  }
});

// signUpUser = (email, password) => {
//   try {
//     if (this.state.password.length < 6) {
//       alert("Password is too short");
//       return;
//     }

//     firebase.auth().createUserWithEmailAndPassword(email, password);
//     console.log("sign up complete");
//   } catch (error) {
//     console.log(error.toString());
//   }
// };

// logInUser = (email, password) => {
//   try {
//     if (this.state.password.length < 6) {
//       alert("Password is too short");
//       return;
//     }

//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(user => {
//         this.setState({ user });
//         // console.log(user);
//       });
//     console.log("logged in with email");
//   } catch (error) {
//     console.log(error.toString());
//   }
// };

// signOut() {
//   firebase
//     .auth()
//     .signOut()
//     .then(
//       () => {
//         console.log("Signed Out");
//         this.setState({ user: {} });
//       },
//       function(error) {
//         console.error("Sign Out Error", error);
//       }
//     );
// }

// async loginWithFacebook() {
//   //ENTER YOUR APP ID
//   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
//     fbKey,
//     { permissions: ["public_profile"] }
//   );

//   if (type == "success") {
//     const credential = firebase.auth.FacebookAuthProvider.credential(token);

//     firebase
//       .auth()
//       .signInWithCredential(credential)
//       .then(user => {
//         this.setState({ user });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// }

// async signInWithGoogleAsync() {
//   try {
//     const result = await Expo.Google.logInAsync({
//       androidClientId: androidID,
//       iosClientId: iosID,
//       scopes: ["profile", "email"]
//     });

//     if (result.type === "success") {
//       const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
//       console.log(credential)
//       firebase
//         .auth()
//         .signInWithCredential(credential)
//       //   .then(data => {
//       //     console.log("G-login - SUCCESS", data);
//       //   })
//       //   .catch(error => {
//       //     console.log("ERROR", error);
//       //   });
//       // return result.accessToken;
//     } else {
//       Alert.alert("Login not sucessfull, try again :(")
//     }
//   } catch (e) {
//     console.log(e.toString());
//   }
// }

// componentDidMount() {
//   // Listen for authentication state to change.
//   // firebase.auth().onAuthStateChanged(user => {
//   //   if (user != null) {
//   //     console.log("We are authenticated now!");
//   //   }
//   //   // Do other things
//   // });
// }
