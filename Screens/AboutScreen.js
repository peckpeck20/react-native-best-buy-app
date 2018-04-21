import React, { Component } from "react";
import { H1, H2, Container } from "native-base";

class AboutScreen extends Component {
  render() {
    return (
      <Container style={{ flex: 1 }}>
        <H1>Made by </H1>
        <H2>Jose Zapata</H2>
      </Container>
    );
  }
}

export default AboutScreen;
