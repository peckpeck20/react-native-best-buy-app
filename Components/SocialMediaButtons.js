import React from 'react';
import { Col, Row } from "react-native-easy-grid";
import {
  Text,
  Button,
  Icon,
  H1,
} from "native-base";

const SocialMediaButtons = (props) => {
  return (
    <Row size={1}>
      <Col size={1} />
      <Col size={2}>
        <H1 style={{ padding: 30 }}>One Click</H1>

        <Button block iconLeft onPress={() => props.facebook()}>
          <Icon type="FontAwesome" name="facebook-official" />
          <Text>Facebook Login</Text>
        </Button>
        <H1 style={{ padding: 20 }} />
        <Button
          block
          iconLeft
          danger
          onPress={() => props.google()}
        >
          <Icon type="FontAwesome" name="google-plus" />
          <Text>Google Login</Text>
        </Button>
      </Col>
      <Col size={1} />
    </Row>
  );
};

export default SocialMediaButtons;