import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  inner_container: {
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-between",
  },
  imgURL: {
    height: Dimensions.get("window").height * 0.25,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    textAlign: "left",
    color: "#808080",
  },
  inStock: {
    fontSize: 20,
    color: "red",
  },
});

export default styles;
