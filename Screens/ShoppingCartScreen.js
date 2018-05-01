import React, { Component } from "react";
import axios from "axios";
import { Container, Header, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";

class ShoppingCartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.mlab.com/api/1/databases/e-sell-mobile/collections/e-sell-mobile?apiKey=ZbCTh2u8e_Wch17ozpVWnhe_ASXIT3ia"
      )
      .then(response => {
        this.setState({ items: response });
      });
  }

  render() {
    return (
      <Container style={styles.container}>
        <NavBar
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
          title="Shopping Cart"
        />
        <Content>
          <Grid>
            <Row />
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default ShoppingCartScreen;
