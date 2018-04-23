import React, { Component } from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import { Container, Content, Icon, Button, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
// import SearchBar from "../Components/SearchBar";
import { SearchBar } from "react-native-elements";

export default class HomeScreen extends Component {
  // static NavigationOptions = {
  //   drawerIcon: (
  //     <Icon style={{ height: 24, width: 24 }} type="FontAwesome" name="home" />
  //   )
  // };

  constructor(props) {
    super(props);
    this.state = {
      searchTxt: ""
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        {/* <SearchBar
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        /> */}

        <Content>
          <Grid>
            <Row style={{ backgroundColor: "#635DB7", height: 55 }}>
              <Row>
                <Icon
                  name="menu"
                  onPress={() => this.props.navigation.navigate("DrawerToggle")}
                />
                <SearchBar
                  round
                  clearIcon
                  showLoading
                  onChangeText={searchTxt => this.setState({ searchTxt })}
                  onClear={() => this.setState({ searchTxt: "" })}
                  onCancel={() => this.setState({ searchTxt: "" })}
                  containerStyle={{ width: 350, height: 50 }}
                  placeholder="Search Products"
                  icon={{ type: "font-awesome", name: "search" }}
                />
                <Icon
                  name="ios-cart-outline"
                  onPress={() => this.props.navigation.navigate("DrawerToggle")}
                />
              </Row>
            </Row>
            <Row style={{ backgroundColor: "#00CE9F" }} />
          </Grid>
        </Content>
      </Container>
    );
  }
}
