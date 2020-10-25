import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import SearchHeader from "react-native-search-header";

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    width: DEVICE_WIDTH,
    height: 500,
    marginBottom: 6,
  },
});

export default class AdvancedSearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
      </View>
    );
  }
}
