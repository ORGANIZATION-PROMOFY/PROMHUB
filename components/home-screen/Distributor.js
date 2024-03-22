import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import Product from "./Product";

const Distributor = ({ company, products }) => {
  return (
    <View key={company.id} style={styles.container}>
      <Text>{company.name}</Text>
      <Text>{company.address}</Text>
      <FlatList
        data={products}
        renderItem={({ item: product }) => <Product product={product} />}
        style={styles.list}
        horizontal
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default Distributor;
