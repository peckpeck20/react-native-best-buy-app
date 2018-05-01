import React, { Component } from "react";
import axios from "axios";
import { Container, Header, Content, H1 } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { mLabKey } from "../assets/constants";

class ShoppingCartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
    //use this word inside function
    this.getWatchlist = this.getWatchlist.bind(this);
  }
  getWatchlist() {
    axios
      .get(
        `https://api.mlab.com/api/1/databases/e-sell-mobile/collections/e-sell-mobile?apiKey=${mLabKey}`
      )
      .then(response => {
        this.setState({ items: response.data });
      });
  }

  // deleteItem(id) {
  //   axios.delete(
  //     `https://api.mlab.com/api/1/databases/e-sell-mobile/collections/e-sell-mobile?apiKey=${mLabKey}`,
  //     { id }
  //   );
  // }

  componentDidMount() {
    this.getWatchlist();

    // this.deleteItem(0);
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
            <Grid>
              <Row>
                <Col>
                  <H1 />
                </Col>
              </Row>
            </Grid>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default ShoppingCartScreen;
