import React, { Component } from "react";

import * as firebase from "firebase";

import { Image } from "react-native";
import {
  Body,
  Container,
  Text,
  Header,
  Content,
  List,
  ListItem,
  Right,
  Left,
  Icon,
  Button
} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    //use this word inside function
    this.signOut = this.signOut.bind(this);
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user != null) {
    //     console.log(`User is uthenticated! ${user}`);
    //     this.setState({
    //       isLoggedIn: true
    //     });
    //   } else {
    //     this.setState({
    //       isLoggedIn: false
    //     });
    //   }
    // });
  }

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("Signed Out");
          this.setState({ isLoggedIn: false });
        },
        function (error) {
          console.error("Sign Out Error", error);
        }
      );
  }
  // componentDidMount() {
  //   // Listen for authentication state to change.
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user != null) {
  //       console.log(`User is uthenticated! ${user}`);
  //       this.setState({
  //         isLoggedIn: true
  //       });
  //     }
  //   });
  // }
  render() {
    const { navigation } = this.props;

    const { loggedIn } = this.state;

    return (
      <Container style={{ paddingTop: 24 }}>
        <Header span style={{ paddingTop: 15 }}>
          <Image
            source={require("../assets/Images/logo.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 75
            }}
          />
        </Header>
        <Content>
          <Grid>
            <Row size={1}>
              {/* {loggedIn ? <Text>Log out</Text> : <Text>Logged In</Text>} */}
              <Col>
                <Button
                  block
                  info
                  onPress={() => navigation.navigate("SignUp")}
                >
                  <Icon type="Entypo" name="add-user" />
                  <Text>Sign Up</Text>
                </Button>
              </Col>
              <Col>
                <Button
                  full
                  primary
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text>Login</Text>
                  <Icon ios="ios-send" android="md-send" />
                </Button>
              </Col>
            </Row>

            <Row size={3}>
              <Col>
                <List>
                  <ListItem icon onPress={() => navigation.navigate("Home")}>
                    <Left>
                      <Icon type="Octicons" name="home" />
                    </Left>
                    <Body>
                      <Text>Home</Text>
                    </Body>
                    <Right>
                      <Icon name="ios-arrow-forward" />
                    </Right>
                  </ListItem>

                  <ListItem
                    icon
                    onPress={() => navigation.navigate("Category")}
                  >
                    <Left>
                      <Icon type="FontAwesome" name="th-list" />
                    </Left>
                    <Body>
                      <Text>Categories</Text>
                    </Body>
                    <Right>
                      <Icon name="ios-arrow-forward" />
                    </Right>
                  </ListItem>

                  {/* <ListItem
                    icon
                    onPress={() => navigation.navigate("WatchList")}
                  >
                    <Left>
                      <Icon type="Octicons" name="checklist" />
                    </Left>
                    <Body>
                      <Text>My Watchlist</Text>
                    </Body>
                    <Right>
                      <Icon name="ios-arrow-forward" />
                    </Right>
                  </ListItem> */}

                  <ListItem
                    icon
                    onPress={() => navigation.navigate("ShoppingCart")}
                  >
                    <Left>
                      <Icon type="Feather" name="shopping-cart" />
                    </Left>
                    <Body>
                      <Text>My Cart</Text>
                    </Body>
                    <Right>
                      <Icon name="ios-arrow-forward" />
                    </Right>
                  </ListItem>

                  <ListItem icon onPress={() => navigation.navigate("About")}>
                    <Left>
                      <Icon type="Octicons" name="info" />
                    </Left>
                    <Body>
                      <Text>About</Text>
                    </Body>
                    <Right>
                      <Icon name="ios-arrow-forward" />
                    </Right>
                  </ListItem>
                </List>
              </Col>
            </Row>
            <Row style={{ paddingTop: 20 }}>
              <Col size={1} />
              <Col size={2}>
                <Button
                  rounded
                  danger
                  onPress={() => {
                    this.signOut();
                  }}
                >
                  <Icon type="FontAwesome" name="sign-out" />
                  <Text>Log out</Text>
                </Button>
              </Col>
              <Col size={1} />
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

// export default DrawerContent;
