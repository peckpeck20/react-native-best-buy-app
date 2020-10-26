import React, { useContext, useEffect } from "react";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";
import { initialFetch } from "../../redux/reducers/InitialLoad";
import AppContext from "../../context/AppContext";

const Splash = (props) => {
  const { initialLoad } = props;
  const context = useContext(AppContext);

  useEffect(() => {
    if (initialLoad.allItemsReady) {
      context.toggleAppReady();
    }
  }, [initialLoad.allItemsReady]);

  return (
    <LottieView
      source={require("../../assets/animation/rocket_blue.json")}
      autoPlay
      loop
      cacheStrategy={"strong"}
    />
  );
};

const mapStateToProps = (state) => ({ initialLoad: state.initialLoad });

export default connect(mapStateToProps, { initialFetch })(Splash);
