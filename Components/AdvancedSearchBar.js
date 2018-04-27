import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import SearchHeader from "react-native-search-header";

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  header: {
    width: DEVICE_WIDTH,
    height: 500,
    marginBottom: 6
  }
});

export default class AdvancedSearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <SearchHeader
          topOffset={0}
          persistent={true}
          suggestionHistoryEntryRollOverCount={10}
          placeholder="I'm looking for..."
          ref={searchHeader => {
            this.searchHeader = searchHeader;
          }}
          onSearch={event => {
            // console.log("====================================");
            // console.log(event.nativeEvent.text);
            // console.log("====================================");

            //takes navigation passed from parent props
            this.props.nav.navigate("ResultScreen", {
              searchQuery: event.nativeEvent.text
            });
          }}
          onGetAutocompletions={async text => {
            if (text) {
              const response = await fetch(
                `http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`,
                {
                  method: `get`
                }
              );
              const data = await response.json();
              return data[1];
            }
            // else {
            //   return [];
            // }
          }}
        />
      </View>
    );
  }
}
