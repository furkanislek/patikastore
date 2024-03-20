import { StyleSheet, View, FlatList } from "react-native";
import Header from "./src/components/Header/header";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "./src/components/Search/search";
import StockCard from "./src/components/Stocks/StockCard";
import store from "./src/data/store.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header header="PATIKASTORE" />
        <Search search="Search..." />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={store}
        numColumns={2}
        renderItem={({ item }) => <StockCard stock={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
