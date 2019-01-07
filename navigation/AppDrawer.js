import React from "react";
import { Dimensions } from "react-native";
import { DrawerNavigator } from "react-navigation";
//custom
const { width, height } = Dimensions.get("screen");
import DrawerContent from "../Components/Drawer/DrawerContent";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CategoryScreen from "../screens/CategoryScreen";
import WatchListScreen from "../screens/WatchListScreen";
import ResultScreen from "../screens/ResultScreen";
import ShowCaseScreen from "../screens/ShowCaseScreen";
import SearchScreen from "../screens/SearchScreen";
import AboutScreen from "../screens/AboutScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
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
    initialRouteName: "Home",
    contentComponent: props => <DrawerContent {...props} />,
    drawerWidth: Math.min(height, width) * 0.7 // calculates 70% of the smaller side of the screen.
  }
);