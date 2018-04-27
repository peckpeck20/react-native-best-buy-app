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
    // const num = num;
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

          <CardItem footer>
            <Text> $ {item.salePrice}</Text>
          </CardItem>
          <CardItem footer>
            <Text note>{item.shippingCost}</Text>
          </CardItem>

          <CardItem>
            <Left>
              {this.starRating(item.customerReviewAverage)}

              <Text>Orders {item.customerReviewCount}</Text>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>Save % {item.percentSavings}</Text>
            </Right>
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
