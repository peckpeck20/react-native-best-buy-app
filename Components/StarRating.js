import React from 'react';

const StarRating = (num) => {
  if (num == null) {
    return (
      <Icon
        style={{ color: "red", fontSize: 15 }}
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
};

export default StarRating;