import React from "react";
import { Dimensions } from "react-native";
import { DrawerNavigator } from "react-navigation";
//custom
const { width, height } = Dimensions.get("screen");
import DrawerContent from "../Components/Drawer/DrawerContent";
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CategoryScreen from "../Screens/CategoryScreen";
import WatchListScreen from "../Screens/WatchListScreen";
import ResultScreen from "../Screens/ResultScreen";
import ShowCaseScreen from "../Screens/ShowCaseScreen";
import SearchScreen from "../Screens/SearchScreen";
import AboutScreen from "../Screens/AboutScreen";
import ShoppingCartScreen from "../Screens/ShoppingCartScreen";
export const AppDrawer = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
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
    },
    ShoppingCart: {
      screen: ShoppingCartScreen
    },
    ResultScreen: {
      screen: ResultScreen
    },
    SearchScreen: {
      screen: SearchScreen
    },
    ShowCaseScreen: {
      screen: ShowCaseScreen
    }
  },
  {
    initialRouteName: "SearchScreen",
    contentComponent: props => <DrawerContent {...props} />,
    drawerWidth: Math.min(height, width) * 0.7 // calculates 70% of the smaller side of the screen.
  }
);