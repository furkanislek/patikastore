import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 10,
    backgroundColor: "#ECEFF1",
    height: Dimensions.get("window").height * 0.065,
    paddingLeft: 13,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#B6B9BC",
  },
});

export default styles;
