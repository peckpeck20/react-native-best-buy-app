import React, { Component } from 'react';

import StarRating from "./StarRating";
import {
  Card,
  Left,
  Right,
  Body,
  CardItem,
  Text,
} from "native-base";
import ImageLoad from 'react-native-image-placeholder';
import styles from '../styles/styles';

class TrendCard extends Component {


  render() {
    const { data, navigation, index } = this.props;
    return (
      <Card key={index} style={styles.roundedCard}>
        <CardItem
          bordered
          button
          onPress={() => navigation.navigate("ShowCaseScreen", {
            serialNumber: data.sku
          })}
        >
          {/* <Left>
             <Image source={{ uri: data.images.standard }} style={{ height: 120, width: null, flex: 1 }}
              resizeMode="contain" /> 
          </Left> */}
          <Body>
            <ImageLoad
              style={{ width: 250, height: 250 }}
              loadingStyle={{ size: 'large', color: 'blue' }}
              source={{ uri: data.images.standard }}
              resizeMode={'center'}
            />

            {/* <Image source={{ uri: data.images.standard }} style={{ height: 120, width: null, flex: 1 }}
              resizeMode="contain" /> */}
          </Body>
          {/* <Right>
            <Text style={{ color: "red" }}>Now $ {data.prices.current} </Text>
            <Text note style={{ textDecorationLine: "line-through" }}>
              MSRP $ {data.prices.regular}
            </Text>
          </Right> */}
        </CardItem>

        <CardItem bordered footer>
          <Left>
            <StarRating num={data.customerReviews.averageScore} />
          </Left>
          <Body />
          <Right>
            <Text> $ {data.prices.current} </Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default TrendCard;