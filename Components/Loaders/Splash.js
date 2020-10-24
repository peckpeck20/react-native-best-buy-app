import React from "react";
import LottieView from "lottie-react-native";

const Splash = () => (
  <LottieView
    source={require("../../assets/animation/rocket_blue.json")}
    autoPlay
    loop
  />
);

export default Splash;
