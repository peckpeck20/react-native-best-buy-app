import React, { Component } from "react";
import { KeyboardAvoidingView, Text, ScrollView } from "react-native";
import axios from "axios";
import {
  Container,
  Content,
  Icon,
  Button,
  Header,
  Item,
  Input,
  H1,
  Card,
  Left,
  Right,
  Body,
  CardItem,
  Thumbnail
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import AdvancedSearchBar from "../Components/AdvancedSearchBar";
// import SearchBar from "../Components/SearchBar";
import { SearchBar } from "react-native-elements";
import { width, height } from "../App";
import { bestBuyKey } from "../assets/constants";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchTxt: ""
      trendingItems: [],
      trendLoaded: false
    };

    //use this word inside function
    this.getTrendItems = this.getTrendItems.bind(this);
  }

  componentDidMount() {
    this.getTrendItems();
    console.log("====================================");
    console.log("loaded");
    console.log("====================================");
  }

  getTrendItems() {
    const trendingPath = `https://api.bestbuy.com/beta/products/trendingViewed?apiKey=${bestBuyKey}`;
    axios
      .get(trendingPath)
      .then(response => {
        this.setState({
          trendingItems: response.data.results
        });
        // console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  //creates number of stars based on input
  starRating(num) {
    if (num == null) {
      return (
        <Icon
          style={{ color: "red", fontSize: 15 }}
          name="star-border"
          type="MaterialIcons"
        />
      );
    } else {
      let total = [];
      for (var i = 0; i < num; i++) {
        total.push(
          <Icon
            key={num}
            style={{ color: "red", fontSize: 15 }}
            active
            name="star"
            type="MaterialIcons"
          />
        );
      }
      return total;
    }
  }

  render() {
    //calculate the width of the search bar
    const calculatedWidth = Math.min(height, width) * 0.76;

    const trendData = this.state.trendingItems;

    const trendCards = trendData.map((item, i) => {
      return (
        <Card key={i}>
          <CardItem>
            <Left>
              <Thumbnail square source={{ uri: item.images.standard }} />
            </Left>
            <Body />
            <Right>
              <Text style={{ color: "red" }}>Now : {item.prices.current} </Text>
              <Text note style={{ textDecorationLine: "line-through" }}>
                MSRP : {item.prices.regular}{" "}
              </Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left>{this.starRating(item.customerReviews.averageScore)}</Left>
            <Body />
            <Right>
              <Text>Orders {item.customerReviews.count}</Text>
            </Right>
          </CardItem>
        </Card>
      );
    });

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
                  // onPress={() =>
                  //   this.props.navigation.navigate("SearchScreen", {
                  //     searchQuery: this.state.searchTxt
                  //   })
                  // }
                  style={{ color: "white", padding: 10 }}
                />
              </Row>
            </Row>
            <Row>
              <Col>
                <H1>Trending now</H1>
                <ScrollView horizontal={true} bounces styles={{ padding: 40 }}>
                  {trendCards}
                </ScrollView>
              </Col>
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
