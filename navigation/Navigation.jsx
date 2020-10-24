import React, { useEffect } from "react";

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

const Drawer = createDrawerNavigator();

export default (props) => {
  useEffect(() => {
    props.toggleAppReady();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="About">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
