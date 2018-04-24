import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  H1,
  H2
} from "native-base";
import styles from "../assets/styling";
import NavBar from "../Components/NavBar";
import { Col, Row, Grid } from "react-native-easy-grid";
import { bestBuyKey } from "../assets/constants";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: []
    };
    //use this word inside function
    this.fetchItem = this.fetchItem.bind(this);
  }

  componentDidMount() {
    let query = this.props.navigation.state.params.searchQuery;
    // console.log(query);
    this.fetchItem(query);

    // if ((searchQuery = !undefined || null)) {
    //   console.log("====================================");
    //   console.log("empty");
    //   console.log("====================================");
    // } else {
    //   console.log("====================================");
    //   console.log("full");
    //   console.log("====================================");
    // }

    // if (query == undefined || null) {
    //   console.log("====================================");
    //   console.log("empy");
    //   console.log("====================================");
    // }
  }

  fetchItem(query) {
    const path = `https://api.bestbuy.com/v1/products((search=${query}))?apiKey=${bestBuyKey}&sort=customerReviewAverage.asc&show=name,regularPrice,salePrice,customerReviewAverage,freeShipping,shipping,thumbnailImage,image&pageSize=100&format=json`;
    fetch(path)
      .then(res => res.json())
      .then(resData => {
        this.setState({
          searchData: resData
        });
        // console.log(resData);
      });
  }
  render() {
    const { params } = this.props.navigation.state;

    // const itemCards = this.state.searchData.products.map((item, i) => {
    //   return (
    //     <Card>
    //       <CardItem>
    //         <Left>
    //           <Thumbnail source={{ uri: "Image URL" }} />
    //           <Body>
    //             <Text>NativeBase</Text>
    //             <Text note>GeekyAnts</Text>
    //           </Body>
    //         </Left>
    //       </CardItem>
    //       <CardItem cardBody>
    //         <Image
    //           source={{ uri: "Image URL" }}
    //           style={{ height: 200, width: null, flex: 1 }}
    //         />
    //       </CardItem>
    //       <CardItem>
    //         <Left>
    //           <Button transparent>
    //             <Icon active name="thumbs-up" />
    //             <Text>12 Likes</Text>
    //           </Button>
    //         </Left>
    //         <Body>
    //           <Button transparent>
    //             <Icon active name="chatbubbles" />
    //             <Text>4 Comments</Text>
    //           </Button>
    //         </Body>
    //         <Right>
    //           <Text>11h ago</Text>
    //         </Right>
    //       </CardItem>
    //     </Card>
    //   );
    // });

    return (
      <Container style={styles.container}>
        <NavBar
          title="Results"
          drawerOpen={() => this.props.navigation.navigate("DrawerToggle")}
        />
        <Content>
          <Grid>
            <Row>
              <Col>
                {/* <H2>Search Query = {params.searchQuery}</H2> */}
                {/* {this.state.searchData.products} */}
              </Col>
            </Row>
            <Row />
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default SearchScreen;
