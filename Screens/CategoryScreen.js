import React, { Component } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import axios from "axios";
import {
  Container,
  Text,
  Form,
  Item,
  Label,
  Input,
  Alert,
  Content,
  Card,
  CardItem,
  Body
} from "native-base";

import NavBar from "../Components/NavBar";
import styles from "../assets/styling";
import { bestBuyKey } from "../assets/constants";

// import { allCategories } from "../assets/categories";

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryData: [],
      pageCount: 1,
      totalPages: 0
    };

    //use this word inside function
    this.fetchCategories = this.fetchCategories.bind(this);
  }
  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    const pageCount = this.state.pageCount;
    const path = `https://api.bestbuy.com/v1/categories(id=abcat*)?apiKey=${bestBuyKey}&pageSize=50&page=${pageCount}&show=id,name&format=json`;
    // fetch(path)
    //   .then(res => res.json())
    //   .then(resData => {
    //     this.setState({
    //       categoryData: resData.categories
    //     });
    //     // console.log(resData.categories);
    //   });

    axios
      .get(path)
      .then(response => {
        this.setState({
          categoryData: response.data.categories,
          totalPages: response.data.totalPages
        });
        // console.log(response.data.categories);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const categoryData = this.state.categoryData;
    const categoryCards = categoryData.map((item, i) => {
      return (
        <Card key={i}>
          <CardItem
            button
            onPress={() =>
              this.props.navigation.navigate("ResultScreen", {
                categoryQuery: item.id
              })
            }
          >
            <Body>
              <Text>{item.name}</Text>
            </Body>
          </CardItem>
        </Card>
      );
    });

    return (
      <Container style={styles.container}>
        <NavBar
          title="Category"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>{categoryCards}</Content>
      </Container>
    );
  }
}
