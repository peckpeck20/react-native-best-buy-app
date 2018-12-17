import React, { Component } from "react";
import { View } from "react-native";
import LottieView from 'lottie-react-native';
import { H1, H2, Container, Content } from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { Col, Row, Grid } from "react-native-easy-grid";
import Splash from "../Components/Loaders/Splash";
import SpaceLoader from "../Components/Loaders/SpaceLoader";
import CoolCards from "../Components/CoolCards";

class AboutScreen extends Component {
  render() {
    return (
      // <Splash />
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',

      }}>
        <CoolCards
          data={[{
            "sku": "5578628",
            "customerReviews": {
              "averageScore": 4.6,
              "count": 2960
            },
            "descriptions": {
              "short": "Stream your favorite TV shows, movies to the TV4K Ultra HD and HDR enabledDual-band 802.11ac wirelessAndroid, Apple iOS, Chrome, Mac and Windows Compatible"
            },
            "images": {
              "standard": "https://img.bbystatic.com/BestBuy_US/images/products/5578/5578628_sa.jpg"
            },
            "names": {
              "title": "Google - Chromecast Ultra 4K Streaming Media Player - Black"
            },
            "prices": {
              "regular": 69.99,
              "current": 59.99
            },
            "links": {
              "product": "https://api.bestbuy.com/v1/products/5578628.json?apiKey=jABsZM6DZ6C4QtIUYB45rhgF",
              "web": "https://api.bestbuy.com/click/-/5578628/pdp",
              "addToCart": "https://api.bestbuy.com/click/-/5578628/cart"
            },
            "rank": 1
          },
          {
            "sku": "6189301",
            "customerReviews": {
              "averageScore": 4.4,
              "count": 312
            },
            "descriptions": {
              "short": "Compatible with most cell phones; handheld stabilizer; tracking function; battery operated; 3-axis stabilization; zoom button; time-lapse recording"
            },
            "images": {
              "standard": "https://img.bbystatic.com/BestBuy_US/images/products/6189/6189301_ra.jpg"
            },
            "names": {
              "title": "DJI - Osmo Mobile 2 3-Axis Gimbal Stabilizer for Mobile Phones - Gray"
            },
            "prices": {
              "regular": 139.99,
              "current": 119.99
            },
            "links": {
              "product": "https://api.bestbuy.com/v1/products/6189301.json?apiKey=jABsZM6DZ6C4QtIUYB45rhgF",
              "web": "https://api.bestbuy.com/click/-/6189301/pdp",
              "addToCart": "https://api.bestbuy.com/click/-/6189301/cart"
            },
            "rank": 2
          },
          {
            "sku": "6191307",
            "customerReviews": {
              "averageScore": 4.5,
              "count": 105
            },
            "descriptions": {
              "short": "USB port; composite video output; plays back CD, DVD, WAV, WMA, AAC, MP3 and FLAC formats; AM/FM tuner; USB-host; rear-facing camera capability; Pandora internet radio control; iPod/iPhone compatible; Spotify radio control; K2 technology; iHeartRadio control; digital graphic equalizer"
            },
            "images": {
              "standard": "https://img.bbystatic.com/BestBuy_US/images/products/6191/6191307_sa.jpg"
            },
            "names": {
              "title": "JVC - 6.2\" - Built-in Bluetooth - In-Dash CD/DVD/DM Receiver - Black"
            },
            "prices": {
              "regular": 249.99,
              "current": 149.99
            },
            "links": {
              "product": "https://api.bestbuy.com/v1/products/6191307.json?apiKey=jABsZM6DZ6C4QtIUYB45rhgF",
              "web": "https://api.bestbuy.com/click/-/6191307/pdp",
              "addToCart": "https://api.bestbuy.com/click/-/6191307/cart"
            },
            "rank": 3
          },
          {
            "sku": "5998605",
            "customerReviews": {
              "averageScore": 4.8,
              "count": 224
            },
            "descriptions": {
              "short": "MacBook Pro with 6-core eighth-generation Intel Core processor. Power your best work"
            },
            "images": {
              "standard": "https://img.bbystatic.com/BestBuy_US/images/products/5998/5998605_sa.jpg"
            },
            "names": {
              "title": "Apple - MacBook Pro - 15\" Display with Touch Bar - Intel Core i7 - 16GB Memory - AMD Radeon Pro 560X - 512GB SSD (Latest Model) - Space Gray"
            },
            "prices": {
              "regular": 2799.99,
              "current": 2799.99
            },
            "links": {
              "product": "https://api.bestbuy.com/v1/products/5998605.json?apiKey=jABsZM6DZ6C4QtIUYB45rhgF",
              "web": "https://api.bestbuy.com/click/-/5998605/pdp",
              "addToCart": "https://api.bestbuy.com/click/-/5998605/cart"
            },
            "rank": 4
          }]}
          navigation={this.props.navigation}
        />
      </View>

    );
  }
}

export default AboutScreen;
