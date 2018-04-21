import React, { Component } from "react";
import { Button, KeyboardAvoidingView, View,Image } from "react-native";
import * as firebase from "firebase";
import { Container, Text, Form, Item, Label, Input, Alert } from "native-base";

import { fbKey, androidID, iosID } from "../assets/constants";
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
    const loggedIn = this.state.loggedIn;

    const button = loggedIn ? (
      <Button title="logout" color="red" onPress={this.signOut} />
    ) : (
      <Button
        title="login "
        onPress={() => this.logInUser(this.state.email, this.state.password)}
      />
    );

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Container style={styles.container}>
          <NavBar
            title="Login"
            drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
          />

          <View style={{ flex: 12}}>
          <Image
            style={{
              flex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
            }}
            source={require("../assets/Images/signin.jpg")}
          />
          </View>
          <View style={{ flex: 2, backgroundColor: "blue" }}>
          {/* <Image> */}
          </View>
          {/* <Form>
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
            
            {button}
            <Button
              title="Sign up"
              onPress={() =>
                this.signUpUser(this.state.email, this.state.password)
              }
            />
            <Button
              title="FB"
              color="black"
              onPress={() => this.loginWithFacebook()}
            />

            <Button
              title="Google"
              color="green"
              onPress={() => {
                this.signInWithGoogleAsync();
              }}
            />
          </Form> */}
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;
