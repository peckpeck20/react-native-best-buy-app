import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import { Bubbles } from 'react-native-loader';

export default class BubbleLoader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Bubbles size={12} color="black" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
