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
  Icon
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class DrawerContent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={{ paddingTop: 24, flex: 1 }}>
        <Header span>
          <Body>
            <Image
              source={require("../assets/Images/logo.jpg")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 75,
                left: "25%"
              }}
            />
          </Body>
        </Header>
        <Content>
          {/* <DrawerItems {...props} /> */}

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
        </Content>
      </Container>
    );
  }
}

// export default DrawerContent;
