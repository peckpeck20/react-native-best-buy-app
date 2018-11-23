import React from 'react';


const ItemCards = props => {
  return (
    <div>
      
    </div>
  );
};

const itemCards = searchData.map((item, i) => {
  return (
    <Card key={i} style={{ flex: 0 }}>
      <CardItem
        bordered
        button
        onPress={() =>
          this.props.navigation.navigate("ShowCaseScreen", {
            serialNumber: item.sku
          })
        }
      >
        <Left>
          <Body>
            <Text>{item.name}</Text>
            <Text note>{item.manufacturer}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody bordered>
        <Image
          source={{ uri: item.image }}
          style={{ height: 250, width: null, flex: 1 }}
          resizeMode="contain"
        />
      </CardItem>

      <CardItem bordered footer>
        <Left>
          <Text> $ {item.salePrice}</Text>
        </Left>
        <Right>
          {this.shipping(item.shippingCost)}
          <Text>Save % {item.percentSavings}</Text>
        </Right>
      </CardItem>
      {/* <CardItem footer></CardItem> */}

      <CardItem>
        <Left>
          {starRating(item.customerReviewAverage)}

          {/* <Text>Orders {item.customerReviewCount}</Text> */}
        </Left>
        <Body />
        <Right>{this.checkItem(item.inStoreAvailability)}</Right>
      </CardItem>
    </Card>
  );
});



export default ItemCards;