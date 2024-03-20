import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./StockCard.style";

const StockCard = (props) => {
  const { stock } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.imgURL} source={{ uri: stock.imgURL }} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{stock.title}</Text>
        <View style={styles.price}>
          <Text>{stock.price}</Text>
        </View>
        {!stock.inStock && <Text style={styles.inStock}>Stockta Yok</Text>}
      </View>
    </View>
  );
};

export default StockCard;
