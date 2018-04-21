import React, { Component } from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import { Container, Content, Icon, Button } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";

export default class WatchListScreen extends Component {
  static NavigationOptions = {
    drawerIcon: (
      <Icon style={{ height: 24, width: 24 }} type="FontAwesome" name="home" />
    )
  };

  render() {
    return (
      <NavBar
        title="My Watchlist"
        drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
      />
    );
  }
}
