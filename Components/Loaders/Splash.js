import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import styles from '../../assets/styling.js';

class Splash extends Component {
  render() {
    return (
      <LottieView
        source={require('../../assets/animation/rocket_blue.json')}
        autoPlay
        loop
      />
    );
  }
}
export default Splash;
