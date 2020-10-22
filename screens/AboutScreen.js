import React, { Component } from "react";

import { H1, H3, Container, Content, Icon, Text } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { Col, Row, Grid } from "react-native-easy-grid";

import PersonAnimated from "../Components/Loaders/PersonAnimated";
import { Button } from "react-native";

export default ({ navigation }) => (
  <Container style={styles.container}>
    <NavBar title="About" drawerOpen={navigation.toggleDrawer} />
    <Content>
      <Grid>
        <Row style={{ padding: 20 }}>
          <Button title="HOME" onPress={() => navigation.navigate("Home")} />
        </Row>
        <Row>
          <PersonAnimated />
        </Row>
        <Row style={{ padding: 20 }}>
          <Col size={1}></Col>
          <Col size={2}>
            <Row>
              <H3>Built with </H3>
              <Icon
                name="music"
                type="FontAwesome"
                style={{ fontSize: 19, color: "blue" }}
              />
              <H3> & </H3>
              <Icon
                name="coffee"
                type="FontAwesome"
                style={{ fontSize: 19, color: "green" }}
              />
            </Row>
            <Row style={{ padding: 20 }}>
              <Text>By Jose Zapata</Text>
            </Row>
          </Col>
          <Col size={1}></Col>
        </Row>
      </Grid>
    </Content>
  </Container>
);
