import React, { Component } from "react";
import {
  Header,
  Title,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Button
} from "native-base";
import styles from "../assets/styling";
class HeaderBack extends Component {
  render() {
    return (
      <Header style={styles.background}>
        <Left>
          <Button transparent onPress={() => this.props.goBack()}>
            <Icon name="arrow-back" type="MaterialIcons" />
            <Text />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default HeaderBack;
