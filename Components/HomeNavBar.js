import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { Row, Icon } from "native-base";
import { width, height } from "../styles/constant-properties";
import styles from "../styles/styles";

const HomeNavBar = (props) => {
  const calculatedWidth = Math.min(height, width) * 0.76;
  return (
    <Row style={[styles.main, { padding: 5 }]}>
      <Row>
        <Icon
          name="menu"
          onPress={() => props.handleNav.navigate("DrawerToggle")}
          style={styles.mainIcons}
        />
        <TouchableOpacity
          onPress={() => props.handleNav.navigate("SearchScreen")}
          rounded
          style={{
            width: calculatedWidth,
            height: 50,
            padding: 10,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 30,
          }}
        >
          <Text style={{ paddingLeft: "5%" }}>I'm looking for..</Text>
          <Icon active name="search" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.handleNav.navigate("ShoppingCart")}
        >
          <Icon
            name="shoppingcart"
            type={"AntDesign"}
            style={styles.mainIcons}
          />
        </TouchableOpacity>
      </Row>
    </Row>
  );
};

export default HomeNavBar;
