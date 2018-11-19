import React, { Component } from "react";
import { Alert } from "react-native";
import {connect} from 'react-redux';

import { fbKey, androidID, iosID } from "../assets/constants";
import * as firebase from "firebase";
import {requestLogin,loginSuccess} from '../redux/reducers/userModule';

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


import styles from "../assets/styling";
import NavBar from "../Components/NavBar";

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      user: {},
      loggedIn: false
    };
    //use this word inside function
    this.signUpUser = this.signUpUser.bind(this);
    this.logInUser = this.logInUser.bind(this);
    // this.loginWithFacebook = this.loginWithFacebook.bind(this);
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
        // .then(user => {
        //   this.setState({ user, loggedIn: true });
        // });
        .then(user => console.log(user));

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
          // this.setState({
          //   user: {},
          //   loggedIn: false
          // });
        },
        function(error) {
          console.error("Sign Out Error", error);
        }
      );
  }

  async loginWithFacebook() {
    this.props.requestLogin();

    const { navigate } = this.props.navigation;
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      fbKey,
      { permissions: ["public_profile"] }
    );

    if (type == "success") {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase
        .auth()
        .signInWithCredential(credential)
        .then(user =>this.props.loginSuccess(user))
        // .then(user => {
        //   loginSuccess(user);
        //   // navigate("Profile", { user: user });
        // })
        // .catch(error => {
        //   console.log(error);
        // });
    }
  }

  async signInWithGoogleAsync() {
    try {
      const { navigate } = this.props.navigation;
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
        // console.log(credential);
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(user => {
            //redirect to profile
            navigate("Profile", { user: user });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        Alert.alert("Login not sucessfull, try again :(");
      }
    } catch (e) {
      console.log(e.toString());
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <NavBar
          title="Login"
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
                </Form>
              </Col>
            </Row>
            <Row
              style={{
                padding: 60
              }}
            >
              <Col size={1} />
              <Col size={2}>
                <Button
                  rounded
                  onPress={() =>
                    this.logInUser(this.state.email, this.state.password)
                  }
                >
                  <Text>Login</Text>
                  <Icon ios="ios-send" android="md-send" />
                </Button>
              </Col>
              <Col size={1} />
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

                <Button
                  success
                  block
                  onPress={() => {
                    this.signOut();
                  }}
                >
                  <Text>Signout</Text>
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
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps,{requestLogin,loginSuccess})(LoginScreen);
