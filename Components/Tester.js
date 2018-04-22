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

              // left: "25%"
            }}
          />
        </Header>
        <Content>
          <Grid>
            <Row size={1} style={{ backgroundColor: "#635DB0" }}>
              <Button full info>
                <Icon type="Entypo" name="add-user" />
                <Text>Sign Up</Text>
              </Button>
              <Button full primary>
                <Text>Login</Text>
                <Icon ios="ios-send" android="md-send" />
              </Button>
            </Row>

            <Row size={2}>
              <Col>
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
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

// export default DrawerContent;
