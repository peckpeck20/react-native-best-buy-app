import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Row,
  Icon,
  Item,
  Input,
} from "native-base";
import { width, height } from "../App";
import styles from '../styles/styles';


const HomeNavBar = props => {
  //calculate the width of the search bar
  const calculatedWidth = Math.min(height, width) * 0.76;
  return (

    <Row style={[styles.main, { padding: 5 }]}>
      <Row>
        <Icon
          name="menu"
          onPress={() => props.handleNav.navigate("DrawerToggle")}
          style={styles.mainIcons}
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
        <TouchableOpacity onPress={() => props.handleNav.navigate('ShoppingCart')}>
          <Icon
            name="ios-cart-outline"
            style={styles.mainIcons}
          />
        </TouchableOpacity>

        {/* <Button
          onPress={() => props.handleNav.navigate('ShoppingCart')}>
          <Icon
            name="ios-cart-outline"
          />
        </Button> */}
      </Row>
    </Row>

  );
};



export default HomeNavBar;