import React, { Component } from "react";
import { KeyboardAvoidingView, View } from "react-native";
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

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryData: []
    };

    //use this word inside function
    this.fetchCategories = this.fetchCategories.bind(this);
  }
  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    const path = `https://api.bestbuy.com/v1/categories(id=abcat*)?apiKey=${bestBuyKey}&pageSize=10&show=id,name&format=json`;
    fetch(path)
      .then(res => res.json())
      .then(resData => {
        this.setState({
          categoryData: resData.categories
        });
        // console.log(resData.categories);
      });
  }

  render() {
    const categoryCards = this.state.categoryData.map((item, i) => {
      return (
        <Card key={i}>
          <CardItem button onPress={() => alert(item.id)}>
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
