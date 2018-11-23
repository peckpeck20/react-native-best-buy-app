import React from "react";
import {
  Icon,
} from "native-base";
  //creates number of stars based on input
  export const starRating = (num)=> {
    if (num === null || num === 0) {
      return (
        <Icon
          style={{ color: "white", fontSize: 15 }}
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