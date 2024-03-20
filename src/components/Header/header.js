import React from "react";
import { View, Text } from "react-native";
import styles from "./header.style";

const Header = ({ header }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{header}</Text>
    </View>
  );
};

export default Header;
