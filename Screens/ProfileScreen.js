import React, { Component } from 'react';
import { KeyboardAvoidingView } from "react-native";
import { Container, Text, Form, Item, Label, Input, Alert } from "native-base";

import NavBar from '../Components/NavBar';
import styles from '../assets/styling';

export default class ProfileScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding">
      <Container style={styles.container}>
        <NavBar title="Profile" drawerOpen={() => this.props.navigation.navigate('DrawerToggle')}/>

      </Container>
      </KeyboardAvoidingView>
    );
  }
}

