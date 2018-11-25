import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import styles from '../../assets/styling.js';

export default class SpaceLoader extends Component {
  render() {
    return (
        <LottieView
          source={require('../../assets/animation/space.json')}
          autoPlay
          loop
          style={styles.background}
        />
    );
  }
}
