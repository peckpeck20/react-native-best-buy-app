import React, { Component } from "react";
import LottieView from 'lottie-react-native';
import { H1, H2, Container, Content } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { Col, Row, Grid } from "react-native-easy-grid";
import  Splash  from "../Components/Loaders/Splash";
import SpaceLoader from "../Components/Loaders/SpaceLoader";

class AboutScreen extends Component {
  render() {
    return (
      // <Container style={styles.container}>
      //   <NavBar
      //     title="Login"
      //     drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
      //   />
      //   {/* <Content>
      //     <Grid>
      //       <Row>
      //         <Col>
      //           <H1>Made by </H1>
      //           <H2>Jose Zapata</H2>
      //           <H2>2018</H2>
      //         </Col>
      //       </Row>
      //       <Row />
      //     </Grid>
      //   </Content> */}
      // </Container>
      // <LottieView
      //   source={require('../assets/animation/cart.json')}
      //   autoPlay
      //   loop
      //   style={styles.background}
      // />
      <SpaceLoader/>



      
    );
  }
}

export default AboutScreen;
