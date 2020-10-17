import React from "react";
import {
  Header,
  Title,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Button,
} from "native-base";
import styles from "../assets/styling";

export default ({ goBack, title }) => (
  <Header style={styles.background}>
    <Left>
      <Button transparent onPress={goBack}>
        <Icon
          name="arrow-back"
          type="MaterialIcons"
          style={styles.titleColor}
        />
        <Text />
      </Button>
    </Left>
    <Body>
      <Title style={styles.titleColor}>{title}</Title>
    </Body>
    <Right />
  </Header>
);
