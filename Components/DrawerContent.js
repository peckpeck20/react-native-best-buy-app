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
  Icon,
  Button
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class DrawerContent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      // style={{ paddingTop: 24, flex: 1 }}
      <Container>
        <Header />
        <Content>
          <Grid>
            <Row size={1}>
              <Image
                source={require("../assets/Images/logo.jpg")}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 75,
                  left: "25%"
                }}
              />
            </Row>
            <Row size={1}>
              <Button iconLeft info>
                <Icon type="Entypo" name="add-user" />
                <Text>Sign Up</Text>
              </Button>
              <Button iconRight primary>
                <Text>Login</Text>
                <Icon ios="ios-send" android="md-send" />
              </Button>
            </Row>
            <Row size={2}>
              <List>
                <ListItem onPress={() => navigation.navigate("Home")}>
                  <Body>
                    <Text>Home</Text>
                  </Body>
                  <Right>
                    <Icon name="ios-arrow-forward" />
                  </Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Category")}>
                  <Body>
                    <Text>Categories</Text>
                  </Body>
                  <Right>
                    <Icon name="ios-arrow-forward" />
                  </Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("Profile")}>
                  <Body>
                    <Text>My Profile</Text>
                  </Body>
                  <Right>
                    <Icon name="ios-arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem onPress={() => navigation.navigate("WatchList")}>
                  <Body>
                    <Text>My WatchList</Text>
                  </Body>
                  <Right>
                    <Icon name="ios-arrow-forward" />
                  </Right>
                </ListItem>

                <ListItem onPress={() => navigation.navigate("About")}>
                  <Body>
                    <Text>About</Text>
                  </Body>
                  <Right>
                    <Icon name="ios-arrow-forward" />
                  </Right>
                </ListItem>
              </List>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

// export default DrawerContent;
