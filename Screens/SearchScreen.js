import React, { Component } from "react";
import { H1, H2, Container, Content } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { Col, Row, Grid } from "react-native-easy-grid";

class SearchScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <NavBar
          title="Results"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          <Grid>
            <Row>
              <Col>
                <H1>Made by </H1>
                <H2>Jose Zapata</H2>
                <H2>2018</H2>
              </Col>
            </Row>
            <Row />
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default SearchScreen;
