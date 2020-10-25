import React, { Component } from "react";
import {
  RefreshControl,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { connect } from "react-redux";
import { initialFetch } from "../redux/reducers/InitialLoad";

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
  Text,
} from "native-base";
import ImageLoad from "react-native-image-placeholder";
import styles from "../assets/styling";
import CoolCards from "../Components/CoolCards";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.initialFetch();

    if (!this.props.initialLoad.itemsLoading) {
      this.setState({ refreshing: false });
    }
  };

  render() {
    const { initialLoad, navigation } = this.props;
    const { refreshing } = this.state;

    return (
      <SafeAreaView style={[styles.container, styles.background]}>
        <StatusBar />
        <Container>
          <Content
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.onRefresh}
              />
            }
          >
            <Grid>
              <HomeNavBar handleNav={navigation.toggleDrawer} />

              <Row>
                <H1 style={styles.title}>Trending now</H1>
                <Icon
                  name="md-trending-up"
                  type="Ionicons"
                  style={{
                    fontSize: 50,
                    padding: 10,
                    color: "blue",
                  }}
                />
              </Row>
              <Row>
                <Col>
                  <CoolCards
                    data={initialLoad.trendItems}
                    navigation={navigation}
                  />
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
                    color: "blue",
                  }}
                />
              </Row>
              <Row style={styles.content}>
                <Col>
                  {initialLoad.popularItems.map((item, i) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("ShowCaseScreen", {
                            serialNumber: item.sku,
                          })
                        }
                        key={item.sku}
                      >
                        <Card style={{ flex: 0 }}>
                          <CardItem header bordered>
                            <Text>{item.names.title}</Text>
                          </CardItem>
                          <CardItem cardBody bordered>
                            <ImageLoad
                              style={{ height: 250, width: 250, flex: 1 }}
                              loadingStyle={{ size: "large", color: "blue" }}
                              source={{ uri: item.images.standard }}
                              resizeMode={"contain"}
                            />
                          </CardItem>
                          <CardItem bordered>
                            <Left />
                            <Body>
                              <Button full rounded>
                                <Text>Info</Text>
                              </Button>
                            </Body>
                            <Right />
                          </CardItem>
                          <CardItem bordered footer>
                            <Left>
                              <StarRating
                                num={item.customerReviews.averageScore}
                              />
                            </Left>
                            <Body>
                              <Text
                                note
                                style={{ textDecorationLine: "line-through" }}
                              >
                                MSRP $ {item.prices.regular}
                              </Text>
                            </Body>
                            <Right>
                              <Text style={{ color: "red" }}>
                                Now $ {item.prices.current}{" "}
                              </Text>
                            </Right>
                          </CardItem>
                        </Card>
                      </TouchableOpacity>
                    );
                  })}
                </Col>
              </Row>
            </Grid>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({ initialLoad: state.initialLoad });

export default connect(mapStateToProps, { initialFetch })(HomeScreen);
