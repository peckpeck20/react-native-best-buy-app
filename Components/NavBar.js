import React from "react";

import { Icon, Left, Right, Header, Body, Title } from "native-base";
import styles from "../assets/styling";

export default (props) => (
  <Header style={styles.background}>
    <Left>
      <Icon name="ios-menu" onPress={() => props.drawerOpen()} />
    </Left>
    <Body>
      <Title>{props.title}</Title>
    </Body>
    <Right />
  </Header>
);
