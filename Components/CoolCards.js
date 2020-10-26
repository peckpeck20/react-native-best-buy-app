import React from "react";
import { useWindowDimensions } from "react-native";

import Carousel from "react-native-snap-carousel";
import TrendCard from "./TrendCard";

const CoolCards = (props) => {
  const renderItem = ({ item, index }) => (
    <TrendCard data={item} navigation={props.navigation} index={index} />
  );

  const viewportWidth = useWindowDimensions().width;
  const viewportHeight = useWindowDimensions().height;

  function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  }

  const slideWidth = wp(75);
  const itemHorizontalMargin = wp(2);

  const sliderWidth = viewportWidth;
  const itemWidth = slideWidth + itemHorizontalMargin * 2;

  return (
    <Carousel
      data={props.data}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      loop={true}
      autoplay={true}
      layoutCardOffset={18}
      autoplayDelay={2000}
    />
  );
};

export default CoolCards;
