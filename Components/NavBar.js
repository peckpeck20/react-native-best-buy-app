import React, { Component } from "react";
import {
  Icon,
  Left,
  Right,
  Header,
  Body,
  Title
} from "native-base";
import styles from "../assets/styling";

class NavBar extends Component {
  render() {
    return (
      <Header style={styles.background}>
        <Left>
          <Icon name="ios-menu" onPress={() => this.props.drawerOpen()} />
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default NavBar;
