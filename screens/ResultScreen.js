import React, { Component } from "react";
import { Image } from "react-native";

import { starRating } from '../assets/GenerateStarRating';
import axios from "axios";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import styles from "../assets/styling";
import { bestBuyKey } from "../private/constants";
import HeaderBack from "../Components/HeaderBack";
import SpaceLoader from "../Components/Loaders/SpaceLoader";

class ResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
      pageCount: 1,
      totalPages: 0,
      isReady: false
    };
    //use this word inside function
    this.fetchItem = this.fetchItem.bind(this);
    this.fetchItemsByCategory = this.fetchItemsByCategory.bind(this);
  }

  componentDidMount() {
    //get props passed from search screens
    const { params } = this.props.navigation.state;
    if (params.searchQuery) {
      this.fetchItem(params.searchQuery);
    }
    if (params.categoryQuery) {
      this.fetchItemsByCategory(params.categoryQuery);
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
          totalPages: response.data.totalPages,
          isReady: true
        });
        console.log("search query success");
      })
      .catch(error => {
        console.log(error);
      });
  }
  //gets all items based on category
  async fetchItemsByCategory(query) {
    const pageCount = this.state.pageCount;
    const path = `https://api.bestbuy.com/v1/products((categoryPath.id=${query}))?apiKey=${bestBuyKey}&sort=customerReviewCount.dsc&show=name,image,customerReviewAverage,customerReviewCount,bestSellingRank,manufacturer,modelNumber,regularPrice,salePrice,mobileUrl,percentSavings,inStoreAvailability,freeShipping,sku,shippingCost&pageSize=30&page=${pageCount}&format=json`;
    // console.log("====================================");
    // console.log("category path" + path);
    // console.log("====================================");

    await axios
      .get(path)
      .then(response => {
        this.setState({
          searchData: response.data.products,
          totalPages: response.data.totalPages,
          isReady: true
        });
        // console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
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
    const { isReady, searchData } = this.state;
    //get params as props from home screen search
    const { params } = this.props.navigation.state;

    const itemCards = searchData.map((item, i) => {
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
              {starRating(item.customerReviewAverage)}

              {/* <Text>Orders {item.customerReviewCount}</Text> */}
            </Left>
            <Body />
            <Right>{this.checkItem(item.inStoreAvailability)}</Right>
          </CardItem>
        </Card>
      );
    });

    return (
      !isReady ? <SpaceLoader /> :
        <Container style={styles.container}>
          <HeaderBack
            title={`${params.searchQuery ? params.searchQuery : params.categoryName}`}
            goBack={() => this.props.navigation.goBack()}
          />
          <Content>{itemCards}</Content>
        </Container>
    );
  }
}

export default ResultScreen;
