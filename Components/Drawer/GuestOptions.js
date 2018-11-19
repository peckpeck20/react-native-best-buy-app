import React from "react";
import {
  Text,
  Icon,
  Button
} from "native-base";
import { Col, Row } from "react-native-easy-grid";

const GuestOptions = props => {
  return (
    <Row size={1}>
    <Col>
      <Button
        block
        info
        onPress={() => props.handleNav.navigate("SignUp")}
      >
        <Icon type="Entypo" name="add-user" />
        <Text>Sign Up</Text>
      </Button>
    </Col>
    <Col>
      <Button
        full
        primary
        onPress={() => props.handleNav.navigate("Login")}
      >
        <Text>Login</Text>
        <Icon ios="ios-send" android="md-send" />
      </Button>
    </Col>
  </Row>
  );
};



export default GuestOptions;