import React, { Component } from "react";
import LottieView from 'lottie-react-native';
import { H1, H2, Container, Content } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { Col, Row, Grid } from "react-native-easy-grid";
import Splash from "../Components/Loaders/Splash";
import SpaceLoader from "../Components/Loaders/SpaceLoader";

class AboutScreen extends Component {
  render() {
    return (
      <Splash />
    );
  }
}

export default AboutScreen;
