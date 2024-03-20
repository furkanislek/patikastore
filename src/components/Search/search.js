import React from "react";
import { View, Text } from "react-native";
import styles from "./search.style";

const Search = ({ search }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{search}</Text>
    </View>
  );
};

export default Search;