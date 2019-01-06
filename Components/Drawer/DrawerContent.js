import React, { Component } from "react";
import { Image } from "react-native";

import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/userModule';
import * as firebase from "firebase";

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

import GuestOptions from "./GuestOptions";
import UserOptions from "./UserOptions";
import styles from "../../styles/styles";

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    //use this word inside function
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          this.props.logout()
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
    const { navigation, user } = this.props;

    return (
      <Container style={{ paddingTop: 24 }}>
        <Header span style={[styles.main, { paddingTop: 15 }]}>
          <Image
            source={require("../../assets/Images/logo.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 75
            }}
          />
        </Header>
        <Content>
          <Grid>
            {user.auth ?
              <UserOptions handleNav={navigation} /> :
              <GuestOptions handleNav={navigation} />}
            <Row size={3}>
              <Col>
                <List>
                  <ListItem icon onPress={() => navigation.navigate("Home")}>
                    <Left>
                      <Icon type="Octicons" name="home" style={styles.iconSize} />
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
                      <Icon type="FontAwesome" name="th-list" style={styles.iconSize} />
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
                      <Icon type="Feather" name="shopping-cart" style={styles.iconSize} />
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
                      <Icon type="Octicons" name="info" style={styles.iconSize} />
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
                {user.auth ?
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
                  :
                  null}
              </Col>
              <Col size={1} />
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { logout })(DrawerContent);
