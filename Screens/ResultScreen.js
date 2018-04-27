import React, { Component } from "react";
import { Image } from "react-native";
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
  H2
} from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { Col, Row, Grid } from "react-native-easy-grid";
import { bestBuyKey } from "../assets/constants";

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
  }

  componentDidMount() {
    //get params as props from home screen search
    const { params } = this.props.navigation.state;

    const query = params ? params.searchQuery : null;
    if (query == null) {
      console.log("query is empty");
    } else {
      this.fetchItem(query);
    }
  }
  //gets all items based on user query
  fetchItem(query) {
    const pageCount = this.state.pageCount;
    // const path = `https://api.bestbuy.com/v1/products((search=${query}))?apiKey=${bestBuyKey}&sort=customerReviewAverage.asc&show=name,regularPrice,salePrice,customerReviewAverage,freeShipping,shipping,thumbnailImage,image&pageSize=50&page=${pageCount}&format=json`;
    const path = `https://api.bestbuy.com/v1/products((search=${query}))?apiKey=${bestBuyKey}&sort=name.dsc&show=name,image,customerReviewAverage,customerReviewCount,bestSellingRank,manufacturer,modelNumber,regularPrice,salePrice,mobileUrl,percentSavings,inStoreAvailability,freeShipping,shippingCost&pageSize=30&page=${pageCount}&format=json`;
    console.log("====================================");
    console.log(path);
    console.log("====================================");

    axios
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

    const itemCards = cardContent.map((item, i) => {
      return (
        <Card key={i} style={{ flex: 0 }}>
          <CardItem bordered>
            <Left>
              <Thumbnail large square source={{ uri: item.image }} />
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.manufacturer}</Text>
              </Body>
            </Left>
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
            <Body>
              {/* <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button> */}
            </Body>
            <Right>{this.checkItem(item.inStoreAvailability)}</Right>
          </CardItem>
        </Card>
      );
    });

    return (
      <Container style={styles.container}>
        <NavBar
          title={params.searchQuery}
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          {/* <Grid>
            <Row>
              <Col>

                
              </Col>
            </Row>
            <Row />
          </Grid> */}
          {itemCards}
        </Content>
      </Container>
    );
  }
}

export default ResultScreen;
