import React, { Component } from "react";
import { ScrollView, Image } from "react-native";
import { connect } from 'react-redux';
import { initialFetch } from '../redux/reducers/InitialLoad';
import {
  Container,
  Content,
  Icon,
  Button,
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
import Loader from "../Components/Loader";
import HomeNavBar from "../Components/HomeNavBar";



class HomeScreen extends Component {

  componentDidMount() {
    //if items haven't been fetch then run fetch otherwise do nothing
    if(this.props.initialLoad.allItemsReady != true){
      this.props.initialFetch();
    }
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
    const {initialLoad} = this.props;

    if(initialLoad.allItemsReady === true) {

      var trendCards = initialLoad.trendItems.map((item, i) => {
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

    var popularCards = initialLoad.popularItems.map((item, i) => {
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
    };



    return (
      !initialLoad.allItemsReady ? <Loader/> :      
      <Container style={styles.container}>
        <Content>
          <Grid>
          <HomeNavBar handleNav={ this.props.navigation}/>

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
