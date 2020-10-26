import React, { Component } from "react";

import StarRating from "./StarRating";
import { Card, Left, Right, Body, CardItem, Text } from "native-base";
import ImageLoad from "react-native-image-placeholder";
import styles from "../styles/styles";
import { View } from "react-native";

const TrendCard = (props) => {
  const { data, navigation, index } = props;
  return (
    <Card key={index} style={styles.roundedCard}>
      <CardItem
        bordered
        button
        // onPress={() =>
        //   navigation.navigate("ShowCaseScreen", {
        //     serialNumber: data.sku,
        //   })
        // }
      >
        <Body>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <ImageLoad
              style={{ width: 250, height: 250 }}
              loadingStyle={{ size: "large", color: "blue" }}
              source={{ uri: data.images.standard }}
              resizeMode={"center"}
            />
          </View>
        </Body>
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
};

export default TrendCard;
