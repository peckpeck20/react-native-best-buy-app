import React, { Component } from "react";
import { connect } from 'react-redux';
import { initialFetch } from '../redux/reducers/InitialLoad';
import { ScrollView, Image } from "react-native";
import { AppLoading } from "expo";
import axios from "axios";
import {
  Container,
  Content,
  Icon,
  Button,
  Item,
  Input,
  H1,
  Card,
  Left,
  Right,
  Body,
  CardItem,
  Thumbnail,
  Text,
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "../assets/styling";
import { width, height } from "../App";
import { bestBuyKey } from "../assets/constants";


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchTxt: ""
      trendingItems: [],
      trendLoaded: false,
      popularItems: [],
      popularLoaded: false,
      isReady: false
    };

    //use this word inside function
    this.getTrendItems = this.getTrendItems.bind(this);
    this.getPopularItems = this.getPopularItems.bind(this);
  }

  componentDidMount() {
    this.getTrendItems();
    this.getPopularItems();
    this.props.initialFetch();
  }

  async getTrendItems() {
    const trendingPath = `https://api.bestbuy.com/beta/products/trendingViewed?apiKey=${bestBuyKey}`;
    await axios
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

    this.setState({
      trendLoaded: true
    });
  }

  async getPopularItems() {
    const popularPath = `https://api.bestbuy.com/beta/products/mostViewed?apiKey=${bestBuyKey}`;
    await axios
      .get(popularPath)
      .then(response => {
        this.setState({
          popularItems: response.data.results
        });
        // console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      popularLoaded: true
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
            key={i}
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
    //loader
    if (!this.state.popularLoaded || !this.state.trendLoaded) {
      return <AppLoading />;
    }
    //calculate the width of the search bar
    const calculatedWidth = Math.min(height, width) * 0.76;

    const trendData = this.state.trendingItems;

    const trendCards = trendData.map((item, i) => {
      return (
        <Card key={i} style={{ flex: 0 }}>
          <CardItem
            bordered
            button
            onPress={() =>
              this.props.navigation.navigate("ShowCaseScreen", {
                serialNumber: item.sku
                // item: item
              })
            }
          >
            <Left>
              <Thumbnail square source={{ uri: item.images.standard }} />
            </Left>
            <Body />
            <Right>
              <Text style={{ color: "red" }}>Now $ {item.prices.current} </Text>
              <Text note style={{ textDecorationLine: "line-through" }}>
                MSRP $ {item.prices.regular}
              </Text>
            </Right>
          </CardItem>

          <CardItem bordered footer>
            <Left>{this.starRating(item.customerReviews.averageScore)}</Left>
            <Body />
            <Right>
              <Text>Orders {item.customerReviews.count}</Text>
            </Right>
          </CardItem>
        </Card>
      );
    });

    const popularData = this.state.popularItems;

    const popularCards = popularData.map((item, i) => {
      return (
        <Card key={i} style={{ flex: 0 }}>
          <CardItem header bordered>
            <Text>{item.names.title}</Text>
          </CardItem>

          <CardItem cardBody bordered>
            <Image
              source={{ uri: item.images.standard }}
              style={{ height: 250, width: null, flex: 1 }}
              resizeMode="contain"
            />
          </CardItem>
          <CardItem bordered>
            <Left />
            <Body>
              <Button
                full
                rounded
                onPress={() =>
                  this.props.navigation.navigate("ShowCaseScreen", {
                    serialNumber: item.sku
                    // item: item
                  })
                }
              >
                <Text>Info</Text>
              </Button>
            </Body>
            <Right />
          </CardItem>
          <CardItem bordered footer>
            <Left>{this.starRating(item.customerReviews.averageScore)}</Left>
            <Body>
              <Text note style={{ textDecorationLine: "line-through" }}>
                MSRP $ {item.prices.regular}
              </Text>
              {/* <Button transparent onPress={() => alert(item.sku)}>
                <Icon
                  style={{ fontSize: 40 }}
                  type="SimpleLineIcons"
                  name="info"
                />
              </Button> */}
            </Body>
            <Right>
              <Text style={{ color: "red" }}>Now $ {item.prices.current} </Text>
            </Right>
          </CardItem>
        </Card>
      );
    });

    const popularLoaded = this.state.popularLoaded;
    const trendLoaded = this.state.trendLoaded;

    // if (popularLoaded || trendLoaded == false) {
    //   return <Spinner color="green" />;
    // } else {
    return (
      <Container style={styles.container}>
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
                <Button
                  onPress={() => this.props.navigation.navigate('ShoppingCart')}>
                  <Icon
                    name="ios-cart-outline"
                    style={{ color: "white"}}
                  />
                </Button>

              </Row>
            </Row>
            <Row>
              <H1 style={{ padding: 15 }}>Trending now</H1>
              <Icon
                name="md-trending-up"
                type="Ionicons"
                style={{
                  fontSize: 50,
                  padding: 10,
                  color: "blue"
                }}
              />
            </Row>
            <Row>
              <Col>
                <ScrollView horizontal={true} bounces>
                  {trendCards}
                </ScrollView>
              </Col>
            </Row>
            <Row>
              <H1 style={{ padding: 15 }}>Most Popular</H1>
              <Icon
                name="thumbs-o-up"
                type="FontAwesome"
                style={{
                  fontSize: 50,
                  padding: 10,
                  color: "blue"
                }}
              />
            </Row>
            <Row>
              <Col>{popularCards}</Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({initialLoad: state.initialLoad});

export default connect(mapStateToProps,{initialFetch})(HomeScreen);
