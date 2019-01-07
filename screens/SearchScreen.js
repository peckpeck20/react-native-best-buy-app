import React, { Component } from "react";
import { Container, Content, Button, Text } from "native-base";
import styles from "../assets/styling";
import AdvancedSearchBar from "../Components/AdvancedSearchBar";

class SearchScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <AdvancedSearchBar nav={this.props.navigation} />
        </Content>
      </Container>
    );
  }
}

export default SearchScreen;
