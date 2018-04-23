import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { Image } from "react-native";
import {
  Body,
  Container,
  Text,
  Form,
  Item,
  Label,
  Input,
  Alert,
  Header,
  Content,
  List,
  ListItem,
  Right,
  Left,
  Icon,
  Button
} from "native-base";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class TestDrawer extends Component {
  render() {
    const { navigation } = this.props;
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
              <Button full info onPress={() => navigation.navigate("SignUp")}>
                <Icon type="Entypo" name="add-user" />
                <Text>Sign Up</Text>
              </Button>
              <Button full primary onPress={() => navigation.navigate("Login")}>
                <Text>Login</Text>
                <Icon ios="ios-send" android="md-send" />
              </Button>
            </Row>

            <Row size={2}>
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

                  <ListItem
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
                  </ListItem>

                  <ListItem icon onPress={() => navigation.navigate("Profile")}>
                    <Left>
                      <Icon type="FontAwesome" name="user-secret" />
                    </Left>
                    <Body>
                      <Text>My Profile</Text>
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
          </Grid>
        </Content>
      </Container>
    );
  }
}

// export default DrawerContent;
