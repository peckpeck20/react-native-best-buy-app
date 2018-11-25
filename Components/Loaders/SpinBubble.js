import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

class SpinBubble extends Component {
  render() {
    return (
      <LottieView
      source={require('../../assets/animation/spinner.json')}
      autoPlay
      loop
    />
    );
  }
}

export default SpinBubble;