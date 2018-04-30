//api.mlab.com/api/1/databases/e-sell-mobile/collections/e-sell-mobile?apiKey=ZbCTh2u8e_Wch17ozpVWnhe_ASXIT3ia

https: import React, { Component } from "react";
import axios from "axios";
import { Container, Header, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

class WishListScreen extends Component {
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
      <Container>
        <Header />
        <Content>
          <Grid>
            <Col style={{ backgroundColor: "#635DB7", height: 200 }} />
            <Col style={{ backgroundColor: "#00CE9F", height: 200 }} />
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default WishListScreen;
