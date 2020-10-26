import React from "react";
import { useWindowDimensions, StyleSheet, View } from "react-native";
// import SearchHeader from "react-native-search-header";

const AdvancedSearchBar = () => {
  const viewportWidth = useWindowDimensions().width;

  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    header: {
      width: viewportWidth,
      height: 500,
      marginBottom: 6,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header} />
    </View>
  );
};

export default AdvancedSearchBar;
