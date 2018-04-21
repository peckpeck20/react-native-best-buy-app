import React, { Component } from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import { Container, Content, Icon, Button } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";

export default class HomeScreen extends Component {
  static NavigationOptions = {
    drawerIcon: (
      <Icon style={{ height: 24, width: 24 }} type="FontAwesome" name="home" />
    )
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Container style={styles.container}>
          {/* <NavBar
          title="Home"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        /> */}
          <SearchBar
            drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
          />
          <Content
            contentContainerStyle={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 10
            }}
          >
            <Button
              onPress={() => this.props.navigation.navigate("DrawerToggle")}
              full
            >
              <Icon
                style={{ height: 24, width: 24 }}
                type="FontAwesome"
                name="home"
              />
              <Text style={{ color: "white" }}>Open Drawer</Text>
            </Button>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
