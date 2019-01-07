import React, { Component } from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import { Container, Content, Icon, Button } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import { Col, Row, Grid } from "react-native-easy-grid";
import axios from "axios";
import { mLabKey } from "../private/constants";
export default class WatchListScreen extends Component {
  // static NavigationOptions = {
  //   drawerIcon: (
  //     <Icon style={{ height: 24, width: 24 }} type="FontAwesome" name="home" />
  //   )
  // };
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  getWatchlist() {
    axios
      .get(
        `https://api.mlab.com/api/1/databases/e-sell-mobile/collections/e-sell-mobile?apiKey=${mLabKey}`
      )
      .then(response => {
        this.setState({ items: response });
        console.log("====================================");
        console.log(response);
        console.log("====================================");
      });
  }

  postItem(item) {
    axios.post(
      `https://api.mlab.com/api/1/databases/e-sell-mobile/collections/e-sell-mobile?apiKey=${mLabKey}`
    ),
      {
        item: item
      };
  }

  deleteItem(id) {
    axios.delete(
      `https://api.mlab.com/api/1/databases/e-sell-mobile/collections/e-sell-mobile?apiKey=${mLabKey}`
    );
  }
  componentDidMount() { }
  render() {
    return (
      <Container style={styles.container}>
        <NavBar
          title="My Watchlist"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          {/* <Grid>
          <Row>
            <Col>
            
            </Col>
          </Row>
          </Grid> */}
        </Content>
      </Container>
    );
  }
}
