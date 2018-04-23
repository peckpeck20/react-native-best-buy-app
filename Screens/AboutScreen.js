import React, { Component } from "react";
import { H1, H2, Container, Content } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";

class AboutScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <NavBar
          title="Login"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          <H1>Made by </H1>
          <H2>Jose Zapata</H2>
        </Content>
      </Container>
    );
  }
}

export default AboutScreen;
