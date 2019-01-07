import React, { Component } from "react";
import { connect } from 'react-redux';

import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Icon,
  Button,
  Item,
  Input
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import NavBar from "../Components/NavBar";
import styles from "../assets/styling";

class ProfileScreen extends Component {
  render() {
    const { user } = this.props.user;
    return (
      <Container style={styles.container}>
        <NavBar
          title="My Profile"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          {this.props.user.auth ?
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
                        Signed up via : {user.providerData[0].providerId}
                      </Text>
                    </ListItem>
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
            </Grid> :
            <Button
              rounded
              full
              success
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text>Opps</Text>
            </Button>}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, {})(ProfileScreen);

