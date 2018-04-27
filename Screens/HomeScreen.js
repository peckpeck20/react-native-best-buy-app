import React, { Component } from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import {
  Container,
  Content,
  Icon,
  Button,
  Header,
  Item,
  Input
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import AdvancedSearchBar from "../Components/AdvancedSearchBar";
// import SearchBar from "../Components/SearchBar";
import { SearchBar } from "react-native-elements";
import { width, height } from "../App";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTxt: ""
    };
  }

  render() {
    //calculate the width of the search bar
    const calculatedWidth = Math.min(height, width) * 0.76;
    return (
      <Container style={styles.container}>
        {/* <SearchBar
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        /> */}
        <Content>
          <Grid>
            <Row style={{ backgroundColor: "#3F51B5", padding: 5 }}>
              <Row>
                <Icon
                  name="menu"
                  onPress={() => this.props.navigation.navigate("DrawerToggle")}
                  style={{ color: "white", padding: 10 }}
                />
                {/* <SearchBar
                  round
                  clearIcon
                  showLoading
                  onChangeText={searchTxt => this.setState({ searchTxt })}
                  onClear={() => this.setState({ searchTxt: "" })}
                  onCancel={() => this.setState({ searchTxt: "" })}
                  containerStyle={{ width: 330, height: 50 }}
                  placeholder="Search Products"
                  icon={{ type: "font-awesome", name: "search" }}
                /> */}
                <Item
                  onPress={() =>
                    this.props.navigation.navigate("SearchScreen", {
                      searchQuery: this.state.searchTxt
                    })
                  }
                  rounded
                  style={{
                    width: calculatedWidth,
                    height: 50,
                    padding: 5,
                    backgroundColor: "white"
                  }}
                >
                  <Input placeholder="I'm looking for.." disabled />
                  <Icon active name="search" />
                </Item>

                <Icon
                  name="ios-cart-outline"
                  onPress={() =>
                    this.props.navigation.navigate("SearchScreen", {
                      searchQuery: this.state.searchTxt
                    })
                  }
                  style={{ color: "white", padding: 10 }}
                />
              </Row>
            </Row>
            {/* <Row>
              <AdvancedSearchBar />
            </Row> */}
          </Grid>
        </Content>
      </Container>
    );
  }
}
