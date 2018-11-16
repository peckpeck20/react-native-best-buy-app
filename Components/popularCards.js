import React from 'react';

rc


const popularCards = props => {

  return (
    <div>
      
    </div>
  );
};



export default popularCards;

    const popularCards = popularItems.map((item, i) => {
      return (
        <Card key={i} style={{ flex: 0 }}>
          <CardItem header bordered>
            <Text>{item.names.title}</Text>
          </CardItem>

          <CardItem cardBody bordered>
            <Image
              source={{ uri: item.images.standard }}
              style={{ height: 250, width: null, flex: 1 }}
              resizeMode="contain"
            />
          </CardItem>
          <CardItem bordered>
            <Left />
            <Body>
              <Button
                full
                rounded
                onPress={() =>
                  this.props.navigation.navigate("ShowCaseScreen", {
                    serialNumber: item.sku
                    // item: item
                  })
                }
              >
                <Text>Info</Text>
              </Button>
            </Body>
            <Right />
          </CardItem>
          <CardItem bordered footer>
            <Left>{this.starRating(item.customerReviews.averageScore)}</Left>
            <Body>
              <Text note style={{ textDecorationLine: "line-through" }}>
                MSRP $ {item.prices.regular}
              </Text>
              {/* <Button transparent onPress={() => alert(item.sku)}>
                <Icon
                  style={{ fontSize: 40 }}
                  type="SimpleLineIcons"
                  name="info"
                />
              </Button> */}
            </Body>
            <Right>
              <Text style={{ color: "red" }}>Now $ {item.prices.current} </Text>
            </Right>
          </CardItem>
        </Card>
      );
    });