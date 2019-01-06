import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
// import styles from '../../assets/styling.js';

export default class PersonAnimated extends Component {
  render() {
    return (
      <LottieView
        source={require('../../assets/animation/chill.json')}
        autoPlay
        loop
        style={{ width: "90%", height: "90%", flex: 1 }}
      />
    );
  }
}
