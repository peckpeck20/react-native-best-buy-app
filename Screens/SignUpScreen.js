import React, { Component } from "react";
import { Alert } from "react-native";
import * as firebase from "firebase";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Form,
  Item,
  Label,
  Input,
  H1,
  H2
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { fbKey, androidID, iosID } from "../assets/constants";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      user: {},
      loggedIn: false
    };
    //use this word inside function
    this.signUpUser = this.signUpUser.bind(this);
    this.logInUser = this.logInUser.bind(this);
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Password is too short");
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("sign up complete");
    } catch (error) {
      console.log(error.toString());
    }
  };

  logInUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Password is too short");
        return;
      }

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          this.setState({ user, loggedIn: true });
          // console.log(user);
        });
      console.log("logged in with email");
    } catch (error) {
      console.log(error.toString());
    }
  };

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          console.log("Signed Out");
          this.setState({
            user: {},
            loggedIn: false
          });
        },
        function(error) {
          console.error("Sign Out Error", error);
        }
      );
  }

  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      fbKey,
      { permissions: ["public_profile"] }
    );

    if (type == "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase
        .auth()
        .signInWithCredential(credential)
        .then(user => {
          this.setState({
            user,
            loggedIn: true
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  async signInWithGoogleAsync() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: androidID,
        iosClientId: iosID,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );
        console.log(credential);
        firebase.auth().signInWithCredential(credential);

        this.setState({
          loggedIn: true
        });
        //   .then(data => {
        //     console.log("G-login - SUCCESS", data);
        //   })
        //   .catch(error => {
        //     console.log("ERROR", error);
        //   });
        // return result.accessToken;
      } else {
        Alert.alert("Login not sucessfull, try again :(");
      }
    } catch (e) {
      console.log(e.toString());
    }
  }

  render() {
    // const loggedIn = this.state.loggedIn;

    // const button = loggedIn ? (
    //   <Button title="logout" color="red" onPress={this.signOut} />
    // ) : (
    //   <Button
    //     title="login "
    //     onPress={() => this.logInUser(this.state.email, this.state.password)}
    //   />
    // );

    return (
      <Container style={styles.container}>
        <NavBar
          title="Sign Up"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          <Grid>
            <Row
              size={2}
              style={{
                padding: 20
              }}
            >
              <Col>
                <Form>
                  <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={email => this.setState({ email })}
                    />
                  </Item>

                  <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={password => this.setState({ password })}
                    />
                  </Item>
                  <Item floatingLabel>
                    <Label>Confirm Password</Label>
                    <Input
                      autoCorrect={false}
                      autoCapitalize="none"
                      onChangeText={passwordConfirm =>
                        this.setState({ passwordConfirm })
                      }
                    />
                  </Item>
                </Form>
              </Col>
            </Row>
            <Row
              style={{
                padding: 20
              }}
            >
              <Col>
                <Row style={{ paddingLeft: 40 }}>
                  <Button
                    rounded
                    info
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    <Text>Login</Text>
                    <Icon name="login" type="MaterialCommunityIcons" />
                  </Button>
                  <H1 style={{ padding: 10 }} />
                  <Button
                    rounded
                    disabled
                    onPress={() =>
                      this.signUpUser(this.state.email, this.state.password)
                    }
                  >
                    <Text>Sign Up</Text>
                    <Icon ios="ios-send" android="md-send" />
                  </Button>
                </Row>
              </Col>
            </Row>

            <Row size={1}>
              <Col size={1} />
              <Col size={2}>
                <H1 style={{ padding: 30 }}>One Click</H1>

                <Button block iconLeft onPress={() => this.loginWithFacebook()}>
                  <Icon type="FontAwesome" name="facebook-official" />
                  <Text>Facebook Login</Text>
                </Button>
                <H1 style={{ padding: 20 }} />
                <Button
                  block
                  iconLeft
                  danger
                  onPress={() => {
                    this.signInWithGoogleAsync();
                  }}
                >
                  <Icon type="FontAwesome" name="google-plus" />
                  <Text>Google Login</Text>
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

export default SignUpScreen;