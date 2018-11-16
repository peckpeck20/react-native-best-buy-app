import React from 'react';
import {
  Row,
  Icon,
  Button,
  Item,
  Input,
} from "native-base";
import { width, height } from "../App";


const HomeNavBar = props => {
      //calculate the width of the search bar
      const calculatedWidth = Math.min(height, width) * 0.76;
  return (

      <Row style={{ backgroundColor: "#3F51B5", padding: 5 }}>
        <Row>
          <Icon
            name="menu"
            onPress={()=>props.handleNav.navigate("DrawerToggle")}
            style={{ color: "white", padding: 10 }}
          />
          {/* <SearchBar
                round
                clearIcon
                showLoading
                onChangeText={searchTxt => this.setState({ searchTxt })}
                onClear={() => this.setState({ searchTxt: "" })}
                onCancel={() => this.setState({ searchTxt: "" })}
                containerStyle={{ width: 330, height: 50 }}
                placeholder="Search Products"
                icon={{ type: "font-awesome", name: "search" }}
              /> */}
          <Item
            onPress={() =>
              props.handleNav.navigate("SearchScreen")
            }
            rounded
            style={{
              width: calculatedWidth,
              height: 50,
              padding: 5,
              backgroundColor: "white"
            }}
          >
            <Input placeholder="I'm looking for.." disabled />
            <Icon active name="search" />
          </Item>
          <Button
            onPress={() => props.handleNav.navigate('ShoppingCart')}>
            <Icon
              name="ios-cart-outline"
              style={{ color: "white" }}
            />
          </Button>
        </Row>
      </Row>

  );
};



export default HomeNavBar;