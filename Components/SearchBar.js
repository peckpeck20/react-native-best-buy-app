import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-menu" onPress={() => this.props.drawerOpen()} />
            <Input placeholder="Search products" />
            <Icon name="ios-search" />
          </Item>
          {/* <Button transparent>
            <Text>Search</Text>
          </Button> */}
        </Header>
      </Container>
    );
  }
}