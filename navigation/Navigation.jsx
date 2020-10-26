import React, { useContext, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import DrawerContent from "../Components/Drawer/DrawerContent";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
// import SignUpScreen from "../screens/SignUpScreen";
// import ProfileScreen from "../screens/ProfileScreen";
// import CategoryScreen from "../screens/CategoryScreen";
// import WatchListScreen from "../screens/WatchListScreen";
// import ResultScreen from "../screens/ResultScreen";
// import ShowCaseScreen from "../screens/ShowCaseScreen";
// import SearchScreen from "../screens/SearchScreen";
import AboutScreen from "../screens/AboutScreen";
// import ShoppingCartScreen from "../screens/ShoppingCartScreen";

// import { initialFetch } from "../redux/reducers/InitialLoad";
import { connect } from "react-redux";

const Drawer = createDrawerNavigator();

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, undefined)(Navigation);
