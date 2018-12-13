import React, { Component } from "react";
import { ScrollView, Image, RefreshControl } from "react-native";
import { connect } from 'react-redux';
import { initialFetch } from '../redux/reducers/InitialLoad';

import Splash from "../Components/Loaders/Splash";
import { Col, Row, Grid } from "react-native-easy-grid";
import HomeNavBar from "../Components/HomeNavBar";
import StarRating from "../Components/StarRating";
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
import styles from "../assets/styling";
import CoolCards from "../Components/CoolCards";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.initialFetch();
    this.setState({ refreshing: false });
  }

  componentDidMount() {
    //if items haven't been fetch then run fetch otherwise do nothing
    if (this.props.initialLoad.allItemsReady != true) {
      this.props.initialFetch();
    }
  }

  render() {
    const { initialLoad } = this.props;

    if (initialLoad.allItemsReady === true) {

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
              <Left>
                <StarRating num={item.customerReviews.averageScore} />
              </Left>
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
              <Left>
                <StarRating num={item.customerReviews.averageScore} />
              </Left>
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
      !initialLoad.allItemsReady ? <Splash /> :

        <Container style={styles.container}>
          <Content
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          >
            <Grid >
              <HomeNavBar handleNav={this.props.navigation} />

              <Row >
                <H1 style={styles.title}>Trending now</H1>
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
                  {/* <ScrollView horizontal={true} bounces>
                    {trendCards}
                  </ScrollView> */}
                  <CoolCards data={initialLoad.trendItems} navigation={this.props.navigation} />
                </Col>
              </Row>
              <Row>
                <H1 style={styles.title}>Most Popular</H1>
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
              <Row style={styles.content}>
                <Col>{popularCards}</Col>
              </Row>
            </Grid>
          </Content>
        </Container>
    );
  }
}

const mapStateToProps = state => ({ initialLoad: state.initialLoad });

export default connect(mapStateToProps, { initialFetch })(HomeScreen);
