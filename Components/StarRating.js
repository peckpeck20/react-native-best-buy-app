import React from 'react';
import {
  Icon,
} from "native-base";

const StarRating = (props) => {
  if (props.num == null) {
    return (
      <Icon
        style={{ color: "black", fontSize: 15 }}
        name="star-border"
        type="MaterialIcons"
      />
    );
  } else {
    let total = [];
    for (var i = 0; i < props.num; i++) {
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
};

export default StarRating;