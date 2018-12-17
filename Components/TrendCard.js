import React, { Component } from 'react';
import { Image } from "react-native";

import StarRating from "./StarRating";
import {
  Card,
  Left,
  Right,
  Body,
  CardItem,
  Text,
} from "native-base";


class TrendCard extends Component {


  render() {
    const { data, navigation, index } = this.props;
    return (
      <Card key={index} style={{ flex: 0 }}>
        <CardItem
          bordered
          button
          onPress={() => navigation.navigate("ShowCaseScreen", {
            serialNumber: data.sku
          })}
        >
          <Left>
            <Image source={{ uri: data.images.standard }} style={{ height: 120, width: null, flex: 1 }}
              resizeMode="contain" />
          </Left>
          <Body />
          <Right>
            <Text style={{ color: "red" }}>Now $ {data.prices.current} </Text>
            <Text note style={{ textDecorationLine: "line-through" }}>
              MSRP $ {data.prices.regular}
            </Text>
          </Right>
        </CardItem>

        <CardItem bordered footer>
          <Left>
            <StarRating num={data.customerReviews.averageScore} />
          </Left>
          <Body />
          <Right>
            <Text>Orders {data.customerReviews.count}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default TrendCard;