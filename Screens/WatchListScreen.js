import React, { Component } from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import { Container, Content, Icon, Button } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import { Col, Row, Grid } from "react-native-easy-grid";
export default class WatchListScreen extends Component {
  static NavigationOptions = {
    drawerIcon: (
      <Icon style={{ height: 24, width: 24 }} type="FontAwesome" name="home" />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <NavBar
          title="My Watchlist"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          <Grid>
            <Col style={{ backgroundColor: "#635DB7", height: 200 }} />
            <Col style={{ backgroundColor: "#00CE9F", height: 200 }} />
          </Grid>
        </Content>
      </Container>
    );
  }
}
