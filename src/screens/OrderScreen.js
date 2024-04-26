import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { useProductStore } from "../store/productStore";

const OrderScreen = () => {
  const products = useProductStore((state) => state.products);

  return (
    <SafeAreaView>
      {Object.values(products).map((product) => {
        return (
          product.count > 0 && (
            <View style={styles.item} key={product.idProduct}>
              <Text>{product.count}</Text>
              <Text>{product.name}</Text>
            </View>
          )
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
  },
});

export default OrderScreen;
