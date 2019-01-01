import React, { Component } from "react";
import { connect } from 'react-redux';
import { KeyboardAvoidingView } from "react-native";
import {
  Container,
  Content,
  Text,
  Alert,
  H1,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Icon,
  Button,
  Item,
  Input
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Avatar } from "react-native-elements";

import styles from "../assets/styling";
import NavBar from "../Components/NavBar";

class ProfileScreen extends Component {
  signOut() {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("Signed Out succesfully");
          // this.setState({ user: {} });
        },
        function (error) {
          console.error("Sign Out Error", error);
        }
      );
  }
  render() {

    const { user } = this.props.user;


    return (
      <Container style={styles.container}>
        <NavBar
          title="My Profile"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          <Grid>
            <Row>
              <Col>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail
                        source={{ uri: user.providerData[0].photoURL }}
                      />
                    </Left>
                    <Body>
                      <Text>{user.displayName}</Text>
                    </Body>
                  </ListItem>
                  <ListItem icon>
                    <Left>
                      <Icon name="sign-in" type="FontAwesome" />
                    </Left>
                    <Text>
                      Signed up via : {user.providerData[0].providerId}{" "}
                    </Text>
                  </ListItem>

                  {/* <ListItem icon>
                    <Left>
                      <Icon name="home" />
                    </Left>
                    <Body>
                      <Text note>Address</Text>
                    </Body>
                    <Right>
                      <Icon type="SimpleLineIcons" name="pencil" />
                    </Right>
                  </ListItem>
                  <ListItem icon>
                    <Left>
                      <Icon name="phone" type="Feather" />
                    </Left>
                    <Body>
                      <Text note>phone number</Text>
                    </Body>
                    <Right>
                      <Icon type="SimpleLineIcons" name="pencil" />
                    </Right>
                  </ListItem> */}
                  <Item>
                    <Icon active name="home" />
                    <Input placeholder="Address" />
                  </Item>

                  <Item>
                    <Icon active type="SimpleLineIcons" name="pencil" />
                    <Input placeholder="Phone Number" />
                  </Item>
                </List>
              </Col>
            </Row>
            <Row style={{ padding: 40 }}>
              <Col>
                <Button
                  rounded
                  full
                  success
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Text>Save</Text>
                </Button>
              </Col>
            </Row>
            <Row />
          </Grid>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, {})(ProfileScreen);