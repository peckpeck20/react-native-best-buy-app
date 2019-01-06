import React, { Component } from 'react';
import { Dimensions } from "react-native";

import Carousel from 'react-native-snap-carousel';
import TrendCard from './TrendCard';

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

  _renderItem({ item, index }) {
    return (
      <TrendCard
        data={item}
        navigation={this.props.navigation}
        index={index}
      />
    );
  }

  render() {

    return (
      <Carousel
        data={this.props.data}
        renderItem={this._renderItem.bind(this)}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        loop={true}
        autoplay={true}
        layoutCardOffset={18}
        autoplayDelay={2000}
      />
    );
  }
}

export default CoolCards;