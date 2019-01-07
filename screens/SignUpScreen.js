import React, { Component } from "react";
import { connect } from 'react-redux';

import { Alert } from "react-native";
import * as firebase from "firebase";
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Form,
  Item,
  Label,
  Input,
  H1,

} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { fbKey, androidID, iosID } from "../private/constants";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { requestLogin, loginSuccess, loginFail } from '../redux/reducers/userModule';
import SocialMediaButtons from "../Components/SocialMediaButtons";

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
        function (error) {
          console.error("Sign Out Error", error);
        }
      );
  }

  async signInWithGoogleAsync() {
    this.props.requestLogin();
    try {
      const { navigate } = this.props.navigation;
      const result = await Expo.Google.logInAsync({
        androidClientId: androidID,
        iosClientId: iosID,
        scopes: ["profile", "email"]
      });
      //console.log(result);

      if (result.type === "success") {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );
        //console.log(credential);
        firebase
          .auth()
          .signInAndRetrieveDataWithCredential(credential)
          // .then(user => {
          //   this.props.loginSuccess(user);
          // })
          .catch(error => {
            this.props.loginFail(error.toString());
          });
        navigate("Home");
      } else {
        Alert.alert("Login not sucessfull, try again.");
      }
      // if (this.props.user.auth === true) {
      //   () => navigate("Home");
      // }
    } catch (e) {
      console.log(e.toString());
    }
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
        .signInAndRetrieveDataWithCredential(credential)
        // .then(user => this.props.loginSuccess(user))
        .catch(error => {
          this.props.loginFail(error);
        });
      navigate("Home");
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
                    success
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
            <SocialMediaButtons facebook={() => this.loginWithFacebook()} google={() => this.signInWithGoogleAsync()} />
            {/* <Button
              success
              block
              onPress={this.signOut}
            >
              <Text>Signout</Text>
            </Button> */}
          </Grid>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { requestLogin, loginSuccess, loginFail })(SignUpScreen);
