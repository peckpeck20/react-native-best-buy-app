import React, { Component } from 'react';
import { Dimensions, View } from "react-native";
import Carousel from 'react-native-snap-carousel';

import StarRating from "../Components/StarRating";
import {

  Card,
  Left,
  Right,
  Body,
  CardItem,
  Thumbnail,
  Text,
} from "native-base";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

class CoolCards extends Component {



  // _renderItem({ item, index }) {
  //   return (
  //     <View style={{
  //       flex: 1,
  //       flexDirection: 'column',
  //       justifyContent: 'center',
  //       alignItems: 'stretch',

  //     }}>
  //       <Text>{item.title}</Text>
  //     </View>
  //   );
  // }

  _renderItem({ item, i }) {
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
  }

  render() {
    // const testD = [{ title: "test" }, { title: "tes2" },
    // { title: "test3" }]

    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.props.data}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      // layout='tinder'
      />
    );
  }
}

export default CoolCards;