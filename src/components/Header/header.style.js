import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    height: Dimensions.get("window").height * 0.065,
    flexDirection: "column",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "rgb(128,0,128)",
  },
});

export default styles;
