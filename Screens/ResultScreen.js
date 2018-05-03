import React, { Component } from "react";
import { Image, ActivityIndicator } from "react-native";
import axios from "axios";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  H1,
  H2,
  Title,
  Alert
} from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { Col, Row, Grid } from "react-native-easy-grid";
import { bestBuyKey } from "../assets/constants";
import HeaderBack from "../Components/HeaderBack";

class ResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
      pageCount: 1,
      totalPages: 0
    };
    //use this word inside function
    this.fetchItem = this.fetchItem.bind(this);
    this.fetchItemsByCategory = this.fetchItemsByCategory.bind(this);
  }

  componentDidMount() {
    //get params as props from home screen search
    const { params } = this.props.navigation.state;

    const query = params ? params.searchQuery : null;

    if (query == null) {
      console.log("item query empty");
    } else {
      console.log("items fetched");
      this.fetchItem(query);
    }

    const queryC = params ? params.categoryQuery : null;

    if (queryC == null) {
      console.log("CAT query not found");
    } else {
      console.log("items by cat fetched");
      this.fetchItemsByCategory(queryC);
    }
  }
  //gets all items based on user query
  async fetchItem(query) {
    const pageCount = this.state.pageCount;
    // const path = `https://api.bestbuy.com/v1/products((search=${query}))?apiKey=${bestBuyKey}&sort=customerReviewAverage.asc&show=name,regularPrice,salePrice,customerReviewAverage,freeShipping,shipping,thumbnailImage,image&pageSize=50&page=${pageCount}&format=json`;
    const path = `https://api.bestbuy.com/v1/products((search=${query}))?apiKey=${bestBuyKey}&sort=customerReviewCount.dsc&show=name,image,customerReviewAverage,customerReviewCount,bestSellingRank,manufacturer,modelNumber,regularPrice,salePrice,mobileUrl,percentSavings,inStoreAvailability,freeShipping,sku,shippingCost&pageSize=30&page=${pageCount}&format=json`;
    // console.log("====================================");
    // console.log(path);
    // console.log("====================================");

    await axios
      .get(path)
      .then(response => {
        this.setState({
          searchData: response.data.products,
          totalPages: response.data.totalPages
        });
        // console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  //gets all items based on category
  async fetchItemsByCategory(query) {
    const pageCount = this.state.pageCount;
    const path = `https://api.bestbuy.com/v1/products((categoryPath.id=${query}))?apiKey=${bestBuyKey}&sort=customerReviewCount.dsc&show=name,image,customerReviewAverage,customerReviewCount,bestSellingRank,manufacturer,modelNumber,regularPrice,salePrice,mobileUrl,percentSavings,inStoreAvailability,freeShipping,sku,shippingCost&pageSize=30&page=${pageCount}&format=json`;
    console.log("====================================");
    console.log("category path" + path);
    console.log("====================================");

    await axios
      .get(path)
      .then(response => {
        this.setState({
          searchData: response.data.products,
          totalPages: response.data.totalPages
        });
        console.log(response);
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

  //if 0 then return free shipping
  shipping(i) {
    if (i == 0) {
      return <Text>Free shipping</Text>;
    } else {
      return <Text note>Shipping : {i}</Text>;
    }
  }
  //if the item is available return green icon
  checkItem(status) {
    if (status == true) {
      return (
        <Icon
          style={{ color: "green", fontSize: 15 }}
          active
          name="check-circle-o"
          type="FontAwesome"
        />
      );
    } else {
      return (
        <Icon
          style={{ color: "red", fontSize: 15 }}
          active
          name="times-circle-o"
          type="FontAwesome"
        />
      );
    }
  }

  render() {
    const cardContent = this.state.searchData;
    //get params as props from home screen search
    const { params } = this.props.navigation.state;
    // if (!cardContent) {
    //   return <ActivityIndicator size="large" color="#0000ff" />;
    // }

    const itemCards = cardContent.map((item, i) => {
      return (
        <Card key={i} style={{ flex: 0 }}>
          <CardItem
            bordered
            button
            onPress={() =>
              this.props.navigation.navigate("ShowCaseScreen", {
                serialNumber: item.sku
              })
            }
          >
            <Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.manufacturer}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody bordered>
            <Image
              source={{ uri: item.image }}
              style={{ height: 250, width: null, flex: 1 }}
              resizeMode="contain"
            />
          </CardItem>

          <CardItem bordered footer>
            <Left>
              <Text> $ {item.salePrice}</Text>
            </Left>
            <Right>
              {this.shipping(item.shippingCost)}
              <Text>Save % {item.percentSavings}</Text>
            </Right>
          </CardItem>
          {/* <CardItem footer></CardItem> */}

          <CardItem>
            <Left>
              {this.starRating(item.customerReviewAverage)}

              {/* <Text>Orders {item.customerReviewCount}</Text> */}
            </Left>
            <Body />
            <Right>{this.checkItem(item.inStoreAvailability)}</Right>
          </CardItem>
        </Card>
      );
    });

    return (
      <Container style={styles.container}>
        <HeaderBack
          title="Search Result"
          goBack={() => this.props.navigation.goBack()}
        />
        <Content>{itemCards}</Content>
      </Container>
    );
  }
}

export default ResultScreen;
