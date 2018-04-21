import React, { Component } from 'react';
import { Container, Content, Icon, Button,Left,Right,Header,Body,Title} from 'native-base';


class NavBar extends Component {
  render() {
    return (
      <Container style={{flex:1}}>
        <Header>
          <Left>
          <Icon name="ios-menu" onPress={() => this.props.drawerOpen()} />
          </Left>
          <Body>
              <Title>{this.props.title}</Title>
          </Body>
          <Right/>
        </Header>
      </Container>
    );
  }
}

export default NavBar;